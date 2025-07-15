/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Environment variables with fallbacks
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

// Test the connection on startup
transporter.verify((error: any) => {
  if (error) {
    console.error("SMTP connection error for donation confirmation:", error);
  } else {
    console.log("SMTP server is ready for donation confirmations");
  }
});

export async function POST(request: Request) {
  try {
    const {
      donorEmail,
      donorName,
      amount,
      currency,
      sessionId,
      paymentStatus,
      donationDate,
    } = await request.json();

    console.log("🎯 Donation confirmation email request:", {
      donorEmail,
      donorName,
      amount,
      currency,
      paymentStatus,
      sessionId,
    });

    // Input validation
    if (!donorEmail || !amount || !sessionId) {
      return NextResponse.json(
        { error: "Missing required donation information" },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(donorEmail)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    const formattedDate = new Date(donationDate).toLocaleString("en-CA", {
      timeZone: "America/Edmonton",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

    // Email to team about new donation
    const teamMailOptions = {
      from: `"Between Cultures Foundation" <info@betweencultures.ca>`,
      to: ["info@betweencultures.ca"],
      subject: `🎉 New Donation Received: ${currency} $${amount} from ${donorName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #a8c499; padding: 20px; border-radius: 8px 8px 0 0;">
            <h2 style="color: white; margin: 0;">🎉 New Donation Received!</h2>
          </div>
          
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px;">
            <div style="background-color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; border-left: 4px solid #a8c499;">
              <h3 style="color: #2d5016; margin-top: 0;">Donation Details</h3>
              <p><strong>Donor Name:</strong> ${donorName}</p>
              <p><strong>Email:</strong> <a href="mailto:${donorEmail}" style="color: #a8c499;">${donorEmail}</a></p>
              <p><strong>Amount:</strong> <span style="font-size: 1.2em; font-weight: bold; color: #a8c499;">${currency} $${amount}</span></p>
              <p><strong>Payment Status:</strong> <span style="color: #2d5016; font-weight: bold;">${paymentStatus}</span></p>
              <p><strong>Session ID:</strong> ${sessionId}</p>
              <p><strong>Date:</strong> ${formattedDate} (Mountain Time)</p>
            </div>
            
            <div style="background-color: #e8f5e8; padding: 15px; border-radius: 8px;">
              <p style="margin: 0; color: #2d5016;">
                <strong>Next Steps:</strong><br>
                • Confirm the donation was processed correctly in Stripe<br>
                • Add donor to mailing list if they opted in<br>
                • Send thank you letter if donation is above threshold<br>
                • Update donor records
              </p>
            </div>
          </div>
        </div>
      `,
    };

    // Confirmation email to donor
    const donorMailOptions = {
      from: `"Between Cultures Foundation" <info@betweencultures.ca>`,
      to: donorEmail,
      subject: `Thank you for your donation to Between Cultures Foundation - ${currency} $${amount}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #a8c499; padding: 30px; border-radius: 8px 8px 0 0; text-align: center;">
            <h2 style="color: white; margin: 0;">Thank You for Your Generous Donation! 🙏</h2>
          </div>
          
          <div style="background-color: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px;">
            <p>Dear ${donorName},</p>
            
            <p>We are deeply grateful for your generous donation of <strong>${currency} $${amount}</strong> to Between Cultures Foundation. Your support directly helps immigrant families integrate into Canadian communities while preserving their cultural heritage.</p>
            
            <div style="background-color: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #a097d1;">
              <h3 style="color: #2d5016; margin-top: 0;">Donation Receipt</h3>
              <p><strong>Amount:</strong> ${currency} $${amount}</p>
              <p><strong>Date:</strong> ${formattedDate}</p>
              <p><strong>Transaction ID:</strong> ${sessionId}</p>
              <p><strong>Status:</strong> ${paymentStatus}</p>
            </div>
            
            <div style="background-color: #e8f5e8; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #2d5016; margin-top: 0;">Your Impact</h3>
              <p style="color: #2d5016; margin-bottom: 15px;">Your donation will help us:</p>
              <ul style="color: #2d5016; padding-left: 20px;">
                <li>Provide culturally inclusive childcare programs</li>
                <li>Support immigrant families in their integration journey</li>
                <li>Preserve and celebrate diverse cultural traditions</li>
                <li>Build stronger, more inclusive communities</li>
              </ul>
            </div>
            
            <div style="background-color: #fff3cd; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #856404; margin-top: 0;">Tax Information</h3>
              <p style="color: #856404; margin: 0;">
                <strong>🇨🇦 Canadian Tax Receipt:</strong> Your donation is tax-deductible in Canada. 
                Please keep this email as your official donation receipt for tax purposes. 
                Our charitable registration number will be provided with your official tax receipt.
              </p>
            </div>
            
            <p>If you have any questions about your donation or would like to learn more about our programs, please don't hesitate to contact us:</p>
            
            <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <ul style="list-style-type: none; padding-left: 0; margin: 0;">
                <li style="margin-bottom: 12px;">📞 Phone: <a href="tel:+14036186672" style="color: #a8c499; text-decoration: none; font-weight: bold;">(403) 618-6672</a></li>
                <li style="margin-bottom: 12px;">✉️ Email: <a href="mailto:info@betweencultures.ca" style="color: #a8c499; text-decoration: none; font-weight: bold;">info@betweencultures.ca</a></li>
                <li style="margin-bottom: 12px;">🌐 Website: <a href="https://betweencultures.ca" style="color: #a8c499; text-decoration: none; font-weight: bold;">betweencultures.ca</a></li>
              </ul>
            </div>
            
            <div style="background-color: #e8f5e8; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #2d5016; margin-top: 0;">Stay Connected</h3>
              <p style="color: #2d5016;">Consider these ways to continue supporting our mission:</p>
              <ul style="color: #2d5016; padding-left: 20px;">
                <li><strong>Volunteer with us</strong> - Share your skills and time</li>
                <li><strong>Become a monthly donor</strong> - Provide sustainable support</li>
                <li><strong>Spread the word</strong> - Tell others about our work</li>
                <li><strong>Follow us on social media</strong> - Stay updated on our impact</li>
              </ul>
            </div>
            
            <p>Thank you again for believing in our mission to create inclusive spaces where every child and family can thrive while honoring their cultural heritage.</p>
            
            <p style="margin-top: 30px;">With heartfelt gratitude,<br><strong>The Between Cultures Foundation Team</strong></p>
          </div>
          
          <div style="background-color: #f1f1f1; padding: 20px; text-align: center; border-radius: 0 0 8px 8px;">
            <p style="color: #666; font-size: 0.875rem; margin: 0;">
              This is an automated receipt. For questions about your donation, please contact us at 
              <a href="mailto:info@betweencultures.ca" style="color: #a8c499;">info@betweencultures.ca</a>
            </p>
          </div>
        </div>
      `,
    };

    console.log("📧 Sending donation confirmation emails...");

    // Send both emails
    const results = await Promise.allSettled([
      transporter.sendMail(teamMailOptions),
      transporter.sendMail(donorMailOptions),
    ]);

    // Check if any emails failed
    const failedEmails = results.filter(
      (result) => result.status === "rejected"
    );

    if (failedEmails.length > 0) {
      console.error("❌ Some donation emails failed:", failedEmails);
      // Still return success if at least one email was sent
      if (results.some((result) => result.status === "fulfilled")) {
        console.log("✅ At least one donation email sent successfully");
      } else {
        throw new Error("All donation emails failed to send");
      }
    }

    console.log("✅ Donation confirmation emails sent successfully");

    return NextResponse.json(
      {
        message: "Donation confirmation emails sent successfully",
        emailsSent: results.filter((r) => r.status === "fulfilled").length,
        totalEmails: results.length,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("❌ Error sending donation emails:", error);

    // More detailed error logging
    if (error.code) {
      console.error("Error code:", error.code);
    }
    if (error.command) {
      console.error("Failed command:", error.command);
    }

    return NextResponse.json(
      {
        error: "Failed to send donation confirmation emails",
        details:
          process.env.NODE_ENV === "development" ? error.message : undefined,
      },
      { status: 500 }
    );
  }
}
