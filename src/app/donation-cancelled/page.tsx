/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";

export default function DonationCancelled() {
  const [emailSent, setEmailSent] = useState(false);
  const [showEmailCapture, setShowEmailCapture] = useState(false);
  const [email, setEmail] = useState("");
  const [emailSubmitting, setEmailSubmitting] = useState(false);
  const [sessionData, setSessionData] = useState<any>(null);

  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");

  useEffect(() => {
    // 🐛 DEBUG: Log what we're working with
    console.log("=== DONATION CANCELLED PAGE DEBUG ===");
    console.log("Session ID from URL:", sessionId);
    console.log("All URL params:", Object.fromEntries(searchParams.entries()));

    // If we have session data, try to get customer info and send cancellation emails
    if (sessionId) {
      console.log("✅ Session ID found, fetching Stripe data...");

      fetch(`/api/stripe/checkout?session_id=${sessionId}`)
        .then((res) => {
          console.log("Stripe API response status:", res.status);
          return res.json();
        })
        .then((data) => {
          console.log("Stripe session data:", data);
          setSessionData(data);

          // If we have customer email from the session, send cancellation emails
          if (data.customer_email) {
            console.log("✅ Customer email found:", data.customer_email);
            console.log(
              "Customer name:",
              data.customer_details?.name || "Not provided"
            );

            sendCancellationEmails(
              data.customer_email,
              data.customer_details?.name || "Valued Supporter"
            );
          } else {
            console.log("❌ No customer email in session data");
            console.log("Available session data keys:", Object.keys(data));
            // If no email in session, show email capture form
            setShowEmailCapture(true);
          }
        })
        .catch((error) => {
          console.error("❌ Error fetching session:", error);
          // Show email capture as fallback
          setShowEmailCapture(true);
        });
    } else {
      console.log("❌ No session ID found in URL");
      console.log("Current URL:", window.location.href);
      // No session ID, show email capture
      setShowEmailCapture(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sessionId]);

  const sendCancellationEmails = async (
    userEmail: string,
    userName: string = "Valued Supporter"
  ) => {
    console.log("🚀 Attempting to send cancellation emails...");
    console.log("Email:", userEmail);
    console.log("Name:", userName);
    console.log("Session ID:", sessionId);

    try {
      const response = await fetch("/api/donation-cancellation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: userEmail,
          name: userName,
          sessionId: sessionId || null,
          cancelledAt: new Date().toISOString(),
        }),
      });

      console.log("API response status:", response.status);
      console.log("API response headers:", response.headers);

      if (response.ok) {
        const responseData = await response.json();
        console.log("✅ API success response:", responseData);
        setEmailSent(true);
        console.log("✅ Cancellation emails sent successfully");
      } else {
        const errorData = await response.json();
        console.error("❌ API error response:", errorData);
        throw new Error(
          errorData.error || `HTTP error! status: ${response.status}`
        );
      }
    } catch (error: any) {
      console.error("❌ Failed to send cancellation emails:", error);
      console.error("Error details:", {
        message: error.message,
        stack: error.stack,
        name: error.name,
      });

      // Still show email capture if automated emails failed
      if (!sessionData?.customer_email) {
        console.log("📧 Showing email capture form as fallback");
        setShowEmailCapture(true);
      }
    }
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("📧 Manual email submit triggered");
    console.log("Email entered:", email);

    if (!email.trim()) {
      console.log("❌ Empty email, aborting");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.log("❌ Invalid email format, aborting");
      return;
    }

    console.log("✅ Email validation passed, sending...");
    setEmailSubmitting(true);
    await sendCancellationEmails(email, "Valued Supporter");
    setEmailSubmitting(false);
    setShowEmailCapture(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 py-16">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 🐛 DEBUG: Show current state */}
        {process.env.NODE_ENV === "development" && (
          <div className="mb-4 p-4 bg-gray-100 rounded-lg text-xs">
            <h4 className="font-bold">Debug Info:</h4>
            <p>Session ID: {sessionId || "None"}</p>
            <p>Email Sent: {emailSent ? "Yes" : "No"}</p>
            <p>Show Email Capture: {showEmailCapture ? "Yes" : "No"}</p>
            <p>Session Data: {sessionData ? "Loaded" : "None"}</p>
          </div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-orange-400 to-red-400 px-8 py-12 text-center">
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
                className="w-10 h-10 text-orange-500"
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

          {/* Email Status or Capture */}
          {emailSent && (
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
                    We&#39;ve sent you some helpful information about other ways
                    to support our mission!
                  </p>
                </div>
              </div>
            </div>
          )}

          {showEmailCapture && !emailSent && (
            <div className="mx-8 mt-6 p-6 bg-blue-50 border border-blue-200 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">
                Stay Connected with Our Mission
              </h3>
              <p className="text-blue-800 mb-4 text-sm">
                Even if you can&#39;t donate today, we&#39;d love to keep you
                updated on our impact and other ways you can help immigrant
                families.
              </p>

              <form onSubmit={handleEmailSubmit} className="flex gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  disabled={emailSubmitting}
                />
                <button
                  type="submit"
                  disabled={emailSubmitting || !email.trim()}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {emailSubmitting ? "..." : "Send Info"}
                </button>
              </form>
            </div>
          )}

          {/* Content */}
          <div className="px-8 py-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-center space-y-6"
            >
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  We Understand
                </h2>
                <p className="text-gray-600 mb-6">
                  Thank you for considering a donation to Between Cultures
                  Foundation. Your support means the world to immigrant families
                  in our community.
                </p>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="font-semibold text-blue-800 mb-3">
                  There are other ways to help:
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div className="text-blue-700">
                    <div className="font-medium mb-1">🤝 Volunteer with us</div>
                    <div>Share your skills and time</div>
                  </div>
                  <div className="text-blue-700">
                    <div className="font-medium mb-1">📢 Spread the word</div>
                    <div>Tell others about our mission</div>
                  </div>
                  <div className="text-blue-700">
                    <div className="font-medium mb-1">
                      🌍 Cultural ambassador
                    </div>
                    <div>Share your heritage with others</div>
                  </div>
                  <div className="text-blue-700">
                    <div className="font-medium mb-1">🤝 Partner with us</div>
                    <div>Collaborate on initiatives</div>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="font-semibold text-green-800 mb-3">
                  Ready to try again?
                </h3>
                <p className="text-green-700 text-sm mb-4">
                  Even a small donation can make a big difference. Every
                  contribution helps immigrant families feel more at home in
                  their new communities.
                </p>
                <div className="text-center">
                  <span className="text-2xl font-bold text-[#a8c499]">$25</span>
                  <span className="text-green-600 ml-2">
                    can support a family workshop
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-center pt-8 space-y-4"
            >
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/donate"
                  className="bg-gradient-to-r from-[#a8c499] to-[#a097d1] text-white px-6 py-3 rounded-lg font-semibold hover:from-[#96b085] hover:to-[#8e83bd] transition-all duration-200"
                >
                  Try Donation Again
                </Link>
                <Link
                  href="/volunteer"
                  className="border-2 border-[#a8c499] text-[#a8c499] px-6 py-3 rounded-lg font-semibold hover:bg-[#a8c499] hover:text-white transition-all duration-200"
                >
                  Learn About Volunteering
                </Link>
              </div>

              <Link
                href="/"
                className="inline-block text-gray-600 hover:text-[#a8c499] transition-colors underline"
              >
                Return to Homepage
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Alternative Support Options */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="bg-white rounded-lg p-6 shadow-md text-center">
            <div className="text-3xl mb-3">📧</div>
            <h4 className="font-semibold text-gray-900 mb-2">Stay Updated</h4>
            <p className="text-sm text-gray-600 mb-4">
              Get our newsletter with impact stories
            </p>
            <Link
              href="/newsletter"
              className="text-[#a8c499] hover:text-[#96b085] font-medium text-sm transition-colors"
            >
              Subscribe →
            </Link>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md text-center">
            <div className="text-3xl mb-3">💬</div>
            <h4 className="font-semibold text-gray-900 mb-2">Get in Touch</h4>
            <p className="text-sm text-gray-600 mb-4">
              Have questions about our work?
            </p>
            <Link
              href="/contact"
              className="text-[#a8c499] hover:text-[#96b085] font-medium text-sm transition-colors"
            >
              Contact Us →
            </Link>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md text-center">
            <div className="text-3xl mb-3">🌟</div>
            <h4 className="font-semibold text-gray-900 mb-2">Follow Us</h4>
            <p className="text-sm text-gray-600 mb-4">
              See our impact on social media
            </p>
            <div className="flex justify-center space-x-3">
              <a
                href="#"
                className="text-[#a8c499] hover:text-[#96b085] transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.77 7.46H15.5v-1.9c0-.9.6-1.1 1-1.1h2.2V2.5h-3c-2.8 0-4.7 2.1-4.7 5.1v1.9h-2v2h2V19h3v-7.5h2.5l.27-2z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-[#a8c499] hover:text-[#96b085] transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
