import React from "react";
import obj1 from "../../public/obj1.png";
import obj2 from "../../public/obj2.png";
import obj3 from "../../public/obj3.png";
import obj4 from "../../public/obj4.png";
import obj5 from "../../public/obj5.png";
import obj6 from "../../public/obj6.png";

const objectives = [
  {
    title: "Knowledge",
    description:
      "To build and enrich Knowledge, Attitude, Skills, and Values (KASV) as the core foundation at the school level.",
    icon: obj1,
  },
  {
    title: "Academic Competency",
    description:
      "To promote the academic competency of the learners through innovative and creative teaching and learning process.",
    icon: obj2,
  },
  {
    title: "Professional Coaching",
    description:
      "To offer professional coaching for all exams, such as JEE, NEET, CAT, UPSC, TNPSC, SSC, IBPS, NET, SET, TET, GRE, IELTS, and more.",
    icon: obj3,
  },
  {
    title: "Professional Career",
    description:
      "To prepare young aspirants in professional careers through courses in the Schools of Languages, Data Science, Artificial Intelligence (AI) and Machine Learning (ML).",
    icon: obj4,
  },
  {
    title: "Train and Develop",
    description:
      "To train and develop Entrepreneurs in Small Scale Businesses and Industries.",
    icon: obj5,
  },
  {
    title: "Socio-Economic",
    description:
      "To undertake research and development-oriented programs and projects in socio-economic and anthropological studies.",
    icon: obj6,
  },
];

const Objectives = () => {
  return (
    <section className="py-12 px-6 md:px-16 bg-gray-50 mt-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-[#0f398f] mb-10">
          Our Objectives
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {objectives.map((obj, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition flex items-start gap-4"
            >
              {/* Left icon */}
              <div className="flex-shrink-0 w-16 h-16 flex justify-center items-center bg-[#0f398f] rounded-lg p-2">
                <img
                  src={obj.icon}
                  alt={`${obj.title} icon`}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Right content */}
              <div>
                <h3 className="text-xl font-semibold text-[#0f398f] mb-2">
                  {obj.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">{obj.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Objectives;
