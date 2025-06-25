"use client";
// pages/shop/index.tsx (Main Shop Page)
import React, { useState } from "react";
import { ShoppingCart, Package } from "lucide-react";
import { products } from "@/data";
import { useCartStore } from "@/store/store";
import { ProductCard } from "@/components/store/productCard";
import { Cart } from "@/components/store/cart";

const ShopPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const { toggleCart, getTotalItems } = useCartStore();

  const categories = [
    "All",
    ...Array.from(new Set(products.map((p) => p.category))),
  ];
  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-purple-600 bg-clip-text text-transparent">
                BC Foundation Shop
              </h1>
              <p className="text-gray-600 mt-1">
                Supporting immigrant families through every purchase
              </p>
            </div>

            <button
              onClick={toggleCart}
              className="relative bg-gradient-to-r from-green-400 to-purple-400 text-white p-3 rounded-full hover:from-green-500 hover:to-purple-500 transition-all duration-200 shadow-lg"
            >
              <ShoppingCart className="w-6 h-6" />
              {getTotalItems() > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold">
                  {getTotalItems()}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Category Filter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap gap-3 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-green-400 to-purple-400 text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Mission Statement */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <div className="text-center">
            <Package className="w-12 h-12 text-green-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Every Purchase Makes a Difference
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              When you shop with the Between Cultures Foundation, you&#39;re not
              just buying quality merchandise – you&#39;re investing in programs
              that empower immigrant families, support culturally responsive
              childcare, and build stronger, more inclusive communities across
              Canada.
            </p>
          </div>
        </div>
      </div>

      <Cart />
    </div>
  );
};

export default ShopPage;
