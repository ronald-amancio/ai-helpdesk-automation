# 🤖 AI Helpdesk Automation

An AI-powered customer support automation built with **n8n**, **Groq Llama 3.3**, **Google Sheets**, **Gmail**, and a responsive **HTML/CSS/JavaScript** customer enquiry portal.

This project demonstrates how customer enquiries from both a website and email can be automatically processed, classified using an LLM, logged for reporting, and prepared for customer response.

---

## 📸 Preview

### Customer Enquiry Portal

A responsive web application that allows customers to submit enquiries directly to an n8n webhook.

### n8n Automation Workflow

The workflow:

- Receives enquiries from a Website Form (Webhook)
- Receives enquiries from Gmail
- Normalizes different input sources into a common structure
- Uses Groq Llama 3.3 to analyze the enquiry
- Classifies the enquiry
- Determines priority and sentiment
- Generates a professional draft response
- Logs all information into Google Sheets
- Sends an automated Gmail response (demo implementation)

---

# ✨ Features

- 🌐 Responsive Customer Enquiry Web Portal
- 📩 Gmail Trigger Integration
- 🔗 Webhook Integration
- 🤖 AI-powered enquiry classification
- 📝 AI-generated customer response drafting
- 📊 Google Sheets logging
- 📈 Confidence, priority and sentiment detection
- 🔄 Unified processing pipeline for multiple input sources

---

# 🛠 Tech Stack

### Automation

- n8n

### AI

- Groq
- Llama 3.3 70B Versatile

### Integrations

- Gmail
- Google Sheets
- Webhook

### Frontend

- HTML5
- CSS3
- JavaScript

---

# 🏗 Architecture

```
                    Website Portal
                           │
                           ▼
                      Webhook Trigger
                           │
                           │
      Gmail Trigger ───────┘
              │
              ▼
        Normalize Inputs
              │
              ▼
      AI Enquiry Analysis
        (Groq Llama 3.3)
              │
              ▼
       Parse JSON Response
              │
              ▼
      Build Structured Record
              │
              ▼
       Log to Google Sheets
              │
              ▼
     Send Gmail Reply (Demo)
```

---

# 🌐 Customer Enquiry Portal

The customer portal is built using only:

- HTML
- CSS
- JavaScript

It sends a JSON payload directly to the published n8n Webhook.

Example payload:

```json
{
  "customer_name": "John Doe",
  "customer_email": "john@example.com",
  "subject": "Pricing Information",
  "message": "I'd like to know more about your service packages.",
  "source": "website"
}
```

---

# 📊 AI Output

Each enquiry is enriched with structured AI analysis:

- Category
- Confidence Score
- Priority
- Sentiment
- Summary
- Reasoning
- Draft Reply

These values are automatically logged into Google Sheets for reporting and auditing.

---

# 📁 Project Structure

```
AI-Customer-Support-Automation
│
├── Customer-Enquiry-Portal
│   ├── index.html
│   ├── styles.css
│   └── script.js
│
├── n8n
│   └── AI Customer Enquiry Automation.json
│
├── screenshots
│
└── README.md
```

---

# 🚀 Running the Project

## 1. Import the n8n Workflow

Import the provided workflow into your n8n instance.

---

## 2. Configure Credentials

Configure:

- Gmail
- Google Sheets
- Groq

---

## 3. Publish the Workflow

Publish the workflow and copy the Production Webhook URL.

---

## 4. Configure the Website

Open:

```
script.js
```

Replace:

```javascript
const WEBHOOK_URL = "YOUR_WEBHOOK_URL";
```

with your published webhook.

---

## 5. Launch

Open:

```
index.html
```

or deploy to:

- GitHub Pages
- Netlify
- Vercel

---

# 📸 Screenshots

Recommended screenshots:

- Customer Portal
- n8n Workflow
- AI Analysis
- Google Sheets Log
- Gmail Reply

---

# 🔮 Future Improvements

This project was intentionally kept lightweight as a proof of concept.

Future enhancements include:

- Human approval before sending replies
- Confidence-based routing
- Automatic detection of system-generated emails
- Gmail thread reply support
- Improved error handling
- Webhook authentication
- Dashboard and reporting
- CRM integration
- Slack or Microsoft Teams notifications

---

# 🎯 Learning Objectives

This project demonstrates:

- Workflow automation
- AI integration
- Prompt engineering
- LLM output parsing
- API integration
- Business process automation
- Customer support workflow design
- End-to-end automation using n8n

---

# 📄 License

This project is provided for educational and portfolio purposes.

---

## 👨‍💻 Author

**Ronald Amancio**

Software Engineer | Full Stack .NET Developer | AI Automation Developer

GitHub:
https://github.com/YOUR_GITHUB_USERNAME

LinkedIn:
https://www.linkedin.com/in/YOUR_LINKEDIN_PROFILE/
