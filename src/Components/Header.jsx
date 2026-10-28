"use client";

import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { motion, AnimatePresence } from "framer-motion";
import NavbarData from "../data/Navbar.json";
import { PhoneCallIcon } from "lucide-react";

const ArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="inline-block ml-1"
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

// --- START: CONFIGURE YOUR MEGA-MENUS HERE ---

// 3-column mega menus
const MEGA_MENU_3_COL = ["Courses"];

// 2-column mega menus
const MEGA_MENU_2_COL = ["Training", "University", "Placements", "About", "Events", "Blog"];

// Combine all mega menu identifiers
const ALL_MEGA_MENUS = [...MEGA_MENU_3_COL, ...MEGA_MENU_2_COL];

// --- END: CONFIGURATION ---

const Header = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [mobileSubOpen, setMobileSubOpen] = useState({});
  const [isSticky, setIsSticky] = useState(false);

  const location = useLocation();

  // Sticky header on scroll
  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close sidebar on route change
  useEffect(() => {
    setSidebarOpen(false);
    setMobileSubOpen({});
  }, [location.pathname]);

  const toggleMobileSub = (key) => {
    setMobileSubOpen((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <>
      {/* Sticky Header */}
      <header
        className={`fixed w-full z-[1000] transition-all duration-300 px-5 ${
          isSticky
            ? "backdrop-blur-lg bg-black/70 shadow-xl py-2"
            : "bg-black/80 py-4"
        }`}
      >
        <div className="container max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-6">
            <Link to="/">
              <img
                src={NavbarData.logo}
                alt="Morph Academy"
                className="w-25 h-12"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-8">
            {NavbarData.menu.map((item, idx) => {
              const isMega = ALL_MEGA_MENUS.includes(item.text) && item.submenu;
              const hasDropdown = item.submenu && !isMega;

              return (
                <div
                  key={idx}
                  className="relative group"
                  onMouseEnter={() => setOpenIndex(idx)}
                  onMouseLeave={() => setOpenIndex(null)}
                >
                  <button className="flex items-center gap-1 font-semibold text-white text-sm hover:text-purple-400 transition-all duration-300">
                    {item.text} {item.submenu && <ArrowIcon />}
                  </button>

                  {/* Mega Menu */}
                  {isMega && openIndex === idx && (
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className="absolute top-full left-1/2 -translate-x-1/3 bg-white rounded-xl w-[max-content] shadow-2xl z-[1000] overflow-hidden"
                    >
                      <div className="w-full px-6 py-8">
                        <div
                          className={`grid grid-cols-1 sm:grid-cols-2 ${
                            MEGA_MENU_3_COL.includes(item.text)
                              ? "lg:grid-cols-3"
                              : "lg:grid-cols-2"
                          } gap-10 w-full`}
                        >
                          {item.submenu.map((col, colIdx) => (
                            <div key={colIdx} className="flex flex-col gap-3">
                              <h4 className="font-bold text-md text-gray-800 border-b border-gray-200 pb-2">
                                {col.text}
                              </h4>
                              {col.submenu &&
                                col.submenu.map((linkItem, linkIdx) => (
                                  <Link
                                    key={linkIdx}
                                    to={linkItem.link}
                                    className="text-gray-600 hover:text-purple-600 transition-colors duration-200"
                                  >
                                    {linkItem.text}
                                  </Link>
                                ))}
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Normal Dropdown */}
                  {hasDropdown && openIndex === idx && (
                    <motion.ul
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-1/2 top-full -translate-x-1/2 bg-white shadow-xl py-2 rounded-lg min-w-[220px] z-[1000]"
                    >
                      {item.submenu.map((subItem, subIdx) => (
                        <li key={subIdx} className="hover:bg-gray-100">
                          <Link
                            to={subItem.link}
                            className="block px-4 py-2 text-gray-800"
                          >
                            {subItem.text}
                          </Link>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </div>
              );
            })}

            <Link
              to="/result"
              className="text-white font-semibold hover:text-purple-400 transition-colors duration-300"
            >
              Results
            </Link>
          </nav>

          {/* Action Buttons */}
          <div className="hidden lg:flex gap-4 items-center">
            <Link
              to="/contact-us"
              className="flex items-center gap-2 border border-violet-600 px-5 py-2 rounded-full font-semibold text-white hover:bg-violet-600 transform transition-all duration-300 hover:-translate-y-1 hover:scale-105"
            >
              <PhoneCallIcon className="w-5 h-5" /> Contact Us
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <div className="lg:hidden">
            <button
              onClick={() => setSidebarOpen(true)}
              className="text-white text-2xl"
              aria-label="Open Menu"
            >
              <i className="fa-solid fa-bars"></i>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {sidebarOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/80 z-[1500]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSidebarOpen(false)}
            />
            <motion.div
              className="fixed top-0 left-0 h-full w-3/4 max-w-sm bg-neutral-900 border-r border-gray-800 text-white z-[2000] p-4 overflow-y-auto shadow-2xl"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.3 }}
            >
              <div className="flex justify-between items-center mb-6">
                <Link to="/">
                  <img
                    src={NavbarData.logo}
                    alt="Morph Academy"
                    className="w-25 h-10"
                  />
                </Link>
                <button
                  onClick={() => setSidebarOpen(false)}
                  className="text-white text-2xl"
                  aria-label="Close Menu"
                >
                  <i className="fa-solid fa-xmark"></i>
                </button>
              </div>

              <Sidebar width="100%" backgroundColor="transparent">
                <Menu
                  menuItemStyles={{
                    button: {
                      color: "#fff",
                      "&:hover": {
                        backgroundColor: "#3f3f46",
                      },
                    },
                  }}
                >
                  {NavbarData.menu.map((item, i) => {
                    const isMega =
                      ALL_MEGA_MENUS.includes(item.text) && item.submenu;
                    const hasDropdown = !isMega && item.submenu;

                    if (isMega || hasDropdown) {
                      return (
                        <div key={i}>
                          <button
                            className="w-full text-left flex justify-between items-center px-3 py-3 hover:bg-gray-700 rounded-lg font-semibold"
                            onClick={() => toggleMobileSub(item.text)}
                          >
                            {item.text}
                            <motion.span
                              animate={{
                                rotate: mobileSubOpen[item.text] ? 180 : 0,
                              }}
                            >
                              <ArrowIcon />
                            </motion.span>
                          </button>
                          <AnimatePresence>
                            {mobileSubOpen[item.text] && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="pl-4 overflow-hidden"
                              >
                                {item.submenu.map((col, j) =>
                                  col.submenu ? (
                                    <div key={j}>
                                      <button
                                        className="w-full text-left flex justify-between items-center px-3 py-2 hover:bg-gray-700 rounded-lg font-medium"
                                        onClick={() =>
                                          toggleMobileSub(col.text)
                                        }
                                      >
                                        {col.text}
                                        <motion.span
                                          animate={{
                                            rotate: mobileSubOpen[col.text]
                                              ? 180
                                              : 0,
                                          }}
                                        >
                                          <ArrowIcon />
                                        </motion.span>
                                      </button>
                                      <AnimatePresence>
                                        {mobileSubOpen[col.text] && (
                                          <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{
                                              height: "auto",
                                              opacity: 1,
                                            }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="pl-4 overflow-hidden"
                                          >
                                            {col.submenu.map((linkItem, k) => (
                                              <MenuItem
                                                key={k}
                                                component={
                                                  <Link to={linkItem.link} />
                                                }
                                                className="!text-gray-300"
                                              >
                                                {linkItem.text}
                                              </MenuItem>
                                            ))}
                                          </motion.div>
                                        )}
                                      </AnimatePresence>
                                    </div>
                                  ) : (
                                    <MenuItem
                                      key={j}
                                      component={<Link to={col.link} />}
                                    >
                                      {col.text}
                                    </MenuItem>
                                  )
                                )}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    } else {
                      return (
                        <MenuItem key={i} component={<Link to={item.link} />}>
                          {item.text}
                        </MenuItem>
                      );
                    }
                  })}

                  <MenuItem component={<Link to="/result" />}>Results</MenuItem>

                  <div className="mt-4 flex flex-col gap-3">
                    <Link
                      to="/contact-us"
                      className="p-3 flex items-center gap-2 justify-center border border-violet-600 rounded-full font-semibold text-white hover:bg-violet-600 transform transition-all duration-300"
                    >
                      <PhoneCallIcon className="w-5 h-5" /> Contact Us
                    </Link>
                  </div>
                </Menu>
              </Sidebar>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
