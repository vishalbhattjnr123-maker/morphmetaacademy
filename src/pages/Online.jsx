"use client";

import { useState } from "react";
import D1 from "../Components/D1";
import Diploma from "../data/Diploma.json";
import MetaSeo from "../Components/MetaSEO";

export default function Online() {
  const seo = {
    title: "Online animation, game design, metaverse course in chandigarh",
    description:
      "Online animation, game design, metaverse course in chandigarh, Join us in the thriving industry of Gaming and Metaverse that includes Graphics, Web design, Motion graphics, Animation, VFX, UX design & augmented reality!",
    keyword:
      "Graphics Designing Course in chandigarh, Graphics Designing Diploma in chandigarh, Graphics Design Institutes in chandigarh, Best Graphics Design Institute in chandigarh, Graphics Designing Classes in chandigarhNearby, Top Graphics Design Academy near me",
  };

  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <MetaSeo meta={seo} />

      <div className="bg-black text-white pb-24 pt-28">

        {/* HERO SECTION */}
        <div className="max-w-7xl mx-auto px-6 text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 text-transparent bg-clip-text drop-shadow-lg">
            Online Diploma Programs
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Learn from anywhere with our industry-focused online diplomas in
            Animation, Game Design, Metaverse, VFX, Graphics, and more.  
            Unlock your creative future with professional training.
          </p>
        </div>

        {/* DESKTOP VIEW */}
        <div className="hidden lg:flex max-w-7xl mx-auto px-6 mt-20 gap-10">

          {/* LEFT SIDEBAR MENU */}
          <div className="w-1/3 bg-neutral-900/60 backdrop-blur-xl border border-neutral-700 rounded-2xl p-5 shadow-xl h-max max-h-[620px] overflow-y-auto">

            <h2 className="text-xl font-bold text-yellow-400 mb-4">
              Diploma Categories
            </h2>

            <div className="space-y-3">
              {Diploma.map((item, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTab(i)}
                  className={`w-full relative py-3 px-6 text-left rounded-xl text-sm font-semibold transition-all duration-300 group
                  ${
                    activeTab === i
                      ? "bg-gradient-to-r from-yellow-400 to-orange-500 text-black shadow-xl scale-[1.03]"
                      : "bg-neutral-800 text-white hover:bg-neutral-700 hover:scale-[1.02]"
                  }`}
                >
                  {/* left highlight bar */}
                  {activeTab === i && (
                    <span className="absolute left-0 top-0 h-full w-1.5 bg-yellow-400 rounded-r-lg"></span>
                  )}
                  {item.nav}
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT CONTENT DISPLAY */}
          <div className="w-2/3">
            {Diploma.map((item, i) => (
              <div
                key={i}
                className={`transition-opacity duration-500 ${
                  activeTab === i ? "opacity-100" : "opacity-0 hidden"
                }`}
              >
                <div className="bg-neutral-900 border border-neutral-700 shadow-2xl rounded-2xl p-10 backdrop-blur-xl">
                  <D1 data={item} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* MOBILE VIEW ACCORDION */}
        <div className="lg:hidden max-w-7xl mx-auto px-6 mt-12 space-y-4">
          {Diploma.map((item, index) => {
            const isOpen = activeTab === index;
            return (
              <div
                key={index}
                className="bg-neutral-900 border border-neutral-700 rounded-2xl shadow-xl"
              >
                <button
                  onClick={() => setActiveTab(isOpen ? -1 : index)}
                  className="w-full py-4 px-6 flex justify-between items-center
                  text-yellow-400 text-lg font-semibold bg-neutral-800 rounded-t-2xl transition-all"
                >
                  {item.nav}
                  <span className="text-2xl">{isOpen ? "−" : "+"}</span>
                </button>

                <div
                  className={`transition-all duration-500 overflow-hidden ${
                    isOpen
                      ? "max-h-[2000px] opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="p-6 bg-neutral-900 border-t border-neutral-700">
                    <D1 data={item} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
