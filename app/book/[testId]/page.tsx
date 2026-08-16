"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Script from "next/script"; // Next.js way to load external scripts

export default function BookingPage() {
  const params = useParams();
  const router = useRouter();
  const [test, setTest] = useState<any>(null);

  // Form State
  const [patientName, setPatientName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const todayDateStr = new Date().toISOString().split("T")[0];

  // Fetch the test details based on the URL
  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/tests/${params.testId}/`)
      .then((res) => res.json())
      .then((data) => setTest(data));
  }, [params.testId]);

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // ==========================================
    // FRONTEND VALIDATIONS
    // ==========================================
    // 1. Phone Number Validation (Requires Country Code, e.g. +91)
    const phoneRegex = /^\+?[1-9]\d{9,14}$/;
    if (!phoneRegex.test(phone)) {
      alert(
        "Please enter a valid mobile number with country code (e.g., +919876543210)",
      );
      setIsProcessing(false);
      return;
    }

    // 2. Email Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      setIsProcessing(false);
      return;
    }

    // 3. Time Validation (If booking for today, time must be in the future)
    if (date === todayDateStr) {
      const now = new Date();
      // Format current time to HH:MM (24-hour format)
      const currentTime = `${now.getHours().toString().padStart(2, "0")}:${now.getMinutes().toString().padStart(2, "0")}`;

      if (time < currentTime) {
        alert(
          "You have selected today's date. Please select a future time slot.",
        );
        setIsProcessing(false);
        return;
      }
    }
    // ==========================================

    try {
      // 1. Ask Django to create an order
      const orderResponse = await fetch(
        "http://127.0.0.1:8000/api/create-order/",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            test_id: test.id,
            patient_name: patientName,
            phone_number: phone,
            email: email,
            appointment_date: date,
            appointment_time: time,
          }),
        },
      );
      const orderData = await orderResponse.json();

      if (!orderResponse.ok) throw new Error(orderData.error);

      // 2. Configure the Razorpay Popup Window
      const options = {
        key: orderData.key,
        amount: orderData.amount,
        currency: "INR",
        name: "Diagnostic Kart",
        description: `Booking for ${test.name}`,
        order_id: orderData.order_id,

        // 3. What happens when payment is successful?
        handler: async function (response: any) {
          // Send signature back to Django for verification
          const verifyRes = await fetch(
            "http://127.0.0.1:8000/api/verify-payment/",
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(response),
            },
          );

          if (verifyRes.ok) {
            router.push("/success");
          } else {
            alert("Payment verification failed.");
          }
        },
        prefill: {
          name: patientName,
          contact: phone,
        },
        theme: {
          color: "#2563EB", // Tailwind blue-600
        },
      };

      // 4. Open the Razorpay Window!
      const rzp = new (window as any).Razorpay(options);
      rzp.open();
    } catch (error) {
      alert("Something went wrong. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  if (!test)
    return (
      <div className="text-center py-20 font-bold">
        Loading secure checkout...
      </div>
    );

  return (
    <div className="min-h-screen bg-slate-50 py-16 px-6 font-sans">
      {/* Load Razorpay Script in the background */}
      <Script
        src="https://checkout.razorpay.com/v1/checkout.js"
        strategy="lazyOnload"
      />

      <div className="max-w-xl mx-auto bg-white rounded-3xl shadow-xl p-8 border border-slate-100">
        <h1 className="text-3xl font-extrabold text-slate-900 mb-2">
          Book Your Test
        </h1>
        <p className="text-slate-500 mb-8 pb-6 border-b border-slate-100">
          You are booking <strong className="text-blue-600">{test.name}</strong>{" "}
          for ₹{test.price}.
        </p>

        <form onSubmit={handlePayment} className="space-y-5">
          <div>
            <label className="text-sm font-bold text-slate-700 block mb-2">
              Patient Full Name
            </label>
            <input
              type="text"
              required
              value={patientName}
              onChange={(e) => setPatientName(e.target.value)}
              className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 text-slate-900"
            />
          </div>
          <div>
            <label className="text-sm font-bold text-slate-700 block mb-2">
              WhatsApp / Phone Number
            </label>
            <input
              type="tel"
              required
              placeholder="+91"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 text-slate-900"
            />
            <span className="text-xs text-slate-500 mt-1 block">
              Include country code (e.g., +91)
            </span>
          </div>
          <div>
            <label className="text-sm font-bold text-slate-700 block mb-2">
              Email Address (For Receipt)
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 text-slate-900"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-bold text-slate-700 block mb-2">
                Preferred Date
              </label>
              <input
                type="date"
                required
                min={todayDateStr} // Native HTML block for past dates!
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 text-slate-900"
              />
            </div>
            <div>
              <label className="text-sm font-bold text-slate-700 block mb-2">
                Preferred Time
              </label>
              <input
                type="time"
                required
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 text-slate-900"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isProcessing}
            className="w-full bg-slate-900 hover:bg-blue-600 text-white font-bold py-4 rounded-xl shadow-lg transition-colors mt-6 text-lg"
          >
            {isProcessing
              ? "Connecting securely..."
              : `Pay ₹${test.price} & Confirm Booking`}
          </button>
        </form>
      </div>
    </div>
  );
}
