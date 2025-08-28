import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa6";
import imgs from "../../public/img1.png"; // adjust path if needed

const Footer = () => {
  return (
    <footer className="bg-[#0f398f] text-white py-10 px-6 md:px-16">
      <div className="grid md:grid-cols-4 gap-10">
        {/* Logo / Address */}
        <div>
          <div className="flex items-center gap-3 mb-3">
            <img src={imgs} alt="JDAX Logo" className="w-30 h-30" />
          </div>
          <h2 className="text-xl font-bold text-[#f4b400] hover:text-white transition-colors">
            JDAX Main Centre
          </h2>
          <p className="flex items-start gap-2 mb-2">
            <FaMapMarkerAlt className="mt-1" /> #23, Santhome High Road,
            Chennai-600004, Tamil Nadu <br />
            (Opp to Santhome Higher Sec School)
          </p>
          <a
            href="https://maps.app.goo.gl/La7DXBPHRNH3ecki9"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-white"
          >
            View on Map
          </a>
          <p className="flex items-center gap-2 mt-3">
            <FaPhoneAlt /> 63799 23050 | 73057 46045
          </p>
          <p className="flex items-center gap-2 mt-2">
            <FaEnvelope /> jdacademy2021@gmail.com
          </p>

          {/* Social Links */}
          <div className="flex gap-4 mt-4">
            <a href="#" className="hover:text-white transition-colors">
              <FaFacebook size={20} />
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <FaLinkedin size={20} />
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <FaTwitter size={20} />
            </a>
          </div>
        </div>

        {/* About Section */}
        <div>
          <h3 className="text-lg font-semibold text-[#f4b400] hover:text-white mb-3 transition-colors">
            About JDAX
          </h3>
          <ul className="space-y-2">
            {[
              "Programmes",
              "IT Training",
              "Entrepreneurship",
              "Language Proficiency Training",
              "Research & Development",
              "Counselling",
              "FAQs",
            ].map((item) => (
              <li
                key={item}
                className="hover:text-white cursor-pointer transition-colors"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Coaching Section */}
        <div>
          <h3 className="text-lg font-semibold text-[#f4b400] hover:text-white mb-3 transition-colors">
            Coaching & Career Guidance
          </h3>
          <ul className="space-y-2">
            {[
              "UPSC Coaching",
              "UPSC-IPCM Coaching",
              "TNPSC",
              "SSC",
              "NET Coaching",
              "Capsule Courses",
              "Aptitude Training",
              "Aptitude Coaching",
            ].map((item) => (
              <li
                key={item}
                className="hover:text-white cursor-pointer transition-colors"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Subscribe Section */}
        <div className="bg-white text-black p-5 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold text-[#0f398f] mb-3">
            Subscribe
          </h3>
          <p className="mb-3">Email *</p>
          <input
            type="email"
            placeholder="Email address"
            className="w-full px-3 py-2 rounded-md border border-gray-300 placeholder-black focus:outline-none focus:ring-2 focus:ring-[#0f398f]"
          />
          <button className="mt-3 w-full bg-[#f4b400] text-[#0f398f] font-semibold py-2 rounded-md hover:bg-white hover:text-[#0f398f] border border-[#f4b400] transition-colors">
            Subscribe
          </button>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center mt-10 border-t border-gray-500 pt-5 text-sm">
        © {new Date().getFullYear()} JDAX Academy. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
