"use client";
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About us", href: "/about" },
    { name: "What We Do", href: "/services" },
    { name: "Media", href: "/media" },
    { name: "Contact", href: "/contact" },
  ];

  // Close mobile menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      <nav className="bg-white border-b border-gray-200 relative z-50">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="text-xl font-semibold text-gray-900">
                betweencultures?
              </Link>
            </div>

            {/* Desktop Navigation - UNCHANGED */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-8">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                ))}

                {/* Donate Button */}
                <a
                  href="/donate"
                  className="bg-gray-900 text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-gray-800 transition-colors duration-200"
                >
                  Donate
                </a>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 transition-colors duration-200"
                aria-expanded={isOpen}
                aria-label="Toggle navigation menu"
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? (
                  <X className="h-6 w-6 transition-transform duration-200 rotate-0" />
                ) : (
                  <Menu className="h-6 w-6 transition-transform duration-200" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu - ENHANCED */}
        <div
          className={`md:hidden transform transition-all duration-300 ease-in-out ${
            isOpen
              ? "h-full opacity-100 translate-y-0"
              : "max-h-0 opacity-0 -translate-y-2"
          } overflow-hidden`}
        >
          <div className="bg-white border-t border-gray-200 shadow-lg relative z-50">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`text-gray-700 hover:text-gray-900 hover:bg-gray-50 block px-3 py-3 text-base font-medium transition-all duration-200 rounded-md transform ${
                    isOpen
                      ? `translate-x-0 opacity-100`
                      : "translate-x-4 opacity-0"
                  }`}
                  style={{
                    transitionDelay: isOpen ? `${index * 50}ms` : "0ms",
                  }}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}

              {/* Mobile Donate Button */}
              <div className="pt-4 pb-2">
                <a
                  href="/donate"
                  className={`bg-gray-900 text-white block text-center px-6 py-3 rounded-md text-base font-medium mx-3 hover:bg-gray-800 transition-all duration-200 shadow-md transform ${
                    isOpen
                      ? "translate-x-0 opacity-100"
                      : "translate-x-4 opacity-0"
                  }`}
                  style={{
                    transitionDelay: isOpen ? "250ms" : "0ms",
                  }}
                  onClick={() => setIsOpen(false)}
                >
                  Donate
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-transparent bg-opacity-25 z-30 md:hidden transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
};

export default Navigation;
