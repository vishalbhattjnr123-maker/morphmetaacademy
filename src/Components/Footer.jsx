import { Link } from "react-router-dom";

const Footer = () => {
  const menu = {
    courses: [
      { label: "Animation", link: "/animation-course" },
      { label: "Film Making", link: "/film-course" },
      { label: "Gaming", link: "/gaming-cousre" },
      { label: "Job Ready", link: "/job-course" },
      { label: "Metaverse", link: "/metaverse-course" },
    ],
    company: [
      { label: "About", link: "/morph-academy-animation-institute-in-Amritsar/" },
      { label: "Blog", link: "/blogs" },
      { label: "Facility", link: "/school-of-animation-and-visual-effects-morph-academy" },
      { label: "Contact", link: "/contact-us" },
      { label: "Resources", link: "/resouce" },
    ],
    support: [
      { label: "Privacy Policy", link: "/privacy-policy-2/" },
      { label: "Terms & Conditions", link: "/terms-and-conditions/" },
      { label: "Disclaimer", link: "/disclaimer/" },
    ],
    contact: {
      address: "SCO 64-65, 4th Floor, Sub. City Center, Sector 34A, Chandigarh",
      email: "info@morphacademy.com",
      phone: "+91 9501489999",
    },
  };

  return (
    <footer className="relative pt-10 pb-6 overflow-hidden text-white bg-gradient-to-r from-gray-900 via-violet-900 to-blue-900">
      {/* Pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "url('/images/education-pattern.png')",
          backgroundRepeat: "repeat",
          opacity: 0.05,
        }}
      ></div>

      <div className="relative z-10 container max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-start items-start text-sm ">
          <div className="pr-20">
               {/* Logo & Socials */}
          <div className="mb-10">
            <img className="mb-5 w-32" src="/images/logonew.png" alt="Morph Academy" />
            <div className="flex gap-4">
              <a href="https://www.instagram.com/morphmeta.academy" target="_blank" className="hover:text-yellow-400 transition-colors">
                <i className="fa-brands fa-instagram text-2xl"></i>
              </a>
              <a href="https://www.facebook.com/share/imSZY8H2vB6JT3jN/?mibextid=LQQJ4d" target="_blank" className="hover:text-yellow-400 transition-colors">
                <i className="fa-brands fa-facebook text-2xl"></i>
              </a>
              <a href="https://www.youtube.com/@MorphFilmStudio34" target="_blank" className="hover:text-yellow-400 transition-colors">
                <i className="fa-brands fa-youtube text-2xl"></i>
              </a>
            </div>
          </div>
          </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-10">
          {/* Courses */}
          <div>
            <h3 className="font-semibold mb-3 text-lg text-maroon-400">Courses</h3>
            <ul className="space-y-2">
              {menu.courses.map((item, idx) => (
                <li key={idx}>
                  <Link to={item.link} className="text-gray-100 hover:text-yellow-400 transition-colors">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-3 text-lg text-maroon-400">Company</h3>
            <ul className="space-y-2">
              {menu.company.map((item, idx) => (
                <li key={idx}>
                  <Link to={item.link} className="text-gray-100 hover:text-yellow-400 transition-colors">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-3 text-lg text-maroon-400">Support</h3>
            <ul className="space-y-2">
              {menu.support.map((item, idx) => (
                <li key={idx}>
                  <Link to={item.link} className="text-gray-100 hover:text-yellow-400 transition-colors">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-3 text-lg text-maroon-400">Get in Touch</h3>
            <p className="mb-2 text-sm">{menu.contact.address}</p>
            <p className="mb-2 text-sm">Email: <a href={`mailto:${menu.contact.email}`} className="font-semibold hover:text-yellow-400 transition-colors">{menu.contact.email}</a></p>
            <p className="text-sm">Phone: <a href={`tel:${menu.contact.phone}`} className="font-semibold hover:text-yellow-400 transition-colors">{menu.contact.phone}</a></p>
          </div>
        </div>
        </div>

        <div className="border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between items-center text-sm">
          <span>© 2025 Meta Morph, Inc. All Rights Reserved</span>
          <div className="flex space-x-4 mt-2 md:mt-0">
            {menu.company.slice(0,3).map((item, idx) => (
              <Link key={idx} to={item.link} className="hover:text-yellow-400 transition-colors">{item.label}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
