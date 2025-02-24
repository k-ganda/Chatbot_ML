from flask import Flask, render_template, request, jsonify
import torch
import os
from transformers import T5Tokenizer, T5ForConditionalGeneration

app = Flask(__name__)

# Define model directory
MODEL_DIR = 't5_maternal_bot1'

print(f"Model directory exists: {os.path.exists(MODEL_DIR)}")
print(f"Files in {MODEL_DIR}: {os.listdir(MODEL_DIR)}")

    
# Load model and tokenizer
device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
tokenizer = T5Tokenizer.from_pretrained(MODEL_DIR, local_files_only=True)
model = T5ForConditionalGeneration.from_pretrained(MODEL_DIR, local_files_only=True).to(device)

def generate_response(question):
    """Generates responses from the chatbot for a given question"""
    if not question.strip():
        return "Please enter a valid question."

    # Allow only maternal health-related questions
    maternal_keywords = ["pregnancy", "baby", "birth", "mother", "preterm",
                         "breast", "miscarriage", "pregnant", "fertility", 'immunization',
                         'caesarian', 'delivery',  'parents', 'C-section', 'preeclampsia',
                         'fertile', 'abortion', 'malnourished', 'ovulation', 'babies',
                         'menstrual cycle', 'menstruation', 'stillbirth', 'ultrasound',
                         "antenatal", "postnatal", "doctor", "nurse", "babycare",
                         "labor", "postpartum", "maternal", "neonatal"]
    
    if not any(keyword in question.lower() for keyword in maternal_keywords):
        return "Sorry, I can only answer maternal health-related questions."

    # Format input for model
    input_text = f"question: {question}"
    input_ids = tokenizer.encode(input_text, return_tensors="pt").to(device)

    # Generate response
    output_ids = model.generate(
        input_ids,
        max_new_tokens=120,
        do_sample=True,
        top_k=40,
        temperature=0.8,
        top_p=0.9,
        repetition_penalty=1.5
    )

    # Decode response
    response = tokenizer.decode(output_ids[0], skip_special_tokens=True)
    return response if response else "I am unable to answer that question."

@app.route('/')
def index():
    return render_template('index.html')


@app.route("/chat", methods=["POST"])
def chat():
    """Handles user messages and returns AI-generated responses."""
    user_message = request.json.get("message", "")
    bot_response = generate_response(user_message)
    return jsonify({"response": bot_response})

if __name__ == '__main__':
    app.run(debug=True)
