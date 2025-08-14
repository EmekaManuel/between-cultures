/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const godaddyEmail = process.env.GODADDY_EMAIL || "info@betweencultures.ca";
const godaddyPassword = process.env.GODADDY_PASSWORD;
const smtpHost = process.env.SMTP_HOST || "smtp.office365.com";
const smtpPort = parseInt(process.env.SMTP_PORT || "587");

if (!godaddyPassword) {
  console.error("❌ GODADDY_PASSWORD environment variable is required");
}

const transporter = nodemailer.createTransport({
  host: smtpHost,
  port: smtpPort,
  secure: false,
  auth: {
    user: godaddyEmail,
    pass: godaddyPassword,
  },
  requireTLS: true,
  tls: {
    ciphers: "SSLv3",
    rejectUnauthorized: false,
  },
});

export async function POST(request: Request) {
  try {
    const { fullName, email, message } = await request.json();

    if (!fullName || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    try {
      await transporter.verify();
    } catch (verifyError) {
      return NextResponse.json(
        { error: "Email service temporarily unavailable" },
        { status: 503 }
      );
    }

    const teamMailOptions = {
      from: `"Between Cultures Foundation" <${godaddyEmail}>`,
      to: "info@betweencultures.ca",
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

    const userMailOptions = {
      from: `"Between Cultures Foundation" <${godaddyEmail}>`,
      to: email,
      subject: "Thank you for contacting Between Cultures Foundation",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #a8c499; padding: 30px; border-radius: 8px 8px 0 0; text-align: center;">
            <h2 style="color: white; margin: 0;">Thank you for reaching out!</h2>
          </div>
          
          <div style="background-color: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px;">
            <p>Dear ${fullName},</p>
            
            <p>We have received your message and appreciate you taking the time to contact Between Cultures Foundation.</p>
            
            <div style="background-color: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #a097d1;">
              <p><strong>Your Message:</strong></p>
              <p style="white-space: pre-line; color: #666;">${message}</p>
            </div>
            
            <p>Our team will review your inquiry and get back to you as soon as possible.</p>
            
            <p style="margin-top: 30px;">With gratitude,<br><strong>The Between Cultures Foundation Team</strong></p>
          </div>
        </div>
      `,
    };

    const results: Array<{
      type: string;
      status: string;
      error?: any;
      info?: any;
    }> = [];

    try {
      const teamResult = await transporter.sendMail(teamMailOptions);
      results.push({ type: "team", status: "success", info: teamResult });
    } catch (teamError) {
      results.push({ type: "team", status: "failed", error: teamError });
    }

    try {
      const userResult = await transporter.sendMail(userMailOptions);
      results.push({ type: "user", status: "success", info: userResult });
    } catch (userError) {
      results.push({ type: "user", status: "failed", error: userError });
    }

    const successCount = results.filter((r) => r.status === "success").length;
    const failureCount = results.filter((r) => r.status === "failed").length;

    if (successCount === 0) {
      return NextResponse.json(
        {
          error: "Failed to send emails",
          details: process.env.NODE_ENV === "development" ? results : undefined,
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        message: "Emails sent successfully",
        details:
          process.env.NODE_ENV === "development"
            ? {
                successCount,
                failureCount,
                results,
              }
            : undefined,
      },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      {
        error: "Failed to send email",
        details:
          process.env.NODE_ENV === "development"
            ? {
                message: error.message,
                code: error.code,
                command: error.command,
              }
            : undefined,
      },
      { status: 500 }
    );
  }
}
