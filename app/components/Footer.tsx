import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 mt-auto text-center">
      <div className="py-16 px-6 max-w-7xl mx-auto">
        {/* Single Cohesive Closing Line */}
        <div className="mb-12">
          <h3 className="text-3xl md:text-4xl font-serif text-white font-bold mb-3">
            Diagnostic Kart is not just a lab.
          </h3>
          <p className="text-sm md:text-base text-blue-400 font-bold uppercase tracking-widest">
            It’s a smarter way to understand health.
          </p>
        </div>

        {/* Standard Footer Bottom */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3 opacity-80 hover:opacity-100 transition-opacity">
            <Image
              src="/logo.png"
              alt="Diagnostic Kart Logo"
              width={32}
              height={32}
              className="object-contain brightness-0 invert"
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
