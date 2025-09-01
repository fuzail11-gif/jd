import React, { useState, useRef } from "react";
import { Menu, X, User } from "lucide-react";
import { Link } from "react-router-dom";
import imgs from "../../public/img1.png";
import SlidingBanner from "./SlidingBanner";

const MENU_ITEMS = [
  { label: "Home", link: "/" },
  { label: "About Us", link: "/about" },
  { label: "Academics", link: "/upsc" },
  { label: "Administration", link: "/upsc" },
  {
    label: "Campus Life",
    submenu: [
      { label: "Campus", link: "/upsc" },
      { label: "Faculty", link: "/upsc" },
      { label: "Activities", link: "/upsc" },
    ],
  },
  { label: "Fee Structure", link: "/upsc" },
  {
    label: "Competitive Exam",
    submenu: [
      { label: "UPSC", link: "/upsc" },
      { label: "TNPSC", link: "/tnpsc" },
      { label: "SSC", link: "/ssc" },
      { label: "RRB", link: "/rrb" },
    ],
  },
  { label: "Online Application", link: "/online-application", external: true },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const timeoutRef = useRef(null);

  const handleMouseEnter = (menu) => {
    clearTimeout(timeoutRef.current);
    setOpenDropdown(menu);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 200);
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-[#0f398f] text-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="text-2xl font-bold text-[#f4b400] ml-0">
              <img src={imgs} alt="Logo" className="w-12 h-12" />
            </div>

            {/* Desktop Menu */}
            <nav className="hidden md:flex space-x-6 font-medium relative items-center">
              {MENU_ITEMS.map((item) =>
                item.submenu ? (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => handleMouseEnter(item.label)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <button className="hover:text-[#f4b400] transition-colors">
                      {item.label} ▾
                    </button>
                    {openDropdown === item.label && (
                      <div className="absolute left-0 mt-2 w-48 bg-white text-gray-800 rounded-lg shadow-lg py-2 z-50">
                        {item.submenu.map((sub) =>
                          sub.external ? (
                            <a
                              key={sub.label}
                              href={sub.link}
                              className="block px-4 py-2 hover:bg-[#0f398f] hover:text-white transition"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {sub.label}
                            </a>
                          ) : (
                            <Link
                              key={sub.label}
                              to={sub.link}
                              className="block px-4 py-2 hover:bg-[#0f398f] hover:text-white transition"
                            >
                              {sub.label}
                            </Link>
                          )
                        )}
                      </div>
                    )}
                  </div>
                ) : item.external ? (
                  <a
                    key={item.label}
                    href={item.link}
                    className="blink-yellow font-semibold transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    key={item.label}
                    to={item.link}
                    className={`transition-colors ${
                      item.label === "Online Application"
                        ? "blink-yellow font-semibold"
                        : "hover:text-[#f4b400]"
                    }`}
                  >
                    {item.label}
                  </Link>
                )
              )}

              {/* Student Login */}
              <Link
                to="/admin"
                className="flex items-center gap-2 bg-[#f4b400] text-[#0f398f] px-3 py-1.5 rounded-lg font-semibold hover:bg-white hover:text-[#0f398f] transition"
              >
                <User size={18} /> Student Login
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white hover:text-[#f4b400] focus:outline-none"
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="md:hidden bg-[#0f398f] px-4 pb-4 space-y-2">
            {MENU_ITEMS.map((item) =>
              item.submenu ? (
                <details key={item.label} className="group">
                  <summary className="cursor-pointer hover:text-[#f4b400]">
                    {item.label}
                  </summary>
                  <div className="ml-4 mt-2 space-y-1">
                    {item.submenu.map((sub) =>
                      sub.external ? (
                        <a
                          key={sub.label}
                          href={sub.link}
                          className="block hover:text-[#f4b400]"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {sub.label}
                        </a>
                      ) : (
                        <Link
                          key={sub.label}
                          to={sub.link}
                          className="block hover:text-[#f4b400]"
                        >
                          {sub.label}
                        </Link>
                      )
                    )}
                  </div>
                </details>
              ) : item.external ? (
                <a
                  key={item.label}
                  href={item.link}
                  className="block blink-yellow font-semibold"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.label}
                  to={item.link}
                  className={`block ${
                    item.label === "Online Application"
                      ? "blink-yellow font-semibold"
                      : "hover:text-[#f4b400]"
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}

            {/* Mobile Student Login */}
            <Link
             to="/admin"
              className="flex items-center gap-2 bg-[#f4b400] text-[#0f398f] px-3 py-2 rounded-lg font-semibold hover:bg-white hover:text-[#0f398f] transition mt-2"
            >
              <User size={18} /> Student Login
            </Link>
          </div>
        )}
      </header>

      {/* Add top padding so content isn't hidden */}
      <div className="pt-16">
        <SlidingBanner />
      </div>
    </>
  );
};

export default Header;
