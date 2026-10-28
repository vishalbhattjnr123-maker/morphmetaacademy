"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import MetaSeo from "../Components/MetaSEO";

const Result = () => {
  const navigate = useNavigate();

  const seo = {
    title: "Check Your Result | Morph Meta Academy",
    description:
      "Check the success results of our students at Morph Meta Academy. Search by roll number and view detailed results.",
  };

  const [query, setQuery] = useState("");
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Debounce function
  useEffect(() => {
    if (!query.trim()) {
      setResult([]);
      setError("");
      return;
    }

    const delayDebounce = setTimeout(() => {
      handleSearch(query);
    }, 500); // wait 500ms after user stops typing

    return () => clearTimeout(delayDebounce);
  }, [query]);

  const handleSearch = async (searchQuery) => {
    setLoading(true);
    setError("");
    setResult([]);

    try {
      const response = await axios.post(
        "https://result.morphacademy.com/search.php",
        { search: searchQuery }
      );

      if (response.data.success) {
        setResult(response.data.data);
      } else {
        setError(response.data.message || "No results found.");
      }
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const openDetail = (student) => {
    navigate("/result-detail", { state: { student } });
  };

  return (
    <>
      <MetaSeo meta={seo} />

      <section className="bg-neutral-950 min-h-screen flex items-center justify-center px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center max-w-6xl w-full gap-12">
          {/* Hero Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src="/images/result.png"
              alt="Result Character"
              className="w-full max-w-lg object-contain drop-shadow-xl"
            />
          </div>

          {/* Search & Results */}
          <div className="w-full lg:w-1/2 bg-neutral-900 border border-neutral-700 rounded-3xl shadow-2xl p-12 flex flex-col items-center transition-transform hover:scale-105">
            <h2 className="text-4xl md:text-5xl font-extrabold text-violet-500 mb-4 text-center">
              Check Your Result
            </h2>
            <p className="text-gray-400 text-center mb-8">
              Celebrating the Success of Our Students
            </p>

            <input
              type="text"
              placeholder="Enter Your Roll No"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full px-6 py-4 border border-neutral-700 rounded-full focus:outline-none focus:ring-2 focus:ring-violet-500 mb-6 placeholder-gray-400 transition"
            />

            {loading && <p className="text-gray-400 mb-4">Searching...</p>}
            {error && <p className="text-red-500 mt-2">{error}</p>}

            {/* Results */}
            {result.length > 0 && (
              <ul className="w-full max-w-2xl mt-6 bg-neutral-900 rounded-xl shadow-lg overflow-hidden">
                {result.map((student) => (
                  <li
                    key={student.id}
                    className="px-6 py-4 border-b border-neutral-700 hover:bg-neutral-800 cursor-pointer flex items-center justify-between"
                    onClick={() => openDetail(student)}
                  >
                    <div>
                      <p className="text-white font-semibold">{student.Name} {student.lname}</p>
                      <p className="text-gray-400 text-sm">{student.Rollno}</p>
                    </div>
                    {student.Photo && (
                      <img
                        src={student.Photo}
                        alt={student.Name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                    )}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Result;
