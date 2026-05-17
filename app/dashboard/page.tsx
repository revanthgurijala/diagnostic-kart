"use client";

import { useRouter } from "next/navigation";
import * as XLSX from "xlsx";

import React, { useState, useEffect } from "react";
import {
  LayoutDashboard,
  FlaskConical,
  Users,
  Settings,
  Trash2,
  Plus,
  Edit,
  ArrowLeft,
  Upload,
  LogOut,
  Lock,
} from "lucide-react";

export default function ClientDashboard() {
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);
  const router = useRouter();

  const [activeTab, setActiveTab] = useState("profiles");
  const [currentView, setCurrentView] = useState("list"); // 'list' or 'form'

  const [previewData, setPreviewData] = useState<any[]>([]);
  const [isUploading, setIsUploading] = useState(false);

  const [profiles, setProfiles] = useState<any[]>([]);
  const [availableTests, setAvailableTests] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const [editingProfile, setEditingProfile] = useState<any>(null);
  const [editingTest, setEditingTest] = useState<any>(null);
  const [testParams, setTestParams] = useState<any[]>([
    { category: "", name: "", purpose: "" },
  ]);

  // --- FETCH DATA ---
  const fetchData = async () => {
    setLoading(true);
    try {
      const [profilesRes, testsRes] = await Promise.all([
        fetch("http://127.0.0.1:8000/api/profiles/"),
        fetch("http://127.0.0.1:8000/api/tests/"),
      ]);

      if (profilesRes.ok) setProfiles(await profilesRes.json());
      if (testsRes.ok) setAvailableTests(await testsRes.json());
    } catch (error) {
      console.error("Network error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (!token) {
      router.push("/admin-login");
    } else {
      setIsCheckingAuth(false);
      fetchData();
    }
  }, [router]);

  // 1. Reads the Excel file and shows the preview
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (evt) => {
      const bstr = evt.target?.result;
      const wb = XLSX.read(bstr, { type: "binary" });
      const wsname = wb.SheetNames[0];
      const data = XLSX.utils.sheet_to_json(wb.Sheets[wsname]);

      setPreviewData(data);
      setCurrentView("preview"); // Switch to the preview screen
    };
    reader.readAsBinaryString(file);
    // Reset the input so you can upload the same file again if needed
    e.target.value = "";
  };

  // 2. Smart-Groups the preview data and saves to Django
  const handleConfirmBulkUpload = async () => {
    setIsUploading(true);
    let successCount = 0;

    // --- STEP A: Group the rows by Test Name ---
    const groupedTests: Record<string, any> = {};
    let currentTestName = "";

    for (const item of previewData) {
      // If a row is completely empty, reset our tracker and skip it
      if (!item.name && !item.price && !item.parameter_name) {
        currentTestName = "";
        continue;
      }

      // If the name is blank, assume it belongs to the previous test (handles merged Excel cells)
      const testName = item.name ? String(item.name).trim() : currentTestName;
      if (!testName) continue; // If we still don't have a name, skip

      currentTestName = testName;

      // If this is the first time we see this test name, create its "box"
      if (!groupedTests[testName]) {
        groupedTests[testName] = {
          name: testName,
          price: item.price || 0,
          key_benefits: item.key_benefits || "",
          parameters: [],
          profile_names: [], // Array to hold profile names from Excel
        };
      } else {
        if (item.price && !groupedTests[testName].price)
          groupedTests[testName].price = item.price;
        if (item.key_benefits && !groupedTests[testName].key_benefits)
          groupedTests[testName].key_benefits = item.key_benefits;
      }

      // If the excel row has a profile name, store it
      if (
        item.profile_name &&
        !groupedTests[testName].profile_names.includes(item.profile_name)
      ) {
        groupedTests[testName].profile_names.push(item.profile_name);
      }

      // Add the parameter to this test's specific parameter list
      if (item.parameter_name) {
        groupedTests[testName].parameters.push({
          category: item.parameter_category || "General",
          name: item.parameter_name,
          purpose: item.parameter_purpose || "",
        });
      }
    }

    // --- STEP B: Loop through our grouped boxes and create OR update ---
    for (const testName in groupedTests) {
      const testData = groupedTests[testName];
      const formData = new FormData();

      formData.append("name", testData.name);
      formData.append("price", testData.price);
      formData.append(
        "key_benefits",
        testData.key_benefits || "Standard benefits",
      );
      formData.append("parameters_json", JSON.stringify(testData.parameters));

      // Map the string names from Excel to actual database Profile IDs
      if (testData.profile_names.length > 0) {
        const profileIds = testData.profile_names
          .map((name: string) => {
            const matchedProfile = profiles.find(
              (p) => p.name.toLowerCase().trim() === name.toLowerCase().trim(),
            );
            return matchedProfile ? matchedProfile.id : null;
          })
          .filter(Boolean); // removes any nulls if the profile didn't exist

        formData.append("profiles_json", JSON.stringify(profileIds));
      }

      // 1. Check if the test already exists in our database (ignoring uppercase/lowercase differences)
      const existingTest = availableTests.find(
        (t) =>
          t.name.toLowerCase().trim() === testData.name.toLowerCase().trim(),
      );

      try {
        const token = localStorage.getItem("adminToken");
        if (existingTest) {
          // 2A. UPDATE: If it exists, send a PATCH request to its specific ID
          const res = await fetch(
            `http://127.0.0.1:8000/api/tests/${existingTest.id}/`,
            {
              method: "PATCH",
              body: formData,
              headers: {
                Authorization: `Token ${token}`,
              },
            },
          );
          if (res.ok) successCount++;
        } else {
          // 2B. CREATE: If it doesn't exist, send a POST request to create a new one
          const res = await fetch("http://127.0.0.1:8000/api/tests/", {
            method: "POST",
            body: formData,
            headers: {
              Authorization: `Token ${token}`,
            },
          });
          if (res.ok) successCount++;
        }
      } catch (err) {
        console.error("Failed to upload:", testData.name);
      }
    }

    alert(`Successfully grouped and imported ${successCount} complete tests!`);
    setPreviewData([]);
    setIsUploading(false);
    setCurrentView("list");
    fetchData(); // Refresh the main table
  };

  // --- TAB SWITCHER ---
  // This ensures that when you click a new tab on the sidebar, it always opens the List view first
  const handleTabSwitch = (tab: string) => {
    setActiveTab(tab);
    setCurrentView("list");
  };

  // ==========================================
  // PROFILE HANDLERS
  // ==========================================
  const handleAddNewProfile = () => {
    setEditingProfile(null);
    setCurrentView("form");
  };

  const handleEditProfile = (profile: any) => {
    setEditingProfile(profile);
    setCurrentView("form");
  };

  const handleDeleteProfile = async (id: number, name: string) => {
    if (!window.confirm(`Delete "${name}"? This cannot be undone.`)) return;
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/api/profiles/${id}/`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Token ${localStorage.getItem("adminToken")}`,
          },
        },
      );
      if (response.ok) fetchData();
      else alert("Failed to delete.");
    } catch (error) {
      alert("Network error.");
    }
  };

  const handleSaveProfile = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const imageFile = formData.get("image") as File;
    if (imageFile && imageFile.size === 0) formData.delete("image");

    const isEditing = editingProfile !== null;
    const url = isEditing
      ? `http://127.0.0.1:8000/api/profiles/${editingProfile.id}/`
      : "http://127.0.0.1:8000/api/profiles/";
    const method = isEditing ? "PATCH" : "POST";

    try {
      const response = await fetch(url, {
        method,
        body: formData,
        headers: {
          Authorization: `Token ${localStorage.getItem("adminToken")}`,
        },
      });
      if (response.ok) {
        alert(isEditing ? "Profile Updated!" : "Profile Created!");
        fetchData();
        setCurrentView("list");
      } else alert("Error saving profile. Check your inputs.");
    } catch (error) {
      alert("Network error.");
    }
  };

  // ==========================================
  // MEDICAL TEST HANDLERS
  // ==========================================
  const handleAddNewTest = () => {
    setEditingTest(null);
    setTestParams([{ category: "", name: "", purpose: "" }]);
    setCurrentView("form");
  };

  const handleEditTest = (test: any) => {
    setEditingTest(test);
    setTestParams(
      test.parameters && test.parameters.length > 0
        ? test.parameters
        : [{ category: "", name: "", purpose: "" }],
    );
    setCurrentView("form");
  };

  const handleDeleteTest = async (id: number, name: string) => {
    if (!window.confirm(`Delete the test "${name}"? This cannot be undone.`))
      return;
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/tests/${id}/`, {
        method: "DELETE",
        headers: {
          Authorization: `Token ${localStorage.getItem("adminToken")}`,
        },
      });
      if (response.ok) fetchData();
      else alert("Failed to delete.");
    } catch (error) {
      alert("Network error.");
    }
  };

  const handleSaveTest = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const imageFile = formData.get("image") as File;
    if (imageFile && imageFile.size === 0) formData.delete("image");

    formData.append("parameters_json", JSON.stringify(testParams));

    const selectedCheckboxes = Array.from(
      e.currentTarget.querySelectorAll('input[name="profiles"]:checked'),
    );
    const profileIds = selectedCheckboxes.map((cb) =>
      parseInt((cb as HTMLInputElement).value),
    );
    formData.append("profiles_json", JSON.stringify(profileIds));

    const isEditing = editingTest !== null;
    const url = isEditing
      ? `http://127.0.0.1:8000/api/tests/${editingTest.id}/`
      : "http://127.0.0.1:8000/api/tests/";
    const method = isEditing ? "PATCH" : "POST";

    try {
      const response = await fetch(url, {
        method,
        body: formData,
        headers: {
          Authorization: `Token ${localStorage.getItem("adminToken")}`,
        },
      });
      if (response.ok) {
        alert(isEditing ? "Test Updated!" : "Test Created!");
        fetchData();
        setCurrentView("list");
      } else alert("Error saving test. Check your inputs.");
    } catch (error) {
      alert("Network error.");
    }
  };

  const handleParamChange = (index: number, field: string, value: string) => {
    const newParams = [...testParams];
    newParams[index][field] = value;
    setTestParams(newParams);
  };
  const addParamField = () =>
    setTestParams([...testParams, { category: "", name: "", purpose: "" }]);
  const removeParamField = (index: number) =>
    setTestParams(testParams.filter((_, i) => i !== index));

  if (isCheckingAuth) {
    return (
      <div className="h-screen w-full bg-slate-900 flex items-center justify-center font-sans text-white">
        <div className="flex flex-col items-center gap-4">
          <Lock className="w-8 h-8 text-blue-500 animate-pulse" />
          <p className="font-bold tracking-widest text-sm uppercase">
            Verifying Secure Access...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen w-full overflow-hidden bg-slate-50 flex flex-col md:flex-row font-sans">
      {/* SIDEBAR NAVIGATION */}
      <aside className="w-full md:w-64 flex-none h-auto md:h-full max-h-[40vh] md:max-h-full bg-slate-900 text-slate-300 flex flex-col shadow-2xl overflow-y-auto">
        <div className="p-6 border-b border-slate-800">
          <h1 className="text-xl font-extrabold text-white tracking-tight">
            Diagnostic <span className="text-blue-500">Admin</span>
          </h1>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <button
            onClick={() => handleTabSwitch("profiles")}
            className={`flex items-center gap-3 w-full p-3 rounded-xl font-semibold transition-colors ${activeTab === "profiles" ? "bg-blue-600 text-white" : "hover:bg-slate-800"}`}
          >
            <LayoutDashboard className="w-5 h-5" /> Health Profiles
          </button>

          <button
            onClick={() => handleTabSwitch("tests")}
            className={`flex items-center gap-3 w-full p-3 rounded-xl font-semibold transition-colors ${activeTab === "tests" ? "bg-blue-600 text-white" : "hover:bg-slate-800"}`}
          >
            <FlaskConical className="w-5 h-5" /> Medical Tests
          </button>

          <button
            onClick={() => handleTabSwitch("bookings")}
            className={`flex items-center gap-3 w-full p-3 rounded-xl font-semibold transition-colors ${activeTab === "bookings" ? "bg-blue-600 text-white" : "hover:bg-slate-800"}`}
          >
            <Users className="w-5 h-5" /> User Bookings
          </button>
        </nav>

        {/* --- GLOBAL TOOLS SECTION --- */}
        <div className="p-4 border-t border-slate-800 mt-auto">
          <div className="relative overflow-hidden block w-full">
            <button className="w-full bg-slate-800 hover:bg-slate-700 text-white p-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition-colors border border-slate-700 shadow-sm">
              <Upload className="w-5 h-5 text-green-400" /> Import Excel
            </button>
            <input
              type="file"
              accept=".xlsx, .xls, .csv"
              onChange={handleFileUpload}
              className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
            />
          </div>
        </div>
        {/* ADD THIS LOGOUT BUTTON */}
        <button
          onClick={() => {
            localStorage.removeItem("adminToken");
            router.push("/admin-login");
          }}
          className="w-fit mx-auto bg-red-900/30 hover:bg-red-900/60 text-red-400 py-2 px-6 rounded-xl font-semibold flex items-center justify-center gap-2 transition-colors border border-red-900/50 mt-4"
        >
          <LogOut className="w-5 h-5" /> Logout
        </button>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 p-10 overflow-y-auto">
        <div className="max-w-5xl mx-auto">
          {/* BOOKINGS TAB (COMING SOON) */}
          {activeTab === "bookings" && (
            <div className="text-center py-20">
              <h2 className="text-2xl font-bold text-slate-400">
                User Bookings
              </h2>
              <p className="text-slate-500 mt-2">
                The booking management dashboard is coming soon.
              </p>
            </div>
          )}

          {/* =========================================================================
              HEALTH PROFILES TAB 
              ========================================================================= */}

          {/* PROFILES: LIST VIEW */}
          {activeTab === "profiles" && currentView === "list" && (
            <>
              <div className="flex justify-between items-center mb-10">
                <div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-2">
                    Manage Health Profiles
                  </h2>
                  <p className="text-slate-500">
                    View, edit, or remove your package offerings.
                  </p>
                </div>
                <button
                  onClick={handleAddNewProfile}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-bold shadow-md flex items-center gap-2 transition-colors"
                >
                  <Plus className="w-5 h-5" /> Add Profile
                </button>
              </div>

              <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 text-sm uppercase tracking-wider">
                      <th className="p-5 font-bold">Profile Name</th>
                      <th className="p-5 font-bold">Tests Included</th>
                      <th className="p-5 font-bold text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {loading ? (
                      <tr>
                        <td
                          colSpan={3}
                          className="p-10 text-center text-slate-500"
                        >
                          Loading...
                        </td>
                      </tr>
                    ) : profiles.length === 0 ? (
                      <tr>
                        <td
                          colSpan={3}
                          className="p-10 text-center text-slate-500"
                        >
                          No profiles yet.
                        </td>
                      </tr>
                    ) : (
                      profiles.map((profile) => (
                        <tr
                          key={profile.id}
                          className="hover:bg-slate-50 transition-colors"
                        >
                          <td className="p-5 font-bold text-slate-900 flex items-center gap-3">
                            {profile.image ? (
                              <img
                                src={
                                  profile.image?.startsWith("http")
                                    ? profile.image
                                    : `http://127.0.0.1:8000${profile.image}`
                                }
                                alt=""
                                className="w-10 h-10 rounded-lg object-cover border border-slate-200"
                              />
                            ) : (
                              <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-400 text-xs">
                                No Img
                              </div>
                            )}
                            {profile.name}
                          </td>
                          <td className="p-5 text-slate-600">
                            <span className="bg-blue-50 text-blue-700 py-1 px-3 rounded-full text-xs font-bold">
                              {profile.tests.length} Tests
                            </span>
                          </td>
                          <td className="p-5 flex justify-end gap-2">
                            <button
                              onClick={() => handleEditProfile(profile)}
                              className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                            >
                              <Edit className="w-5 h-5" />
                            </button>
                            <button
                              onClick={() =>
                                handleDeleteProfile(profile.id, profile.name)
                              }
                              className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                            >
                              <Trash2 className="w-5 h-5" />
                            </button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </>
          )}

          {/* PROFILES: FORM VIEW */}
          {activeTab === "profiles" && currentView === "form" && (
            <div className="bg-white border border-slate-200 rounded-3xl shadow-sm p-8">
              <button
                onClick={() => setCurrentView("list")}
                className="flex items-center gap-2 text-slate-500 hover:text-blue-600 font-bold mb-8 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" /> Back to Profiles
              </button>

              <h2 className="text-2xl font-bold text-slate-900 mb-8">
                {editingProfile
                  ? "Edit Health Profile"
                  : "Create New Health Profile"}
              </h2>

              <form
                onSubmit={handleSaveProfile}
                className="flex flex-col gap-6"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-slate-700">
                      Profile Name
                    </label>
                    <input
                      name="name"
                      defaultValue={editingProfile?.name}
                      required
                      placeholder="e.g. Master Gym Package"
                      className="p-3 border border-slate-200 rounded-xl bg-slate-50 text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-slate-700">
                      Cover Image
                    </label>
                    <input
                      type="file"
                      name="image"
                      accept="image/*"
                      className="p-2 border border-slate-200 rounded-xl bg-slate-50 text-slate-900 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-blue-50 file:text-blue-700 file:font-bold hover:file:bg-blue-100 cursor-pointer"
                    />
                    {editingProfile?.image && (
                      <span className="text-xs text-slate-500">
                        Leave blank to keep current image.
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-slate-700">
                    Purpose Section
                  </label>
                  <textarea
                    name="purpose_section"
                    defaultValue={editingProfile?.purpose_section}
                    required
                    className="p-3 border border-slate-200 rounded-xl bg-slate-50 text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-blue-500 outline-none h-24"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-slate-700">
                    Key Benefits
                  </label>
                  <textarea
                    name="benefits_section"
                    defaultValue={editingProfile?.benefits_section}
                    required
                    className="p-3 border border-slate-200 rounded-xl bg-slate-50 text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-blue-500 outline-none h-24"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-slate-700">
                    Best For
                  </label>
                  <textarea
                    name="best_for_section"
                    defaultValue={editingProfile?.best_for_section}
                    required
                    className="p-3 border border-slate-200 rounded-xl bg-slate-50 text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-blue-500 outline-none h-24"
                  />
                </div>

                <div className="mt-8 flex justify-end">
                  <button
                    type="submit"
                    className="bg-slate-900 hover:bg-blue-600 text-white px-8 py-4 rounded-xl font-bold shadow-lg transition-colors"
                  >
                    {editingProfile ? "Save Profile Changes" : "Create Profile"}
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* =========================================================================
              MEDICAL TESTS TAB 
              ========================================================================= */}

          {/* TESTS: LIST VIEW */}
          {activeTab === "tests" && currentView === "list" && (
            <>
              <div className="flex justify-between items-center mb-10">
                <div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-2">
                    Manage Medical Tests
                  </h2>
                  <p className="text-slate-500">
                    Add or update the individual medical tests you offer.
                  </p>
                </div>
                <button
                  onClick={handleAddNewTest}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-bold shadow-md flex items-center gap-2 transition-colors"
                >
                  <Plus className="w-5 h-5" /> Add Test
                </button>
              </div>

              <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 text-sm uppercase tracking-wider">
                      <th className="p-5 font-bold">Test Name</th>
                      <th className="p-5 font-bold">Price</th>
                      <th className="p-5 font-bold text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {loading ? (
                      <tr>
                        <td
                          colSpan={3}
                          className="p-10 text-center text-slate-500"
                        >
                          Loading...
                        </td>
                      </tr>
                    ) : availableTests.length === 0 ? (
                      <tr>
                        <td
                          colSpan={3}
                          className="p-10 text-center text-slate-500"
                        >
                          No tests yet.
                        </td>
                      </tr>
                    ) : (
                      availableTests.map((test) => (
                        <tr
                          key={test.id}
                          className="hover:bg-slate-50 transition-colors"
                        >
                          <td className="p-5 font-bold text-slate-900 flex items-center gap-3">
                            {test.image ? (
                              <img
                                src={
                                  test.image?.startsWith("http")
                                    ? test.image
                                    : `http://127.0.0.1:8000${test.image}`
                                }
                                alt=""
                                className="w-10 h-10 rounded-lg object-cover border border-slate-200"
                              />
                            ) : (
                              <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-400 text-xs">
                                No Img
                              </div>
                            )}
                            {test.name}
                          </td>
                          <td className="p-5 text-slate-900 font-bold">
                            ₹{test.price}
                          </td>
                          <td className="p-5 flex justify-end gap-2">
                            <button
                              onClick={() => handleEditTest(test)}
                              className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                            >
                              <Edit className="w-5 h-5" />
                            </button>
                            <button
                              onClick={() =>
                                handleDeleteTest(test.id, test.name)
                              }
                              className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                            >
                              <Trash2 className="w-5 h-5" />
                            </button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </>
          )}

          {/* TESTS: FORM VIEW */}
          {activeTab === "tests" && currentView === "form" && (
            <div className="bg-white border border-slate-200 rounded-3xl shadow-sm p-8">
              <button
                onClick={() => setCurrentView("list")}
                className="flex items-center gap-2 text-slate-500 hover:text-blue-600 font-bold mb-8 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" /> Back to Tests
              </button>

              <h2 className="text-2xl font-bold text-slate-900 mb-8">
                {editingTest ? "Edit Medical Test" : "Create New Medical Test"}
              </h2>

              <form onSubmit={handleSaveTest} className="flex flex-col gap-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-slate-700">
                      Test Name
                    </label>
                    <input
                      name="name"
                      defaultValue={editingTest?.name}
                      required
                      placeholder="e.g. Complete Blood Count"
                      className="p-3 border border-slate-200 rounded-xl bg-slate-50 text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-slate-700">
                      Price (₹)
                    </label>
                    <input
                      name="price"
                      type="number"
                      step="0.01"
                      defaultValue={editingTest?.price}
                      required
                      placeholder="e.g. 500"
                      className="p-3 border border-slate-200 rounded-xl bg-slate-50 text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-slate-700">
                    Cover Image
                  </label>
                  <input
                    type="file"
                    name="image"
                    accept="image/*"
                    className="p-2 border border-slate-200 rounded-xl bg-slate-50 text-slate-900 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-blue-50 file:text-blue-700 file:font-bold hover:file:bg-blue-100 cursor-pointer"
                  />
                  {editingTest?.image && (
                    <span className="text-xs text-slate-500">
                      Leave blank to keep current image.
                    </span>
                  )}
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-slate-700">
                    Key Benefits
                  </label>
                  <textarea
                    name="key_benefits"
                    defaultValue={editingTest?.key_benefits}
                    required
                    placeholder="Enter key benefits separated by commas..."
                    className="p-3 border border-slate-200 rounded-xl bg-slate-50 text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-blue-500 outline-none h-24"
                  />
                </div>

                {/* DYNAMIC PARAMETERS SECTION */}
                <div className="mt-6 pt-6 border-t border-slate-100">
                  <div className="flex justify-between items-center mb-4">
                    <label className="text-sm font-bold text-slate-900 block">
                      Test Parameters
                    </label>
                    <button
                      type="button"
                      onClick={addParamField}
                      className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-lg font-bold hover:bg-blue-200 transition-colors"
                    >
                      + Add Parameter
                    </button>
                  </div>

                  <div className="space-y-4">
                    {testParams.map((param, index) => (
                      <div
                        key={index}
                        className="flex gap-4 items-start bg-slate-50 p-4 rounded-xl border border-slate-200"
                      >
                        <div className="grid md:grid-cols-3 gap-4 flex-1">
                          <input
                            value={param.category || ""}
                            onChange={(e) =>
                              handleParamChange(
                                index,
                                "category",
                                e.target.value,
                              )
                            }
                            placeholder="Category (e.g. Lipid Profile)"
                            className="p-2 border border-slate-200 rounded-lg text-sm text-slate-900 outline-none focus:ring-2 focus:ring-blue-500"
                          />
                          <input
                            value={param.name || ""}
                            onChange={(e) =>
                              handleParamChange(index, "name", e.target.value)
                            }
                            placeholder="Parameter Name (e.g. Cholesterol)"
                            required
                            className="p-2 border border-slate-200 rounded-lg text-sm text-slate-900 outline-none focus:ring-2 focus:ring-blue-500"
                          />
                          <input
                            value={param.purpose || ""}
                            onChange={(e) =>
                              handleParamChange(
                                index,
                                "purpose",
                                e.target.value,
                              )
                            }
                            placeholder="Purpose"
                            className="p-2 border border-slate-200 rounded-lg text-sm text-slate-900 outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                        {testParams.length > 1 && (
                          <button
                            type="button"
                            onClick={() => removeParamField(index)}
                            className="text-red-500 hover:text-red-700 p-2 mt-1"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* ASSIGN TO PROFILES SECTION */}
                <div className="mt-6 pt-6 border-t border-slate-100">
                  <label className="text-sm font-bold text-slate-900 mb-4 block">
                    Assign to Health Profiles (Optional)
                  </label>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 bg-slate-50 p-6 rounded-2xl border border-slate-200 max-h-60 overflow-y-auto">
                    {profiles.map((profile) => {
                      // Because of our serializer change, editingTest.profiles is now an array of IDs
                      const isChecked = editingTest?.profiles?.includes(
                        profile.id,
                      );
                      return (
                        <label
                          key={profile.id}
                          className="flex items-center gap-3 cursor-pointer group"
                        >
                          <input
                            type="checkbox"
                            name="profiles"
                            value={profile.id}
                            defaultChecked={isChecked}
                            className="w-5 h-5 text-blue-600 rounded border-slate-300 focus:ring-blue-500"
                          />
                          <span className="text-sm font-bold text-slate-700 group-hover:text-blue-600 transition-colors">
                            {profile.name}
                          </span>
                        </label>
                      );
                    })}
                  </div>
                </div>

                <div className="mt-8 flex justify-end">
                  <button
                    type="submit"
                    className="bg-slate-900 hover:bg-blue-600 text-white px-8 py-4 rounded-xl font-bold shadow-lg transition-colors"
                  >
                    {editingTest ? "Save Test Changes" : "Create Test"}
                  </button>
                </div>
              </form>
            </div>
          )}
          {/* TESTS: PREVIEW UPLOAD VIEW */}
          {activeTab === "tests" && currentView === "preview" && (
            <div className="bg-white border border-slate-200 rounded-3xl shadow-sm p-8">
              <div className="flex justify-between items-center mb-8 pb-6 border-b border-slate-100">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">
                    Review Import Data
                  </h2>
                  <p className="text-slate-500 text-sm">
                    Please review the parsed rows below.{" "}
                    <strong className="text-blue-600">
                      Rows with the same Test Name will automatically be grouped
                      into a single test with multiple parameters
                    </strong>{" "}
                    when saved.
                  </p>
                </div>
                <div className="flex gap-4">
                  <button
                    onClick={() => setCurrentView("list")}
                    className="bg-slate-100 hover:bg-slate-200 text-slate-700 px-6 py-3 rounded-xl font-bold transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleConfirmBulkUpload}
                    disabled={isUploading}
                    className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl font-bold shadow-lg transition-colors flex items-center gap-2"
                  >
                    {isUploading
                      ? "Saving to Database..."
                      : "Confirm & Save Tests"}
                  </button>
                </div>
              </div>

              <div className="overflow-x-auto border border-slate-200 rounded-xl">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200 text-slate-600 text-sm uppercase tracking-wider">
                      <th className="p-4 font-bold">Test Name</th>
                      <th className="p-4 font-bold">Price (₹)</th>
                      <th className="p-4 font-bold">Key Benefits</th>
                      <th className="p-4 font-bold">
                        Parameter Name (Optional)
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {previewData.map((row, idx) => (
                      <tr key={idx} className="hover:bg-slate-50">
                        <td className="p-4 text-sm text-slate-900 font-bold">
                          {row.name || (
                            <span className="text-red-500">Missing Name!</span>
                          )}
                        </td>
                        <td className="p-4 text-sm text-blue-600 font-bold">
                          {row.price || 0}
                        </td>
                        <td className="p-4 text-sm text-slate-600 truncate max-w-xs">
                          {row.key_benefits || ""}
                        </td>
                        <td className="p-4 text-sm text-slate-500">
                          {row.parameter_name || "None"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
