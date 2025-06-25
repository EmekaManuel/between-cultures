"use client";

// components/Cart.tsx

import React, { useState } from "react";
import { ShoppingCart, Plus, Minus, X } from "lucide-react";
import { useCartStore } from "@/store/store";
import { CheckoutWizard } from "./checkoutWizard";

export const Cart: React.FC = () => {
  const {
    items,
    isOpen,
    removeItem,
    updateQuantity,
    toggleCart,
    getTotalPrice,
  } = useCartStore();
  const [showCheckout, setShowCheckout] = useState(false);

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
                      {/* Show unit price and total for this line item */}
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
                    Total: ${getTotalPrice().toFixed(2)}
                  </span>
                </div>
                <button
                  onClick={() => setShowCheckout(true)}
                  className="w-full bg-gradient-to-r from-green-400 to-purple-400 text-white py-3 px-4 rounded-lg font-medium hover:from-green-500 hover:to-purple-500 transition-all duration-200"
                >
                  Proceed to Checkout
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      {showCheckout && (
        <CheckoutWizard onClose={() => setShowCheckout(false)} />
      )}
    </>
  );
};
