# LeaBot: Maternal Health Chatbot

LeaBot is a domain-specific maternal healthcare chatbot project developed using a pre-trained Transformer model. The chatbot provides an interactive platform where women can ask questions and receive immediate, accurate responses on a variety of maternal health topics. 

## About the Dataset

The chatbot is trained using a conversational dataset from Hugging Face:
**nyarkssss/maternal_1k**.

It consists of **1,035** question-answer conversational pairs on maternal health-related topics. These pairs help the model understand diverse user intents and provide accurate, domain-specific responses.

The dataset covers three key maternal health contexts:

1. **Antenatal** -  Questions related to pregnancy before childbirth.

2. **Postnatal** -  Questions related to immediate postpartum care.

3. **Postpartum** - Questions concerning long-term recovery after childbirth.

Each entry in the dataset contains the following fields:

**question** – User queries related to maternal health.

**answer** – Corresponding expert-informed responses.

**domain** – The specific maternal health category the question falls under.

**context** – Additional contextual information related to the question.

This dataset allows the chatbot to learn domain-specific language and give contextually accurate responses to various maternal health queries.

## Performance metrics

To evaluate the performance of the chatbot, several key metrics were considered during the model development phase. These metrics are essential for assessing the model's ability to generate meaningful, accurate responses.

**Evaluation metrics**

- **Loss:** Measures how well the model predicts the target response. Lower loss, better predictions.

- **Accuracy:** Evaluates the percentage of correctly predicted tokens in the reponses.

- **BLEU:** Measures the precision in generating matching reference responses.

- **F1 score:** Harmonic mean of precision and recall, balancing both false positives and false negatives.

- **Perplexity:** A measure of how well the model predicts a sample; lower perplexity means the model is better at predicting the next word.

Performance metrics for the best-performing model are as follows

**Loss:** 0.366

**Accuracy:** 92.10%

**Bleu score:** 0.144

**F1 score:** 0.921

**Perplexity:** 0.392 

## Steps to run the chatbot

1. **Clone the repository:**

Start by cloning the repository to your local machine.
On your terminal, run:

```
git clone https://github.com/k-ganda/Chatbot_ML.git
cd Chatbot_ML
```

2. **Set up a virtual environment:**

Create and activate a virtual environment.

```
python -m venv venv
source venv/bin/activate   # On Windows: venv\Scripts\activate
```

3. **Install Dependencies**

Install the necessary dependencies using pip:

`pip install -r requirements.txt`

4. **Download Model and tokenizer files**

The model and tokenizer files are in a folder hosted on Google Drive. Download the files to your local machine using this link: 

https://drive.google.com/drive/folders/1CuoY1BId9i9ucxiZnxW48zwfM2ZjAAbs?usp=sharing

Once downloaded, add the folder to the repositories path. Ensure the folder alignment is like this:

```
Chatbot_ML/
│
├── notebook/                             # Folder containing notebook
│   └── MaternalHealthChatbot (1).ipynb   # Jupyter notebook file
│
├── static/                               # Folder for static files (CSS, JS)
│   ├── css/                              # CSS folder
│   │   └── style.css                     # CSS file for styling
│   └── js/                               # JS folder
│       └── script.js                     # JavaScript file for functionality
│
├── templates/                            # Folder for HTML templates
│   └── index.html                        # HTML file for the chatbot interface
│
├── **t5_maternal_bot1/**                     # Folder containing model files (to be downloaded from Google Drive)
│   └── (model files e.g model.safetensors, tokenizer
│
├── README.md                             # Project documentation
│
└── app.py                                # Main Flask application file
```


6. **Start the flask app:**

Run the flask app: 

`python app.py`

Once the app is running, open your web browser and navigate to the provided local URL (e.g., `http://127.0.0.1:5000`). You should see the homepage of the chatbot.


## Interact with the Chatbot:

On the page, a chat icon will appear at the bottom right of the screen. Click the icon to start interacting with LeaBot. 

The chatbot's interface will guide users on how to interact, including how to ask questions, restart conversations, or end the chat.

To know what type of questions to ask, you can go through the dataset from Hugging Face and pick any of the questions to ask, you can also refine them.

## Example conversations:

Here are examples of conversational interactions with the chatbot.

![image](https://github.com/user-attachments/assets/fe8e611c-bec0-49aa-8296-0f1e9bfdd132)
https://github.com/user-attachments/assets/a59fa433-7aa9-4849-8baf-816b508b4926


## Demo Video Link

Check out the demo video showcasing the chatbot in action!

https://www.youtube.com/watch?v=mC_h_XpMEDA 




