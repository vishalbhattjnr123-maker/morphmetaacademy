"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, CheckCircle2 } from "lucide-react";

const CourseSections = ({ sections = [] }) => {
  const [openIndexes, setOpenIndexes] = useState({});

  useEffect(() => {
    const init = {};
    sections.forEach((_, sIdx) => {
      init[`${sIdx}-0`] = true;
    });
    setOpenIndexes(init);
  }, [sections]);

  const toggleAccordion = (key) =>
    setOpenIndexes((prev) => ({ ...prev, [key]: !prev[key] }));

  const staticTitles = [
    "Career and job",
    "Elevate Your Skills and Certify with Morph",
    "Career Opportunities and Objectives",
    "Semester 1",
    "Semester 2",
    "Semester 3",
    "Semester 4",
    "Semester 5",
    "Semester 6",
  ];

  return (
    <div
      className="
        container mx-auto max-w-7xl px-4 space-y-10
        bg-black
        bg-gradient-to-b from-black via-[#0a0a0a] to-black
        py-14 rounded-3xl
      "
    >
      {sections.map((section, idx) => {
        const reverseRow = idx % 2 === 0;

        return (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="
              rounded-2xl shadow-2xl overflow-hidden
              bg-gradient-to-r from-[#1a1a1a] via-[#0f0f0f] to-[#1a1a1a]
              border border-yellow-500/20
            "
          >
            <div
              className={`flex flex-col lg:flex-row items-start ${
                reverseRow ? "lg:flex-row-reverse" : ""
              } gap-6 p-6 md:p-10`}
            >
              {/* IMAGE SECTION */}
              <motion.div
                initial={{ scale: 1.05, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="lg:w-1/3 w-full relative flex-shrink-0"
              >
                <div className="rounded-xl overflow-hidden shadow-md group bg-black border border-yellow-600/20">
                  <img
                    src={`/images/section/${section?.image}`}
                    alt={section?.title}
                    className="
                      w-full 
                      h-40 md:h-48 lg:h-52   /* smaller height */
                      object-cover object-center
                      transition-transform duration-700
                      group-hover:scale-105
                    "
                  />
                  {/* GOLD GRADIENT OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/40 pointer-events-none"></div>
                  {/* GOLD EDGE GLOW */}
                  <div className="absolute inset-0 rounded-xl ring-1 ring-yellow-500/40"></div>
                </div>
              </motion.div>

              {/* CONTENT SECTION */}
              <div className="lg:w-2/3 w-full text-white flex flex-col justify-start">
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-400 mb-3 drop-shadow-md">
                  {section?.title}
                </h3>

                <p className="text-gray-300 mb-5 text-sm md:text-base leading-relaxed">
                  {section?.description}
                </p>

                {/* Accordion */}
                <div className="space-y-4">
                  {section?.items?.map((item, itemIdx) => {
                    const key = `${idx}-${itemIdx}`;
                    const isOpen = !!openIndexes[key];
                    const isStatic = staticTitles.includes(item?.title);

                    return (
                      <div
                        key={itemIdx}
                        className="
                          border border-yellow-600/30 
                          rounded-lg overflow-hidden
                          bg-gradient-to-r from-[#111] to-[#1a1a1a]
                        "
                      >
                        {/* HEADER */}
                        <button
                          onClick={() => toggleAccordion(key)}
                          className="
                            w-full flex justify-between items-center 
                            px-4 py-3 
                            bg-black/60 hover:bg-black/80 
                            text-left transition
                            border-b border-yellow-500/10
                          "
                        >
                          <span className="font-semibold text-sm md:text-base text-yellow-300">
                            {isStatic
                              ? item?.title
                              : `Module ${itemIdx + 1} - ${item?.title}`}
                          </span>

                          {isOpen ? (
                            <ChevronUp className="w-5 h-5 text-yellow-400" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-yellow-400" />
                          )}
                        </button>

                        {/* CONTENT */}
                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.35 }}
                              className="bg-black px-5 py-4 text-sm space-y-4"
                            >
                              <ul className="space-y-2">
                                {item?.list?.map((listItem, j) => (
                                  <li
                                    key={j}
                                    className="flex items-start gap-2 text-gray-300"
                                  >
                                    <CheckCircle2 className="w-4 h-4 text-yellow-400 mt-1" />
                                    <span>{listItem}</span>
                                  </li>
                                ))}

                                {item?.list2?.map((nested, j) => (
                                  <li key={j} className="mt-3">
                                    <span className="font-semibold text-yellow-400 block mb-1">
                                      {nested?.heading}
                                    </span>

                                    {nested?.items && (
                                      <ul className="list-disc list-inside space-y-1 text-gray-400">
                                        {nested.items.map((it, k) => (
                                          <li key={k}>{it}</li>
                                        ))}
                                      </ul>
                                    )}
                                  </li>
                                ))}
                              </ul>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default CourseSections;
