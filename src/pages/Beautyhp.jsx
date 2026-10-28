import Form2 from "../Components/Form2";
import MetaSeo from "../Components/MetaSEO";

export default function Beautyhp() {
  const seo = {
    title: "Top Beauty and makeup courses in Himachal Pradesh",
    description:
      "Join Zuri Academy Himachal Pradesh. Learn makeup, hair, skin, nails & cosmetology with govt-approved, job-ready beauty courses in Shimla, Kullu & more.",
    keyword:
      "beauty courses Himachal Pradesh, makeup courses Himachal, best beauty institute Shimla, makeup classes Dharamshala, beauty parlour course Solan, government beauty course Himachal, hair styling course Kullu, nail art course Mandi, cosmetology course India, Zuri beauty academy, best beauty course near me , Himachal pradesh best beauty makeup course",
  };

  return (
    <>
      <MetaSeo meta={seo} />

      {/* HERO SECTION */}
      <div className="bg-black">
        <div className="w-full">
          <img
            className="w-full h-[350px] md:h-[500px] object-cover"
            src="/images/beauty1.jpg"
            alt="Beauty & Makeup Course Himachal"
          />
        </div>

        {/* Introduction Section */}
        <section className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="text-white space-y-5">
            <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
              Top Beauty and Makeup Course in Himachal Pradesh
            </h1>

            <p className="text-gray-300 leading-relaxed">
              Top classes for learning makeup and beauty skills in the heart of
              the mountains.{" "}
              <a href="https://www.zuriacademy.com/" className="text-yellow-400">
                Zuri Academy
              </a>
              , India’s No.1 international beauty and makeup institute, is now
              in Himachal Pradesh! With training centers in Dharamshala,
              Palampur, Solan, Shimla, Kullu, Chamba, and Mandi.
            </p>

            <h3 className="text-2xl font-semibold text-yellow-400">
              Learn from the Best
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Zuri offers the top makeup classes in Himachal Pradesh with
              hands-on practice, expert trainers, and international techniques.
            </p>

            <h3 className="text-2xl font-semibold text-yellow-400">
              Popular Courses
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li>✔ Makeup Artist Course</li>
              <li>✔ Hair Styling & Coloring</li>
              <li>✔ Skin & Beauty Therapy</li>
              <li>✔ Nail Art & Extensions</li>
              <li>✔ Cosmetology with International Certification</li>
            </ul>
          </div>

          <div className="flex justify-center">
            <img
              src="/images/fashion-modeling-show].jpg"
              className="rounded-3xl shadow-lg w-full max-w-md"
              alt="Beauty Student Work"
            />
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-gray-900 py-10">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { label: "Placement Rate", value: "95%" },
              { label: "Years of Experience", value: "25+" },
              { label: "Expert Faculty", value: "100%" },
              { label: "Professionals Trained", value: "300+" },
            ].map((item, i) => (
              <div key={i} className="bg-gray-800 p-6 rounded-xl shadow-md">
                <p className="text-yellow-400 text-4xl font-bold">{item.value}</p>
                <h4 className="text-white mt-2">{item.label}</h4>
              </div>
            ))}
          </div>
        </section>

        {/* Job Ready Section + Form */}
        <section className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 text-gray-300 space-y-6">
            <h2 className="text-3xl font-bold text-white">Job-Ready Courses</h2>
            <p className="text-yellow-400 text-lg font-semibold">
              Government-Approved Certifications
            </p>

            <p>
              Zuri offers government-certified diploma and advanced beauty
              programs that help you start working immediately in top salons or
              begin your own beauty parlor.
            </p>

            <h3 className="text-yellow-400 text-lg font-semibold">
              Why Choose Us?
            </h3>

            <ul className="space-y-2 text-white">
              <li>✔ 100% Job Support</li>
              <li>✔ Government Approved</li>
              <li>✔ International Certification</li>
              <li>✔ Freelancing & Salon Startup Support</li>
            </ul>
          </div>

          <div>
            <Form2 />
          </div>
        </section>

        {/* FEATURES GRID */}
        <section className="max-w-6xl mx-auto px-6 py-10">
          <h2 className="text-center text-3xl font-bold text-white mb-10">
            Why Choose Zuri Academy?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Industry Focused",
                desc: "Courses designed to meet industry demands.",
              },
              {
                title: "Modern Labs",
                desc: "Learn with advanced beauty tools & equipment.",
              },
              {
                title: "Expert Faculty",
                desc: "Trainers with years of field experience.",
              },
              {
                title: "Placement Support",
                desc: "Guaranteed assistance for jobs & internships.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-gray-800 p-6 rounded-xl text-center shadow-lg hover:scale-105 transition"
              >
                <img
                  src="/images/icons8-tick-80.png"
                  className="mx-auto w-16 mb-4"
                  alt=""
                />
                <h3 className="text-xl font-semibold text-yellow-400">
                  {item.title}
                </h3>
                <p className="text-gray-300 mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* STUDENT WORK VIDEOS */}
        <section className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-3xl text-white font-bold text-center">
            Student Work & Testimonials
          </h2>
          <h3 className="text-yellow-400 text-center text-xl mt-2">
            Real Hands-On Training. Real Results.
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            {[
              "bsuC0spUxMg",
              "plOF3BNEtgg",
              "A0bBaG3pURc",
              "OI7Vjn_Ivwo",
              "Cv0Lj8hCOSA",
              "GONIXvG4IJg",
            ].map((id, i) => (
              <div key={i} className="flex justify-center">
                <iframe
                  width="315"
                  height="560"
                  className="rounded-xl shadow-lg"
                  src={`https://www.youtube.com/embed/${id}`}
                  title="Student Work"
                  allow="accelerometer; autoplay; clipboard-write; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
