
import os
import resend

from dotenv import load_dotenv
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr, Field

# Load environment variables
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
load_dotenv(os.path.join(BASE_DIR, ".env"))

app = FastAPI(
    title="Shashi Portfolio API",
    version="1.0.0"
)

# React frontend connection
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Contact form model
class ContactMessage(BaseModel):
    name: str = Field(min_length=2, max_length=100)
    email: EmailStr
    message: str = Field(min_length=5, max_length=3000)


# Resend email function
def send_email(data: ContactMessage):

    api_key = os.getenv("RESEND_API_KEY")
    receiver = os.getenv("NOTIFICATION_EMAIL")

    if not api_key or not receiver:
        raise RuntimeError("Resend configuration is missing.")

    resend.api_key = api_key

    params = {
        "from": "Shashi Portfolio <onboarding@resend.dev>",
        "to": [receiver],
        "reply_to": str(data.email),
        "subject": f"New Portfolio Message from {data.name}",
        "text": f"""
New message received from your portfolio!

Name: {data.name}
Email: {data.email}

Message:
{data.message}
"""
    }

    result = resend.Emails.send(params)

    print("Resend email sent:", result)


# Home route
@app.get("/")
def home():
    return {
        "success": True,
        "message": "Shashi Portfolio API is running!"
    }


# Contact form route
@app.post("/api/contact")
async def receive_contact(data: ContactMessage):

    print("\nNew Contact Message Received!")
    print("Name:", data.name)
    print("Email:", data.email)

    try:
        send_email(data)

        return {
            "success": True,
            "message": "Message received and email notification sent!"
        }

    except Exception as error:
        print("Email sending error:", error)

        raise HTTPException(
            status_code=500,
            detail="Message received, but email notification failed."
        )
