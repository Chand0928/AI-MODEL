"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Home } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Home className="h-8 w-8 text-emerald-600" />
            <span className="font-bold text-xl text-gray-900">Virtual Property Tours</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/properties">Properties</NavLink>
            <NavLink href="/contact">Contact</NavLink>
            <NavLink href="/login">Login</NavLink>
            <NavLink href="/signup">Signup</NavLink> {/* ✅ NEW */}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-3 space-y-3">
            <MobileNavLink href="/" onClick={toggleMenu}>
              Home
            </MobileNavLink>
            <MobileNavLink href="/properties" onClick={toggleMenu}>
              Properties
            </MobileNavLink>
            <MobileNavLink href="/contact" onClick={toggleMenu}>
              Contact
            </MobileNavLink>
            <MobileNavLink href="/login" onClick={toggleMenu}>
              Login
            </MobileNavLink>
            <MobileNavLink href="/signup" onClick={toggleMenu}> {/* ✅ NEW */}
              Signup
            </MobileNavLink>
          </div>
        </div>
      )}
    </nav>
  );
}

function NavLink({ href, children }) {
  return (
    <Link href={href} className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">
      {children}
    </Link>
  );
}

function MobileNavLink({ href, onClick, children }) {
  return (
    <Link
      href={href}
      className="block py-2 text-gray-700 hover:text-emerald-600 font-medium transition-colors"
      onClick={onClick}
    >
      {children}
    </Link>
  );
}
