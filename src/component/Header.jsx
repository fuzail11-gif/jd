import React, { useState, useRef } from "react";
import { Menu, X, User } from "lucide-react";
import imgs from "../../public/img1.png";
import SlidingBanner from "./SlidingBanner";

const MENU_ITEMS = [
  { label: "Home", link: "#" },
  { label: "About Us", link: "#" },
  { label: "Academics", link: "#" },
  { label: "Administration", link: "#" },
  {
    label: "Campus Life",
    submenu: [
      { label: "Campus", link: "#" },
      { label: "Faculty", link: "#" },
      { label: "Activities", link: "#" },
    ],
  },
  { label: "Fee Structure", link: "#" },
  {
    label: "Competitive Exam",
    submenu: [
      { label: "UPSC", link: "#" },
      { label: "TNPSC", link: "#" },
      { label: "SSC", link: "#" },
      { label: "RRB", link: "#" },
    ],
  },
  { label: "Online Application", link: "#", external: true },
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
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 w-full bg-[#0f398f] text-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
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
                        {item.submenu.map((sub) => (
                          <a
                            key={sub.label}
                            href={sub.link}
                            className="block px-4 py-2 hover:bg-[#0f398f] hover:text-white transition"
                          >
                            {sub.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                 <a
  key={item.label}
  href={item.link}
  target={item.external ? "_blank" : "_self"}
  className={`transition-colors ${
    item.label === "Online Application" ? "blink-yellow font-semibold" : "hover:text-[#f4b400]"
  }`}
>
  {item.label}
</a>
                )
              )}

              {/* Student Login */}
              <a
                href="#"
                className="flex items-center gap-2 bg-[#f4b400] text-[#0f398f] px-3 py-1.5 rounded-lg font-semibold hover:bg-white hover:text-[#0f398f] transition"
              >
                <User size={18} /> Student Login
              </a>
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
                    {item.submenu.map((sub) => (
                      <a
                        key={sub.label}
                        href={sub.link}
                        className="block hover:text-[#f4b400]"
                      >
                        {sub.label}
                      </a>
                    ))}
                  </div>
                </details>
              ) : (
              <a
  key={item.label}
  href={item.link}
  target={item.external ? "_blank" : "_self"}
  className={`block ${
    item.label === "Online Application" ? "blink-yellow font-semibold" : "hover:text-[#f4b400]"
  }`}
>
  {item.label}
</a>

              )
            )}

            {/* Mobile Student Login */}
            <a
              href="#"
              className="flex items-center gap-2 bg-[#f4b400] text-[#0f398f] px-3 py-2 rounded-lg font-semibold hover:bg-white hover:text-[#0f398f] transition mt-2"
            >
              <User size={18} /> Student Login
            </a>
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
