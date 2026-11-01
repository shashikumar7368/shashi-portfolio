
import os
import smtplib
import traceback

from email.message import EmailMessage
from dotenv import load_dotenv

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr, Field


# Load environment variables
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
load_dotenv(os.path.join(BASE_DIR, ".env"))


# Create FastAPI application
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


# Gmail notification function
def send_email(data: ContactMessage):

    sender = os.getenv("SMTP_EMAIL")
    password = os.getenv("SMTP_APP_PASSWORD")
    receiver = os.getenv("NOTIFICATION_EMAIL")

    if not sender or not password or not receiver:
        raise RuntimeError("Email configuration is missing.")

    email = EmailMessage()

    email["Subject"] = f"New Portfolio Message from {data.name}"
    email["From"] = sender
    email["To"] = receiver
    email["Reply-To"] = str(data.email)

    email.set_content(
        f"""
New message received from your portfolio!

Name: {data.name}
Email: {data.email}

Message:
{data.message}
"""
    )

    print("Connecting to Gmail...")

    with smtplib.SMTP_SSL(
        "smtp.gmail.com",
        465,
        timeout=30
    ) as smtp:

        print("Step A: Gmail connection established")

        smtp.login(sender, password)

        print("Step B: Gmail authentication successful")

        smtp.send_message(email)

        print("Step C: Email sent successfully")


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
    print("Message:", data.message)

    try:

        send_email(data)

        return {
            "success": True,
            "message": "Message received and email notification sent!"
        }

    except Exception as error:

        print("Email sending error:", error)
        traceback.print_exc()

        raise HTTPException(
            status_code=500,
            detail="Message received, but email notification failed."
        )
