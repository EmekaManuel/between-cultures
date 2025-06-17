/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import axios from "axios";

export default function DonationSuccess() {
  const [sessionData, setSessionData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [emailStatus, setEmailStatus] = useState<{
    sent: boolean;
    error: string | null;
  }>({ sent: false, error: null });

  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");

  const sendDonationEmails = async (donationData: any) => {
    console.log("🚀 Attempting to send donation confirmation emails...");
    console.log("Donation data:", donationData);

    try {
      const emailPayload = {
        donorEmail: donationData.customer_email,
        donorName: donationData.customer_details?.name || "Valued Donor",
        amount: (donationData.amount_total / 100).toFixed(2),
        currency: donationData.currency?.toUpperCase() || "CAD",
        sessionId: sessionId,
        paymentStatus: donationData.status,
        donationDate: new Date().toISOString(),
      };

      console.log("📧 Email payload:", emailPayload);

      const response = await axios.post(
        "/api/donation-confirmation",
        emailPayload,
        {
          timeout: 30000,
        }
      );

      console.log("✅ Email API response:", response.data);
      setEmailStatus({ sent: true, error: null });
      console.log("✅ Donation confirmation emails sent successfully");
    } catch (error: any) {
      console.error("❌ Failed to send donation emails:", error);
      console.error("Error details:", {
        status: error.response?.status,
        data: error.response?.data,
        message: error.message,
      });

      setEmailStatus({
        sent: false,
        error:
          error.response?.data?.error || "Failed to send confirmation emails",
      });
    }
  };

  useEffect(() => {
    console.log("=== DONATION SUCCESS PAGE DEBUG ===");
    console.log("Session ID from URL:", sessionId);

    if (sessionId) {
      console.log("✅ Session ID found, fetching Stripe data...");

      // Fetch session details from your API
      fetch(`/api/stripe/checkout?session_id=${sessionId}`)
        .then((res) => {
          console.log("Stripe API response status:", res.status);
          return res.json();
        })
        .then((data) => {
          console.log("📊 Session data received:", data);
          console.log("Payment status:", data.status);
          console.log("Customer email:", data.customer_email);
          console.log("Customer details:", data.customer_details);

          setSessionData(data);
          setLoading(false);

          // ✅ Fixed: Check for the correct payment status values
          if (data.status === "paid" || data.status === "complete") {
            console.log(
              "✅ Payment successful, sending confirmation emails..."
            );
            sendDonationEmails(data);
          } else {
            console.log("⚠️ Payment not completed. Status:", data.status);
            console.log("Expected: 'paid' or 'complete', got:", data.status);
          }
        })
        .catch((error) => {
          console.error("❌ Error fetching session:", error);
          setLoading(false);
        });
    } else {
      console.log("❌ No session ID found in URL");
      setLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sessionId]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-blue-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#a8c499] mx-auto mb-4"></div>
          <p className="text-gray-600">Loading your donation details...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-16">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          {/* Success Header */}
          <div className="bg-gradient-to-r from-[#a8c499] to-[#a097d1] px-8 py-12 text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                delay: 0.2,
                duration: 0.5,
                type: "spring",
                stiffness: 200,
              }}
              className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <svg
                className="w-10 h-10 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-3xl font-bold text-white mb-4"
            >
              Thank You for Your Donation!
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-white/90 text-lg"
            >
              Your generosity makes a real difference in immigrant families&#39;
              lives
            </motion.p>
          </div>

          {/* Email Status Notification */}
          {emailStatus.error && (
            <div className="mx-8 mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg
                    className="h-5 w-5 text-yellow-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-yellow-800">
                    Note: {emailStatus.error}. Don&#39;t worry - your donation
                    was processed successfully!
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Donation Details */}
          <div className="px-8 py-8">
            {sessionData && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="bg-gray-50 rounded-xl p-6 mb-8"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Donation Summary
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Amount:</span>
                    <span className="font-semibold text-gray-900">
                      {sessionData.currency?.toUpperCase()} $
                      {(sessionData.amount_total / 100).toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Status:</span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      {sessionData.status === "paid" ||
                      sessionData.status === "complete"
                        ? "Payment Successful"
                        : "Processing"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Email:</span>
                    <span className="text-gray-900">
                      {sessionData.customer_email}
                    </span>
                  </div>
                  {sessionData.customer_details?.name && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Name:</span>
                      <span className="text-gray-900">
                        {sessionData.customer_details.name}
                      </span>
                    </div>
                  )}
                </div>
              </motion.div>
            )}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="space-y-6"
            >
              <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Your Impact
                </h2>
                <p className="text-gray-600 mb-6">
                  Your donation will directly support our programs that help
                  immigrant families integrate into Canadian communities while
                  preserving their cultural heritage.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-green-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-[#a8c499] mb-2">
                    {emailStatus.sent ? "✓" : "📧"}
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Email Confirmation
                  </h4>
                  <p className="text-sm text-gray-600">
                    {emailStatus.sent
                      ? "Confirmation email sent successfully!"
                      : "Check your email for a detailed receipt"}
                  </p>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-[#a097d1] mb-2">
                    📄
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Tax Receipt
                  </h4>
                  <p className="text-sm text-gray-600">
                    Your donation is tax-deductible in Canada
                  </p>
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
                <h4 className="font-semibold text-amber-800 mb-2">
                  What&#39;s Next?
                </h4>
                <ul className="text-sm text-amber-700 space-y-1">
                  <li>
                    • You&#39;ll receive a confirmation email with your receipt
                  </li>
                  <li>
                    • We&#39;ll keep you updated on the impact of your donation
                  </li>
                  <li>• Consider following us on social media for updates</li>
                </ul>
              </div>
            </motion.div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="text-center pt-8 space-y-4"
            >
              <h3 className="text-lg font-semibold text-gray-900">
                Stay Connected
              </h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/"
                  className="bg-gradient-to-r from-[#a8c499] to-[#a097d1] text-white px-6 py-3 rounded-lg font-semibold hover:from-[#96b085] hover:to-[#8e83bd] transition-all duration-200"
                >
                  Return to Homepage
                </Link>
                <Link
                  href="/newsletter"
                  className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:border-[#a8c499] hover:text-[#a8c499] transition-all duration-200"
                >
                  Subscribe to Updates
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Social Sharing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-8"
        >
          <p className="text-gray-600 mb-4">
            Help us spread the word about our mission
          </p>
          <div className="flex justify-center space-x-4">
            {/* Add social sharing buttons here */}
            <button className="text-gray-500 hover:text-[#a8c499] transition-colors">
              <span className="sr-only">Share on Facebook</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.77 7.46H15.5v-1.9c0-.9.6-1.1 1-1.1h2.2V2.5h-3c-2.8 0-4.7 2.1-4.7 5.1v1.9h-2v2h2V19h3v-7.5h2.5l.27-2z" />
              </svg>
            </button>
            <button className="text-gray-500 hover:text-[#a8c499] transition-colors">
              <span className="sr-only">Share on Twitter</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.04-4.55 4.54 0 .36.03.7.1 1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6 1.45-.6 2.3 0 1.56.8 2.95 2 3.77-.74-.03-1.44-.23-2.05-.57v.06c0 2.2 1.56 4.03 3.64 4.44-.67.2-1.37.2-2.06.08.58 1.8 2.26 3.12 4.25 3.16C5.78 18.1 3.37 18.74 1 18.46c2 1.3 4.4 2.04 6.97 2.04 8.35 0 12.92-6.92 12.92-12.93 0-.2 0-.4-.02-.6.9-.63 1.96-1.22 2.56-2.14z" />
              </svg>
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
