"use client";

import React, { useState } from "react";
import { ShoppingCart, Check } from "lucide-react";
import { useCartStore } from "@/store/store";
import { Product } from "@/types/store";

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [selectedSize, setSelectedSize] = useState<string>(
    product.sizes?.[0] || ""
  );
  const [selectedColor, setSelectedColor] = useState<string>(
    product.colors?.[0] || ""
  );
  const addItem = useCartStore((state) => state.addItem);
  const items = useCartStore((state) => state.items);

  // Check if the current product with selected size/color is in cart
  const isInCart = items.some(
    (item) =>
      item.id === product.id &&
      item.selectedSize === selectedSize &&
      item.selectedColor === selectedColor
  );

  const handleAddToCart = () => {
    addItem(product, selectedSize, selectedColor);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden border border-gray-100 flex flex-col h-full">
      {/* Image Section */}
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-40 object-contain hover:scale-105 transition-transform duration-200"
        />
        <div className="absolute top-2 right-2 bg-white/95 text-gray-900 px-2 py-1 rounded text-xs font-semibold">
          ${product.price}
        </div>
      </div>

      {/* Content Section - Flex grow to push button to bottom */}
      <div className="p-4 flex flex-col flex-grow">
        {/* Category & Title */}
        <div className="mb-3">
          <span className="inline-block bg-green-100 text-green-700 px-2 py-0.5 rounded text-xs font-medium mb-1">
            {product.category}
          </span>
          <h3 className="font-semibold text-gray-900 text-sm leading-tight">
            {product.name}
          </h3>
        </div>

        {/* Options - Only show if available */}
        {(product.sizes || product.colors) && (
          <div className="space-y-2 mb-3">
            {product.sizes && (
              <select
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
                className="w-full border border-gray-200 rounded px-2 py-1 text-xs focus:ring-1 focus:ring-green-500 focus:border-green-500"
              >
                {product.sizes.map((size) => (
                  <option key={size} value={size}>
                    Size: {size}
                  </option>
                ))}
              </select>
            )}

            {product.colors && (
              <select
                value={selectedColor}
                onChange={(e) => setSelectedColor(e.target.value)}
                className="w-full border border-gray-200 rounded px-2 py-1 text-xs focus:ring-1 focus:ring-green-500 focus:border-green-500"
              >
                {product.colors.map((color) => (
                  <option key={color} value={color}>
                    Color: {color}
                  </option>
                ))}
              </select>
            )}
          </div>
        )}

        {/* Spacer to push button to bottom */}
        <div className="flex-grow"></div>

        {/* Add to Cart Button - Changes based on cart state */}
        <button
          onClick={handleAddToCart}
          className={`w-full py-2 px-3 rounded font-medium transition-colors duration-200 flex items-center justify-center gap-1.5 text-sm mt-auto ${
            isInCart
              ? "bg-gray-100 text-gray-700 border border-gray-300 hover:bg-gray-200"
              : "bg-green-600 text-white hover:bg-green-700"
          }`}
        >
          {isInCart ? (
            <>
              <Check className="w-3.5 h-3.5" />
              Added to Cart
            </>
          ) : (
            <>
              <ShoppingCart className="w-3.5 h-3.5" />
              Add to Cart
            </>
          )}
        </button>
      </div>
    </div>
  );
};
