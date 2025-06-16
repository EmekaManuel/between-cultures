/* eslint-disable @typescript-eslint/no-explicit-any */
// app/api/stripe/webhook/route.ts
import { NextResponse } from "next/server";
import Stripe from "stripe";
import nodemailer from "nodemailer";

const stripe = new Stripe(
  "sk_test_51RamQkQNZzSzVMiKRuP9GfvKdJHCGD0rjRmnwf3E8L5T8TrilhZOT4x7jsazk4RXMz0CukRJ9FvFtI4QQAMIwZpe004L6M1UIY"!,
  {
    apiVersion: "2025-05-28.basil",
  }
);

const webhookSecret =
  "pk_test_51RamQkQNZzSzVMiKAfmaWj8NAsBKUz5BSDwBop5kyeeuLMrR2okYAiuDEZ7F7r3atl7JCCa9Tq7w3se2w27U9VRN00XxX2v09T"!;

// Email transporter (reuse your existing configuration)
const transporter = nodemailer.createTransport({
  host: "smtpout.secureserver.net",
  port: 587,
  secure: false,
  auth: {
    user: process.env.GODADDY_EMAIL || "info@betweencultures.ca",
    pass: process.env.GODADDY_PASSWORD,
  },
  tls: {
    minVersion: "TLSv1.2",
  },
});

export async function POST(request: Request) {
  try {
    const body = await request.text();
    const signature = request.headers.get("stripe-signature")!;

    let event: Stripe.Event;

    try {
      event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
    } catch (err: any) {
      console.error("Webhook signature verification failed:", err.message);
      return NextResponse.json(
        { error: "Webhook signature verification failed" },
        { status: 400 }
      );
    }

    // Handle the event
    switch (event.type) {
      case "checkout.session.completed":
        await handleSuccessfulDonation(
          event.data.object as Stripe.Checkout.Session
        );
        break;

      case "payment_intent.succeeded":
        await handlePaymentSucceeded(event.data.object as Stripe.PaymentIntent);
        break;

      case "payment_intent.payment_failed":
        await handlePaymentFailed(event.data.object as Stripe.PaymentIntent);
        break;

      default:
        console.log(`Unhandled event type: ${event.type}`);
    }

    return NextResponse.json({ received: true });
  } catch (error: any) {
    console.error("Webhook error:", error);
    return NextResponse.json(
      { error: "Webhook handler failed" },
      { status: 500 }
    );
  }
}

async function handleSuccessfulDonation(session: Stripe.Checkout.Session) {
  try {
    console.log("🎉 Donation completed:", {
      sessionId: session.id,
      amount: session.amount_total! / 100,
      currency: session.currency?.toUpperCase(),
      email: session.customer_email,
    });

    // Get donation details
    const amount = (session.amount_total! / 100).toFixed(2);
    const currency = session.currency?.toUpperCase() || "CAD";
    const donorEmail = session.customer_email!;
    const donorName = session.metadata?.donor_name || "Anonymous Donor";
    const donorMessage = session.metadata?.donor_message || "";

    // Send thank you email to donor
    await sendDonorThankYou({
      donorEmail,
      donorName,
      amount,
      currency,
      donorMessage,
      sessionId: session.id,
    });

    // Send notification to organization
    await sendDonationNotification({
      donorEmail,
      donorName,
      amount,
      currency,
      donorMessage,
      sessionId: session.id,
    });

    // Here you would typically save to database
    // await saveDonationToDatabase({ session, amount, currency, donorEmail, donorName, donorMessage });
  } catch (error) {
    console.error("Error handling successful donation:", error);
  }
}

async function handlePaymentSucceeded(paymentIntent: Stripe.PaymentIntent) {
  console.log("💳 Payment succeeded:", paymentIntent.id);
  // Additional payment success handling if needed
}

async function handlePaymentFailed(paymentIntent: Stripe.PaymentIntent) {
  console.log("❌ Payment failed:", paymentIntent.id);
  // Handle failed payment (maybe send notification or retry)
}

async function sendDonorThankYou(donation: {
  donorEmail: string;
  donorName: string;
  amount: string;
  currency: string;
  donorMessage: string;
  sessionId: string;
}) {
  const { donorEmail, donorName, amount, currency, donorMessage, sessionId } =
    donation;

  const mailOptions = {
    from: `"Between Cultures Foundation" <info@betweencultures.ca>`,
    to: donorEmail,
    subject: `Thank you for your ${currency} $${amount} donation!`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #a8c499 0%, #a097d1 100%); padding: 40px; border-radius: 12px 12px 0 0; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 28px;">Thank You!</h1>
          <p style="color: white; margin: 10px 0 0 0; font-size: 18px;">Your generosity makes a difference</p>
        </div>
        
        <div style="background-color: #f9f9f9; padding: 40px; border-radius: 0 0 12px 12px;">
          <p style="font-size: 18px; color: #333; margin-bottom: 20px;">Dear ${donorName},</p>
          
          <p style="color: #666; line-height: 1.6;">
            We are deeply grateful for your generous donation of <strong>${currency} $${amount}</strong> to Between Cultures Foundation. Your support directly helps immigrant families build stronger communities and preserve their cultural heritage.
          </p>
          
          ${
            donorMessage
              ? `
            <div style="background-color: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #a8c499;">
              <p style="margin: 0; color: #666;"><strong>Your message:</strong></p>
              <p style="margin: 10px 0 0 0; color: #666; font-style: italic;">"${donorMessage}"</p>
            </div>
          `
              : ""
          }
          
          <div style="background-color: #e8f5e8; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #2d5016; margin: 0 0 15px 0;">Your impact:</h3>
            <ul style="color: #2d5016; margin: 0; padding-left: 20px;">
              <li>Supporting family mentorship programs</li>
              <li>Funding cultural preservation initiatives</li>
              <li>Providing educational support for children</li>
              <li>Enabling mental health services</li>
            </ul>
          </div>
          
          <div style="background-color: white; padding: 20px; border-radius: 8px; margin: 20px 0; border: 1px solid #e5e5e5;">
            <h4 style="margin: 0 0 10px 0; color: #333;">Donation Details:</h4>
            <p style="margin: 5px 0; color: #666;"><strong>Amount:</strong> ${currency} $${amount}</p>
            <p style="margin: 5px 0; color: #666;"><strong>Date:</strong> ${new Date().toLocaleDateString(
              "en-CA"
            )}</p>
            <p style="margin: 5px 0; color: #666;"><strong>Transaction ID:</strong> ${sessionId}</p>
            <p style="margin: 15px 0 5px 0; color: #666; font-size: 14px;">
              <em>As a registered Canadian charity, this donation may be tax-deductible. Please keep this receipt for your records.</em>
            </p>
          </div>
          
          <p style="color: #666; line-height: 1.6; margin-top: 30px;">
            Thank you for believing in our mission to create inclusive childcare spaces where all cultures are honored and every child feels at home.
          </p>
          
          <p style="margin-top: 30px; color: #333;">
            With heartfelt gratitude,<br>
            <strong>The Between Cultures Foundation Team</strong>
          </p>
        </div>
        
        <div style="background-color: #f1f1f1; padding: 20px; text-align: center;">
          <p style="color: #666; font-size: 14px; margin: 0;">
            Between Cultures Foundation | <a href="https://betweencultures.ca" style="color: #a8c499;">betweencultures.ca</a><br>
            Email: <a href="mailto:info@betweencultures.ca" style="color: #a8c499;">info@betweencultures.ca</a> | Phone: (403) 618-6672
          </p>
        </div>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("✅ Thank you email sent to donor:", donorEmail);
  } catch (error) {
    console.error("❌ Failed to send thank you email:", error);
  }
}

async function sendDonationNotification(donation: {
  donorEmail: string;
  donorName: string;
  amount: string;
  currency: string;
  donorMessage: string;
  sessionId: string;
}) {
  const { donorEmail, donorName, amount, currency, donorMessage, sessionId } =
    donation;

  const mailOptions = {
    from: `"Between Cultures Foundation" <info@betweencultures.ca>`,
    to: "info@betweencultures.ca",
    subject: `🎉 New Donation: ${currency} $${amount} from ${donorName}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background-color: #a8c499; padding: 20px; border-radius: 8px 8px 0 0;">
          <h2 style="color: white; margin: 0;">🎉 New Donation Received!</h2>
        </div>
        
        <div style="background-color: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px;">
          <h3 style="color: #333; margin-top: 0;">Donation Details:</h3>
          
          <div style="background-color: white; padding: 15px; border-radius: 8px; margin: 15px 0;">
            <p><strong>Amount:</strong> ${currency} $${amount}</p>
            <p><strong>Donor Name:</strong> ${donorName}</p>
            <p><strong>Donor Email:</strong> <a href="mailto:${donorEmail}">${donorEmail}</a></p>
            <p><strong>Transaction ID:</strong> ${sessionId}</p>
            <p><strong>Date:</strong> ${new Date().toLocaleString("en-CA", {
              timeZone: "America/Edmonton",
            })}</p>
          </div>
          
          ${
            donorMessage
              ? `
            <div style="background-color: white; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #a097d1;">
              <p><strong>Donor Message:</strong></p>
              <p style="font-style: italic; color: #666;">"${donorMessage}"</p>
            </div>
          `
              : ""
          }
          
          <div style="background-color: #e8f5e8; padding: 15px; border-radius: 8px; margin: 15px 0;">
            <p style="color: #2d5016; margin: 0;">
              <strong>Action Required:</strong> Consider sending a personal follow-up message to this generous donor!
            </p>
          </div>
        </div>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("✅ Donation notification sent to organization");
  } catch (error) {
    console.error("❌ Failed to send donation notification:", error);
  }
}
