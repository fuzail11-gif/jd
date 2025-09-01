import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import MemberCarousel from "./memberCarousel";

const About = ({ children }) => {
  return (
    <div>
      <Header />

      {/* About Us Section */}
      <div className="flex flex-col justify-center items-center px-6 py-10">
        {/* About Us Section */}
        <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-5xl flex flex-col md:flex-row items-center md:items-start">
          {/* Left side text */}
          <div className="md:w-1/2 w-full md:pr-6 text-center md:text-left">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">About Us</h2>
            <p className="text-gray-600 leading-relaxed">
              JD Academy of Excellence, popularly known as JDAX, is a unique
              academic unit, initiated by the Archdiocese of Madras-Mylapore,
              committed to educate, empower, and shape the personalities of
              young men and women towards their pursuit of leadership
              excellence.
              <br />
              <br />
              It has its main centre at Santhome, near the iconic Santhome
              Cathedral, Chennai. It primarily focuses on providing learning
              opportunities to all young aspirants to become leaders in their
              respective ﬁelds and serve the nation as agents of social change.
            </p>
          </div>

          {/* Right side image */}
          <div className="md:w-1/2 w-full mt-6 md:mt-0 flex justify-center items-center bg-[#0f398f] rounded-xl">
            <img
              src="/img1.png"
              alt="JDAX Logo"
              className="w-100 h-100 object-contain"
            />
          </div>
        </div>
        <MemberCarousel />
      </div>

      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default About;
