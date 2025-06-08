import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Create a transporter using Zoho SMTP
const transporter = nodemailer.createTransport({
  host: "smtp.zoho.com",
  port: 465,
  secure: true, // use SSL
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export async function POST(request: Request) {
  try {
    const {
      fullName,
      email,
      phone,
      donationAmount,
      donationType,
      message,
      isRecurring,
      address, // for tax receipt
    } = await request.json();

    // Validate required fields
    if (!fullName || !email || !donationAmount || !donationType) {
      return NextResponse.json(
        {
          error: "Name, email, donation amount, and donation type are required",
        },
        { status: 400 }
      );
    }

    // Generate donation reference number
    const donationRef = `BC-${Date.now().toString().slice(-8)}`;

    // Send email to Between Cultures team
    const teamMailOptions = {
      from: `Between Cultures Foundation <${process.env.EMAIL_USER}>`,
      to: ["info@betweencultures.ca"], // Add your finance/admin team emails here
      subject: `New Donation Received - $${donationAmount} from ${fullName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #a8c499 0%, #a097d1 100%); padding: 30px; border-radius: 8px 8px 0 0; text-align: center;">
            <h2 style="color: white; margin: 0;">🎉 New Donation Received!</h2>
          </div>
          
          <div style="background-color: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px;">
            <div style="background-color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; border-left: 4px solid #a8c499;">
              <h3 style="color: #a8c499; margin-top: 0;">Donation Details</h3>
              <p><strong>Reference:</strong> ${donationRef}</p>
              <p><strong>Amount:</strong> $${donationAmount} CAD</p>
              <p><strong>Type:</strong> ${donationType}</p>
              <p><strong>Frequency:</strong> ${
                isRecurring ? "Recurring Monthly" : "One-time"
              }</p>
            </div>

            <div style="background-color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; border-left: 4px solid #a097d1;">
              <h3 style="color: #a097d1; margin-top: 0;">Donor Information</h3>
              <p><strong>Name:</strong> ${fullName}</p>
              <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #a8c499;">${email}</a></p>
              ${
                phone
                  ? `<p><strong>Phone:</strong> <a href="tel:${phone}" style="color: #a8c499;">${phone}</a></p>`
                  : ""
              }
              ${address ? `<p><strong>Address:</strong> ${address}</p>` : ""}
            </div>

            ${
              message
                ? `
            <div style="background-color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; border-left: 4px solid #f39c12;">
              <h3 style="color: #f39c12; margin-top: 0;">Donor Message</h3>
              <p style="white-space: pre-line;">${message.replace(
                /\n/g,
                "<br>"
              )}</p>
            </div>
            `
                : ""
            }
            
            <div style="background-color: #e8f5e8; padding: 15px; border-radius: 8px;">
              <p style="margin: 0; color: #2d5016;">
                <strong>Action Required:</strong> Please process this donation and prepare a tax receipt for the donor.
              </p>
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

    // Send confirmation email to the donor
    const donorMailOptions = {
      from: `Between Cultures Foundation <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `Thank you for your generous donation to Between Cultures Foundation`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #a8c499 0%, #a097d1 100%); padding: 30px; border-radius: 8px 8px 0 0; text-align: center;">
            <h2 style="color: white; margin: 0;">💚 Thank You for Your Donation!</h2>
          </div>
          
          <div style="background-color: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px;">
            <p>Dear ${fullName},</p>
            
            <p>Thank you so much for your generous donation to Between Cultures Foundation! Your support helps us create inclusive childcare spaces where all cultures are honored and every child feels at home.</p>
            
            <div style="background-color: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #a8c499;">
              <h3 style="color: #a8c499; margin-top: 0;">Donation Summary</h3>
              <p><strong>Reference Number:</strong> ${donationRef}</p>
              <p><strong>Amount:</strong> $${donationAmount} CAD</p>
              <p><strong>Type:</strong> ${donationType}</p>
              <p><strong>Date:</strong> ${new Date().toLocaleDateString(
                "en-CA"
              )}</p>
              ${
                isRecurring
                  ? "<p><strong>Frequency:</strong> Monthly recurring donation</p>"
                  : ""
              }
            </div>

            ${
              message
                ? `
            <div style="background-color: #fff3cd; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #856404; margin-top: 0;">Your Message</h3>
              <p style="white-space: pre-line; color: #856404; margin: 0;">${message}</p>
            </div>
            `
                : ""
            }
            
            <div style="background-color: #e8f5e8; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #2d5016; margin-top: 0;">🧾 Tax Receipt Information</h3>
              <p style="color: #2d5016; margin: 0;">
                As a registered Canadian charity, we will issue you an official tax receipt within 30 days. 
                This receipt will be sent to the email address you provided: <strong>${email}</strong>
              </p>
            </div>
            
            <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #495057; margin-top: 0;">Your Impact</h3>
              <p style="color: #495057;">Your donation of $${donationAmount} will help us:</p>
              <ul style="color: #495057; padding-left: 20px;">
                <li>Provide culturally inclusive programming for children</li>
                <li>Support immigrant families in their childcare journey</li>
                <li>Train educators in cultural competency</li>
                <li>Create resources in multiple languages</li>
                <li>Build stronger, more inclusive communities</li>
              </ul>
            </div>

            ${
              isRecurring
                ? `
            <div style="background-color: #d1ecf1; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #0c5460; margin-top: 0;">🔄 Recurring Donation</h3>
              <p style="color: #0c5460; margin: 0;">
                Thank you for setting up a monthly recurring donation! Your ongoing support provides stable funding that allows us to plan and expand our programs. You can modify or cancel your recurring donation at any time by contacting us.
              </p>
            </div>
            `
                : ""
            }
            
            <div style="background-color: #fff3cd; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #856404; margin-top: 0;">Stay Connected</h3>
              <ul style="color: #856404; padding-left: 20px; margin: 0;">
                <li>📧 Email: <a href="mailto:info@betweencultures.ca" style="color: #a8c499;">info@betweencultures.ca</a></li>
                <li>📞 Phone: <a href="tel:+14036186672" style="color: #a8c499;">(403) 618-6672</a></li>
                <li>🌐 Website: <a href="https://betweencultures.ca" style="color: #a8c499;">betweencultures.ca</a></li>
              </ul>
            </div>
            
            <p>We are incredibly grateful for supporters like you who share our vision of inclusive, culturally responsive childcare. Together, we're building a world where every child can see themselves reflected and celebrated.</p>
            
            <p style="margin-top: 30px;">With heartfelt gratitude,<br><strong>The Between Cultures Foundation Team</strong></p>
          </div>
          
          <div style="background-color: #f1f1f1; padding: 20px; text-align: center; border-radius: 0 0 8px 8px;">
            <p style="color: #666; font-size: 0.875rem; margin: 0;">
              This email confirmation serves as your temporary receipt. An official tax receipt will follow within 30 days.<br>
              Questions? Contact us at <a href="mailto:info@betweencultures.ca" style="color: #a8c499;">info@betweencultures.ca</a>
            </p>
          </div>
        </div>
      `,
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(teamMailOptions),
      transporter.sendMail(donorMailOptions),
    ]);

    return NextResponse.json(
      {
        message: "Donation processed successfully",
        donationRef: donationRef,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing donation:", error);
    return NextResponse.json(
      { error: "Failed to process donation" },
      { status: 500 }
    );
  }
}
