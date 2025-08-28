import React from "react";
import { FaChalkboardTeacher, FaBookOpen, FaRupeeSign, FaUserGraduate } from "react-icons/fa";
import Objectives from "./objectives";

const AboutUs = () => {
  return (
    <div className="flex flex-col justify-center items-center px-6 py-10">
      {/* About Us Section */}
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-5xl flex flex-col md:flex-row items-center md:items-start">
        {/* Left side text */}
        <div className="md:w-1/2 w-full md:pr-6 text-center md:text-left">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">About Us</h2>
          <p className="text-gray-600 leading-relaxed">
            JD Academy of Excellence, popularly known as JDAX, is a unique academic
            unit, initiated by the Archdiocese of Madras-Mylapore, committed to
            educate, empower, and shape the personalities of young men and women
            towards their pursuit of leadership excellence.
            <br /><br />
            It has its main centre at Santhome, near the iconic Santhome Cathedral,
            Chennai. It primarily focuses on providing learning opportunities to all
            young aspirants to become leaders in their respective ﬁelds and serve the
            nation as agents of social change.
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

      {/* Why Choose JDAX Section */}
      <div className="mt-12 w-full max-w-6xl text-center">
        <h2 className="text-3xl font-bold text-[#0f398f] mb-8">Why Choose JDAX</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center hover:shadow-xl transition">
            <FaChalkboardTeacher className="text-4xl text-[#0f398f] mb-4" />
            <h3 className="text-lg font-semibold mb-2">CT Enabled Classrooms</h3>
            <p className="text-gray-600 text-sm">with advanced infrastructure</p>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center hover:shadow-xl transition">
            <FaBookOpen className="text-4xl text-[#0f398f] mb-4" />
            <h3 className="text-lg font-semibold mb-2">Unique Curricula</h3>
            <p className="text-gray-600 text-sm">with international standards</p>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center hover:shadow-xl transition">
            <FaRupeeSign className="text-4xl text-[#0f398f] mb-4" />
            <h3 className="text-lg font-semibold mb-2">Subsidized & Affordable Fee</h3>
            <p className="text-gray-600 text-sm">with assured learning experience</p>
          </div>

          {/* Card 4 */}
          <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center hover:shadow-xl transition">
            <FaUserGraduate className="text-4xl text-[#0f398f] mb-4" />
            <h3 className="text-lg font-semibold mb-2">Subject Experts & Trainers</h3>
            <p className="text-gray-600 text-sm">
              from Universities and Industries
            </p>
          </div>
        </div>
      </div>
     <Objectives/>
    </div>
  );
};

export default AboutUs;
