"use client";
// pages/shop/index.tsx (Main Shop Page)
import React, { useState } from "react";
import { ShoppingCart, Package } from "lucide-react";
import Link from "next/link";
import { products } from "@/data";
import { useCartStore } from "@/store/store";
import { ProductCard } from "@/components/store/productCard";
import { Cart } from "@/components/store/cart";
import SvgLogo from "../../components/svgLogo";

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
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-xl font-semibold text-gray-900">
              <SvgLogo />
            </Link>

            <button
              onClick={toggleCart}
              className="relative bg-green-600 text-white p-3 rounded-lg hover:bg-green-700 transition-colors duration-200 shadow-md"
            >
              <ShoppingCart className="w-6 h-6" />
              {getTotalItems() > 0 && (
                <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold">
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
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? "bg-green-600 text-white shadow-md"
                  : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200 hover:border-green-300"
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
        <div className="mt-16 bg-white rounded-xl p-8 shadow-md border border-gray-100">
          <div className="text-center">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Package className="w-6 h-6 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Every Purchase Makes a Difference
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
              When you shop with the Between Cultures Foundation, you&#39;re not
              just buying quality merchandise – you&#39;re investing in programs
              that empower immigrant families, support culturally responsive
              childcare, and build stronger, more inclusive communities across
              Canada.
            </p>

            {/* Stats or highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">100%</div>
                <div className="text-sm text-gray-600">
                  Proceeds Support Families
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">500+</div>
                <div className="text-sm text-gray-600">Families Helped</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">10+</div>
                <div className="text-sm text-gray-600">Communities Served</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Cart />
    </div>
  );
};

export default ShopPage;
