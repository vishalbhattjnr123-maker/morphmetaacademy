import Form2 from "../Components/Form2";
import MetaSeo from "../Components/MetaSEO";

export default function Degreebeauty() {
  const seo = {
    title: "Best Degree in Beauty and Makeup in Himachal Pradesh",
    description:
      "Join Zuri Academy Himachal Pradesh. Learn makeup, hair, skin, nails & cosmetology with govt-approved, job-ready beauty courses in Shimla, Kullu & more.",
    keyword:
      "beauty courses Himachal Pradesh, makeup courses Himachal, best beauty institute Shimla, makeup classes Dharamshala, beauty parlour course Solan, government beauty course Himachal, hair styling course Kullu, nail art course Mandi, cosmetology course India, Zuri beauty academy, best beauty course near me , Himachal pradesh best beauty makeup course",
  };

  return (
    <>
      <MetaSeo meta={seo} />

      {/* Banner */}
      <div className="bg-black">
        <img
          className="w-full object-cover max-h-[520px]"
          src="/images/dede.jpg"
          alt="Zuri Academy Banner"
        />

        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h1 className="text-white text-3xl md:text-4xl font-bold leading-snug">
              Best Degree in Beauty and Makeup in Himachal Pradesh
            </h1>

            <p className="text-gray-300 mt-4">
              Do you love beauty, makeup, hair styling, or nail art? Now you can
              turn your passion into a profession with a govt-approved degree in
              Himachal for beauty and makeup courses.
            </p>

            <p className="text-gray-300 mt-4">
              <a className="text-yellow-400 font-semibold" href="https://www.zuriacademy.com/">
                Zuri Academy
              </a>
              , the No.1 international beauty and makeup{" "}
              <a className="text-yellow-400 font-semibold" href="/">
                institute
              </a>{" "}
              in Himachal Pradesh, offers complete training with international
              certification and government recognition.
            </p>

            <h3 className="text-yellow-400 text-xl font-semibold mt-6">
              Career Opportunities After These Courses
            </h3>

            <ul className="text-gray-300 mt-3 space-y-1">
              <li>👩‍🎨 Makeup artist for salons, weddings, and events</li>
              <li>💇‍♀️ Hair expert for top beauty chains</li>
              <li>💅 Nail art studio professional</li>
              <li>🧖‍♀️ Skin therapist / beautician</li>
              <li>💼 Start your own beauty parlour</li>
              <li>📸 Work with influencers & fashion shows</li>
            </ul>
          </div>

          <div className="flex justify-center">
            <img
              className="rounded-2xl shadow-xl w-full max-w-md"
              src="/images/photography-stu-morph-student-fashin-black.jpg"
              alt="Beauty Course Model"
            />
          </div>
        </div>

        {/* Stats Section */}
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-[#1a1a1a] rounded-2xl py-10">
            {[
              { value: "95%", label: "Placement Rate" },
              { value: "25", label: "Years of Experience" },
              { value: "100%", label: "Expert Faculty" },
              { value: "300+", label: "Professionals Trained" },
            ].map((item, i) => (
              <div key={i} className="text-center border-gray-700">
                <span className="text-yellow-400 text-4xl font-bold">
                  {item.value}
                </span>
                <h4 className="text-gray-300 mt-2">{item.label}</h4>
              </div>
            ))}
          </div>
        </div>

{/* Courses Section */}
<div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">

  <div className="lg:col-span-2">
    <h2 className="text-white text-3xl font-bold">Courses We Offer</h2>

    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-8">

      {/* Card 1 */}
      <div className="bg-[#1a1a1a] p-6 rounded-2xl shadow-lg hover:shadow-yellow-500/20 border border-gray-700 transition">
        <h3 className="text-yellow-400 text-xl font-semibold">
          Govt-Approved Degree & Diploma Programs
        </h3>
        <ul className="mt-3 text-gray-300 space-y-2">
          <li className="flex items-start gap-2">
            <span>✔</span> Government-approved certifications
          </li>
          <li className="flex items-start gap-2">
            <span>✔</span> Diploma and degree options available
          </li>
        </ul>
      </div>

      {/* Card 2 */}
      <div className="bg-[#1a1a1a] p-6 rounded-2xl shadow-lg hover:shadow-yellow-500/20 border border-gray-700 transition">
        <h3 className="text-yellow-400 text-xl font-semibold">Makeup Course</h3>
        <ul className="mt-3 text-gray-300 space-y-2">
          <li className="flex items-start gap-2"><span>✔</span> Practice on real models</li>
          <li className="flex items-start gap-2"><span>✔</span> Professional makeup techniques</li>
        </ul>
      </div>

      {/* Card 3 */}
      <div className="bg-[#1a1a1a] p-6 rounded-2xl shadow-lg hover:shadow-yellow-500/20 border border-gray-700 transition">
        <h3 className="text-yellow-400 text-xl font-semibold">Hair Styling Course</h3>
        <ul className="mt-3 text-gray-300 space-y-2">
          <li className="flex items-start gap-2"><span>✔</span> Haircut, color & highlights</li>
          <li className="flex items-start gap-2"><span>✔</span> Straightening & styling</li>
        </ul>
      </div>

      {/* Card 4 */}
      <div className="bg-[#1a1a1a] p-6 rounded-2xl shadow-lg hover:shadow-yellow-500/20 border border-gray-700 transition">
        <h3 className="text-yellow-400 text-xl font-semibold">Nail Art Course</h3>
        <ul className="mt-3 text-gray-300 space-y-2">
          <li className="flex items-start gap-2"><span>✔</span> Gel & acrylic extensions</li>
          <li className="flex items-start gap-2"><span>✔</span> Creative 3D nail designs</li>
        </ul>
      </div>

      {/* Card 5 */}
      <div className="bg-[#1a1a1a] p-6 rounded-2xl shadow-lg hover:shadow-yellow-500/20 border border-gray-700 transition">
        <h3 className="text-yellow-400 text-xl font-semibold">Skin & Beauty Course</h3>
        <ul className="mt-3 text-gray-300 space-y-2">
          <li className="flex items-start gap-2"><span>✔</span> Skin analysis & types</li>
          <li className="flex items-start gap-2"><span>✔</span> Facials, cleanup & therapies</li>
        </ul>
      </div>

    </div>
  </div>

  {/* Form */}
  <div className=" rounded-xl shadow-xl p-6">
    <Form2 />
  </div>
</div>


        {/* Why Choose Us */}
        <div className="max-w-7xl mx-auto px-6 py-16">
          <h2 className="text-center text-white text-3xl font-bold">
            Why Choose Us?
          </h2>
          <p className="text-center text-gray-300 max-w-3xl mx-auto mt-3">
            We provide expert training, modern tools, and career-focused skills
            in beauty, makeup, hair and nail art.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
            {[
              { title: "Industry Focused", desc: "Courses designed for real-world career growth." },
              { title: "State-of-the-Art Facilities", desc: "Learn with modern beauty tools & labs." },
              { title: "Expert Faculty", desc: "Top beauty trainers with real experience." },
              { title: "Placement Support", desc: "Internships & jobs in leading beauty brands." },
            ].map((box, i) => (
              <div
                key={i}
                className="bg-[#1a1a1a] p-6 rounded-xl shadow-lg text-center"
              >
                <img
                  src="/images/icons8-tick-80.png"
                  alt={box.title}
                  className="w-14 mx-auto mb-4"
                />
                <h3 className="text-white text-xl font-semibold">{box.title}</h3>
                <p className="text-gray-300 mt-2">{box.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* YouTube Section */}
        <div className="max-w-7xl mx-auto px-6 pb-20">
          <h4 className="text-white text-center text-2xl font-semibold">
            Student Work & Testimonials
          </h4>
          <h1 className="text-yellow-400 text-center text-3xl font-bold mt-2">
            At Zuri Beauty Academy, We Believe in Learning by Doing
          </h1>
          <h5 className="text-center text-gray-300 max-w-3xl mx-auto mt-2">
            From bridal makeovers to high-fashion looks, our students create
            stunning transformations.
          </h5>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
            {[
              "bsuC0spUxMg",
              "plOF3BNEtgg",
              "A0bBaG3pURc",
              "OI7Vjn_Ivwo",
              "Cv0Lj8hCOSA",
              "GONIXvG4IJg",
            ].map((id, i) => (
              <iframe
                key={i}
                className="rounded-xl shadow-xl mx-auto"
                width="320"
                height="520"
                src={`https://youtube.com/embed/${id}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
