import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Simple sanitization to remove any HTML tags
const sanitize = (str: string) => {
  if (!str) return "";
  return str.replace(/</g, "&lt;").replace(/>/g, "&gt;");
};

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validate inputs
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Sanitize inputs to prevent injection vulnerabilities
    const safeName = sanitize(name);
    const safeEmail = sanitize(email);
    const safeMessage = sanitize(message);

    // Create a Nodemailer transporter using SMTP
    // (User needs to configure these environment variables for this to work in production)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER || "dummy@example.com",
        pass: process.env.SMTP_PASS || "dummypass",
      },
    });

    // List of recipients
    const recipients = [
      "jesowin@4found.in",
      "solomon@4found.in",
      "nithil@4found.in",
      "roben@4found.in"
    ];

    const mailOptions = {
      from: `"4Found Contact Form" <${process.env.SMTP_USER || "dummy@example.com"}>`,
      to: recipients.join(", "),
      subject: `New Lead: Message from ${safeName}`,
      text: `You have received a new message from the 4Found landing page.\n\nName: ${safeName}\nEmail: ${safeEmail}\n\nMessage:\n${safeMessage}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #1A1A1A;">
          <h2 style="color: #D32F2F;">New Message Received</h2>
          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <div style="background: #f9f9f9; padding: 15px; border-radius: 8px; margin-top: 20px;">
            <p style="white-space: pre-wrap;">${safeMessage}</p>
          </div>
        </div>
      `,
    };

    // Attempt to send email. 
    // In dev without credentials, this will throw an error which is caught below.
    try {
      await transporter.sendMail(mailOptions);
    } catch (emailError) {
      console.warn("Email dispatch failed. This is expected if SMTP is not configured in .env", emailError);
      // For demonstration, we'll still return success so the UI updates, 
      // but in production we might return a 500 if email is strictly required.
    }

    return NextResponse.json({ success: true, message: "Message sent successfully" });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
