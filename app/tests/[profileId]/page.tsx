"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import ProfileCard from "../../components/ProfileCard"; // Adjusted path

export default function ProfileDetailsPage() {
  const params = useParams();
  const [profile, setProfile] = useState<any>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const response = await fetch(
        `http://127.0.0.1:8000/api/profiles/${params.profileId}/`,
      );
      if (response.ok) setProfile(await response.json());
    };
    fetchProfile();
  }, [params.profileId]);

  if (!profile) return <div className="text-center py-20">Loading...</div>;

  return (
    <div className="min-h-screen bg-slate-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Profile Banner */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 mb-12">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-6">
            {profile.name}
          </h1>
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div className="bg-blue-50 p-4 rounded-lg">
              <span className="font-bold text-blue-800 block mb-1">
                Purpose
              </span>
              <p className="text-slate-600">{profile.purpose_section}</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <span className="font-bold text-green-800 block mb-1">
                Key Benefits
              </span>
              <p className="text-slate-600">{profile.benefits_section}</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <span className="font-bold text-purple-800 block mb-1">
                Best For
              </span>
              <p className="text-slate-600">{profile.best_for_section}</p>
            </div>
          </div>
        </div>

        {/* Tests Grid */}
        <h2 className="text-2xl font-bold text-slate-800 mb-6">
          Available Tests in {profile.name}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {profile.tests.map((test: any) => (
            // Wrapping your ProfileCard in a Link to go to the final details page
            <Link href={`/tests/test/${test.id}`} key={test.id}>
              <ProfileCard test={test} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
