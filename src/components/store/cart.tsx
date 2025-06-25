"use client";

// components/Cart.tsx

import React, { useState } from "react";
import { ShoppingCart, Plus, Minus, X, User, Mail, Phone } from "lucide-react";
import { useCartStore } from "@/store/store";

export const Cart: React.FC = () => {
  const {
    items,
    isOpen,
    removeItem,
    updateQuantity,
    toggleCart,
    getTotalPrice,
    clearCart,
  } = useCartStore();

  const [showCheckout, setShowCheckout] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleCheckout = async () => {
    setIsProcessing(true);

    try {
      // Validate customer info
      if (!customerInfo.email || !customerInfo.name) {
        alert("Please provide your name and email address");
        setIsProcessing(false);
        return;
      }

      // Create checkout session
      const response = await fetch("/api/stripe-cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          items,
          customerInfo,
          currency: "cad",
          successUrl: `${window.location.origin}/order-success`,
          cancelUrl: `${window.location.origin}/cart`,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to create checkout session");
      }

      const { url } = await response.json();

      if (url) {
        clearCart();
        window.location.href = url;
      }
    } catch (error) {
      console.error("Checkout error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/50 bg-opacity-50 z-50"
        onClick={toggleCart}
      />
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-50 overflow-y-auto">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-gray-800">Shopping Cart</h2>
            <button
              onClick={toggleCart}
              className="text-gray-500 hover:text-gray-700"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="p-6">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <ShoppingCart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500">Your cart is empty</p>
            </div>
          ) : (
            <>
              <div className="space-y-4 mb-6">
                {items.map((item) => (
                  <div
                    key={`${item.id}-${item.selectedSize}-${item.selectedColor}`}
                    className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-800">{item.name}</h3>
                      {item.selectedSize && (
                        <p className="text-sm text-gray-600">
                          Size: {item.selectedSize}
                        </p>
                      )}
                      {item.selectedColor && (
                        <p className="text-sm text-gray-600">
                          Color: {item.selectedColor}
                        </p>
                      )}
                      <div className="flex flex-col">
                        <p className="text-sm text-gray-500">
                          ${item.price.toFixed(2)} each
                        </p>
                        <p className="font-bold text-green-600">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() =>
                          updateQuantity(
                            `${item.id}-${item.selectedSize}-${item.selectedColor}`,
                            item.quantity - 1
                          )
                        }
                        className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <button
                        onClick={() =>
                          updateQuantity(
                            `${item.id}-${item.selectedSize}-${item.selectedColor}`,
                            item.quantity + 1
                          )
                        }
                        className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                    <button
                      onClick={() =>
                        removeItem(
                          `${item.id}-${item.selectedSize}-${item.selectedColor}`
                        )
                      }
                      className="text-red-500 hover:text-red-700"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-200 pt-4">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-bold">
                    Total: ${getTotalPrice().toFixed(2)} CAD
                  </span>
                </div>

                {!showCheckout ? (
                  <button
                    onClick={() => setShowCheckout(true)}
                    className="w-full bg-green-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-green-700 transition-colors duration-200 flex items-center justify-center gap-2"
                  >
                    <ShoppingCart className="w-4 h-4" />
                    Proceed to Checkout
                  </button>
                ) : (
                  <div className="space-y-4">
                    <h3 className="font-semibold text-gray-800 flex items-center gap-2">
                      <User className="w-4 h-4" />
                      Customer Information
                    </h3>

                    <div className="space-y-3">
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <input
                          type="text"
                          placeholder="Full Name"
                          required
                          value={customerInfo.name}
                          onChange={(e) =>
                            setCustomerInfo({
                              ...customerInfo,
                              name: e.target.value,
                            })
                          }
                          className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        />
                      </div>

                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <input
                          type="email"
                          placeholder="Email Address"
                          required
                          value={customerInfo.email}
                          onChange={(e) =>
                            setCustomerInfo({
                              ...customerInfo,
                              email: e.target.value,
                            })
                          }
                          className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        />
                      </div>

                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <input
                          type="tel"
                          placeholder="Phone Number (Optional)"
                          value={customerInfo.phone}
                          onChange={(e) =>
                            setCustomerInfo({
                              ...customerInfo,
                              phone: e.target.value,
                            })
                          }
                          className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <button
                        onClick={() => setShowCheckout(false)}
                        disabled={isProcessing}
                        className="flex-1 bg-gray-200 text-gray-800 py-3 px-4 rounded-lg font-medium hover:bg-gray-300 transition-colors duration-200 disabled:opacity-50"
                      >
                        Back
                      </button>
                      <button
                        onClick={handleCheckout}
                        disabled={
                          isProcessing ||
                          !customerInfo.name ||
                          !customerInfo.email
                        }
                        className="flex-1 bg-green-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-green-700 transition-colors duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isProcessing ? (
                          <>
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                            Processing...
                          </>
                        ) : (
                          <>
                            <ShoppingCart className="w-4 h-4" />
                            Checkout ${getTotalPrice().toFixed(2)} CAD
                          </>
                        )}
                      </button>
                    </div>

                    <p className="text-xs text-gray-500 text-center">
                      You will be redirected to Stripe for secure payment
                      processing. Shipping address will be collected on the next
                      page.
                    </p>
                  </div>
                )}

                {/* Trust badges */}
                <div className="mt-3 text-center">
                  <p className="text-xs text-gray-500">
                    🔒 Secure payment powered by Stripe
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};
