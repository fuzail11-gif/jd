import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

const AccordionItem = ({ title, content, onOpen }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    const nextState = !isOpen;
    setIsOpen(nextState);

    if (nextState) {
      // only trigger when opening
      onOpen();
    }
  };

  return (
    <div className="border-b">
      <button
        className="w-full flex justify-between items-center py-3 px-4 text-left font-semibold text-gray-700 hover:bg-gray-100"
        onClick={handleClick}
      >
        {title}
        <span>{isOpen ? "-" : "+"}</span>
      </button>
      {isOpen && <div className="p-4 text-gray-600">{content}</div>}
    </div>
  );
};

const UPSC = () => {
  const [videoExpanded, setVideoExpanded] = useState(false);
  const [footerFlicker, setFooterFlicker] = useState(false);

  const handleAccordionOpen = () => {
    setVideoExpanded(true);

    // trigger footer flicker animation
    setFooterFlicker(true);
    setTimeout(() => setFooterFlicker(false), 500);
  };

  return (
    <>
      <Header />

      <main className="flex-grow px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left side - Accordion */}
          <div className="bg-white shadow rounded-lg">
            <h2 className="text-xl font-bold p-4 border-b">Course Content</h2>
            <AccordionItem
              title="Introduction to UPSC"
              content="This section covers the basics of the UPSC exam, eligibility, and exam structure."
              onOpen={handleAccordionOpen}
            />
            <AccordionItem
              title="History"
              content="History syllabus includes Ancient, Medieval, and Modern Indian history with world context."
              onOpen={handleAccordionOpen}
            />
            <AccordionItem
              title="Geography"
              content="Physical, Indian, and World Geography topics with maps and case studies."
              onOpen={handleAccordionOpen}
            />
          </div>

          {/* Right side - YouTube Video */}
          <div
            className={`bg-white shadow rounded-lg p-4 transition-all duration-500 ${
              videoExpanded ? "h-[500px]" : "h-[350px]"
            }`}
          >
            <h2 className="text-xl font-bold mb-4">Demo Lecture</h2>
            <div className="w-full h-full">
              <iframe
                className="w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="UPSC Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </main>

      <div className={footerFlicker ? "animate-pulse" : ""}>
        <Footer />
      </div>
    </>
  );
};

export default UPSC;
