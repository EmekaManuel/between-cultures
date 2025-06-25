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
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100">
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full text-sm font-semibold shadow-md">
          ${product.price}
        </div>
      </div>

      <div className="p-6">
        <div className="mb-2">
          <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium mb-2">
            {product.category}
          </span>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {product.description}
        </p>

        {product.sizes && (
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Size:
            </label>
            <select
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
            >
              {product.sizes.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </div>
        )}

        {product.colors && (
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Color:
            </label>
            <select
              value={selectedColor}
              onChange={(e) => setSelectedColor(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
            >
              {product.colors.map((color) => (
                <option key={color} value={color}>
                  {color}
                </option>
              ))}
            </select>
          </div>
        )}

        <button
          onClick={handleAddToCart}
          className="w-full bg-green-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-green-700 transition-colors duration-200 flex items-center justify-center gap-2 shadow-sm"
        >
          <ShoppingCart className="w-4 h-4" />
          Add to Cart
        </button>
      </div>
    </div>
  );
};
