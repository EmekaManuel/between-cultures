"use client";

import React, { useState } from "react";
import { ShoppingCart } from "lucide-react";
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

  const handleAddToCart = () => {
    addItem(product, selectedSize, selectedColor);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden border border-gray-100">
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

      {/* Content Section */}
      <div className="p-4">
        {/* Category & Title */}
        <div className="mb-3">
          <span className="inline-block bg-green-100 text-green-700 px-2 py-0.5 rounded text-xs font-medium mb-1">
            {product.category}
          </span>
          <h3 className="font-semibold text-gray-900 text-sm leading-tight">
            {product.name}
          </h3>
        </div>

        {/* Options */}
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

        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          className="w-full bg-green-600 text-white py-2 px-3 rounded font-medium hover:bg-green-700 transition-colors duration-200 flex items-center justify-center gap-1.5 text-sm"
        >
          <ShoppingCart className="w-3.5 h-3.5" />
          Add to Cart
        </button>
      </div>
    </div>
  );
};
