import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-slate-50 p-6 sm:p-12">
      {/* Eye-catching Animated Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200/50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse"></div>
      <div
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-200/50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-50/30 rounded-full blur-3xl -z-10"></div>

      {/* Main Content Container with Glassmorphism */}
      <div className="max-w-3xl w-full bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl shadow-blue-900/10 overflow-hidden text-center p-8 sm:p-14 border border-white/60 relative z-10 border-t-[10px] border-t-[#2b5a9e] transition-all hover:shadow-blue-900/20">
        {/* Enlarged & Interactive Logo Section */}
        <div className="flex justify-center mb-10">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 group cursor-default">
            {/* Glowing effect behind the logo */}
            <div className="absolute inset-0 bg-[#2b5a9e]/10 rounded-full blur-3xl group-hover:bg-[#2b5a9e]/20 transition-all duration-700"></div>
            <Image
              src="/logo.png"
              alt="Diagnostic Kart Logo"
              fill
              className="object-contain drop-shadow-2xl transform transition-transform duration-700 group-hover:scale-105"
              priority
            />
          </div>
        </div>

        {/* Advanced Typography with Gradient */}
        <div className="space-y-4 mb-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 tracking-tight leading-tight">
            Something Awesome Is <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2b5a9e] to-cyan-500 drop-shadow-sm">
              Coming Soon
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-500 max-w-xl mx-auto leading-relaxed">
            We are currently crafting a brand new, cutting-edge experience for
            Diagnostic Kart. Our full platform will be launching shortly.
          </p>
        </div>

        {/* Enhanced Contact Details Section */}
        <div className="bg-white rounded-2xl p-8 text-left inline-block w-full max-w-lg mx-auto shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3 border-b border-gray-100 pb-4">
            <span className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-[#2b5a9e]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
            </span>
            Get In Touch
          </h2>

          <ul className="space-y-5 text-gray-600">
            <li className="flex items-start group">
              <span className="font-semibold text-gray-900 w-24 shrink-0 group-hover:text-[#2b5a9e] transition-colors">
                Phone:
              </span>
              <span className="text-gray-700 font-medium">+91 73865 14350</span>
            </li>
            <li className="flex items-start group">
              <span className="font-semibold text-gray-900 w-24 shrink-0 group-hover:text-[#2b5a9e] transition-colors">
                Email:
              </span>
              <a
                href="mailto:info@diagnostickart.com"
                className="text-[#2b5a9e] font-medium hover:underline decoration-2 underline-offset-4 transition-all"
              >
                info@diagnostickart.com
              </a>
            </li>
            <li className="flex items-start group">
              <span className="font-semibold text-gray-900 w-24 shrink-0 group-hover:text-[#2b5a9e] transition-colors">
                Address:
              </span>
              <span className="leading-relaxed text-gray-700 font-medium">
                Plot No: 44, 1st Floor, Rainbow Meadows,
                <br />
                Kistareddypet, Hyderabad, Telangana - 502319
              </span>
            </li>
            <li className="flex items-start group items-center mt-6 pt-2">
              <span className="font-semibold text-gray-900 w-24 shrink-0 group-hover:text-[#2b5a9e] transition-colors">
                Services:
              </span>
              <span className="bg-blue-50 border border-blue-100 text-[#2b5a9e] px-4 py-1.5 rounded-full text-sm font-semibold shadow-sm">
                Comprehensive Health Diagnostics
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-12 text-gray-400 text-sm font-medium z-10 tracking-wide">
        &copy; {new Date().getFullYear()} Diagnostic Kart. All rights reserved.
      </footer>
    </main>
  );
}
