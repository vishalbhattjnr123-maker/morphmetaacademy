"use client";

import Form2 from "../Components/Form2";
import { sendEmail } from "../helper";

const ContactUs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    sendEmail();
  };

  const franchises = [
    {
      city: "Chandigarh, India",
      address:
        "MORPH META ACADEMY SCO 64-65, 4th Floor, Sub. City Center, Sector 34A, Chandigarh",
      email: "info@morphacademy.com",
      phone: "+91 95014 89999",
    },
    {
      city: "Amritsar, India",
      address:
        "MORPH ACADEMY SCO 105 - 4th FLOOR, B-BLOCK, RANJIT AVENUE, ABOVE LG SHOWROOM, AMRITSAR, 143001, INDIA",
      email: "info@morphacademy.com",
      phone: "+91 99880 01737",
    },
    {
      city: "Mumbai, India",
      address:
        "Global franchise consulting, Shiv Vidhi Apartment, Sector 9, Diva Gaon Near OLA Showroom, Airoli, Navi Mumbai, Maharashtra-400708",
      email: "info@morphacademy.com",
      phone: "+91 95014 89999",
    },
    {
      city: "Delhi, India",
      address:
        "Global Franchise Consulting. KP 360, 1st Floor, Maurya Enclave, Pitampura, New Delhi. 110034",
      email: "info@morphacademy.com",
      phone: "+91 95014 89999",
    },
    {
      city: "Moga, India",
      address:
        "1ST FLOOR, GK PLAZA, GT Rd, Basti Gobind Garh, Moga, Punjab 142001",
      email: "info@morphacademy.com",
      phone: "+91 8591605000",
    },
  ];

  return (
    <section id="contact" className="bg-black text-white">
      {/* Banner */}
      <div className="w-full">
        <img
          src="/images/contact-us.jpg"
          alt="Meta Morph Contact Us Banner"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Intro */}
      <div className="container mx-auto px-6 py-12 text-center">
        <h2 className="text-4xl font-extrabold mb-4">Contact Us</h2>
        <p className="text-gray-300 text-lg max-w-3xl mx-auto">
          We're here to help! Whether you have a question, need assistance, or
          want to provide feedback, our team is ready to assist you. Reach out
          via phone, email, or our online contact form, and we'll respond
          quickly.
        </p>
      </div>

      {/* Form + Franchise boxes */}
      <div className="container mx-auto px-6 grid lg:grid-cols-12 gap-12">
        {/* Left side - Form */}
        <div className="lg:col-span-5">
          <Form2 />
        </div>

        {/* Right side - Franchise addresses */}
        <div className="lg:col-span-7">
          <h3 className="text-2xl font-semibold mb-6 border-b border-gray-700 pb-2">
            Our Franchise Locations
          </h3>

          <div className="grid sm:grid-cols-2 gap-6">
            {franchises.map((franchise, index) => (
              <div
                key={index}
                className="bg-gray-900 p-5 rounded-xl shadow-md border border-gray-800 hover:shadow-lg transition-all"
              >
                <h4 className="text-lg font-bold text-yellow-400 mb-2">
                  {franchise.city}
                </h4>
                <p className="text-gray-300 text-sm mb-2">
                  {franchise.address}
                </p>
                <p className="text-gray-400 text-sm">
                  📧{" "}
                  <a
                    href={`mailto:${franchise.email}`}
                    className="hover:text-yellow-400"
                  >
                    {franchise.email}
                  </a>
                </p>
                <p className="text-gray-400 text-sm">
                  📞{" "}
                  <a
                    href={`tel:${franchise.phone}`}
                    className="hover:text-yellow-400"
                  >
                    {franchise.phone}
                  </a>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Map at Bottom */}
      <div className=" mt-16 w-full mb-16">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3429.96664453297!2d76.765712!3d30.719338099999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd436f24872a49c5%3A0xfdd95351eefdbf0c!2sAnimation%20Courses%20in%20Chandigarh%20-%20Morph%20Academy!5e0!3m2!1sen!2sin!4v1746689788121!5m2!1sen!2sin"
          width="100%"
          height="600"
          className="rounded-t-xl shadow-xl"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
};

export default ContactUs;
