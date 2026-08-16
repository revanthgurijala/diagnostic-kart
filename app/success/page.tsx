"use client";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6 font-sans">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-xl p-10 text-center border border-slate-100">
        <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
        <h1 className="text-3xl font-extrabold text-slate-900 mb-4">
          Payment Successful!
        </h1>
        <p className="text-slate-500 mb-8">
          Your booking has been confirmed. We have sent the details to your
          email and phone number. Our team will contact you shortly.
        </p>
        <Link
          href="/tests"
          className="block w-full bg-slate-900 hover:bg-blue-600 text-white font-bold py-4 rounded-xl transition-colors"
        >
          Browse More Tests
        </Link>
      </div>
    </div>
  );
}
