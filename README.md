# LeaBot: Maternal Health Chatbot

This project focuses on developing a healthcare chatbot tailored specifically to maternal health using a pre-trained Transformer model. The chatbot provides an interactive platform where women can ask questions and receive immediate, accurate responses on a variety of maternal health topics. 

## About the Dataset

The dataset used for training was found from the Hugging Face dataset **nyarkssss/maternal_1k**.

This dataset aligns with our project domain as it contains conversational pairs around maternal health. It consists of **1,035** conversational pairs, ensuring a diverse range of user intents and queries.

The dataset covers three key maternal health contexts: **antenatal**(before birth), **postnatal**(immediately after birth), and **postpartum**(after birth). Each conversation example in the dataset includes the following columns:

**question** – User queries related to maternal health.

**answer** – Corresponding expert-informed responses.

**domain** – The specific maternal health category the question falls under.

**context** – Additional contextual information related to the question.

The dataset is therefore rich and will help our chatbot learn appropriate responses and give accurate responses. 

## Performance metrics

The model build was evaluated using 4 key evaluation metrics: Bleu, F1, Accuracy and loss. While tuning the hyperparameters, the best performing model was chosen to be used to generates responses for the chatbot.

Evaluation metrics for the best performing model are: 






## Steps to run the chatbot

1. **Clone the repository:**

On your terminal, run:

```
git clone https://github.com/k-ganda/nurture_prediction.git
cd maternal_risk_app
```

2. **Set up a virtual environment:**

```
python -m venv venv
source venv/bin/activate   # On Windows: venv\Scripts\activate
```

3. **Install Dependencies**

`pip install -r requirements.txt`

4. **Start the flask app:**

Run: `python app.py`

Then navigate to the url provided on your browser.

On the browser, there's a chat icon at the bottom right. Click on the icon to navigate to the chatbot's interface. 

## Example conversations:





## Demo video Link




