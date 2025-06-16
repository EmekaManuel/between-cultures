/* eslint-disable @typescript-eslint/no-explicit-any */
// app/api/stripe/checkout/route.ts
import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(
  "sk_test_51RamQkQNZzSzVMiKRuP9GfvKdJHCGD0rjRmnwf3E8L5T8TrilhZOT4x7jsazk4RXMz0CukRJ9FvFtI4QQAMIwZpe004L6M1UIY"!,
  {
    apiVersion: "2025-05-28.basil",
  }
);

export async function POST(request: Request) {
  try {
    const {
      amount,
      currency = "cad",
      donorInfo,
      successUrl,
      cancelUrl,
    } = await request.json();

    // Validate required fields
    if (!amount || amount < 500) {
      // Minimum $5.00 CAD (500 cents)
      return NextResponse.json(
        { error: "Minimum donation amount is $5.00 CAD" },
        { status: 400 }
      );
    }

    if (!donorInfo?.email) {
      return NextResponse.json(
        { error: "Email address is required" },
        { status: 400 }
      );
    }

    // Create Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: currency,
            product_data: {
              name: "Donation to Between Cultures Foundation",
              description:
                "Supporting immigrant families and cultural preservation",
              images: ["https://betweencultures.ca/logo.png"],
            },
            unit_amount: amount,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: successUrl,
      cancel_url: cancelUrl,
      customer_email: donorInfo.email,
      metadata: {
        donor_name: donorInfo.name || "",
        donor_email: donorInfo.email,
        donor_message: donorInfo.message || "",
        donation_type: "website",
        currency: currency,
      },
      payment_intent_data: {
        metadata: {
          donor_name: donorInfo.name || "",
          donor_email: donorInfo.email,
          donor_message: donorInfo.message || "",
          donation_type: "website",
        },
      },
      invoice_creation: {
        enabled: true,
        invoice_data: {
          description: "Donation Receipt - Between Cultures Foundation",
          metadata: {
            charity_registration: "CRA Registration Number", // Add your actual CRA number
            tax_receipt: "true",
          },
        },
      },
    });

    console.log("Donation session created:", {
      sessionId: session.id,
      amount: amount / 100,
      currency: currency.toUpperCase(),
      donor: donorInfo.email,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({
      sessionId: session.id,
      url: session.url,
    });
  } catch (error: any) {
    console.error("Stripe checkout error:", error);

    return NextResponse.json(
      {
        error: "Failed to create checkout session",
        details:
          process.env.NODE_ENV === "development" ? error.message : undefined,
      },
      { status: 500 }
    );
  }
}

// Handle GET requests to retrieve session info
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const sessionId = searchParams.get("session_id");

    if (!sessionId) {
      return NextResponse.json(
        { error: "Session ID is required" },
        { status: 400 }
      );
    }

    const session = await stripe.checkout.sessions.retrieve(sessionId);

    return NextResponse.json({
      status: session.payment_status,
      customer_email: session.customer_email,
      amount_total: session.amount_total,
      currency: session.currency,
    });
  } catch (error: any) {
    console.error("Error retrieving session:", error);

    return NextResponse.json(
      { error: "Failed to retrieve session" },
      { status: 500 }
    );
  }
}
