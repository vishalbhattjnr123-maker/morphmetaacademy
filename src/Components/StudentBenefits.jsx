import React from "react";

const StudentBenefits = () => {
  return (
    <div className="relative max-w-5xl mx-auto my-20">
      {/* 🔥 Background Scrolling Text */}
      <div className="absolute inset-0 overflow-hidden flex items-center z-0">
        <div className="marquee-text text-[80px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-400 opacity-20 whitespace-nowrap">
          {Array(30)
            .fill("MORPH")
            .join(" • ")}
        </div>
      </div>

      

      {/* 🎁 Card with Gradient Border */}
      <div className="relative rounded-2xl p-[4px] animate-border bg-gradient-to-r from-pink-500 via-yellow-400 to-purple-500 z-10">
        <div className="rounded-2xl overflow-hidden bg-black text-white p-8 space-y-4">
            <h3 className="text-4xl md:text-4xl font-extrabold text-white text-center drop-shadow-xl mb-10">
        Benefits for Students
      </h3>
          <ul className="list-decimal list-inside space-y-3 text-lg leading-relaxed">
            <li>
              <span className="font-semibold text-yellow-300">Affiliation with Universities:</span>{" "}
              Providing degree courses in animation through affiliations with well-known universities adds credibility to the courses.
            </li>
            <li>
              <span className="font-semibold text-yellow-300">Online Training Platform:</span>{" "}
              Offering flexibility through dedicated online training platforms.
            </li>
            <li>
              <span className="font-semibold text-yellow-300">Education Loan Facility:</span>{" "}
              Making education more accessible through loan facilities.
            </li>
            <li>
              <span className="font-semibold text-yellow-300">Industry-Relevant Curriculum:</span>{" "}
              Courses are designed to meet current industry standards and focus on career development.
            </li>
            <li>
              <span className="font-semibold text-yellow-300">Placement Assistance:</span>{" "}
              Assisting students in securing job placements upon completion of their courses.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StudentBenefits;
