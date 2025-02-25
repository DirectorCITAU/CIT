import React, { useState } from "react";
import { motion } from "framer-motion";
import Rservices from "./Rservices";
import Sservices from "./Sservices";
import Cservices from "./Cservices";
import { MdMiscellaneousServices } from 'react-icons/md';
import { BiSearchAlt } from 'react-icons/bi';
import { GiShakingHands } from 'react-icons/gi';
import { FaGraduationCap } from 'react-icons/fa';

function Services() {
  const [selectedTopic, setSelectedTopic] = useState("For Researchers");

  const topics = {
    "For Researchers": <Rservices />, 
    "For Students": <Sservices />, 
    "For Company": <Cservices />
  };

  return (
    <div className="bg-gray-50 flex flex-col items-center pt-7">
      {/* Header */}
      <div className="bg-white rounded-lg p-4 flex flex-col items-start justify-center w-10/12 md:w-3/5 mb-4 text-center">
        <div className="flex items-center justify-center mb-4">
          <div className="bg-white rounded-full p-4 border-white border-2 flex items-center justify-center w-20 h-20 hover:border-black transition-colors duration-300 ease-in-out">
            <MdMiscellaneousServices className="text-black text-6xl hover:text-[#2d2f2ef5] transition-colors duration-300 ease-in-out" />
          </div>
          <h3 className="text-3xl font-bold tracking-wider text-[#232627] font-raleway pl-7 underline underline-offset-8 decoration-blue-200 decoration-1">OUR SERVICES</h3>
        </div>
        <p className="text-[#2D2D2D] text-lg font-roboto">
        We want researchers, students, and companies to be a part of this journey in exploring how immersive visual
            technology can be a beneficial tool for a multitude of functions, be it scientific, industrial, marketing, or
            entertainment. We offer different services from tailor-made exclusive research projects to short-term, easy
            access projects.
                    </p>
      </div>

      {/* Icons Section */}
      <div className="flex flex-wrap justify-center">
        {/* Researcher Icon */}
        <div className="bg-white rounded-lg p-4 flex flex-col items-center justify-center w-64 mx-4 my-4 cursor-pointer"
          onClick={() => setSelectedTopic("For Researchers")}>
          <div className="rounded-full bg-[#47D5CD] p-4 hover:scale-110 transition-all duration-300 ease-in-out">
            <BiSearchAlt className="text-7xl text-white" />
          </div>
          <h5 className="text-sm font-semibold tracking-wider text-[#232627] font-raleway mb-4 pt-5"> FOR RESEARCHERS </h5>
          <p className="text-[#2D2D2D] text-center text-sm font-roboto">Research Collaboration</p>
        </div>

        {/* Student Icon */}
        <div className="bg-white rounded-lg p-4 flex flex-col items-center justify-center w-64 mx-4 my-4 cursor-pointer"
          onClick={() => setSelectedTopic("For Students")}>
          <div className="rounded-full bg-[#31AF66F5] p-4 hover:scale-110 transition-all duration-300 ease-in-out">
            <FaGraduationCap className="text-7xl text-white" />
          </div>
          <h5 className="text-sm font-semibold tracking-wider text-[#232627] font-raleway mb-4 pt-5"> FOR STUDENTS </h5>
          <p className="text-[#2D2D2D] text-center text-sm font-roboto">Hands-on Student Co-operation</p>
        </div>

        {/* Company Icon */}
        <div className="bg-white rounded-lg p-4 flex flex-col items-center justify-center w-64 mx-4 my-4 cursor-pointer"
          onClick={() => setSelectedTopic("For Company")}>
          <div className="rounded-full bg-[#EFA700] p-4 hover:scale-110 transition-all duration-300 ease-in-out">
            <GiShakingHands className="text-7xl text-white" />
          </div>
          <h5 className="text-sm font-semibold tracking-wider text-[#232627] font-raleway mb-4 pt-5">FOR COMPANIES</h5>
          <p className="text-[#2D2D2D] text-center text-sm font-roboto">Collaboration with Companies</p>
        </div>
      </div>

      {/* Content Section */}
      <div className="bg-gray-50 flex flex-col items-center p-6">
      <motion.div
        className="bg-white shadow-lg rounded-lg p-8 w-full max-w-7xl mt-8"
        key={selectedTopic}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {topics[selectedTopic]}
      </motion.div>
      </div>
    </div>
  );
}

export default Services;
