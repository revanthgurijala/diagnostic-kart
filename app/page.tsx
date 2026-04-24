import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  HeartPulse,
  Stethoscope,
  Laptop,
  Tags,
  Syringe,
  ClipboardType,
  Sparkles,
  Target,
  Bell,
  ArrowRight,
  Activity,
} from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center bg-fixed w-full flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      {/* Universal Dark Glass Overlay */}
      <div className="absolute inset-0 bg-slate-950/85 backdrop-blur-md z-0"></div>

      {/* Main Content Wrapper - Centered Vertically */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto flex flex-col items-center justify-center min-h-full">
        {/* 1. Logo at the Top */}
        <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mb-6 group cursor-default">
          <div className="absolute inset-0 bg-cyan-400/20 rounded-full blur-2xl group-hover:bg-cyan-400/50 transition-all duration-700 group-hover:scale-110"></div>
          <Image
            src="/logo.png"
            alt="Diagnostic Kart Logo"
            fill
            sizes="(max-width: 640px) 128px, (max-width: 768px) 160px, 192px"
            className="object-contain drop-shadow-[0_0_20px_rgba(34,211,238,0.2)] transform transition-transform duration-700 group-hover:scale-110"
            priority
          />
        </div>

        {/* 2. Coming Soon Badge */}
        <div className="flex justify-center mb-6 w-full">
          <div className="relative inline-flex items-center justify-center max-w-full group cursor-default hover:scale-105 transition-transform duration-300">
            <span className="absolute inset-0 bg-cyan-400 blur-md opacity-40 rounded-full group-hover:opacity-70 transition-opacity"></span>
            <span className="relative bg-slate-900/80 backdrop-blur-sm border border-cyan-400/50 text-cyan-300 px-6 py-2.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-widest flex items-center gap-2 shadow-[0_0_20px_rgba(34,211,238,0.3)]">
              <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
              Smart Diagnostic Platform
            </span>
          </div>
        </div>

        {/* 3. Unified Header & Descriptions */}
        <div className="text-center mb-12 w-full max-w-5xl px-2">
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight mb-3 drop-shadow-lg">
            Diagnostic{" "}
            <span className="font-light text-cyan-400 relative inline-block">
              Kart
              <Activity className="absolute -bottom-4 left-0 w-full h-4 text-cyan-500/50" />
            </span>
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-slate-400 mb-6">
            Something Awesome is Coming Soon
          </h2>
          <div className="text-base sm:text-lg md:text-xl text-slate-300 w-full font-light leading-relaxed">
            We are currently crafting a brand new, cutting-edge experience for
            Diagnostic Kart. A digital platform designed to simplify
            diagnostics. Our full platform will be launching shortly.
            <br className="hidden sm:block mt-3" />
            {/* Highly Highlighted Goal Section */}
            <div className="mt-6 inline-flex items-center justify-center gap-3 bg-cyan-950/40 border border-cyan-500/30 px-6 py-3 rounded-2xl shadow-inner backdrop-blur-md hover:bg-cyan-900/50 transition-colors cursor-default">
              <Target className="w-6 h-6 text-cyan-400" />
              <span className="font-semibold text-cyan-300 tracking-wide">
                Goal: Make Diagnostics Fast, Transparent, and Accessible.
              </span>
            </div>
          </div>
        </div>

        {/* 4. Side-by-Side: Cards & Contact - VERTICALLY CENTERED */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-center gap-8 lg:gap-12 w-full lg:max-w-7xl px-4 mb-16">
          {/* LEFT SIDE: Feature Cards (2x2 Grid) - Lighter & Responsive */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full lg:w-3/5 h-full">
            {[
              {
                icon: <Laptop className="w-10 h-10" strokeWidth={1.2} />,
                label: "Book Lab Tests Online",
              },
              {
                icon: <Tags className="w-10 h-10" strokeWidth={1.2} />,
                label: "Compare Prices Easily",
              },
              {
                icon: <Syringe className="w-10 h-10" strokeWidth={1.2} />,
                label: "Home Sample Collection",
              },
              {
                icon: <ClipboardType className="w-10 h-10" strokeWidth={1.2} />,
                label: "Access Reports Anytime",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-3xl flex flex-col items-center justify-center h-full min-h-[160px] hover:bg-gradient-to-br hover:from-cyan-500/10 hover:to-blue-600/10 hover:border-cyan-400/50 hover:-translate-y-2 transition-all duration-500 cursor-pointer group shadow-lg hover:shadow-cyan-500/20"
              >
                <div className="mb-4 text-cyan-400/70 group-hover:text-cyan-300 transition-colors duration-500 transform group-hover:scale-125 group-hover:rotate-3 drop-shadow-md">
                  {feature.icon}
                </div>
                <span className="text-sm font-bold text-white/80 group-hover:text-white uppercase tracking-wider text-center leading-snug">
                  {feature.label}
                </span>
              </div>
            ))}
          </div>

          {/* RIGHT SIDE: Highlighted "Get In Touch" Card */}
          <div
            id="contact"
            className="w-full lg:w-2/5 h-full bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-2xl rounded-3xl p-8 sm:p-10 text-left shadow-[0_0_40px_rgba(34,211,238,0.15)] border border-white/30 hover:border-cyan-400/60 transition-all duration-500 relative overflow-hidden group flex flex-col justify-center"
          >
            {/* Bright inner glow effect */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-400/20 rounded-full blur-3xl group-hover:bg-cyan-300/30 transition-colors duration-700 -z-10"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl group-hover:bg-blue-400/30 transition-colors duration-700 -z-10"></div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-8 flex items-center gap-4 border-b border-white/20 pb-5">
              <span className="w-14 h-14 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-white shadow-lg shadow-cyan-500/30 group-hover:scale-110 transition-transform duration-500">
                <Stethoscope className="w-7 h-7" />
              </span>
              Get In Touch
            </h2>

            <ul className="space-y-6 text-slate-100 relative z-10">
              <li className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-0 group/item hover:translate-x-2 transition-transform duration-300">
                <div className="flex items-center gap-3 w-36 shrink-0">
                  <div className="p-2 rounded-lg bg-white/10 group-hover/item:bg-cyan-500/30 transition-colors">
                    <Phone className="w-4 h-4 text-cyan-300" />
                  </div>
                  <span className="font-semibold text-white tracking-wide">
                    Phone:
                  </span>
                </div>
                <span className="font-medium text-white text-lg">
                  +91 73865 14350
                </span>
              </li>

              <li className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-0 group/item hover:translate-x-2 transition-transform duration-300">
                <div className="flex items-center gap-3 w-36 shrink-0">
                  <div className="p-2 rounded-lg bg-white/10 group-hover/item:bg-cyan-500/30 transition-colors">
                    <Mail className="w-4 h-4 text-cyan-300" />
                  </div>
                  <span className="font-semibold text-white tracking-wide">
                    Email:
                  </span>
                </div>
                <a
                  href="mailto:info@diagnostickart.com"
                  className="text-cyan-300 font-bold hover:text-cyan-200 hover:underline decoration-2 underline-offset-4 transition-all break-all sm:break-normal text-lg"
                >
                  info@diagnostickart.com
                </a>
              </li>

              <li className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-0 group/item hover:translate-x-2 transition-transform duration-300">
                <div className="flex items-center gap-3 w-36 shrink-0 sm:pt-1">
                  <div className="p-2 rounded-lg bg-white/10 group-hover/item:bg-cyan-500/30 transition-colors">
                    <MapPin className="w-4 h-4 text-cyan-300" />
                  </div>
                  <span className="font-semibold text-white tracking-wide">
                    Address:
                  </span>
                </div>
                <span className="leading-relaxed font-medium text-slate-200">
                  Plot No: 44, 1st Floor, Rainbow Meadows,{" "}
                  <br className="hidden sm:block" />
                  Kistareddypet, Hyderabad, Telangana - 502319
                </span>
              </li>

              <li className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-0 mt-8 pt-6 border-t border-white/20 group/item">
                <div className="flex items-center gap-3 w-36 shrink-0">
                  <div className="p-2 rounded-lg bg-white/10 group-hover/item:bg-cyan-500/30 transition-colors">
                    <HeartPulse className="w-4 h-4 text-cyan-300" />
                  </div>
                  <span className="font-semibold text-white tracking-wide">
                    Services:
                  </span>
                </div>
                <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-5 py-2 rounded-full text-sm font-bold shadow-lg shadow-cyan-500/20 w-fit tracking-wide flex items-center gap-2">
                  Comprehensive Diagnostics
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* 5. Call to Action Button */}
        <div className="mb-12">
          <a
            href="#contact"
            className="group flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 rounded-full font-black text-sm sm:text-base uppercase tracking-widest transition-all shadow-[0_0_30px_rgba(34,211,238,0.4)] hover:shadow-[0_0_50px_rgba(34,211,238,0.6)] hover:-translate-y-1 hover:scale-105"
          >
            <Bell className="w-5 h-5 animate-bounce" />
            Join Early Access / Get Notified
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </a>
        </div>

        {/* 6. Footer */}
        <footer className="mt-auto text-slate-400 text-sm font-medium z-10 tracking-wider text-center px-4 pb-6 flex items-center justify-center gap-2">
          &copy; {new Date().getFullYear()} Diagnostic Kart. All rights
          reserved.
        </footer>
      </div>
    </main>
  );
}
