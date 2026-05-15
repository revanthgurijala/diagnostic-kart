"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  if (pathname.startsWith("/dashboard")) return null;
  return (
    <footer className="bg-slate-950 border-t border-slate-900 mt-auto text-center">
      {/* Reduced py-16 to py-8 md:py-10 to shrink the outer gap */}
      <div className="py-8 md:py-10 px-6 max-w-7xl mx-auto">
        {/* Single Cohesive Closing Line */}
        {/* Reduced mb-12 to mb-8 to shrink the gap below the text */}
        <div className="mb-8">
          <h3 className="text-2xl md:text-3xl font-serif text-white font-bold mb-3">
            Diagnostic Kart is not just a lab.
          </h3>
          <p className="text-sm md:text-base text-blue-400 font-bold uppercase tracking-widest">
            It’s a smarter way to understand health.
          </p>
        </div>

        {/* Standard Footer Bottom */}
        {/* Reduced pt-8 to pt-6 */}
        <div className="pt-6 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3 opacity-80 hover:opacity-100 transition-opacity">
            <Image
              src="/images/logo.png"
              alt="Diagnostic Kart Logo"
              width={32}
              height={32}
              // Removed "brightness-0 invert" so the logo renders normally
              className="object-contain"
            />
            <span className="text-xl font-black text-white tracking-tight">
              Diagnostic<span className="text-blue-500">Kart</span>
            </span>
          </div>

          <div className="text-slate-400 text-sm font-medium">
            © {new Date().getFullYear()} Diagnostic Kart. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
