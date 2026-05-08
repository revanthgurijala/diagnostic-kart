"use client";
import { useEffect, useState } from "react";
import ProfileCard from "./components/ProfileCard";

export default function Home() {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/profiles/")
      .then((res) => res.json())
      .then((data) => setProfiles(data));
  }, []);

  return (
    <div className="min-h-screen bg-[#f8fafc] font-sans text-slate-800 selection:bg-blue-200">
      {/* ================= HERO SECTION ================= */}
      <section className="relative bg-white pt-24 pb-20 px-6 text-center overflow-hidden border-b border-slate-100">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.08),transparent)] pointer-events-none" />

        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-sm font-bold text-blue-700 bg-blue-50 border border-blue-100 rounded-full shadow-sm">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
            />
          </svg>
          Scientific • Personalized • Reliable
        </div>

        <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 tracking-tight">
          Not Just for You. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
            For Your Loved Ones Too.
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-500 leading-relaxed mb-10">
          At Diagnostic Kart, care goes beyond humans. We provide advanced
          diagnostics for you and your beloved pets—because every life
          matters[cite: 12].
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all hover:-translate-y-1">
            Book Your Test
          </button>
          <button className="bg-white border border-slate-200 text-slate-800 px-8 py-4 rounded-full font-bold shadow-sm hover:border-slate-300 transition-all hover:-translate-y-1">
            Explore Health Profiles
          </button>
        </div>
      </section>

      {/* ================= WHO WE ARE ================= */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4 text-blue-600 font-bold uppercase tracking-widest text-sm">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              Who We Are
            </div>
            <h2 className="text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
              Diagnostics Designed Around You
            </h2>
            <p className="text-slate-600 text-lg mb-4 leading-relaxed">
              Health is not the same for everyone. Your lifestyle, habits,
              environment, and goals make your body unique. So why should your
              lab tests be the same?[cite: 12]
            </p>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              At Diagnostic Kart, we move beyond traditional testing. We create
              smart, personalized diagnostic profiles based on:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Lifestyle & daily habits",
                "Fitness & health goals",
                "Risk factors & medical history",
                "Scientific data & clinical insights",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 bg-white p-4 rounded-xl border border-slate-100 shadow-sm"
                >
                  <svg
                    className="w-6 h-6 text-blue-500 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-slate-700 font-semibold text-sm">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Visual abstract representation instead of an image */}
          <div className="relative h-full min-h-[400px] rounded-[2rem] bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 p-8 overflow-hidden flex items-center justify-center shadow-inner">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-30" />
            <div className="relative z-10 bg-white/60 backdrop-blur-xl border border-white p-8 rounded-3xl shadow-xl text-center">
              <h3 className="text-2xl font-black text-slate-900 mb-4">
                Our Philosophy
              </h3>
              <p className="text-slate-600 font-medium mb-6">
                One test does not fit all. One body does not follow standard
                rules. That’s why we believe:
              </p>
              <div className="bg-blue-600 text-white p-6 rounded-2xl font-bold text-lg italic shadow-lg shadow-blue-200">
                "Your health profile should be as unique as you are."[cite: 12]
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHAT MAKES US DIFFERENT ================= */}
      <section className="bg-slate-900 py-24 px-6 text-white relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-50" />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 mb-4 text-blue-400 font-bold uppercase tracking-widest text-sm">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            What Makes Us Different
          </div>
          <h2 className="text-4xl font-extrabold mb-6">
            Not Traditional. Not Generic. Truly Personalized.
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto mb-16 text-lg">
            Most labs offer fixed test packages. We don’t. We design customized
            health profiles that actually make sense for you[cite: 12].
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "No Unnecessary Tests",
                icon: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z",
              },
              {
                title: "No Generic Packages",
                icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
              },
              {
                title: "Science-Based Diagnostics",
                icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="bg-slate-800/50 backdrop-blur-xl p-8 rounded-3xl border border-slate-700 flex flex-col items-center"
              >
                <div className="w-16 h-16 bg-blue-500/20 text-blue-400 rounded-2xl flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={feature.icon}
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">{feature.title}</h3>
              </div>
            ))}
          </div>
          <p className="mt-12 text-blue-400 font-bold uppercase tracking-widest text-sm bg-blue-900/30 inline-block px-6 py-2 rounded-full border border-blue-500/30">
            👉 Because accurate insights come from relevant testing[cite: 12]
          </p>
        </div>
      </section>

      {/* ================= OUR SERVICES ================= */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-slate-900 mb-16">
          Our Services
        </h2>
        <div className="grid md:grid-cols-2 gap-10">
          {/* Human Diagnostics Card */}
          <div className="bg-white border border-slate-200 p-10 rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-5 mb-8 border-b border-slate-100 pb-6">
              <div className="p-4 bg-blue-50 text-blue-600 rounded-2xl">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-slate-900">
                Human Diagnostics
              </h3>
            </div>
            <ul className="space-y-5">
              {[
                "Preventive health checkups",
                "Lifestyle-based health profiles",
                "Fitness & performance panels",
                "Hormonal & metabolic testing",
                "Advanced organ function analysis",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-4 text-slate-700 font-medium text-lg"
                >
                  <div className="w-2 h-2 rounded-full bg-blue-500" /> {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Pet Diagnostics Card */}
          <div className="bg-white border border-slate-200 p-10 rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-5 mb-8 border-b border-slate-100 pb-6">
              <div className="p-4 bg-orange-50 text-orange-500 rounded-2xl">
                {/* Pet Paw Icon */}
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 12.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zM7.5 11a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM16.5 11a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM9 5.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM15 5.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-slate-900">
                Pet Diagnostics
              </h3>
            </div>
            <ul className="space-y-5 mb-10">
              {[
                "Health screening for dogs & cats",
                "Preventive wellness panels",
                "Infection & disease detection",
                "Nutrition & deficiency analysis",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-4 text-slate-700 font-medium text-lg"
                >
                  <div className="w-2 h-2 rounded-full bg-orange-500" /> {item}
                </li>
              ))}
            </ul>
            <div className="bg-orange-50 text-orange-700 p-4 rounded-xl font-bold text-sm text-center">
              👉 Because your pets deserve the same level of care as you[cite:
              12]
            </div>
          </div>
        </div>
      </section>

      {/* ================= DYNAMIC PRODUCT GRID (E-Commerce) ================= */}
      <section className="bg-slate-100/50 py-24 px-6 border-y border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-4xl font-extrabold text-slate-900 mb-3">
                Book a Test Now
              </h2>
              <p className="text-slate-500 text-lg">
                Explore our scientifically backed, dynamic health profiles.
              </p>
            </div>
            <button className="text-blue-600 font-bold hover:text-blue-800 flex items-center gap-2">
              View All Profiles{" "}
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {profiles.length > 0 ? (
              profiles.map((p: any) => <ProfileCard key={p.id} profile={p} />)
            ) : (
              <div className="col-span-full py-20 text-center border-2 border-dashed border-slate-300 rounded-3xl">
                <p className="text-slate-500 text-lg">
                  No health profiles loaded yet. Please use the dashboard to
                  upload the Excel file.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ================= HOW IT WORKS & SCIENCE ================= */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-slate-900 mb-16">
          How It Works: Simple. Smart. Scientific.
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {[
            {
              num: "1",
              title: "Answer a few questions",
              desc: "We understand your lifestyle, habits & health goals",
            },
            {
              num: "2",
              title: "Get a personalized profile",
              desc: "AI + medical expertise designs your test plan",
            },
            {
              num: "3",
              title: "Sample collection",
              desc: "Safe, accurate, and convenient testing",
            },
            {
              num: "4",
              title: "Smart reports & insights",
              desc: "Actionable results—not just numbers",
            },
          ].map((step, i) => (
            <div key={i} className="text-center relative group">
              <div className="w-20 h-20 mx-auto bg-white border-4 border-slate-100 text-blue-600 rounded-full flex items-center justify-center text-3xl font-black mb-6 shadow-xl group-hover:border-blue-500 transition-colors z-10 relative">
                {step.num}
              </div>
              <h4 className="font-bold text-xl text-slate-900 mb-3">
                {step.title}
              </h4>
              <p className="text-base text-slate-500">{step.desc}[cite: 12]</p>
            </div>
          ))}
        </div>

        {/* Science Behind Our Approach */}
        <div className="bg-white border border-slate-200 shadow-2xl rounded-[3rem] p-12 flex flex-col lg:flex-row items-center gap-12 overflow-hidden relative">
          <div className="absolute -left-10 -bottom-10 w-64 h-64 bg-blue-50 rounded-full blur-3xl -z-10" />

          <div className="lg:w-1/2">
            <h3 className="text-3xl font-bold text-slate-900 mb-6">
              Science Behind Our Approach
            </h3>
            <p className="text-slate-600 text-lg mb-6 leading-relaxed">
              We combine <strong>Clinical diagnostics</strong>,{" "}
              <strong>Lifestyle medicine</strong>, and{" "}
              <strong>Data-driven insights</strong>.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex gap-4 p-4 bg-blue-50 rounded-2xl border border-blue-100 text-blue-800 font-medium">
                <span className="text-xl">👉</span> Health is dynamic, not
                static.
              </div>
              <div className="flex gap-4 p-4 bg-blue-50 rounded-2xl border border-blue-100 text-blue-800 font-medium">
                <span className="text-xl">👉</span> Testing should adapt to
                you—not the other way around.
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 bg-slate-900 p-10 rounded-3xl text-white shadow-inner w-full">
            <h4 className="font-bold text-2xl mb-8 flex items-center gap-3">
              <svg
                className="w-8 h-8 text-red-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  clipRule="evenodd"
                />
              </svg>
              Why Choose Diagnostic Kart
            </h4>
            <ul className="space-y-5 text-lg text-slate-300">
              <li className="flex items-center gap-3">
                <span className="text-green-400 font-bold">✔</span> Personalized
                testing approach
              </li>
              <li className="flex items-center gap-3">
                <span className="text-green-400 font-bold">✔</span> Scientific &
                data-backed profiles
              </li>
              <li className="flex items-center gap-3">
                <span className="text-green-400 font-bold">✔</span> Human + pet
                diagnostics in one platform
              </li>
              <li className="flex items-center gap-3">
                <span className="text-green-400 font-bold">✔</span> Accurate,
                quality-controlled reports
              </li>
              <li className="flex items-center gap-3">
                <span className="text-green-400 font-bold">✔</span> Focus on
                prevention, not just detection[cite: 12]
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= OUR SCIENTIFIC BOARD ================= */}
      <section className="bg-slate-50 border-t border-slate-200 py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-2">
              Our Scientific Board
            </h2>
            <h3 className="text-4xl font-extrabold text-slate-900 mb-6">
              The Roots of Everything We Do
            </h3>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              At Diagnostic Kart, every test and profile is guided by our
              Scientific Board. They are a team of medical experts, researchers,
              and specialists who ensure that:
            </p>
            <ul className="space-y-4 mb-10">
              <li className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                <span className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                  1
                </span>
                <span className="font-semibold text-slate-800">
                  Every test is scientifically valid
                </span>
              </li>
              <li className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                <span className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                  2
                </span>
                <span className="font-semibold text-slate-800">
                  Every profile is logically designed
                </span>
              </li>
              <li className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                <span className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                  3
                </span>
                <span className="font-semibold text-slate-800">
                  Every recommendation is medically meaningful[cite: 12]
                </span>
              </li>
            </ul>
            <blockquote className="border-l-4 border-blue-600 pl-6 text-xl italic text-slate-700 font-serif">
              "Strong roots create a healthy tree. At Diagnostic Kart, our roots
              are science."
            </blockquote>
          </div>

          <div className="lg:w-1/2 relative">
            {/* IMAGE RENDERED HERE - Ensure scientific-board.png is in public/images/ */}
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white bg-white">
              <img
                src="/images/scientific-board.png"
                alt="Our Scientific Board Tree"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= COMING SOON: DIKO AI ================= */}
      <section className="bg-slate-900 py-24 px-6 text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-overlay" />

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-10">
          <div className="lg:w-1/2 relative order-2 lg:order-1">
            {/* IMAGE RENDERED HERE - Ensure diko-ai.png is in public/images/ */}
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl shadow-blue-900/50 border-4 border-slate-800 bg-slate-800">
              <img
                src="/images/diko-ai.png"
                alt="DIKO AI Health Assistant"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          <div className="lg:w-1/2 order-1 lg:order-2">
            <div className="inline-block px-4 py-1.5 bg-blue-500/20 text-blue-400 rounded-full text-sm font-bold mb-6 uppercase border border-blue-500/30">
              🚀 Coming Soon
            </div>
            <h2 className="text-4xl font-extrabold mb-4">
              Smart Chat. Smarter Health.
            </h2>
            <h3 className="text-2xl font-medium text-blue-300 mb-6">
              Meet Your AI Health Assistant
            </h3>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
              Coming soon at Diagnostic Kart — a smart chatbot that understands
              you, your lifestyle, and your health needs. No more guessing which
              tests to take[cite: 12].
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center shrink-0 border border-slate-700">
                  💬
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg">Chat with AI</h4>
                  <p className="text-slate-400">
                    Answer easy questions about your lifestyle, diet, sleep &
                    habits.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center shrink-0 border border-slate-700">
                  🧠
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg">
                    Smart Analysis & Custom Profile
                  </h4>
                  <p className="text-slate-400">
                    Our AI studies your inputs to design a profile only for you.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center shrink-0 border border-slate-700">
                  🎯
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg">
                    Right Tests Suggested
                  </h4>
                  <p className="text-slate-400">
                    No unnecessary tests. Actionable insights with clear
                    guidance to improve your health[cite: 12].
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold shadow-lg hover:bg-blue-500 transition-colors">
                Join Early Access
              </button>
              <button className="bg-transparent border border-slate-600 text-white px-8 py-4 rounded-full font-bold hover:bg-slate-800 transition-colors">
                Get Notified
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CALL TO ACTION / FOOTER ================= */}
      <footer className="bg-white py-20 px-6 text-center border-t border-slate-100">
        <h2 className="text-4xl font-extrabold text-slate-900 mb-6">
          Start Your Health Journey Today
        </h2>
        <p className="text-xl text-slate-500 mb-10 max-w-2xl mx-auto">
          Whether for you or your pet, get diagnostics that truly understand
          your needs.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
          <button className="bg-slate-900 text-white px-10 py-4 rounded-full font-bold shadow-xl hover:bg-blue-600 transition-all hover:-translate-y-1">
            Create Your Personalized Profile
          </button>
          <button className="bg-blue-50 text-blue-700 px-10 py-4 rounded-full font-bold hover:bg-blue-100 transition-colors">
            Book a Test Now
          </button>
        </div>
        <div className="pt-10 border-t border-slate-100 text-slate-400 font-medium">
          <span className="text-blue-600 font-bold">Diagnostic Kart</span> is
          not just a lab. It’s a smarter way to understand health[cite: 12].
        </div>
      </footer>
    </div>
  );
}
