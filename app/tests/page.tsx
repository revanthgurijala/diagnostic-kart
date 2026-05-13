"use client";

import { useState, useEffect } from "react";
import { Search, Filter } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link"; // We use Link to navigate safely

export default function TestsPage() {
  const [profiles, setProfiles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState(""); // Search state

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/profiles/");
        if (!response.ok) throw new Error("Failed to fetch");
        setProfiles(await response.json());
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchProfiles();
  }, []);

  // Filter profiles based on the search term
  const filteredProfiles = profiles.filter((profile) =>
    profile.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-slate-50">
      <section className="bg-white border-b border-slate-200 py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 font-serif">
            Explore Our <span className="text-blue-600">Health Packages</span>
          </h1>
          <div className="max-w-2xl mx-auto relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-6 w-6 text-slate-400" />
            </div>
            {/* The input now updates the search state */}
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full pl-12 pr-6 py-4 bg-slate-50 border border-slate-200 rounded-full text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Search for profiles..."
            />
          </div>
        </div>
      </section>

      <section className="py-16 px-6 max-w-7xl mx-auto">
        {loading ? (
          <div className="text-center py-10">Loading profiles...</div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProfiles.map((profile) => (
              <Link href={`/tests/${profile.id}`} key={profile.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md hover:border-blue-200 cursor-pointer transition-all"
                >
                  {profile.image && (
                    <img
                      src={`http://127.0.0.1:8000${profile.image}`}
                      alt={profile.name}
                      className="w-full h-48 object-cover rounded-xl mb-4"
                    />
                  )}
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    {profile.name}
                  </h3>
                  <p className="text-slate-500 line-clamp-2">
                    {profile.purpose_section}
                  </p>
                </motion.div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
