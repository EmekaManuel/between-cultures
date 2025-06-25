// components/checkoutWizard.tsx

"use client";

import { useCartStore } from "@/store/store";
import {
  CardElement,
  Elements,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { CreditCard, MapPin, User, X } from "lucide-react";
import React, { useState } from "react";

// Make sure to call loadStripe outside of a component's render to avoid
// recreating the Stripe object on every render.
const stripePromise = loadStripe(
  "sk_test_51RamQkQNZzSzVMiKRuP9GfvKdJHCGD0rjRmnwf3E8L5T8TrilhZOT4x7jsazk4RXMz0CukRJ9FvFtI4QQAMIwZpe004L6M1UIY"!
);

interface CheckoutFormProps {
  onClose: () => void;
}

const CheckoutForm: React.FC<CheckoutFormProps> = ({ onClose }) => {
  const stripe = useStripe();
  const elements = useElements();
  const { items, getTotalPrice, clearCart } = useCartStore();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [step, setStep] = useState(1);

  // Form state
  const [customerInfo, setCustomerInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const [shippingInfo, setShippingInfo] = useState({
    address: "",
    city: "",
    province: "",
    postalCode: "",
    country: "Canada",
  });

  const [paymentComplete, setPaymentComplete] = useState(false);

  const handleCustomerInfoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (customerInfo.firstName && customerInfo.lastName && customerInfo.email) {
      setStep(2);
    }
  };

  const handleShippingInfoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      shippingInfo.address &&
      shippingInfo.city &&
      shippingInfo.province &&
      shippingInfo.postalCode
    ) {
      setStep(3);
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setLoading(true);
    setError(null);

    const cardElement = elements.getElement(CardElement);
    if (!cardElement) {
      setError("Card element not found");
      setLoading(false);
      return;
    }

    try {
      // Create payment intent
      const response = await fetch("/api/create-payment-intent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          items,
          customerInfo,
          shippingInfo,
          amount: Math.round(getTotalPrice() * 100), // Convert to cents
        }),
      });

      const { clientSecret, error: apiError } = await response.json();

      if (apiError) {
        setError(apiError);
        setLoading(false);
        return;
      }

      // Confirm payment
      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: cardElement,
          billing_details: {
            name: `${customerInfo.firstName} ${customerInfo.lastName}`,
            email: customerInfo.email,
            phone: customerInfo.phone,
            address: {
              line1: shippingInfo.address,
              city: shippingInfo.city,
              state: shippingInfo.province,
              postal_code: shippingInfo.postalCode,
              country: "CA",
            },
          },
        },
      });

      if (result.error) {
        setError(result.error.message || "Payment failed");
      } else {
        // Payment succeeded
        setPaymentComplete(true);
        clearCart();
        setTimeout(() => {
          onClose();
        }, 3000);
      }
    } catch (err) {
      setError("An unexpected error occurred");
      console.log(err);
    }

    setLoading(false);
  };

  if (paymentComplete) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg
            className="w-8 h-8 text-green-600"
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
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">
          Payment Successful!
        </h3>
        <p className="text-gray-600">
          Thank you for your order. You&#39;ll receive a confirmation email
          shortly.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <span
            className={`text-sm ${
              step >= 1 ? "text-blue-600" : "text-gray-400"
            }`}
          >
            Customer Info
          </span>
          <span
            className={`text-sm ${
              step >= 2 ? "text-blue-600" : "text-gray-400"
            }`}
          >
            Shipping
          </span>
          <span
            className={`text-sm ${
              step >= 3 ? "text-blue-600" : "text-gray-400"
            }`}
          >
            Payment
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${(step / 3) * 100}%` }}
          />
        </div>
      </div>

      {/* Step 1: Customer Information */}
      {step === 1 && (
        <form onSubmit={handleCustomerInfoSubmit} className="space-y-4">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <User className="w-5 h-5" />
            Customer Information
          </h3>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                First Name
              </label>
              <input
                type="text"
                required
                value={customerInfo.firstName}
                onChange={(e) =>
                  setCustomerInfo({
                    ...customerInfo,
                    firstName: e.target.value,
                  })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Last Name
              </label>
              <input
                type="text"
                required
                value={customerInfo.lastName}
                onChange={(e) =>
                  setCustomerInfo({ ...customerInfo, lastName: e.target.value })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              required
              value={customerInfo.email}
              onChange={(e) =>
                setCustomerInfo({ ...customerInfo, email: e.target.value })
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone (Optional)
            </label>
            <input
              type="tel"
              value={customerInfo.phone}
              onChange={(e) =>
                setCustomerInfo({ ...customerInfo, phone: e.target.value })
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
          >
            Continue to Shipping
          </button>
        </form>
      )}

      {/* Step 2: Shipping Information */}
      {step === 2 && (
        <form onSubmit={handleShippingInfoSubmit} className="space-y-4">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <MapPin className="w-5 h-5" />
            Shipping Address
          </h3>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Street Address
            </label>
            <input
              type="text"
              required
              value={shippingInfo.address}
              onChange={(e) =>
                setShippingInfo({ ...shippingInfo, address: e.target.value })
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                City
              </label>
              <input
                type="text"
                required
                value={shippingInfo.city}
                onChange={(e) =>
                  setShippingInfo({ ...shippingInfo, city: e.target.value })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Province
              </label>
              <select
                required
                value={shippingInfo.province}
                onChange={(e) =>
                  setShippingInfo({ ...shippingInfo, province: e.target.value })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select Province</option>
                <option value="AB">Alberta</option>
                <option value="BC">British Columbia</option>
                <option value="MB">Manitoba</option>
                <option value="NB">New Brunswick</option>
                <option value="NL">Newfoundland and Labrador</option>
                <option value="NS">Nova Scotia</option>
                <option value="ON">Ontario</option>
                <option value="PE">Prince Edward Island</option>
                <option value="QC">Quebec</option>
                <option value="SK">Saskatchewan</option>
                <option value="NT">Northwest Territories</option>
                <option value="NU">Nunavut</option>
                <option value="YT">Yukon</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Postal Code
            </label>
            <input
              type="text"
              required
              value={shippingInfo.postalCode}
              onChange={(e) =>
                setShippingInfo({ ...shippingInfo, postalCode: e.target.value })
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex gap-4">
            <button
              type="button"
              onClick={() => setStep(1)}
              className="flex-1 bg-gray-200 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-300 transition-colors"
            >
              Back
            </button>
            <button
              type="submit"
              className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
            >
              Continue to Payment
            </button>
          </div>
        </form>
      )}

      {/* Step 3: Payment */}
      {step === 3 && (
        <form onSubmit={handleSubmit} className="space-y-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <CreditCard className="w-5 h-5" />
            Payment Information
          </h3>

          {/* Order Summary */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-medium mb-2">Order Summary</h4>
            <div className="space-y-1 text-sm">
              {items.map((item) => (
                <div
                  key={`${item.id}-${item.selectedSize}-${item.selectedColor}`}
                  className="flex justify-between"
                >
                  <span>
                    {item.name} x {item.quantity}
                  </span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
              <div className="border-t pt-1 font-bold flex justify-between">
                <span>Total:</span>
                <span>${getTotalPrice().toFixed(2)} CAD</span>
              </div>
            </div>
          </div>

          {/* Card Element */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Card Details
            </label>
            <div className="p-4 border border-gray-300 rounded-md">
              <CardElement
                options={{
                  style: {
                    base: {
                      fontSize: "16px",
                      color: "#424770",
                      "::placeholder": {
                        color: "#aab7c4",
                      },
                    },
                  },
                }}
              />
            </div>
          </div>

          {error && (
            <div className="text-red-600 text-sm bg-red-50 p-3 rounded-md">
              {error}
            </div>
          )}

          <div className="flex gap-4">
            <button
              type="button"
              onClick={() => setStep(2)}
              disabled={loading}
              className="flex-1 bg-gray-200 text-gray-800 py-3 px-4 rounded-md hover:bg-gray-300 transition-colors disabled:opacity-50"
            >
              Back
            </button>
            <button
              type="submit"
              disabled={!stripe || loading}
              className="flex-1 bg-green-600 text-white py-3 px-4 rounded-md hover:bg-green-700 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                  Processing...
                </>
              ) : (
                <>
                  <CreditCard className="w-4 h-4" />
                  Pay ${getTotalPrice().toFixed(2)} CAD
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

interface StripeCheckoutWizardProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StripeCheckoutWizard: React.FC<StripeCheckoutWizardProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-[60] flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-800">Checkout</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="p-6">
          <Elements stripe={stripePromise}>
            <CheckoutForm onClose={onClose} />
          </Elements>
        </div>
      </div>
    </div>
  );
};
