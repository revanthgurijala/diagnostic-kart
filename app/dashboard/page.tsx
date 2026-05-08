"use client"; // This MUST be the very first line

import React from "react";

export default function AdminDashboard() {
  // --- HANDLER FOR MANUAL ENTRY ---
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Create an object from the form fields
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("http://127.0.0.1:8000/api/profiles/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("Health Profile Added Successfully!");
        (e.target as HTMLFormElement).reset(); // Clear the form
      } else {
        alert("Error adding profile. Check if Django is running.");
      }
    } catch (error) {
      console.error("Fetch error:", error);
      alert("Could not connect to the Python backend.");
    }
  };

  // --- HANDLER FOR BULK EXCEL UPLOAD ---
  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;

    alert("Uploading and processing Excel file... Please wait.");

    const formData = new FormData();
    formData.append("file", e.target.files[0]);

    try {
      const res = await fetch("http://127.0.0.1:8000/api/bulk-upload/", {
        method: "POST",
        body: formData, // Notice we don't set Content-Type here; the browser does it automatically for FormData
      });

      if (res.ok) {
        alert("Excel data synced to Diagnostic Kart database successfully!");
      } else {
        alert(
          "Failed to upload. Ensure your Python backend BulkUploadView is correct.",
        );
      }
    } catch (error) {
      console.error("Upload error:", error);
      alert("Could not connect to the Python backend for upload.");
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 p-12 text-white font-sans">
      <h1 className="text-3xl font-bold mb-10 text-blue-400">
        Diagnostic Kart Master Control
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* --- LEFT COLUMN: MANUAL ENTRY --- */}
        <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 shadow-xl">
          <h2 className="text-xl font-bold mb-6 text-white">Manual Entry</h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="flex flex-col gap-1">
              <label className="text-sm text-slate-400 font-semibold">
                Profile Name
              </label>
              <input
                name="name"
                required
                placeholder="e.g. Muscle Performance"
                className="p-3 rounded-lg text-slate-900 bg-slate-100 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm text-slate-400 font-semibold">
                Category
              </label>
              <input
                name="category"
                required
                placeholder="e.g. Anabolic Hormones"
                className="p-3 rounded-lg text-slate-900 bg-slate-100 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm text-slate-400 font-semibold">
                Tests Included
              </label>
              <textarea
                name="tests_included"
                required
                placeholder="e.g. Testosterone, TSH, Vitamin D, B12"
                className="p-3 rounded-lg text-slate-900 bg-slate-100 focus:ring-2 focus:ring-blue-500 outline-none h-24 resize-none"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm text-slate-400 font-semibold">
                Purpose / Insight
              </label>
              <textarea
                name="purpose"
                required
                placeholder="e.g. Detects early sugar imbalance"
                className="p-3 rounded-lg text-slate-900 bg-slate-100 focus:ring-2 focus:ring-blue-500 outline-none h-20 resize-none"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm text-slate-400 font-semibold">
                Price (₹)
              </label>
              <input
                name="price"
                type="number"
                required
                placeholder="500"
                className="p-3 rounded-lg text-slate-900 bg-slate-100 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <button
              type="submit"
              className="bg-green-600 hover:bg-green-500 transition-colors p-4 rounded-xl font-bold mt-2 shadow-lg shadow-green-900/50"
            >
              Add to Database
            </button>
          </form>
        </div>

        {/* --- RIGHT COLUMN: BULK UPLOAD --- */}
        <div className="bg-blue-900/20 p-8 rounded-3xl border border-blue-500/30 h-fit shadow-xl">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-3xl">📊</span>
            <h2 className="text-xl font-bold text-white">
              Bulk Import (Excel)
            </h2>
          </div>

          <p className="text-blue-200 text-sm mb-8 leading-relaxed">
            Upload your{" "}
            <span className="font-bold text-white">
              "zym profiles web content_3.xlsx"
            </span>{" "}
            file here. The system will read all sheets and automatically
            generate the health profiles for the frontend.
          </p>

          <div className="relative">
            <input
              type="file"
              accept=".xlsx, .xls, .csv"
              onChange={handleFileUpload}
              className="block w-full text-sm text-slate-300 
                file:mr-4 file:py-3 file:px-6 
                file:rounded-xl file:border-0 
                file:text-sm file:font-bold 
                file:bg-blue-600 file:text-white 
                hover:file:bg-blue-500 file:cursor-pointer file:transition-colors
                cursor-pointer border border-blue-800/50 rounded-xl bg-slate-900 p-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
