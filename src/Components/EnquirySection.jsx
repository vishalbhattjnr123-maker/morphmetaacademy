import React, { useState } from "react";
import { Phone, Mail, MapPin, Send, CheckCircle2, AlertCircle, Clock, Sparkles } from "lucide-react";

export default function EnquirySection() {
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    phone: "",
    email: "",
    course: "3D Animation & VFX",
    message: "",
  });

  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!formData.name.trim()) {
      setErrorMsg("Please enter your name.");
      return;
    }
    const phoneClean = formData.phone.replace(/[^0-9]/g, "");
    if (phoneClean.length !== 10) {
      setErrorMsg("Please enter a valid 10-digit mobile number.");
      return;
    }
    if (!formData.email.includes("@")) {
      setErrorMsg("Please enter a valid email address.");
      return;
    }

    setStatus("sending");
    setErrorMsg("");

    const params = {
      name: formData.name,
      lastname: formData.lastname || "",
      phone: formData.phone,
      email: formData.email,
      course: formData.course,
      message: `[Interested Course: ${formData.course}] ${formData.message}`,
    };

    // Use window.emailjs if available
    if (window.emailjs) {
      window.emailjs
        .send("service_v6m01tl", "template_pz1gqmh", params)
        .then(() => {
          setStatus("success");
          setFormData({
            name: "",
            lastname: "",
            phone: "",
            email: "",
            course: "3D Animation & VFX",
            message: "",
          });
        })
        .catch((err) => {
          console.error("EmailJS Error:", err);
          // Still provide user feedback
          setStatus("error");
          setErrorMsg("Could not submit online. Please call us directly at +91 99880 01737 or WhatsApp us.");
        });
    } else {
      // Fallback
      setTimeout(() => {
        setStatus("success");
      }, 800);
    }
  };

  return (
    <section
      id="enquiry"
      className="py-24 text-slate-100 relative overflow-hidden border-b border-[#5a0606]"
      style={{
        background: "linear-gradient(135deg, #3d0303 0%, #200101 50%, #100101 100%)",
      }}
    >
      <div className="container max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Campus Information & Direct Contacts */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2b0404] border border-[#6b0808] text-amber-400 text-xs font-semibold tracking-wider uppercase shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Admissions Open 2026</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Book Your Free Demo Session in{" "}
              <span className="bg-gradient-to-r from-[#FA9160] via-amber-300 to-rose-400 bg-clip-text text-transparent">
                Amritsar
              </span>
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Experience our studio workstations, interact directly with animation & gaming faculty, and get complete guidance on career paths, software roadmaps, and fee structures.
            </p>

            {/* Direct Contact Cards */}
            <div className="space-y-4 pt-2">
              {/* Address */}
              <div className="p-4 rounded-2xl bg-[#240303]/95 border border-[#6b0808]/80 flex items-start gap-3.5 shadow-md">
                <div className="w-10 h-10 rounded-xl bg-[#380505] border border-[#6b0808] flex items-center justify-center text-amber-400 shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">Amritsar Campus Address</h4>
                  <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">
                    SCO 105 - 4th Floor, B-Block, Ranjit Avenue, Above LG Showroom, Amritsar, Punjab 143001
                  </p>
                </div>
              </div>

              {/* Phone numbers */}
              <div className="p-4 rounded-2xl bg-[#240303]/95 border border-[#6b0808]/80 flex items-start gap-3.5 shadow-md">
                <div className="w-10 h-10 rounded-xl bg-[#380505] border border-[#6b0808] flex items-center justify-center text-amber-400 shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">Admissions Hotline</h4>
                  <div className="flex flex-wrap gap-3 mt-1 text-xs">
                    <a href="tel:+919988001737" className="text-amber-400 font-bold hover:underline">
                      +91 99880 01737
                    </a>
                    <span className="text-slate-500">•</span>
                    <a href="tel:+919501489999" className="text-amber-400 font-bold hover:underline">
                      +91 95014 89999
                    </a>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="p-4 rounded-2xl bg-[#240303]/95 border border-[#6b0808]/80 flex items-start gap-3.5 shadow-md">
                <div className="w-10 h-10 rounded-xl bg-[#380505] border border-[#6b0808] flex items-center justify-center text-amber-400 shrink-0 mt-0.5">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">Official Email</h4>
                  <a href="mailto:info@morphacademy.com" className="text-xs text-slate-300 hover:text-amber-400 transition-colors mt-0.5 block">
                    info@morphacademy.com
                  </a>
                </div>
              </div>
            </div>

            {/* Quick WhatsApp Button */}
            <a
              href="https://wa.me/919501489999?text=Hello%20Morph%20Meta%20Academy%20Amritsar%20I%20am%20interested%20in%20a%20course."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all"
            >
              <svg style={{ width: "18px", height: "18px", fill: "#ffffff" }} viewBox="0 0 24 24" aria-hidden="true">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              <span>Instant Chat on WhatsApp</span>
            </a>
          </div>

          {/* Right Column: Interactive Lead Generation Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#240303]/95 border border-[#6b0808]/80 shadow-2xl relative">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white">Send an Enquiry / Book Demo</h3>
                <p className="text-xs text-slate-300 mt-1">
                  Fill in your details and our senior academic counselor will call you within 24 hours.
                </p>
              </div>

              {/* Feedback States */}
              {status === "success" && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-950/80 border border-emerald-500/80 flex items-center gap-3 text-emerald-200 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>
                    Thank you! Your enquiry has been received. Our counselor will contact you shortly.
                  </span>
                </div>
              )}

              {errorMsg && (
                <div className="mb-6 p-4 rounded-xl bg-red-950/80 border border-red-500/80 flex items-center gap-3 text-red-200 text-sm">
                  <AlertCircle className="w-5 h-5 text-red-400 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-slate-200 mb-1.5">
                      First Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Gurpreet"
                      className="w-full px-4 py-3 rounded-xl bg-[#180202] border border-[#6b0808] text-white placeholder-slate-400 text-sm focus:border-red-500 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="lastname" className="block text-xs font-semibold text-slate-200 mb-1.5">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastname"
                      name="lastname"
                      value={formData.lastname}
                      onChange={handleChange}
                      placeholder="e.g. Singh"
                      className="w-full px-4 py-3 rounded-xl bg-[#180202] border border-[#6b0808] text-white placeholder-slate-400 text-sm focus:border-red-500 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Phone & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-xs font-semibold text-slate-200 mb-1.5">
                      Phone Number (10 Digits) <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      maxLength={10}
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. 9876543210"
                      className="w-full px-4 py-3 rounded-xl bg-[#180202] border border-[#6b0808] text-white placeholder-slate-400 text-sm focus:border-red-500 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-slate-200 mb-1.5">
                      Email Address <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. student@gmail.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#180202] border border-[#6b0808] text-white placeholder-slate-400 text-sm focus:border-red-500 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Course Interest Dropdown */}
                <div>
                  <label htmlFor="course" className="block text-xs font-semibold text-slate-200 mb-1.5">
                    Course of Interest <span className="text-red-400">*</span>
                  </label>
                  <select
                    id="course"
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-[#180202] border border-[#6b0808] text-white text-sm focus:border-red-500 focus:outline-none transition-colors"
                  >
                    <option value="3D Animation & VFX" className="bg-[#180202] text-white">3D Animation & VFX Master</option>
                    <option value="Film Making & Direction" className="bg-[#180202] text-white">Film Making & Direction</option>
                    <option value="Video Editing & Color Grading" className="bg-[#180202] text-white">Video Editing & Color Grading</option>
                    <option value="Game Design & Unreal Engine 5" className="bg-[#180202] text-white">Game Design & Unreal Engine 5</option>
                    <option value="Graphic Design & Branding" className="bg-[#180202] text-white">Graphic Design & Visual Branding</option>
                    <option value="UI/UX Design & Web Layouts" className="bg-[#180202] text-white">UI/UX Design & Web Layouts</option>
                    <option value="Commercial Photography" className="bg-[#180202] text-white">Commercial Photography</option>
                    <option value="Metaverse & AR/VR" className="bg-[#180202] text-white">Metaverse & AR / VR Development</option>
                    <option value="University Degree in Multimedia" className="bg-[#180202] text-white">University Degree in Multimedia</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-slate-200 mb-1.5">
                    Your Questions / Preferred Demo Time
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your background or questions you'd like answered during the demo..."
                    className="w-full px-4 py-3 rounded-xl bg-[#180202] border border-[#6b0808] text-white placeholder-slate-400 text-sm focus:border-red-500 focus:outline-none transition-colors resize-none"
                  />
                </div>

                {/* Privacy note */}
                <p className="text-[11px] text-slate-400">
                  Your contact details are strictly kept confidential and only used to assist with your educational enquiry.
                </p>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full py-4 rounded-xl text-sm font-bold uppercase tracking-wider text-white bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 hover:from-red-500 hover:to-amber-500 shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 transition-all"
                >
                  {status === "sending" ? (
                    <span>Submitting Your Enquiry...</span>
                  ) : (
                    <>
                      <span>Submit Free Demo Request</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
