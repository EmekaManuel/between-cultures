"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
// app/donation-cancelled/page.tsx
import { Suspense } from "react";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import axios from "axios";
import { Loader } from "lucide-react";

export default function DonationCancelledPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-orange-50">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-400 mx-auto mb-4"></div>
            <p className="text-gray-600">
              <Loader />
            </p>
          </div>
        </div>
      }
    >
      <DonationCancelledContent />
    </Suspense>
  );
}

function DonationCancelledContent() {
  const [sessionData, setSessionData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [showEmailCapture, setShowEmailCapture] = useState(false);
  const [emailData, setEmailData] = useState({
    email: "",
    name: "",
    message: "",
  });
  const [emailStatus, setEmailStatus] = useState<{
    sent: boolean;
    error: string | null;
  }>({ sent: false, error: null });

  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");

  const sendCancellationEmails = async (data: any) => {
    try {
      await axios.post(
        "/api/donation-cancellation",
        {
          donorEmail: data.customer_email || data.email,
          donorName:
            data.customer_details?.name || data.name || "Valued Supporter",
          amount: data.amount_total
            ? (data.amount_total / 100).toFixed(2)
            : "Unknown",
          currency: data.currency?.toUpperCase() || "CAD",
          sessionId: sessionId || "manual_capture",
          cancellationDate: new Date().toISOString(),
          message: data.message || "",
        },
        {
          timeout: 30000,
        }
      );

      setEmailStatus({ sent: true, error: null });
      console.log("Cancellation emails sent successfully");
    } catch (error: any) {
      console.error("Failed to send cancellation emails:", error);
      setEmailStatus({
        sent: false,
        error: error.response?.data?.error || "Failed to send emails",
      });
    }
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailData.email) return;

    await sendCancellationEmails(emailData);
  };

  useEffect(() => {
    console.log("=== DONATION CANCELLED DEBUG ===");
    console.log("Session ID:", sessionId);
    console.log("Show Email Capture:", !sessionId);
    console.log("Email Sent:", emailStatus.sent);
    console.log("Session Data:", sessionData || "None");

    if (sessionId) {
      // Fetch session details from Stripe
      fetch(`/api/stripe/checkout?session_id=${sessionId}`)
        .then((res) => res.json())
        .then((data) => {
          console.log("Session data received:", data);
          setSessionData(data);
          setLoading(false);

          // Send cancellation emails automatically
          sendCancellationEmails(data);
        })
        .catch((error) => {
          console.error("Error fetching session:", error);
          setLoading(false);
          setShowEmailCapture(true);
        });
    } else {
      // No session ID, show email capture form
      setLoading(false);
      setShowEmailCapture(true);
    }
  }, [sessionId]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-orange-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-400 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 py-16">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 🐛 DEBUG: Show current state */}
        {process.env.NODE_ENV === "development" && (
          <div className="mb-4 p-4 bg-gray-100 rounded-lg text-xs">
            <h4 className="font-bold">Debug Info:</h4>
            <p>Session ID: {sessionId || "None"}</p>
            <p>Show Email Capture: {showEmailCapture ? "Yes" : "No"}</p>
            <p>Email Sent: {emailStatus.sent ? "Yes" : "No"}</p>
            <p>Session Data: {sessionData ? "Yes" : "None"}</p>
          </div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          {/* Cancellation Header */}
          <div className="bg-gradient-to-r from-red-400 to-orange-400 px-8 py-12 text-center">
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
                className="w-10 h-10 text-red-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-3xl font-bold text-white mb-4"
            >
              Donation Cancelled
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-white/90 text-lg"
            >
              No payment was processed
            </motion.p>
          </div>

          {/* Email Status - Success */}
          {emailStatus.sent && (
            <div className="mx-8 mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg
                    className="h-5 w-5 text-green-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-green-800">
                    Thank you! We&#39;ve sent you information about other ways
                    to support our mission.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Email Status - Error */}
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
                  <p className="text-sm text-yellow-800">{emailStatus.error}</p>
                </div>
              </div>
            </div>
          )}

          <div className="px-8 py-8">
            {/* Email Capture Form */}
            {showEmailCapture && !emailStatus.sent && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8"
              >
                <h3 className="text-lg font-semibold text-blue-900 mb-4">
                  Stay Connected with Our Mission
                </h3>
                <p className="text-blue-700 mb-4">
                  Even if you can&#39;t donate today, we&#39;d love to keep you
                  updated on our impact and other ways you can help immigrant
                  families.
                </p>

                <form onSubmit={handleEmailSubmit} className="space-y-4">
                  <div>
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      value={emailData.email}
                      onChange={(e) =>
                        setEmailData({ ...emailData, email: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Your name (optional)"
                      value={emailData.name}
                      onChange={(e) =>
                        setEmailData({ ...emailData, name: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Any message for us? (optional)"
                      value={emailData.message}
                      onChange={(e) =>
                        setEmailData({ ...emailData, message: e.target.value })
                      }
                      rows={3}
                      className="w-full px-4 py-3 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Send Info
                  </button>
                </form>
              </motion.div>
            )}

            {/* We Understand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-center mb-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                We Understand
              </h2>
              <p className="text-gray-600 mb-6">
                Thank you for considering a donation to Between Cultures
                Foundation. Your support means the world to immigrant families
                in our community.
              </p>
            </motion.div>

            {/* Other Ways to Help */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-8"
            >
              <h3 className="text-lg font-semibold text-amber-800 mb-4">
                There are other ways to help:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <span className="text-2xl">🤝</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-amber-800">
                      Volunteer with us
                    </h4>
                    <p className="text-sm text-amber-700">
                      Share your skills and time
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <span className="text-2xl">📢</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-amber-800">
                      Spread the word
                    </h4>
                    <p className="text-sm text-amber-700">
                      Tell others about our mission
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="text-center space-y-4"
            >
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/"
                  className="bg-gradient-to-r from-red-400 to-orange-400 text-white px-6 py-3 rounded-lg font-semibold hover:from-red-500 hover:to-orange-500 transition-all duration-200"
                >
                  Return to Homepage
                </Link>
                <Link
                  href="/volunteer"
                  className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:border-red-400 hover:text-red-400 transition-all duration-200"
                >
                  Learn About Volunteering
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="text-center mt-8 text-gray-600"
        >
          <p className="mb-2">Questions? We&#39;re here to help!</p>
          <p>
            Email:{" "}
            <a
              href="mailto:info@betweencultures.ca"
              className="text-red-500 hover:underline"
            >
              info@betweencultures.ca
            </a>{" "}
            | Phone:{" "}
            <a href="tel:+14036186672" className="text-red-500 hover:underline">
              (403) 618-6672
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
