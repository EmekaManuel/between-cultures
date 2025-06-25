"use client";
import React, { useState } from "react";
import { X, User, MapPin, CreditCard, CheckCircle } from "lucide-react";
import { useCartStore } from "@/store/store";

interface CheckoutWizardProps {
  onClose: () => void;
}

export const CheckoutWizard: React.FC<CheckoutWizardProps> = ({ onClose }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    province: "",
    postalCode: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    nameOnCard: "",
  });
  const { items, getTotalPrice, clearCart } = useCartStore();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    setStep(4);
    setTimeout(() => {
      clearCart();
      onClose();
    }, 3000);
  };

  const provinces = [
    "Alberta",
    "British Columbia",
    "Manitoba",
    "New Brunswick",
    "Newfoundland and Labrador",
    "Northwest Territories",
    "Nova Scotia",
    "Nunavut",
    "Ontario",
    "Prince Edward Island",
    "Quebec",
    "Saskatchewan",
    "Yukon",
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-60 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
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

          <div className="flex items-center justify-center mt-6 space-x-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center font-medium ${
                    step >= i
                      ? "bg-green-400 text-white"
                      : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {step > i ? <CheckCircle className="w-5 h-5" /> : i}
                </div>
                {i < 4 && (
                  <div
                    className={`w-8 h-1 ${
                      step > i ? "bg-green-400" : "bg-gray-200"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="p-6">
          {step === 1 && (
            <div>
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <User className="w-5 h-5" />
                Contact Information
              </h3>
              <div className="space-y-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-400 focus:border-transparent"
                  required
                />
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-400 focus:border-transparent"
                    required
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-400 focus:border-transparent"
                    required
                  />
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                Shipping Address
              </h3>
              <div className="space-y-4">
                <input
                  type="text"
                  name="address"
                  placeholder="Street address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-400 focus:border-transparent"
                  required
                />
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-400 focus:border-transparent"
                    required
                  />
                  <select
                    name="province"
                    value={formData.province}
                    onChange={handleInputChange}
                    className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-400 focus:border-transparent"
                    required
                  >
                    <option value="">Select Province</option>
                    {provinces.map((province) => (
                      <option key={province} value={province}>
                        {province}
                      </option>
                    ))}
                  </select>
                </div>
                <input
                  type="text"
                  name="postalCode"
                  placeholder="Postal Code"
                  value={formData.postalCode}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-400 focus:border-transparent"
                  required
                />
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <CreditCard className="w-5 h-5" />
                Payment Information
              </h3>
              <div className="space-y-4">
                <input
                  type="text"
                  name="nameOnCard"
                  placeholder="Name on card"
                  value={formData.nameOnCard}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-400 focus:border-transparent"
                  required
                />
                <input
                  type="text"
                  name="cardNumber"
                  placeholder="Card number"
                  value={formData.cardNumber}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-400 focus:border-transparent"
                  required
                />
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="expiryDate"
                    placeholder="MM/YY"
                    value={formData.expiryDate}
                    onChange={handleInputChange}
                    className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-400 focus:border-transparent"
                    required
                  />
                  <input
                    type="text"
                    name="cvv"
                    placeholder="CVV"
                    value={formData.cvv}
                    onChange={handleInputChange}
                    className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-400 focus:border-transparent"
                    required
                  />
                </div>

                <div className="bg-gray-50 rounded-lg p-4 mt-6">
                  <h4 className="font-semibold mb-3">Order Summary</h4>
                  {items.map((item) => (
                    <div
                      key={`${item.id}-${item.selectedSize}-${item.selectedColor}`}
                      className="flex justify-between items-center py-2"
                    >
                      <span className="text-sm">
                        {item.name} x{item.quantity}
                      </span>
                      <span className="font-medium">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  ))}
                  <div className="border-t pt-2 mt-2">
                    <div className="flex justify-between items-center font-bold">
                      <span>Total</span>
                      <span>${getTotalPrice().toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="text-center py-12">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Order Confirmed!
              </h3>
              <p className="text-gray-600 mb-4">
                Thank you for supporting the Between Cultures Foundation.
              </p>
              <p className="text-sm text-gray-500">
                You will receive an email confirmation shortly.
              </p>
            </div>
          )}

          {step < 4 && (
            <div className="flex justify-between mt-8">
              <button
                onClick={() => (step > 1 ? setStep(step - 1) : onClose())}
                className="px-6 py-3 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition-colors"
              >
                {step === 1 ? "Cancel" : "Back"}
              </button>
              <button
                onClick={() => (step < 3 ? setStep(step + 1) : handleSubmit())}
                className="px-6 py-3 bg-gradient-to-r from-green-400 to-purple-400 text-white rounded-lg font-medium hover:from-green-500 hover:to-purple-500 transition-all duration-200"
              >
                {step === 3 ? "Complete Order" : "Continue"}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
