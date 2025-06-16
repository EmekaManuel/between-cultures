"use client";
import React, { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import SvgLogo from "./svgLogo";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const pathname = usePathname();
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About us", href: "/about" },
    { name: "What We Do", href: "/services" },
    { name: "Our Team", href: "/team" },
    { name: "Contact", href: "/contact" },
  ];

  const dropdownItems = [
    { name: "Media", href: "/media" },
    { name: "FAQ", href: "/faq" },
    { name: "Resources", href: "/resources" },
  ];

  const isActive = (href: string): boolean => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  // Check if any dropdown item is active
  const isDropdownActive = () => {
    return dropdownItems.some((item) => isActive(item.href));
  };

  // Improved dropdown hover handlers with delay
  const handleDropdownMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    setIsDropdownOpen(true);
  };

  const handleDropdownMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 150); // 150ms delay before closing
  };

  // Close mobile menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
        setIsDropdownOpen(false);
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

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleClickOutside = (event: any) => {
      if (!event.target.closest(".dropdown-container")) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
    };
  }, []);

  return (
    <>
      <nav className="bg-white border-b border-gray-200 relative z-50">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="text-xl font-semibold text-gray-900">
                <SvgLogo />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-8">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`px-3 py-2 text-sm font-medium transition-colors duration-200 relative ${
                      isActive(item.href)
                        ? "text-[#3d008d] font-semibold"
                        : "text-gray-700 hover:text-gray-900"
                    }`}
                  >
                    {item.name}
                    {isActive(item.href) && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#3d008d] rounded-full"></div>
                    )}
                  </a>
                ))}

                {/* Desktop Dropdown */}
                <div
                  className="relative dropdown-container"
                  onMouseEnter={handleDropdownMouseEnter}
                  onMouseLeave={handleDropdownMouseLeave}
                >
                  <button
                    className={`flex items-center space-x-1 px-3 py-2 text-sm font-medium transition-colors duration-200 relative ${
                      isDropdownActive()
                        ? "text-[#a8c499] font-semibold"
                        : "text-gray-700 hover:text-gray-900"
                    }`}
                  >
                    <span>More</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        isDropdownOpen ? "rotate-180" : ""
                      }`}
                    />
                    {isDropdownActive() && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#a8c499] rounded-full"></div>
                    )}
                  </button>

                  {/* Desktop Dropdown Menu - Removed gap and improved positioning */}
                  <div
                    className={`absolute top-full left-0 w-48 bg-white border border-gray-200 rounded-lg shadow-lg transform transition-all duration-200 origin-top ${
                      isDropdownOpen
                        ? "opacity-100 scale-100 translate-y-0"
                        : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                    }`}
                    style={{
                      marginTop: "2px", // Minimal gap to prevent flickering
                    }}
                  >
                    <div className="py-2">
                      {dropdownItems.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={`block px-4 py-2 text-sm transition-colors duration-200 ${
                            isActive(item.href)
                              ? "text-[#a8c499] bg-[#a8c499]/10 font-medium"
                              : "text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                          }`}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Donate Button */}
                <a
                  href="/donate"
                  className="bg-gradient-to-r from-[#a8c499] to-[#8e83bd] text-white px-6 py-2 rounded-md text-sm font-medium hover:opacity-90 transition-opacity duration-200 shadow-sm"
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

        {/* Mobile Navigation Menu */}
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
                  className={`block px-3 py-3 text-base font-medium transition-all duration-200 rounded-md transform relative ${
                    isActive(item.href)
                      ? "text-[#a8c499] bg-[#a8c499]/10 font-semibold"
                      : "text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  } ${
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
                  {isActive(item.href) && (
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#a8c499] rounded-r-full"></div>
                  )}
                </a>
              ))}

              {/* Mobile Dropdown Section */}
              <div className="pt-2">
                <button
                  onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
                  className={`flex items-center justify-between w-full px-3 py-3 text-base font-medium transition-all duration-200 rounded-md transform relative ${
                    isDropdownActive()
                      ? "text-[#a8c499] bg-[#a8c499]/10 font-semibold"
                      : "text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  } ${
                    isOpen
                      ? `translate-x-0 opacity-100`
                      : "translate-x-4 opacity-0"
                  }`}
                  style={{
                    transitionDelay: isOpen
                      ? `${navItems.length * 50}ms`
                      : "0ms",
                  }}
                >
                  <span>More</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      isMobileDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                  {isDropdownActive() && (
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#a8c499] rounded-r-full"></div>
                  )}
                </button>

                {/* Mobile Dropdown Items */}
                <div
                  className={`ml-4 mt-1 space-y-1 transform transition-all duration-200 ${
                    isMobileDropdownOpen
                      ? "max-h-48 opacity-100"
                      : "max-h-0 opacity-0 overflow-hidden"
                  }`}
                >
                  {dropdownItems.map((item, index) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={`block px-3 py-2 text-sm font-medium transition-all duration-200 rounded-md relative ${
                        isActive(item.href)
                          ? "text-[#a8c499] bg-[#a8c499]/10 font-semibold"
                          : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                      }`}
                      style={{
                        transitionDelay: isMobileDropdownOpen
                          ? `${index * 50}ms`
                          : "0ms",
                      }}
                      onClick={() => {
                        setIsOpen(false);
                        setIsMobileDropdownOpen(false);
                      }}
                    >
                      {item.name}
                      {isActive(item.href) && (
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#a8c499] rounded-r-full"></div>
                      )}
                    </a>
                  ))}
                </div>
              </div>

              {/* Mobile Donate Button */}
              <div className="pt-4 pb-2">
                <a
                  href="/donate"
                  className={`bg-gradient-to-r from-[#a8c499] to-[#8e83bd] text-white block text-center px-6 py-3 rounded-md text-base font-medium mx-3 hover:opacity-90 transition-all duration-200 shadow-md transform ${
                    isOpen
                      ? "translate-x-0 opacity-100"
                      : "translate-x-4 opacity-0"
                  }`}
                  style={{
                    transitionDelay: isOpen ? "300ms" : "0ms",
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
