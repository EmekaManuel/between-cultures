/* eslint-disable @typescript-eslint/no-explicit-any */
// app/api/stripe-cart/route.ts
import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(
  "sk_test_51RamQkQNZzSzVMiKRuP9GfvKdJHCGD0rjRmnwf3E8L5T8TrilhZOT4x7jsazk4RXMz0CukRJ9FvFtI4QQAMIwZpe004L6M1UIY"!,
  {
    apiVersion: "2025-05-28.basil",
  }
);

// Helper function to validate and format image URL
function getValidImageUrl(imageUrl: string | undefined): string[] {
  if (!imageUrl) return [];

  try {
    // If it's already a full URL, validate it
    if (imageUrl.startsWith("http://") || imageUrl.startsWith("https://")) {
      new URL(imageUrl); // This will throw if invalid
      return [imageUrl];
    }

    // If it's a relative path, convert to full URL
    if (imageUrl.startsWith("/")) {
      const baseUrl =
        process.env.NEXT_PUBLIC_BASE_URL || "https://yoursite.com";
      const fullUrl = `${baseUrl}${imageUrl}`;
      new URL(fullUrl); // Validate the constructed URL
      return [fullUrl];
    }

    // Skip invalid URLs
    return [];
  } catch (error) {
    console.warn("Invalid image URL:", imageUrl);
    console.log(error);
    return [];
  }
}

export async function POST(request: Request) {
  try {
    const {
      items,
      customerInfo,
      successUrl,
      cancelUrl,
      currency = "cad",
    } = await request.json();

    // Validate required fields
    if (!items || items.length === 0) {
      return NextResponse.json({ error: "Cart is empty" }, { status: 400 });
    }

    if (!customerInfo?.email) {
      return NextResponse.json(
        { error: "Email address is required" },
        { status: 400 }
      );
    }

    // Convert cart items to Stripe line items
    const lineItems = items.map((item: any) => {
      // Build description with size and color info
      const description =
        [
          item.selectedSize ? `Size: ${item.selectedSize}` : "",
          item.selectedColor ? `Color: ${item.selectedColor}` : "",
        ]
          .filter(Boolean)
          .join(", ") || undefined;

      // Get valid image URLs
      const images = getValidImageUrl(item.image);

      return {
        price_data: {
          currency: currency,
          product_data: {
            name: item.name,
            description: description,
            images: images.length > 0 ? images : undefined, // Only include if we have valid images
            metadata: {
              product_id: item.id,
              size: item.selectedSize || "",
              color: item.selectedColor || "",
            },
          },
          unit_amount: Math.round(item.price * 100), // Convert to cents
        },
        quantity: item.quantity,
      };
    });

    // Calculate total for validation
    const totalAmount = items.reduce(
      (sum: number, item: any) => sum + item.price * item.quantity,
      0
    );

    if (totalAmount < 0.5) {
      return NextResponse.json(
        { error: "Minimum order amount is $0.50 CAD" },
        { status: 400 }
      );
    }

    // Create Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      // ✅ SUCCESS URL: Stripe automatically appends session_id
      success_url:
        successUrl +
        (successUrl.includes("?") ? "&" : "?") +
        "session_id={CHECKOUT_SESSION_ID}",
      // ✅ CANCEL URL: Manually append session_id placeholder
      cancel_url:
        cancelUrl +
        (cancelUrl.includes("?") ? "&" : "?") +
        "session_id={CHECKOUT_SESSION_ID}",
      customer_email: customerInfo.email,
      // Collect shipping address
      shipping_address_collection: {
        allowed_countries: ["CA"], // Canadian shipping only
      },
      // Phone number collection
      phone_number_collection: {
        enabled: true,
      },
      metadata: {
        customer_name: customerInfo.name || "",
        customer_email: customerInfo.email,
        customer_phone: customerInfo.phone || "",
        order_type: "ecommerce",
        currency: currency,
        item_count: items.length.toString(),
        total_amount: totalAmount.toFixed(2),
      },
      payment_intent_data: {
        metadata: {
          customer_name: customerInfo.name || "",
          customer_email: customerInfo.email,
          customer_phone: customerInfo.phone || "",
          order_type: "ecommerce",
          order_items: JSON.stringify(
            items.map((item: any) => ({
              id: item.id,
              name: item.name,
              quantity: item.quantity,
              price: item.price,
              size: item.selectedSize,
              color: item.selectedColor,
            }))
          ),
        },
      },
      // Enable automatic tax calculation if configured
      automatic_tax: {
        enabled: false, // Set to true if you have tax settings configured
      },
      // Create invoice for record keeping
      invoice_creation: {
        enabled: true,
        invoice_data: {
          description: "Order from Your Store",
          metadata: {
            order_type: "ecommerce",
            customer_email: customerInfo.email,
          },
        },
      },
    });

    console.log("Cart checkout session created:", {
      sessionId: session.id,
      totalAmount: totalAmount,
      currency: currency.toUpperCase(),
      customer: customerInfo.email,
      itemCount: items.length,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({
      sessionId: session.id,
      url: session.url,
    });
  } catch (error: any) {
    console.error("Stripe cart checkout error:", error);

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

    const session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ["customer_details", "line_items", "shipping_details"],
    });

    return NextResponse.json({
      status: session.payment_status,
      customer_email: session.customer_email,
      customer_details: session.customer_details,
      // shipping_details: session.shipping_details,
      amount_total: session.amount_total,
      currency: session.currency,
      metadata: session.metadata,
      line_items: session.line_items,
    });
  } catch (error: any) {
    console.error("Error retrieving cart session:", error);

    return NextResponse.json(
      { error: "Failed to retrieve session" },
      { status: 500 }
    );
  }
}
