"use client";

import Image from "next/image";

import Link from "next/link";

import {
  Microscope,
  Activity,
  ShieldCheck,
  ArrowRight,
  HeartPulse,
  Dumbbell,
  ClipboardList,
  Dna,
  UserCheck,
  Beaker,
  Sparkles,
  Info,
  Lightbulb,
  CheckCircle2,
  Stethoscope,
  PawPrint,
  User,
  Heart,
  Brain,
  TestTubes,
  LineChart,
  Settings,
  RefreshCcw,
  Crosshair,
  Fingerprint,
  Database,
  HeartHandshake,
  FileCheck,
  ShieldPlus,
  Quote,
  UserPlus,
  Bot,
  MessageSquare,
  BrainCircuit,
  ListChecks,
  Eye,
  Target,
  Zap,
} from "lucide-react";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import ProfileCard from "./components/ProfileCard";

export default function Home() {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/profiles/")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Backend is not responding");
        }
        return res.json();
      })
      .then((data) => setProfiles(data))
      .catch((error) => {
        console.error(
          "Could not fetch profiles. Is the backend running?",
          error,
        );
        setProfiles([]);
      });
  }, []);

  return (
    <div className="min-h-screen bg-[#f8fafc] font-sans text-slate-800 selection:bg-blue-200">
      {/* ================= HERO SECTION ================= */}
      <section
        id="home"
        // Changed to justify-start on mobile to push text up, and bg-bottom to put the image below the text
        className="relative min-h-[calc(100vh-80px)] flex flex-col justify-start md:justify-center bg-slate-900 bg-[url('/images/DK-Web.png')] bg-contain bg-bottom md:bg-right bg-no-repeat px-6 lg:px-16 pt-12 md:pt-0 text-left overflow-hidden border-b border-slate-800"
      >
        {/* Bulletproof Mobile & Desktop Gradient: Ensures the top half of mobile is solid dark for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-slate-900 from-50% md:from-40% via-slate-900/80 via-75% md:via-60% to-transparent to-100% md:to-90% pointer-events-none" />

        {/* Content wrapper */}
        <div className="relative z-10 max-w-2xl py-16 md:py-20">
          <div className="inline-flex flex-wrap items-center gap-2 md:gap-3 px-4 md:px-6 py-2 md:py-3 mb-8 text-xs md:text-sm font-bold text-blue-300 bg-slate-800/50 backdrop-blur-md border border-slate-700/50 rounded-[2rem] shadow-sm mt-4">
            <Microscope className="w-3.5 h-3.5 md:w-4 md:h-4" /> Scientific
            <span className="text-slate-500">•</span>
            <Activity className="w-3.5 h-3.5 md:w-4 md:h-4" /> Personalized
            <span className="text-slate-500">•</span>
            <ShieldCheck className="w-3.5 h-3.5 md:w-4 md:h-4" /> Reliable
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-[1.2] font-serif drop-shadow-md">
            Not Just for You. <br />
            <span className="font-serif italic font-normal text-4xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 mt-4 inline-block tracking-wide drop-shadow-md">
              For Your Loved Ones Too.
            </span>
          </h1>

          <p className="text-base md:text-lg text-slate-300 font-sans font-medium leading-relaxed mb-12 drop-shadow-md">
            At Diagnostic Kart, care goes beyond humans. We provide advanced
            diagnostics for you and your beloved pets—because every life
            matters.
          </p>

          <div className="flex flex-col sm:flex-row justify-start gap-4 md:gap-6">
            <Link
              href="/tests"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-blue-900/50 hover:bg-blue-500 transition-all hover:-translate-y-1 text-lg border border-blue-500"
            >
              Book Your Test <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/tests"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-slate-800/60 border border-slate-600 text-white px-8 py-4 rounded-full font-bold shadow-sm hover:border-slate-400 hover:bg-slate-700 transition-all hover:-translate-y-1 text-lg backdrop-blur-sm"
            >
              Explore Health Profiles <Activity className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ================= ABOUT US (WHO WE ARE & DIFFERENCE) ================= */}
      <section
        id="about"
        className="relative py-20 px-6 bg-gradient-to-br from-blue-50 via-slate-50 to-indigo-100/50 overflow-hidden border-b border-blue-100/50"
      >
        {/* Centered on mobile, moved left on desktop. Responsive sizing. */}
        <div className="absolute left-1/2 md:left-1/4 top-1/2 -translate-x-1/2 -translate-y-1/2 text-blue-500/10 pointer-events-none z-0 transform -rotate-12">
          <Dna
            className="w-[350px] h-[350px] md:w-[700px] md:h-[700px]"
            strokeWidth={0.5}
          />
        </div>
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-400/10 rounded-full mix-blend-multiply filter blur-[80px] opacity-70 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-indigo-400/10 rounded-full mix-blend-multiply filter blur-[100px] opacity-70 pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-stretch">
            {/* LEFT SIDE: Who We Are */}
            <div className="flex flex-col justify-center pr-0 lg:pr-12">
              <div className="inline-flex items-center gap-2 mb-6 text-blue-600 font-bold uppercase tracking-widest text-sm bg-blue-100/50 px-4 py-2 rounded-full w-max">
                <Info className="w-4 h-4" /> Who We Are
              </div>

              {/* Added responsive text sizing (text-3xl on mobile, text-4xl on desktop) */}
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 tracking-tight leading-tight font-serif">
                Diagnostics Designed <br />
                <span className="text-blue-600 font-serif">Around You.</span>
              </h2>

              <p className="text-slate-600 text-lg mb-8 leading-relaxed font-medium">
                Health is not the same for everyone. Your lifestyle, habits,
                environment, and goals make your body unique. So why should your
                lab tests be the same? We create smart, personalized profiles
                based on:
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mt-4">
                {[
                  {
                    text: "Lifestyle & Habits",
                    // Removed text-blue-600 from the icon itself
                    icon: <HeartPulse className="w-6 h-6" />,
                  },
                  {
                    text: "Fitness Goals",
                    icon: <Dumbbell className="w-6 h-6" />,
                  },
                  {
                    text: "Medical History",
                    icon: <ClipboardList className="w-6 h-6" />,
                  },
                  {
                    text: "Clinical Insights",
                    icon: <Dna className="w-6 h-6" />,
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="group flex items-center gap-4 bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 cursor-default"
                  >
                    {/* Added shrink-0 to prevent the icon box from squashing if text wraps on tiny screens */}
                    <div className="shrink-0 p-3 bg-blue-50 rounded-xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                      <div className="text-current">{item.icon}</div>
                    </div>
                    <span className="text-slate-800 font-bold text-lg group-hover:text-blue-700 transition-colors">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT SIDE: What Makes Us Different */}
            {/* Changed from flat bg-slate-900 to a distinct gradient to separate it from the Science section */}
            <div className="relative bg-gradient-to-bl from-slate-800 to-indigo-950 text-white rounded-[2.5rem] p-8 md:p-14 shadow-2xl overflow-hidden border border-slate-700 flex flex-col h-full">
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-indigo-500 rounded-full mix-blend-screen filter blur-[80px] opacity-30 pointer-events-none" />

              <div className="inline-flex items-center gap-2 mb-6 text-indigo-400 font-bold uppercase tracking-widest text-sm relative z-10">
                <Sparkles className="w-5 h-5" /> The Difference
              </div>

              {/* Added responsive text sizing (text-3xl on mobile, text-4xl on desktop) */}
              <h2 className="text-3xl md:text-4xl font-bold mb-8 tracking-tight leading-tight relative z-10 font-serif">
                Not Traditional. <br />
                <span className="text-slate-400 font-serif">
                  Not Generic.
                </span>{" "}
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-400 font-serif">
                  Truly Personalized.
                </span>
              </h2>

              <ul className="space-y-6 mb-12 relative z-10 flex-grow">
                {[
                  {
                    text: "No unnecessary tests",
                    desc: "You only pay for what your body actually needs.",
                  },
                  {
                    text: "No generic packages",
                    desc: "Built from the ground up for your specific biology.",
                  },
                  {
                    text: "Science-based diagnostics",
                    desc: "Backed by rigorous medical research and data.",
                  },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 group">
                    <div className="shrink-0 mt-1 p-1 bg-indigo-500/20 rounded-full group-hover:bg-indigo-500/40 transition-colors">
                      <CheckCircle2 className="w-6 h-6 text-indigo-400" />
                    </div>
                    <div>
                      <span className="block text-slate-100 font-bold text-xl mb-1">
                        {item.text}
                      </span>
                      <span className="block text-slate-400 font-medium">
                        {item.desc}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SCIENCE BEHIND OUR APPROACH ================= */}
      <section
        id="science"
        // Changed to bg-slate-950 and added a top border to visually separate it from the section above
        className="relative py-24 px-6 bg-slate-950 text-white overflow-hidden border-t border-slate-800"
      >
        {/* Hidden right edge on mobile, full visibility on desktop. Responsive sizing. */}
        <div className="absolute right-[-20%] md:right-32 top-1/2 -translate-y-1/2 text-blue-400/10 pointer-events-none z-0 transform rotate-12">
          <Microscope
            className="w-[350px] h-[350px] md:w-[700px] md:h-[700px]"
            strokeWidth={0.5}
          />
        </div>

        {/* Abstract Data Background */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/10 rounded-full mix-blend-screen filter blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* LEFT: Heading & Taglines */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.7 }}
              className="flex flex-col justify-center"
            >
              <div className="inline-flex items-center gap-2 mb-6 text-blue-400 font-bold uppercase tracking-widest text-sm bg-blue-900/30 border border-blue-500/30 px-4 py-2 rounded-full w-max">
                <Dna className="w-4 h-4" /> The Formula
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 tracking-tight leading-tight font-serif">
                The Science Behind <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 font-serif">
                  Our Approach.
                </span>
              </h2>

              <div className="space-y-6">
                {/* Tagline 1 */}
                <div className="flex items-start gap-4 p-6 rounded-2xl bg-slate-800/50 border border-slate-700 backdrop-blur-sm group hover:border-blue-500/50 transition-colors">
                  <div className="p-3 bg-blue-500/20 text-blue-400 rounded-xl shrink-0 group-hover:rotate-180 transition-transform duration-700">
                    <RefreshCcw className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-100 mb-1">
                      Health is dynamic, not static.
                    </h4>
                    <p className="text-slate-400 font-medium">
                      Your body changes. Your lifestyle changes. Your
                      diagnostics should be able to keep up.
                    </p>
                  </div>
                </div>

                {/* Tagline 2 */}
                <div className="flex items-start gap-4 p-6 rounded-2xl bg-slate-800/50 border border-slate-700 backdrop-blur-sm group hover:border-indigo-500/50 transition-colors">
                  <div className="p-3 bg-indigo-500/20 text-indigo-400 rounded-xl shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Crosshair className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-100 mb-1">
                      Testing should adapt to you.
                    </h4>
                    <p className="text-slate-400 font-medium">
                      Not the other way around. We map the right tests to your
                      unique biological footprint.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* RIGHT: The 3 Scientific Pillars (Cascading Cards) */}
            <div className="relative h-full min-h-[400px] flex flex-col justify-center gap-6 lg:pl-10">
              <h3 className="text-2xl font-serif font-bold text-slate-300 mb-2">
                We combine:
              </h3>

              {[
                {
                  title: "Clinical Diagnostics",
                  desc: "Gold-standard medical laboratory testing.",
                  icon: <Microscope className="w-8 h-8" />,
                  color: "from-blue-500 to-blue-600",
                  delay: 0.2,
                },
                {
                  title: "Lifestyle Medicine",
                  desc: "Correlating habits, diet, and stress to your health.",
                  icon: <HeartPulse className="w-8 h-8" />,
                  color: "from-indigo-500 to-indigo-600",
                  delay: 0.4,
                },
                {
                  title: "Data-Driven Insights",
                  desc: "Advanced algorithms to identify precise patterns.",
                  icon: <LineChart className="w-8 h-8" />,
                  color: "from-violet-500 to-violet-600",
                  delay: 0.6,
                },
              ].map((pillar, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: pillar.delay }}
                  className="flex items-start md:items-center gap-4 md:gap-6 bg-slate-800/80 border border-slate-700 p-6 rounded-3xl shadow-xl hover:-translate-y-1 transition-transform cursor-default"
                >
                  <div
                    className={`p-4 rounded-2xl bg-gradient-to-br ${pillar.color} text-white shadow-lg shrink-0`}
                  >
                    {pillar.icon}
                  </div>
                  <div>
                    {/* Responsive text scaling: text-xl on mobile, text-2xl on desktop */}
                    <h4 className="text-xl md:text-2xl font-bold text-white font-serif tracking-wide mt-1 md:mt-0">
                      {pillar.title}
                    </h4>
                    <p className="text-slate-400 font-medium mt-1">
                      {pillar.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= OUR SERVICES (ANIMATED) ================= */}
      <section
        id="services"
        className="relative py-20 px-6 bg-slate-50 overflow-hidden border-t border-slate-200"
      >
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 mb-4 text-blue-600 font-bold uppercase tracking-widest text-sm">
              <Activity className="w-5 h-5" /> Comprehensive Care
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 font-serif tracking-tight">
              Our Services
            </h2>
          </motion.div>

          <div className="space-y-12">
            {/* 1. HUMAN DIAGNOSTICS */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative bg-gradient-to-br from-white via-blue-50/50 to-indigo-50 border border-blue-100 rounded-[2.5rem] p-6 md:p-14 shadow-[0_20px_60px_-15px_rgba(59,130,246,0.15)] overflow-hidden group"
            >
              <div className="absolute -right-10 md:-right-24 top-1/2 -translate-y-1/2 text-blue-200/40 pointer-events-none z-0 transform group-hover:scale-110 transition-transform duration-1000">
                {/* Changed fixed size to responsive width/height classes */}
                <User
                  className="w-[300px] h-[300px] md:w-[500px] md:h-[500px]"
                  strokeWidth={0.5}
                />
              </div>

              <div className="relative z-10 flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
                <div className="lg:w-1/3">
                  <div className="p-4 bg-blue-600 text-white rounded-3xl w-max mb-6 shadow-lg shadow-blue-200">
                    <User className="w-8 h-8" />
                  </div>
                  <h3 className="text-4xl font-bold text-slate-900 font-serif mb-4 leading-tight">
                    Human <br /> Diagnostics
                  </h3>
                  <p className="text-slate-600 text-lg font-medium">
                    Advanced, highly personalized panels designed around your
                    unique biology and lifestyle goals.
                  </p>
                </div>

                <div className="lg:w-2/3 w-full">
                  <ul className="grid sm:grid-cols-2 gap-4">
                    {[
                      {
                        text: "Preventive health checkups",
                        icon: <ShieldCheck className="w-6 h-6" />,
                      },
                      {
                        text: "Lifestyle-based health profiles",
                        icon: <Activity className="w-6 h-6" />,
                      },
                      {
                        text: "Fitness & performance panels",
                        icon: <Dumbbell className="w-6 h-6" />,
                      },
                      {
                        text: "Hormonal & metabolic testing",
                        icon: <Beaker className="w-6 h-6" />,
                      },
                      {
                        text: "Advanced organ function analysis",
                        icon: <Heart className="w-6 h-6" />,
                      },
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-4 bg-white/80 backdrop-blur-md p-4 rounded-2xl border border-white shadow-sm hover:border-blue-300 hover:shadow-md transition-all cursor-default group/item"
                      >
                        <div className="text-blue-500 shrink-0 group-hover/item:scale-110 transition-transform">
                          {item.icon}
                        </div>
                        <span className="text-slate-800 font-bold text-lg">
                          {item.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* 2. PET DIAGNOSTICS */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-slate-700 rounded-[2.5rem] p-6 md:p-14 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.4)] overflow-hidden group text-white"
            >
              <div className="absolute -left-10 md:-left-20 top-1/2 -translate-y-1/2 text-slate-600/20 pointer-events-none z-0 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-1000">
                {/* Changed fixed size to responsive width/height classes */}
                <PawPrint
                  className="w-[300px] h-[300px] md:w-[500px] md:h-[500px]"
                  strokeWidth={0.5}
                />
              </div>

              <div className="relative z-10 flex flex-col lg:flex-row-reverse gap-12 lg:gap-20 items-center">
                <div className="lg:w-1/3">
                  <div className="p-4 bg-amber-500 text-slate-900 rounded-3xl w-max mb-6 shadow-lg shadow-amber-500/20">
                    <PawPrint className="w-8 h-8" />
                  </div>
                  <h3 className="text-4xl font-bold text-white font-serif mb-4 leading-tight">
                    Pet <br /> Diagnostics
                  </h3>
                  <div className="bg-slate-800/80 border-l-4 border-amber-500 p-5 rounded-r-2xl mt-6 backdrop-blur-sm">
                    <p className="text-amber-50 font-serif italic text-lg leading-snug">
                      Because your pets deserve the{" "}
                      <span className="text-amber-400 font-bold not-italic">
                        same level of care
                      </span>{" "}
                      as you.
                    </p>
                  </div>
                </div>

                <div className="lg:w-2/3 w-full">
                  <ul className="grid sm:grid-cols-2 gap-4">
                    {[
                      {
                        text: "Health screening for dogs & cats",
                        icon: <Stethoscope className="w-6 h-6" />,
                      },
                      {
                        text: "Preventive wellness panels",
                        icon: <ShieldCheck className="w-6 h-6" />,
                      },
                      {
                        text: "Infection & disease detection",
                        icon: <Microscope className="w-6 h-6" />,
                      },
                      {
                        text: "Nutrition & deficiency analysis",
                        icon: <HeartPulse className="w-6 h-6" />,
                      },
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-4 bg-slate-800/60 backdrop-blur-md p-4 rounded-2xl border border-slate-700 hover:border-amber-500/50 hover:bg-slate-800 transition-all cursor-default group/item"
                      >
                        <div className="text-amber-500 shrink-0 group-hover/item:scale-110 transition-transform">
                          {item.icon}
                        </div>
                        <span className="text-slate-200 font-bold text-lg">
                          {item.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="relative py-16 px-6 bg-gradient-to-b from-white via-slate-50 to-blue-50/50 overflow-hidden border-b border-blue-100/50">
        {/* Large Process/Settings Watermark. Responsive sizing. */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-blue-500/5 pointer-events-none z-0 transform rotate-12">
          <Settings
            className="w-[400px] h-[400px] md:w-[800px] md:h-[800px]"
            strokeWidth={0.5}
          />
        </div>

        {/* Soft Ambient Background Glows to make it vibrant but clean */}
        <div className="absolute top-0 left-[-10%] w-[600px] h-[600px] bg-blue-100/50 rounded-full mix-blend-multiply filter blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 right-[-10%] w-[600px] h-[600px] bg-indigo-100/40 rounded-full mix-blend-multiply filter blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header (Animated to slide up) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 mb-4 text-blue-600 font-bold uppercase tracking-widest text-sm">
              <Settings className="w-5 h-5" /> The Process
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 font-serif tracking-tight mb-6">
              Simple. Smart. Scientific.
            </h2>
            <p className="text-xl text-slate-500 font-medium max-w-2xl mx-auto">
              We’ve removed the guesswork from healthcare. Getting the right
              tests is now as easy as 1-2-3-4.
            </p>
          </motion.div>

          {/* Steps Timeline Grid */}
          <div className="relative grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {/* Horizontal Connecting Line (Visible only on large screens) */}
            <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-blue-100 via-indigo-200 to-blue-100 z-0"></div>

            {[
              {
                num: "1",
                title: "Answer a few questions",
                desc: "We understand your lifestyle, habits & health goals.",
                icon: <ClipboardList className="w-8 h-8" />,
                delay: 0.1,
              },
              {
                num: "2",
                title: "Get a personalized profile",
                desc: "AI + medical expertise designs your test plan.",
                icon: <Brain className="w-8 h-8" />,
                delay: 0.3,
              },
              {
                num: "3",
                title: "Sample collection & testing",
                desc: "Safe, accurate, and incredibly convenient.",
                icon: <TestTubes className="w-8 h-8" />,
                delay: 0.5,
              },
              {
                num: "4",
                title: "Smart reports & insights",
                desc: "Actionable results—not just confusing numbers.",
                icon: <LineChart className="w-8 h-8" />,
                delay: 0.7,
              },
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: step.delay,
                  ease: "easeOut",
                }}
                className="relative z-10 flex flex-col items-center text-center group"
              >
                {/* Icon Container with Hover Animation */}
                <div className="w-24 h-24 bg-white border-4 border-slate-50 shadow-xl rounded-full flex items-center justify-center text-blue-600 mb-8 relative group-hover:border-blue-100 group-hover:shadow-blue-200 group-hover:-translate-y-2 transition-all duration-300">
                  {/* Floating Number Badge */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-indigo-600 text-white font-bold rounded-full flex items-center justify-center border-2 border-white shadow-sm">
                    {step.num}
                  </div>
                  <div className="transform group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-3 font-serif">
                  {step.title}
                </h3>
                <p className="text-slate-500 font-medium leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="relative py-16 px-6 bg-gradient-to-br from-cyan-50/60 via-white to-blue-50/80 overflow-hidden border-b border-cyan-100/50">
        {/* Large Trust/Care Watermark. Adjusted left positioning for mobile. */}
        <div className="absolute left-[-20%] md:left-[-5%] top-1/2 -translate-y-1/2 text-cyan-500/5 pointer-events-none z-0 transform -rotate-12">
          <HeartHandshake
            className="w-[400px] h-[400px] md:w-[800px] md:h-[800px]"
            strokeWidth={0.5}
          />
        </div>

        {/* Very subtle background styling */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_left,rgba(6,182,212,0.05),transparent_50%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            {/* LEFT: Heading Area */}
            <div className="lg:w-5/12">
              <div className="inline-flex items-center gap-2 mb-6 text-blue-600 font-bold uppercase tracking-widest text-sm bg-blue-50 px-4 py-2 rounded-full w-max">
                <Heart className="w-4 h-4 fill-blue-600" /> The Right Choice
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 font-serif tracking-tight mb-8 leading-tight">
                Why Choose <br />
                <span className="text-blue-600">Diagnostic Kart?</span>
              </h2>
              <p className="text-xl text-slate-500 font-medium leading-relaxed">
                We don’t just process samples; we decode your health. Experience
                a platform where advanced science meets genuine care for your
                entire family.
              </p>
            </div>

            {/* RIGHT: High-End Feature Strips */}
            <div className="lg:w-7/12 w-full flex flex-col gap-4">
              {[
                {
                  text: "Personalized testing approach",
                  icon: <Fingerprint className="w-7 h-7" />,
                  delay: 0.1,
                },
                {
                  text: "Scientific & data-backed profiles",
                  icon: <Database className="w-7 h-7" />,
                  delay: 0.2,
                },
                {
                  text: "Human + pet diagnostics in one platform",
                  icon: <HeartHandshake className="w-7 h-7" />,
                  delay: 0.3,
                },
                {
                  text: "Accurate, quality-controlled reports",
                  icon: <FileCheck className="w-7 h-7" />,
                  delay: 0.4,
                },
                {
                  text: "Focus on prevention, not just detection",
                  icon: <ShieldPlus className="w-7 h-7" />,
                  delay: 0.5,
                },
              ].map((feature, i) => (
                <div
                  key={i}
                  className="group flex items-center gap-6 p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-300 hover:bg-blue-50/50 transition-all duration-300 cursor-default"
                >
                  {/* Added shrink-0 to ensure the icon remains a perfect square */}
                  <div className="shrink-0 p-4 bg-blue-50 text-blue-600 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-inner">
                    {feature.icon}
                  </div>
                  <h4 className="text-xl font-bold text-slate-800 group-hover:text-blue-900 transition-colors">
                    {feature.text}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= OUR PHILOSOPHY (Redesigned) ================= */}
      <section className="relative py-20 px-6 bg-gradient-to-tr from-orange-50/50 via-amber-50/30 to-rose-50/40 overflow-hidden border-b border-amber-100/50">
        {/* Large Philosophy/Idea Watermark. Responsive sizing. */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-amber-600/5 pointer-events-none z-0 transform rotate-6">
          <Lightbulb
            className="w-[350px] h-[350px] md:w-[700px] md:h-[700px]"
            strokeWidth={0.5}
          />
        </div>

        {/* Soft, airy background glows that extend to the edges - updated to match the warm theme */}
        <div className="absolute top-0 right-[-10%] w-[600px] h-[600px] bg-amber-100/60 rounded-full mix-blend-multiply filter blur-[100px] opacity-70 pointer-events-none" />
        <div className="absolute bottom-0 left-[-10%] w-[600px] h-[600px] bg-rose-100/50 rounded-full mix-blend-multiply filter blur-[100px] opacity-70 pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            {/* Changed from text-blue-100 to text-orange-200/80 to perfectly match the warm gradient background */}
            <Quote className="w-16 h-16 text-orange-200/80 mx-auto mb-8 transform -scale-x-100" />

            <h3 className="text-sm font-bold text-orange-200/80 uppercase tracking-[0.3em] mb-8">
              Our Philosophy
            </h3>

            <div className="text-3xl md:text-5xl font-serif text-slate-800 leading-relaxed mb-10 max-w-4xl mx-auto font-bold">
              <span className="block mb-2">One test does not fit all.</span>
              <span className="block text-slate-400">
                One body does not follow standard rules.
              </span>
            </div>

            <p className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-6">
              That's why we believe:
            </p>

            {/* Utilizing the cursive font for a highly personalized, elegant quote */}
            <h2 className="text-4xl md:text-5xl font-cursive text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 py-4 leading-tight">
              "Your health profile should be as unique as you are."
            </h2>
          </motion.div>
        </div>
      </section>

      {/* ================= CALL TO ACTION (Moved to Page) ================= */}
      <section className="relative py-16 px-6 bg-slate-900 text-white overflow-hidden">
        {/* Sleek, professional dark background to anchor the bottom of the page */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(59,130,246,0.15),transparent_70%)] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-700 to-transparent opacity-50" />

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 mb-6 text-indigo-400 font-bold uppercase tracking-widest text-sm bg-indigo-500/10 px-5 py-2.5 rounded-full border border-indigo-500/20">
              <Sparkles className="w-4 h-4" /> The Next Step
            </div>

            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 font-serif leading-tight">
              Start Your Health <br className="hidden md:block" /> Journey
              Today.
            </h2>

            <p className="text-xl md:text-xl text-slate-400 mb-12 font-medium max-w-2xl mx-auto">
              Whether for you or your pet, get diagnostics that truly understand
              your needs.
            </p>

            {/* Added w-full to the button on mobile, keeping it auto-width (sm:w-auto) on desktop */}
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link
                href="/tests"
                className="w-full sm:w-auto flex items-center justify-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-blue-900/20 hover:bg-blue-500 transition-all hover:-translate-y-1 text-lg group"
              >
                Book a Test Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= SCIENTIFIC BOARD ================= */}
      <section className="relative py-16 px-6 bg-white overflow-hidden border-b border-slate-100">
        {/* Soft Ambient Background Glows */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50 rounded-full mix-blend-multiply filter blur-[80px] opacity-70 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-slate-100 rounded-full mix-blend-multiply filter blur-[80px] opacity-70 pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* TOP: Centered Header Area */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 mb-6 text-blue-600 font-bold uppercase tracking-widest text-sm bg-blue-50 px-4 py-2 rounded-full shadow-sm border border-blue-100/50">
              <Microscope className="w-4 h-4" /> Our Scientific Board
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 font-serif tracking-tight mb-6 leading-tight">
              Guided by{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Experts.
              </span>
            </h2>

            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              At Diagnostic Kart, every test and profile is guided by our
              Scientific Board. They are a team of medical experts, researchers,
              and specialists who ensure that:
            </p>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
            {/* LEFT: Image & Quote Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="lg:w-1/2 w-full"
            >
              <div className="bg-slate-50 border border-slate-200 p-3 rounded-[2.5rem] shadow-xl flex flex-col gap-3 group">
                {/* Image Container - Using w-full, h-auto, and object-contain stops the zoom/cropping */}
                <div className="rounded-[2rem] overflow-hidden bg-white w-full flex items-center justify-center border border-slate-100">
                  <Image
                    src="/images/scientific-board.png"
                    alt="Scientific Board"
                    width={800}
                    height={600}
                    className="w-full h-auto object-contain transform group-hover:scale-105 transition-transform duration-1000"
                  />
                </div>

                {/* The Quote sitting neatly below the image */}
                <div className="bg-slate-900 text-white p-6 md:p-8 rounded-[2rem] shadow-inner text-center md:text-left">
                  <p className="font-serif italic text-xl md:text-xl text-blue-50">
                    "Health is not random. <br className="hidden lg:block" />
                    <span className="text-white font-bold not-italic">
                      It is based on science.
                    </span>
                    "
                  </p>
                </div>
              </div>
            </motion.div>

            {/* RIGHT: Checklist & Why It Matters */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="lg:w-1/2 w-full flex flex-col gap-8"
            >
              {/* Checklist */}
              <ul className="space-y-4">
                {[
                  { text: "Every test is scientifically valid" },
                  { text: "Every profile is logically designed" },
                  { text: "Every recommendation is medically meaningful" },
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-4 bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 hover:-translate-y-0.5 transition-all cursor-default"
                  >
                    <div className="text-blue-600 bg-blue-50 p-2.5 rounded-xl shrink-0">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <span className="text-slate-800 font-bold text-lg">
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Dark "Why It Matters" Accent Box */}
              <div className="bg-slate-900 rounded-3xl p-8 relative overflow-hidden text-white shadow-xl mt-auto">
                {/* Internal Glow Effect */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500 rounded-full mix-blend-screen filter blur-[60px] opacity-20 pointer-events-none" />

                <h3 className="text-xl font-bold font-serif mb-4 text-indigo-300 flex items-center gap-2">
                  <Sparkles className="w-5 h-5" /> Why It Matters
                </h3>
                <p className="text-slate-300 mb-6 font-medium leading-relaxed">
                  Our Scientific Board acts as the foundation behind everything
                  we do—from creating personalized profiles to selecting the
                  right tests for you.
                </p>

                <div className="bg-slate-800/50 border border-slate-700 p-5 rounded-2xl backdrop-blur-sm flex items-start gap-4">
                  <Info className="w-6 h-6 text-indigo-400 shrink-0 mt-0.5" />
                  <p className="text-slate-100 font-medium text-lg leading-snug">
                    They make sure your reports are not just numbers, but{" "}
                    <span className="text-white font-bold bg-indigo-500/20 px-2 py-0.5 rounded ml-1 border border-indigo-500/30 shadow-inner block mt-2 md:inline md:mt-0">
                      accurate health insights.
                    </span>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= COMING SOON: AI HEALTH ASSISTANT ================= */}
      <section
        id="ai"
        className="relative py-16 px-6 bg-slate-950 text-white overflow-hidden border-b border-slate-900"
      >
        {/* Futuristic AI Glowing Backgrounds */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-600/20 rounded-full mix-blend-screen filter blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full mix-blend-screen filter blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* ROW 1: Intro & AI Image */}
          <div className="flex flex-col lg:flex-row gap-16 items-center mb-12">
            {/* Left: Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.7 }}
              className="lg:w-1/2"
            >
              <div className="inline-flex items-center gap-2 mb-6 text-indigo-300 font-bold uppercase tracking-widest text-sm bg-indigo-500/10 border border-indigo-500/20 px-4 py-2 rounded-full w-max shadow-[0_0_15px_rgba(99,102,241,0.2)]">
                <Zap className="w-4 h-4 text-indigo-400" /> Coming Soon
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-serif leading-tight">
                Smart Chat. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
                  Smarter Health.
                </span>
              </h2>

              <p className="text-xl text-slate-300 font-medium leading-relaxed mb-8">
                Meet your AI Health Assistant. Coming soon at Diagnostic Kart —
                a smart chatbot that understands you, your lifestyle, and your
                health needs.{" "}
                <span className="text-white font-bold">
                  No more guessing which tests to take.
                </span>
              </p>

              <div className="flex flex-col gap-4 bg-slate-900/50 p-6 rounded-2xl border border-slate-800 backdrop-blur-md">
                <div className="flex items-center gap-4 text-indigo-200 font-medium text-lg">
                  {/* Added shrink-0 so the icon stays perfectly square on mobile */}
                  <div className="p-2 bg-indigo-500/20 rounded-lg shrink-0">
                    <MessageSquare className="w-5 h-5 text-indigo-400" />
                  </div>
                  Just answer a few simple questions...
                </div>
                <div className="flex items-center gap-4 text-cyan-200 font-medium text-lg">
                  <div className="p-2 bg-cyan-500/20 rounded-lg shrink-0">
                    <Sparkles className="w-5 h-5 text-cyan-400" />
                  </div>
                  Get a personalized health profile instantly.
                </div>
              </div>
            </motion.div>

            {/* Right: AI Visual / Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.7 }}
              className="lg:w-1/2 w-full flex justify-center"
            >
              <div className="relative w-full max-w-md">
                {/* Glowing aura behind the image - changed to rounded-3xl */}
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600 to-cyan-500 rounded-3xl blur-2xl opacity-20 animate-pulse" />

                {/* Changed from rounded-full to rounded-3xl, and removed aspect-square */}
                <div className="relative w-full bg-slate-900 border border-slate-700/50 rounded-3xl shadow-2xl p-8 backdrop-blur-xl flex items-center justify-center overflow-hidden group">
                  <Image
                    src="/images/diko-ai.png"
                    alt="Diko AI Assistant"
                    width={500}
                    height={500}
                    className="w-full h-auto object-contain transform group-hover:scale-105 transition-transform duration-700 z-10"
                  />
                  {/* Decorative AI scanning line */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-cyan-400/50 shadow-[0_0_20px_rgba(34,211,238,0.8)] z-20 animate-[scan_3s_ease-in-out_infinite]" />
                </div>
              </div>
            </motion.div>
          </div>

          {/* ROW 2: How It Works (5 Step Process) */}
          <div className="mb-12">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-serif font-bold text-white mb-2 flex items-center justify-center gap-3">
                <BrainCircuit className="w-8 h-8 text-indigo-400" /> How It
                Works
              </h3>
              <p className="text-slate-400 font-medium">
                Simple, seamless, and deeply intelligent.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {[
                {
                  step: "01",
                  title: "Chat with AI",
                  desc: "Answer easy questions about your lifestyle, diet, sleep & habits.",
                  icon: <Bot className="w-6 h-6" />,
                },
                {
                  step: "02",
                  title: "Smart Analysis",
                  desc: "Our AI studies your inputs using medical & scientific logic.",
                  icon: <Brain className="w-6 h-6" />,
                },
                {
                  step: "03",
                  title: "Custom Profile",
                  desc: "You get a health profile designed specifically and only for you.",
                  icon: <Fingerprint className="w-6 h-6" />,
                },
                {
                  step: "04",
                  title: "Right Tests",
                  desc: "No unnecessary tests—only what your body actually needs.",
                  icon: <ListChecks className="w-6 h-6" />,
                },
                {
                  step: "05",
                  title: "Clear Insights",
                  desc: "Actionable guidance to improve your overall health.",
                  icon: <Eye className="w-6 h-6" />,
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-slate-900/40 border border-slate-800 p-6 rounded-2xl relative group hover:bg-slate-800/60 hover:border-indigo-500/50 transition-all"
                >
                  <div className="text-5xl font-bold text-white/5 absolute top-4 right-4 z-0 pointer-events-none group-hover:text-indigo-400/20 transition-colors">
                    {item.step}
                  </div>
                  <div className="relative z-10">
                    <div className="text-indigo-400 mb-4">{item.icon}</div>
                    <h4 className="text-lg font-bold text-slate-100 mb-2">
                      {item.title}
                    </h4>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ROW 3: Three Pillars (Why It Matters, Pets, Vision) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {/* Box 1: Why This Matters */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              className="bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 p-8 rounded-3xl shadow-xl"
            >
              <div className="inline-flex items-center gap-2 text-cyan-400 font-bold mb-6">
                <Target className="w-6 h-6" /> Why This Matters
              </div>
              <ul className="space-y-4">
                {[
                  "No more confusing test lists",
                  "No unnecessary spending",
                  "No generic reports",
                  "Only relevant, personalized diagnostics",
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5" />
                    <span className="text-slate-300 font-medium">{text}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Box 2: Pets */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-indigo-900/40 to-slate-900 border border-indigo-500/30 p-8 rounded-3xl shadow-xl relative overflow-hidden group"
            >
              {/* Watermark */}
              <PawPrint className="absolute -bottom-10 -right-10 w-64 h-64 text-indigo-500/10 transform group-hover:scale-110 transition-transform duration-700 pointer-events-none" />

              <div className="inline-flex items-center gap-2 text-indigo-300 font-bold mb-6 relative z-10">
                <PawPrint className="w-6 h-6" /> For You & Your Pets
              </div>
              <p className="text-slate-300 font-medium leading-relaxed relative z-10 text-lg">
                Our AI doesn’t stop at humans. It also helps create{" "}
                <span className="text-indigo-200 font-bold">
                  health profiles for your pets
                </span>
                , analyzing their unique lifestyle and conditions.
              </p>
            </motion.div>

            {/* Box 3: Vision */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 p-8 rounded-3xl shadow-xl flex flex-col justify-center"
            >
              <div className="inline-flex items-center gap-2 text-white font-bold mb-6">
                <Eye className="w-6 h-6" /> Our Vision
              </div>
              <h4 className="text-2xl font-serif text-slate-100 mb-2 italic">
                Your health is unique.
              </h4>
              <h4 className="text-2xl font-serif text-slate-400 mb-8 italic">
                Your tests should be too.
              </h4>

              <div className="flex flex-wrap gap-3 md:gap-4 items-center font-bold text-xs md:text-sm tracking-widest uppercase text-indigo-400 mt-auto">
                <span>Simple</span>
                <span className="w-1.5 h-1.5 rounded-full bg-slate-700 hidden sm:block" />
                <span>Smart</span>
                <span className="w-1.5 h-1.5 rounded-full bg-slate-700 hidden sm:block" />
                <span>Personalized</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
