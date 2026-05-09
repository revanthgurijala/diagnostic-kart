"use client";

import {
  Search,
  Filter,
  Activity,
  Microscope,
  ArrowRight,
  Stethoscope,
} from "lucide-react";
import { motion } from "framer-motion";

export default function TestsPage() {
  // These categories act as placeholders for the filter tags
  const categories = [
    "All Tests",
    "Human Diagnostics",
    "Pet Diagnostics",
    "Full Body",
    "Heart Health",
    "Hormones",
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* TESTS HEADER */}
      <section className="bg-white border-b border-slate-200 py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 font-serif tracking-tight">
            Explore Our <span className="text-blue-600">Health Tests</span>
          </h1>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto mb-10">
            Browse our comprehensive directory of scientifically backed health
            tests for you and your beloved pets.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-6 w-6 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
            </div>
            <input
              type="text"
              className="block w-full pl-12 pr-28 py-4 bg-slate-50 border border-slate-200 rounded-full text-base md:text-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
              placeholder="Search for tests..."
            />
            <button className="absolute inset-y-2 right-2 px-6 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full transition-colors">
              Search
            </button>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
            <span className="text-slate-400 flex items-center gap-2 text-sm font-bold uppercase tracking-wider mr-2">
              <Filter className="w-4 h-4" /> Filter:
            </span>
            {categories.map((cat, i) => (
              <button
                key={i}
                className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${
                  i === 0
                    ? "bg-slate-800 text-white shadow-md"
                    : "bg-white border border-slate-200 text-slate-600 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* TESTS GRID (Placeholder for Excel Data) */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* This is a placeholder loop. 
            When your Excel data is ready, you will replace this array with your actual data array.
          */}
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all group flex flex-col"
            >
              <div className="flex items-start justify-between mb-4">
                <div
                  className={`p-3 rounded-2xl ${item % 2 === 0 ? "bg-amber-50 text-amber-600" : "bg-blue-50 text-blue-600"}`}
                >
                  {item % 2 === 0 ? (
                    <Stethoscope className="w-6 h-6" />
                  ) : (
                    <Microscope className="w-6 h-6" />
                  )}
                </div>
                <span className="text-slate-400 text-sm font-bold bg-slate-50 px-3 py-1 rounded-full">
                  {item % 2 === 0 ? "Pet Diagnostic" : "Human Diagnostic"}
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-2 font-serif group-hover:text-blue-700 transition-colors">
                [Test Name Placeholder]
              </h3>
              <p className="text-slate-500 text-sm mb-6 flex-grow">
                A brief description of the test will go here once the Excel data
                is mapped. It helps identify markers and overall health.
              </p>

              <div className="flex items-center justify-between border-t border-slate-100 pt-4 mt-auto">
                <span className="text-2xl font-black text-slate-800">
                  <span className="text-sm text-slate-400 font-medium block">
                    Starting at
                  </span>
                  ₹---
                </span>
                <button className="bg-slate-900 text-white w-10 h-10 rounded-full flex items-center justify-center group-hover:bg-blue-600 group-hover:-translate-y-1 shadow-md transition-all">
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
