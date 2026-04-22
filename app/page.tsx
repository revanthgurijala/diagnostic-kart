import Image from "next/image";
import { MapPin, Phone, Mail, HeartPulse, Stethoscope } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-slate-50 p-4 sm:p-8 md:p-12">
      {/* Eye-catching Animated Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200/50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse"></div>
      <div
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-200/50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-50/30 rounded-full blur-3xl -z-10"></div>

      {/* Main Content Container with Glassmorphism */}
      <div className="max-w-3xl w-full bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl shadow-blue-900/10 overflow-hidden text-center p-6 sm:p-10 md:p-14 border border-white/60 relative z-10 border-t-[10px] border-t-[#2b5a9e] transition-all hover:shadow-blue-900/20">
        {/* Enlarged & Interactive Logo Section - Adjusted sizes for mobile */}
        <div className="flex justify-center mb-8 sm:mb-10">
          <div className="relative w-48 h-48 sm:w-72 sm:h-72 md:w-80 md:h-80 group cursor-default">
            {/* Glowing effect behind the logo */}
            <div className="absolute inset-0 bg-[#2b5a9e]/10 rounded-full blur-3xl group-hover:bg-[#2b5a9e]/20 transition-all duration-700"></div>
            <Image
              src="/logo.png"
              alt="Diagnostic Kart Logo"
              fill
              // Add the sizes prop below to clear the warning and optimize loading!
              sizes="(max-width: 640px) 192px, (max-width: 768px) 288px, 320px"
              className="object-contain drop-shadow-2xl transform transition-transform duration-700 group-hover:scale-105"
              priority
            />
          </div>
        </div>

        {/* Advanced Typography with Gradient */}
        <div className="space-y-4 mb-10 sm:mb-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 tracking-tight leading-tight">
            Something Awesome Is <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2b5a9e] to-cyan-500 drop-shadow-sm">
              Coming Soon
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-500 max-w-xl mx-auto leading-relaxed px-2">
            We are currently crafting a brand new, cutting-edge experience for
            Diagnostic Kart. Our full platform will be launching shortly.
          </p>
        </div>

        {/* Enhanced Contact Details Section */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 text-left inline-block w-full max-w-lg mx-auto shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3 border-b border-gray-100 pb-4">
            <span className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-[#2b5a9e] shadow-sm">
              <Stethoscope className="w-5 h-5" />
            </span>
            Get In Touch
          </h2>

          <ul className="space-y-6 text-gray-600">
            {/* Phone */}
            <li className="flex flex-col sm:flex-row sm:items-center group gap-1 sm:gap-0">
              <div className="flex items-center gap-2 w-32 shrink-0">
                <Phone className="w-4 h-4 text-[#2b5a9e]/70 group-hover:text-[#2b5a9e] transition-colors" />
                <span className="font-semibold text-gray-900 group-hover:text-[#2b5a9e] transition-colors">
                  Phone:
                </span>
              </div>
              <span className="text-gray-700 font-medium">+91 73865 14350</span>
            </li>

            {/* Email */}
            <li className="flex flex-col sm:flex-row sm:items-center group gap-1 sm:gap-0">
              <div className="flex items-center gap-2 w-32 shrink-0">
                <Mail className="w-4 h-4 text-[#2b5a9e]/70 group-hover:text-[#2b5a9e] transition-colors" />
                <span className="font-semibold text-gray-900 group-hover:text-[#2b5a9e] transition-colors">
                  Email:
                </span>
              </div>
              <a
                href="mailto:info@diagnostickart.com"
                className="text-[#2b5a9e] font-medium hover:underline decoration-2 underline-offset-4 transition-all break-all sm:break-normal"
              >
                info@diagnostickart.com
              </a>
            </li>

            {/* Address */}
            <li className="flex flex-col sm:flex-row sm:items-start group gap-1 sm:gap-0">
              <div className="flex items-center gap-2 w-32 shrink-0 sm:pt-1">
                <MapPin className="w-4 h-4 text-[#2b5a9e]/70 group-hover:text-[#2b5a9e] transition-colors" />
                <span className="font-semibold text-gray-900 group-hover:text-[#2b5a9e] transition-colors">
                  Address:
                </span>
              </div>
              <span className="leading-relaxed text-gray-700 font-medium">
                Plot No: 44, 1st Floor, Rainbow Meadows,
                <br />
                Kistareddypet, Hyderabad, Telangana - 502319
              </span>
            </li>

            {/* Services */}
            <li className="flex flex-col sm:flex-row sm:items-center group gap-3 sm:gap-0 mt-6 pt-4 border-t border-gray-50">
              <div className="flex items-center gap-2 w-32 shrink-0">
                <HeartPulse className="w-4 h-4 text-[#2b5a9e]/70 group-hover:text-[#2b5a9e] transition-colors" />
                <span className="font-semibold text-gray-900 group-hover:text-[#2b5a9e] transition-colors">
                  Services:
                </span>
              </div>
              <span className="bg-blue-50 border border-blue-100 text-[#2b5a9e] px-4 py-1.5 rounded-full text-sm font-semibold shadow-sm w-fit">
                Comprehensive Health Diagnostics
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-8 sm:mt-12 text-gray-400 text-sm font-medium z-10 tracking-wide text-center px-4">
        &copy; {new Date().getFullYear()} Diagnostic Kart. All rights reserved.
      </footer>
    </main>
  );
}
