// components/ProfileCard.tsx
export default function ProfileCard({ profile }: any) {
  return (
    <div className="relative flex flex-col bg-white rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:border-blue-200 transition-all duration-300 group overflow-hidden">
      {/* Top Badge */}
      <div className="flex justify-between items-start mb-4">
        <span className="px-3 py-1 bg-blue-50 text-blue-700 text-[11px] font-bold rounded-md uppercase tracking-wider">
          {profile.category || "General Health"}
        </span>
      </div>

      {/* Title & Purpose */}
      <h3 className="text-xl font-extrabold text-slate-900 mb-2 leading-tight group-hover:text-blue-600 transition-colors">
        {profile.name}
      </h3>
      <p className="text-slate-500 text-sm mb-5 flex-grow leading-relaxed">
        {profile.purpose}
      </p>

      {/* Tests Included Box (FM Diagnostics Style) */}
      <div className="mb-6 bg-slate-50 rounded-xl p-4 border border-slate-100">
        <div className="flex items-center gap-2 mb-2">
          <svg
            className="w-4 h-4 text-blue-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
            />
          </svg>
          <span className="text-xs font-bold text-slate-700 uppercase tracking-tight">
            Parameters Included
          </span>
        </div>
        <p className="text-xs text-slate-600 font-medium line-clamp-2">
          {profile.tests_included ||
            "Comprehensive parameters tailored to this profile."}
        </p>
      </div>

      {/* Price & Action */}
      <div className="flex items-end justify-between mt-auto pt-4 border-t border-gray-100">
        <div className="flex flex-col">
          <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider mb-1">
            Total Price
          </span>
          <span className="text-2xl font-black text-slate-900">
            ₹{profile.price}
          </span>
        </div>
        <button className="bg-slate-900 text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow-md hover:bg-blue-600 transition-colors active:scale-95">
          Book Test
        </button>
      </div>
    </div>
  );
}
