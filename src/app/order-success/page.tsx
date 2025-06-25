// app/order-success/page.tsx
"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle, Package, Mail, ArrowRight, Home, X } from "lucide-react";
import Link from "next/link";

interface OrderData {
  status: string;
  customer_email: string;
  customer_details: {
    name: string;
    email: string;
    phone?: string;
  };
  shipping_details?: {
    name: string;
    address: {
      line1: string;
      line2?: string;
      city: string;
      state: string;
      postal_code: string;
      country: string;
    };
  };
  amount_total: number;
  currency: string;
  metadata: {
    customer_name: string;
    item_count: string;
    total_amount: string;
  };
}

export default function OrderSuccessPage() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const [orderData, setOrderData] = useState<OrderData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (sessionId) {
      fetchOrderData(sessionId);
    } else {
      setError("No session ID found");
      setLoading(false);
    }
  }, [sessionId]);

  const fetchOrderData = async (sessionId: string) => {
    try {
      const response = await fetch(
        `/api/stripe/cart-checkout?session_id=${sessionId}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch order data");
      }

      const data = await response.json();
      setOrderData(data);
    } catch (err) {
      console.error("Error fetching order data:", err);
      setError("Failed to load order details");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading your order details...</p>
        </div>
      </div>
    );
  }

  if (error || !orderData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-50 flex items-center justify-center">
        <div className="max-w-md mx-auto text-center p-6">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <X className="w-8 h-8 text-red-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            Order Not Found
          </h1>
          <p className="text-gray-600 mb-6">
            {error || "Unable to retrieve order information"}
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Home className="w-4 h-4" />
            Return Home
          </Link>
        </div>
      </div>
    );
  }

  const formatAmount = (amount: number, currency: string) => {
    return new Intl.NumberFormat("en-CA", {
      style: "currency",
      currency: currency.toUpperCase(),
    }).format(amount / 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Success Header */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Order Confirmed!
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Thank you for your purchase! Your order has been successfully
            processed and you&#39;ll receive a confirmation email shortly.
          </p>
        </div>

        {/* Order Summary Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Order Details */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
                <Package className="w-5 h-5" />
                Order Details
              </h2>

              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-600">Order Total</span>
                  <span className="font-bold text-lg text-green-600">
                    {formatAmount(orderData.amount_total, orderData.currency)}
                  </span>
                </div>

                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-600">Items</span>
                  <span className="font-medium">
                    {orderData.metadata.item_count}{" "}
                    {parseInt(orderData.metadata.item_count) === 1
                      ? "item"
                      : "items"}
                  </span>
                </div>

                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-600">Payment Status</span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    {orderData.status === "paid" ? "Paid" : orderData.status}
                  </span>
                </div>

                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-600">Session ID</span>
                  <span className="font-mono text-sm text-gray-800">
                    #{sessionId?.slice(-8)}
                  </span>
                </div>
              </div>
            </div>

            {/* Customer & Shipping Info */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Customer Information
              </h2>

              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-600">Customer</p>
                  <p className="font-medium text-gray-800">
                    {orderData.customer_details?.name ||
                      orderData.metadata.customer_name}
                  </p>
                  <p className="text-gray-600">{orderData.customer_email}</p>
                  {orderData.customer_details?.phone && (
                    <p className="text-gray-600">
                      {orderData.customer_details.phone}
                    </p>
                  )}
                </div>

                {orderData.shipping_details && (
                  <div>
                    <p className="text-sm text-gray-600">Shipping Address</p>
                    <div className="text-gray-800">
                      <p className="font-medium">
                        {orderData.shipping_details.name}
                      </p>
                      <p>{orderData.shipping_details.address.line1}</p>
                      {orderData.shipping_details.address.line2 && (
                        <p>{orderData.shipping_details.address.line2}</p>
                      )}
                      <p>
                        {orderData.shipping_details.address.city},{" "}
                        {orderData.shipping_details.address.state}{" "}
                        {orderData.shipping_details.address.postal_code}
                      </p>
                      <p>{orderData.shipping_details.address.country}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="bg-blue-50 rounded-2xl p-8 mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            What happens next?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Mail className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-medium text-gray-800 mb-2">
                Confirmation Email
              </h3>
              <p className="text-sm text-gray-600">
                You&#39;ll receive an email confirmation with your order details
                and receipt.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Package className="w-6 h-6 text-yellow-600" />
              </div>
              <h3 className="font-medium text-gray-800 mb-2">
                Order Processing
              </h3>
              <p className="text-sm text-gray-600">
                We&#39;ll prepare your order for shipping within 1-2 business
                days.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <ArrowRight className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-medium text-gray-800 mb-2">
                Shipping Updates
              </h3>
              <p className="text-sm text-gray-600">
                You&#39;ll receive tracking information once your order ships.
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            <Home className="w-4 h-4" />
            Continue Shopping
          </Link>

          <button
            onClick={() => window.print()}
            className="inline-flex items-center justify-center gap-2 bg-gray-200 text-gray-800 px-8 py-3 rounded-lg font-medium hover:bg-gray-300 transition-colors"
          >
            Print Receipt
          </button>
        </div>

        {/* Support */}
        <div className="text-center mt-12 pt-8 border-t border-gray-200">
          <p className="text-gray-600">
            Need help with your order?{" "}
            <a
              href="/contact"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              Contact our support team
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
