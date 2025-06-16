/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const godaddyEmail = "info@betweencultures.ca";
const godaddyPassword = "Yanozie00$";

// Setting up the transporter
const transporter = nodemailer.createTransport({
  host: "smtp.office365.com", // Office365 SMTP server
  port: 587, // Use 587 for STARTTLS
  auth: {
    user: godaddyEmail || "info@betweencultures.ca",
    pass: godaddyPassword || "Yanozie00$",
  },
  requireTLS: true,
  debug: process.env.NODE_ENV === "development",
});

transporter.verify((error, _success) => {
  if (error) {
    console.error("SMTP connection error:", error);
  } else {
    console.log("SMTP server is ready to take messages");
  }
});

export async function POST(request: Request) {
  try {
    const { fullName, email, message } = await request.json();

    // Input validation
    if (!fullName || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    const teamMailOptions = {
      from: `"Between Cultures Foundation" <info@betweencultures.ca>`, // Proper from format
      to: ["info@betweencultures.ca"],
      subject: `New Contact Form Submission from ${fullName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #a8c499; padding: 20px; border-radius: 8px 8px 0 0;">
            <h2 style="color: white; margin: 0;">New Contact Form Submission</h2>
          </div>
          
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px;">
            <p><strong>Name:</strong> ${fullName}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #a8c499;">${email}</a></p>
            <p><strong>Message:</strong></p>
            <div style="background-color: white; padding: 15px; border-left: 4px solid #a8c499; margin: 10px 0;">
              <p style="white-space: pre-line; margin: 0;">${message.replace(
                /\n/g,
                "<br>"
              )}</p>
            </div>
            
            <p style="color: #666; font-size: 0.875rem; margin-top: 20px;">
              Submitted on: ${new Date().toLocaleString("en-CA", {
                timeZone: "America/Edmonton",
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              })} (Mountain Time)
            </p>
          </div>
        </div>
      `,
    };

    // Send confirmation email to the user
    const userMailOptions = {
      from: `"Between Cultures Foundation" <info@betweencultures.ca>`,
      to: email,
      subject: "Thank you for contacting Between Cultures Foundation",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #a8c499; padding: 30px; border-radius: 8px 8px 0 0; text-align: center;">
            <h2 style="color: white; margin: 0;">Thank you for reaching out!</h2>
          </div>
          
          <div style="background-color: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px;">
            <p>Dear ${fullName},</p>
            
            <p>We have received your message and appreciate you taking the time to contact Between Cultures Foundation. We are committed to creating inclusive childcare spaces where all cultures are honored and every child feels at home.</p>
            
            <div style="background-color: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #a097d1;">
              <p><strong>Your Message:</strong></p>
              <p style="white-space: pre-line; color: #666;">${message}</p>
            </div>
            
            <p>Our team will review your inquiry and get back to you as soon as possible. In the meantime, if you have any urgent questions, you can:</p>
            
            <div style="background-color: #fff3cd; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <ul style="list-style-type: none; padding-left: 0; margin: 0;">
                <li style="margin-bottom: 12px;">📞 Call us: <a href="tel:+14036186672" style="color: #a8c499; text-decoration: none; font-weight: bold;">(403) 618-6672</a></li>
                <li style="margin-bottom: 12px;">✉️ Email us: <a href="mailto:info@betweencultures.ca" style="color: #a8c499; text-decoration: none; font-weight: bold;">info@betweencultures.ca</a></li>
                <li style="margin-bottom: 12px;">🌐 Visit our website: <a href="https://betweencultures.ca" style="color: #a8c499; text-decoration: none; font-weight: bold;">betweencultures.ca</a></li>
              </ul>
            </div>
            
            <div style="background-color: #e8f5e8; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #2d5016; margin-top: 0;">Ways to Get Involved:</h3>
              <ul style="color: #2d5016; padding-left: 20px;">
                <li><strong>Volunteer with us</strong> - Help support immigrant families</li>
                <li><strong>Become a cultural ambassador</strong> - Share your heritage</li>
                <li><strong>Make a donation</strong> - Support our programs</li>
                <li><strong>Partner with us</strong> - Collaborate on initiatives</li>
              </ul>
            </div>
            
            <p>Thank you for your interest in supporting culturally inclusive childcare. Together, we can create spaces where every child thrives!</p>
            
            <p style="margin-top: 30px;">With gratitude,<br><strong>The Between Cultures Foundation Team</strong></p>
          </div>
          
          <div style="background-color: #f1f1f1; padding: 20px; text-align: center; border-radius: 0 0 8px 8px;">
            <p style="color: #666; font-size: 0.875rem; margin: 0;">
              This is an automated message. Please do not reply to this email.<br>
              For direct communication, please use <a href="mailto:info@betweencultures.ca" style="color: #a8c499;">info@betweencultures.ca</a>
            </p>
          </div>
        </div>
      `,
    };

    console.log("Attempting to send emails...");

    // Send both emails
    const results = await Promise.allSettled([
      transporter.sendMail(teamMailOptions),
      transporter.sendMail(userMailOptions),
    ]);

    // Check if any emails failed
    const failedEmails = results.filter(
      (result) => result.status === "rejected"
    );

    if (failedEmails.length > 0) {
      console.error("Some emails failed:", failedEmails);
      // Still return success if at least one email was sent
      if (results.some((result) => result.status === "fulfilled")) {
        console.log("At least one email sent successfully");
      } else {
        throw new Error("All emails failed to send");
      }
    }

    console.log("Emails sent successfully");

    return NextResponse.json(
      { message: "Emails sent successfully" },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error sending email:", error);

    // More detailed error logging
    if (error.code) {
      console.error("Error code:", error.code);
    }
    if (error.command) {
      console.error("Failed command:", error.command);
    }

    return NextResponse.json(
      {
        error: "Failed to send email",
        details:
          process.env.NODE_ENV === "development" ? error.message : undefined,
      },
      { status: 500 }
    );
  }
}
