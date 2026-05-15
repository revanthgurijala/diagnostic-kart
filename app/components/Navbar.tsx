"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Zap } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  if (pathname.startsWith("/dashboard")) return null;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between h-20 items-center">
          {/* LEFT: Logo Area */}
          <Link href="/#home" className="flex items-center gap-2">
            <Image
              src="/images/logo.png"
              alt="Diagnostic Kart Logo"
              width={40}
              height={40}
              className="object-contain"
            />
            <span className="text-2xl font-bold text-slate-900 tracking-tight">
              Diagnostic<span className="text-blue-600">Kart</span>
            </span>
          </Link>

          {/* MIDDLE: Desktop Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <Link
              href="/#home"
              className="text-slate-600 hover:text-blue-600 font-semibold transition-colors"
            >
              Home
            </Link>
            <Link
              href="/#about"
              className="text-slate-600 hover:text-blue-600 font-semibold transition-colors"
            >
              About
            </Link>
            <Link
              href="/#services"
              className="text-slate-600 hover:text-blue-600 font-semibold transition-colors"
            >
              Services
            </Link>

            <Link
              href="/#ai"
              className="text-slate-600 hover:text-blue-600 font-semibold transition-colors flex items-center gap-1"
            >
              <Zap className="w-4 h-4" /> AI Assistant
            </Link>
            <Link
              href="/blog"
              className="text-slate-600 hover:text-blue-600 font-semibold transition-colors"
            >
              Blog
            </Link>
          </div>

          {/* RIGHT: Call to Action Button */}
          <div className="hidden md:flex items-center">
            <Link
              href="/tests"
              className="bg-blue-600 text-white px-6 py-2.5 rounded-full font-bold shadow-md shadow-blue-200 hover:bg-blue-700 transition-all hover:-translate-y-0.5"
            >
              Book a Test
            </Link>
          </div>

          {/* MOBILE: Hamburger Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-600 hover:text-blue-600"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE: Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 px-6 py-4 space-y-4 shadow-lg">
          <Link
            href="/#home"
            className="block text-slate-600 font-semibold hover:text-blue-600"
          >
            Home
          </Link>
          <Link
            href="/#about"
            className="block text-slate-600 font-semibold hover:text-blue-600"
          >
            About
          </Link>
          <Link
            href="/#services"
            className="block text-slate-600 font-semibold hover:text-blue-600"
          >
            Services
          </Link>

          <Link
            href="/#ai"
            className="block text-slate-600 font-semibold hover:text-blue-600"
          >
            AI Assistant
          </Link>
          <Link
            href="/blog"
            className="block text-slate-600 font-semibold hover:text-blue-600"
          >
            Blog
          </Link>
          <Link
            href="/tests"
            className="w-full block text-center bg-blue-600 text-white px-6 py-3 rounded-xl font-bold mt-4 hover:bg-blue-700 transition-colors"
          >
            Book a Test
          </Link>
        </div>
      )}
    </nav>
  );
}
