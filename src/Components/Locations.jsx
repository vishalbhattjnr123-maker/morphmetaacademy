import React from "react";

const locations = [
  {
    city: "Chandigarh, India",
    title: "MORPH META ACADEMY",
    address: "SCO 64-65, 4th Floor, Sub. City Center, Sector 34A, Chandigarh",
    email: "info@morphacademy.com",
    phone: "+91 95014 89999",
  },
  {
    city: "Amritsar, India",
    title: "MORPH ACADEMY",
    address: "SCO 105 - 4th FLOOR, B-BLOCK, RANJIT AVENUE, ABOVE LG SHOWROOM, AMRITSAR, 143001, INDIA",
    email: "info@morphacademy.com",
    phone: "+91 99880 01737",
  },
  {
    city: "Mumbai, India",
    title: "Global franchise consulting",
    address: "Shiv Vidhi Apartment, Sector 9, Diva Gaon Near OLA Showroom, Airoli, Navi Mumbai, Maharashtra-400708",
    email: "info@morphacademy.com",
    phone: "+91 95014 89999",
  },
  {
    city: "Delhi, India",
    title: "Global Franchise Consulting",
    address: "KP 360, 1st Floor, Maurya Enclave, Pitampura, New Delhi. 110034",
    email: "info@morphacademy.com",
    phone: "+91 95014 89999",
  },
  {
    city: "Moga, India",
    title: "MOGA BRANCH",
    address: "1ST FLOOR, GK PLAZA, GT Rd, Basti Gobind Garh, Moga, Punjab 142001",
    email: "info@morphacademy.com",
    phone: "+91 8591605000",
  },
];

export default function FranchiseCards() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-extrabold mx-auto pt-10">Our Franchise Locations</h2>
       
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {locations.map((loc, idx) => (
          <article
            key={idx}
            className="group bg-white/60 dark:bg-slate-900/60 backdrop-blur-md border border-gray-200 dark:border-slate-700 rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 mt-1">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-indigo-600 to-pink-500 flex items-center justify-center text-white shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5 9 6.343 9 8s1.343 3 3 3z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21v-2a4 4 0 00-4-4H9a4 4 0 00-4 4v2" />
                  </svg>
                </div>
              </div>

              <div className="flex-1">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">{loc.city}</h3>
                    {/* <div className="mt-1 text-sm text-indigo-600 dark:text-indigo-400 font-medium">{loc.branch}</div> */}
                  </div>
                  <div className="text-xs text-gray-400 group-hover:text-gray-500 transition-colors">Branch</div>
                </div>

                <p className="mt-4 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">{loc.address}</p>

                <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <a
                      href={`tel:${loc.phone.replace(/\s+/g, "")}`}
                      className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-900 text-white text-sm font-medium shadow-sm hover:opacity-95"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h2l2 5v7l4 2 4-2v-7l2-5h2" />
                      </svg>
                      {loc.phone}
                    </a>

                    <a
                      href={`mailto:${loc.email}`}
                      className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-slate-200 text-sm text-slate-700 hover:bg-slate-50"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12v6M8 12v6M4 7l8 5 8-5" />
                      </svg>
                      Email
                    </a>
                  </div>

                  <div className="ml-auto">
                    <a
                      href={`https://www.google.com/maps/search/${encodeURIComponent(loc.address)}`}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm underline text-indigo-600 dark:text-indigo-400"
                    >
                      View on Map →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      <p className="mt-8 text-xs text-gray-500">For franchise enquiries: <a href="mailto:info@morphacademy.com" className="font-medium text-indigo-600">info@morphacademy.com</a> • Phone: <a href="tel:+919501489999" className="font-medium text-indigo-600">+91 95014 89999</a></p>
    </section>
  );
}
