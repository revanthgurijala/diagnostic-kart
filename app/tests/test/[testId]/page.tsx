"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

export default function TestDetailsPage() {
  const params = useParams();
  const [test, setTest] = useState<any>(null);

  useEffect(() => {
    const fetchTest = async () => {
      const response = await fetch(
        `http://127.0.0.1:8000/api/tests/${params.testId}/`,
      );
      if (response.ok) setTest(await response.json());
    };
    fetchTest();
  }, [params.testId]);

  if (!test)
    return <div className="text-center py-20">Loading Test Details...</div>;

  const benefits = test.key_benefits
    ? test.key_benefits.split(",").map((s: string) => s.trim())
    : [];

  // Group parameters by category dynamically
  const groupedParameters = test.parameters.reduce((acc: any, param: any) => {
    const cat = param.category || "General Parameters";
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(param);
    return acc;
  }, {});

  return (
    <div className="min-h-screen bg-white py-16 px-6">
      <div className="max-w-4xl mx-auto">
        {test.image && (
          <img
            src={
              test.image?.startsWith("http")
                ? test.image
                : `http://127.0.0.1:8000${test.image}`
            }
            alt={test.name}
            className="w-full h-80 object-cover rounded-2xl mb-8 shadow-sm"
          />
        )}

        <div className="flex justify-between items-end mb-8 border-b pb-6">
          <h1 className="text-4xl font-extrabold text-slate-900">
            {test.name}
          </h1>
          <div className="text-right">
            <span className="text-sm font-bold text-slate-400 uppercase">
              Price
            </span>
            <div className="text-3xl font-bold text-blue-600">
              ₹{test.price}
            </div>
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">
            Key Benefits
          </h2>
          <div className="flex flex-wrap gap-2">
            {benefits.map((benefit: string, i: number) => (
              <span
                key={i}
                className="bg-blue-50 text-blue-700 px-4 py-2 rounded-lg font-medium"
              >
                {benefit}
              </span>
            ))}
          </div>
        </div>

        <h2 className="text-2xl font-bold text-slate-800 mb-6">
          Test Parameters Included
        </h2>
        <div className="space-y-8">
          {Object.entries(groupedParameters).map(
            ([category, params]: [string, any]) => (
              <div
                key={category}
                className="bg-slate-50 rounded-xl p-6 border border-slate-100"
              >
                <h3 className="text-lg font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2">
                  {category}
                </h3>
                <div className="space-y-4">
                  {params.map((param: any, idx: number) => (
                    <div
                      key={idx}
                      className="flex flex-col md:flex-row md:items-center justify-between"
                    >
                      <span className="font-semibold text-slate-800">
                        {param.name}
                      </span>
                      {param.purpose && (
                        <span className="text-sm text-slate-500 mt-1 md:mt-0 md:max-w-md text-right">
                          {param.purpose}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ),
          )}
        </div>

        <div className="mt-12 text-center">
          <Link
            href={`/book/${test.id}`}
            className="inline-block bg-slate-900 text-white px-10 py-4 rounded-xl text-lg font-bold shadow-lg hover:bg-blue-600 transition-colors"
          >
            Proceed to Booking
          </Link>
        </div>
      </div>
    </div>
  );
}
