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
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 right-3 bg-gradient-to-r from-green-400 to-purple-400 text-white px-2 py-1 rounded-full text-sm font-medium">
          ${product.price}
        </div>
      </div>

      <div className="p-6">
        <div className="mb-2">
          <span className="inline-block bg-gradient-to-r from-green-100 to-purple-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium mb-2">
            {product.category}
          </span>
        </div>

        <h3 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h3>
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
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-green-400 focus:border-transparent"
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
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-green-400 focus:border-transparent"
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
          className="w-full bg-gradient-to-r from-green-400 to-purple-400 text-white py-3 px-4 rounded-lg font-medium hover:from-green-500 hover:to-purple-500 transition-all duration-200 flex items-center justify-center gap-2"
        >
          <ShoppingCart className="w-4 h-4" />
          Add to Cart
        </button>
      </div>
    </div>
  );
};
