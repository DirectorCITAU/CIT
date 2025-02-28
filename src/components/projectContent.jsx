import React from "react";
import { motion } from "framer-motion";
import AR from "../assets/Projects/ar.png";
import Rp1 from "../assets/Projects/rp1.png";
import Rp2 from "../assets/Projects/rp2.png";
import Rp3 from "../assets/Projects/rp3.png";
import Threesixty from "../assets/Projects/360img1.webp";
import Dt1 from "../assets/Projects/DT/dt1.jpg";
import Dt2 from "../assets/Projects/DT/dt2.png";
import Dt3 from "../assets/Projects/DT/dt3.png";
import Rv1 from "../assets/Projects/RVR/rv1.jpg";
import Rv2 from "../assets/Projects/RVR/rv2.jpg";
import Rv3 from "../assets/Projects/RVR/rv3.jpg";

const ProjectContent = () => {
  return (
    <>
      <h1 className="text-4xl text-[#232627] font-bold mb-6 p-5 tracking-wider font-raleway underline underline-offset-8 decoration-blue-200 decoration-1 text-center">
        PROJECTS
      </h1>

      {/* 360º Virtual Tour Section */}
      <motion.div
        className="flex justify-center mb-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="bg-white shadow-lg hover:shadow-xl transition-shadow rounded-lg p-6 max-w-2xl w-full">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center relative">
  360º Virtual Tour of CEG Campus, Anna University
  
  <span className="absolute bottom-[-6px] left-1/2 w-80 h-0.5 bg-gray-300 rounded-sm transform -translate-x-1/2"></span>
</h2>
<br />

          <motion.img
            src={Threesixty}
            alt="360º Virtual Tour of CEG Campus, Anna University"
            className="w-full h-auto rounded-md mb-4 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          />
          <p className="text-lg text-gray-700 text-center">
            <a
              href="https://cegvirtualtour.aucit.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline hover:text-blue-700"
            >
              Access
            </a>{" "}
            the content here{" "}
          </p>
        </div>
      </motion.div>

      {/* Digital Twin Section */}
      <motion.div
        className="flex justify-center mb-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="bg-white shadow-lg hover:shadow-2xl transition-shadow rounded-lg p-6 max-w-5xl w-full">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center relative">
  Digital Twin
  
  <span className="absolute bottom-[-6px] left-1/2 w-80 h-0.5 bg-gray-300 rounded-sm transform -translate-x-1/2"></span>
</h2>
<br />

          {/* Separate div for the first two images with styled box */}
          <div className=" p-4 mb-6 rounded-lg flex gap-6">
            <motion.img
              src={Dt1}
              alt="Digital Twin 1"
              className="w-1/3 h-64 object-contain rounded-md transform transition-all duration-300 hover:scale-105"
            />
            <motion.img
              src={Dt2}
              alt="Digital Twin 2"
              className="w-2/3 h-64 object-contain rounded-md transform transition-all duration-300 hover:scale-105"
            />
          </div>

          {/* Third image - Full-width style */}
          <div className="flex justify-center">
            <motion.img
              src={Dt3}
              alt="Digital Twin 3"
              className="w-2/3 h-auto object-contain rounded-md transform transition-all duration-300 hover:scale-105"
            />
          </div>
        </div>
      </motion.div>

      {/* Relaxation VR Section */}
      <motion.div
        className="flex justify-center mb-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="bg-white shadow-lg hover:shadow-2xl transition-shadow rounded-lg p-6 max-w-5xl w-full">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center relative">
  Relaxation VR
  
  <span className="absolute bottom-[-6px] left-1/2 w-80 h-0.5 bg-gray-300 rounded-sm transform -translate-x-1/2"></span>
</h2>
<br />

          {/* First row with two images */}
          <div className=" p-4 mb-6 rounded-lg flex gap-6">
            <motion.img
              src={Rv1}
              alt="Relaxation VR 1"
              className="w-1/2 h-64 object-contain rounded-md transform transition-all duration-300 hover:scale-105"
            />
            <motion.img
              src={Rv2}
              alt="Relaxation VR 2"
              className="w-1/2 h-64 object-contain rounded-md transform transition-all duration-300 hover:scale-105"
            />
          </div>

          {/* Second row with one image */}
          <div className="flex justify-center">
            <motion.img
              src={Rv3}
              alt="Relaxation VR 3"
              className="w-2/3 h-auto object-contain rounded-md transform transition-all duration-300 hover:scale-105"
            />
          </div>
        </div>
      </motion.div>

      {/* 3D Models Section */}
      <motion.div
        className="flex justify-center mb-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="bg-white shadow-lg hover:shadow-2xl transition-shadow rounded-lg p-6 max-w-5xl w-full">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center relative">
       3D Models
  
  <span className="absolute bottom-[-6px] left-1/2 w-80 h-0.5 bg-gray-300 rounded-sm transform -translate-x-1/2"></span>
</h2>
<br />
          <div className="flex justify-center">
            <motion.img
              src={AR}
              alt="3D Model"
              className="w-2/3 h-auto object-contain rounded-md transform transition-all duration-300 hover:scale-105"
            />
          </div>
        </div>
      </motion.div>

      {/* Robust and Photorealistic 3D Face Reconstruction Model Section */}
      <motion.div
        className="flex justify-center mb-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="bg-white shadow-lg hover:shadow-2xl transition-shadow rounded-lg p-6 max-w-5xl w-full">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center relative">
        Robust and Photorealistic 3D Face Reconstruction Model
  
  <span className="absolute bottom-[-6px] left-1/2 w-80 h-0.5 bg-gray-300 rounded-sm transform -translate-x-1/2"></span>
</h2>
<br />
          <p className="text-lg text-gray-700 text-center mb-6">
            Robust and Photorealistic 3D Face Reconstruction Model by removing
            occlusions and captures the expressions, age, and ethnicity of the
            Input Images.
          </p>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center relative">
       Deliverables
  
  <span className="absolute bottom-[-6px] left-1/2 w-20 h-0.5 bg-gray-300 rounded-sm transform -translate-x-1/2"></span>
</h2>
<br />

          {/* First row with two images */}
          <div className="flex gap-6 justify-between mb-6">
            <motion.img
              src={Rp1}
              alt="3D Face Reconstruction Model 1"
              className="w-1/2 h-64 object-contain rounded-md transform transition-all duration-300 hover:scale-105"
            />
            <motion.img
              src={Rp2}
              alt="3D Face Reconstruction Model 2"
              className="w-1/2 h-64 object-contain rounded-md transform transition-all duration-300 hover:scale-105"
            />
          </div>
          <br />
          {/* Second row with one image */}
          <div className="flex justify-center">
            <motion.img
              src={Rp3}
              alt="3D Face Reconstruction Model 3"
              className="w-full h-full object-contain rounded-md transform transition-all duration-300 hover:scale-105"
            />
          </div>
        </div>
      </motion.div>
      {/* Additional Projects Section */}
      <div className="flex flex-wrap justify-center gap-6 mb-10">
        {/* Card 1 */}
        <div className="bg-white shadow-lg hover:shadow-2xl transition-shadow rounded-lg p-6 max-w-xs w-full">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">
            Smart Contract based Measurement, Reporting, and Verification (MRV)
            System for the voluntary carbon market
          </h3>
          <div className="bg-gray-200 rounded-full h-4">
            <div
              className="bg-blue-500 h-4 rounded-full"
              style={{ width: "45%" }}
            ></div>
          </div>
          <p className="text-sm text-gray-500 text-center mt-2">
            45% Completed
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-lg hover:shadow-2xl transition-shadow rounded-lg p-6 max-w-xs w-full">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">
            Influence of Twitter on NFT Valuation using Sentiment Analysis
          </h3>
          <br />
          <div className="bg-gray-200 rounded-full h-4">
            <div
              className="bg-blue-500 h-4 rounded-full"
              style={{ width: "80%" }}
            ></div>
          </div>
          <p className="text-sm text-gray-500 text-center mt-2">
            80% Completed
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-lg hover:shadow-2xl transition-shadow rounded-lg p-6 max-w-xs w-full">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">
            Unified Smart Contract for Access Control on Blockchain
          </h3>
          <br />
          <br />
          <div className="bg-gray-200 rounded-full h-4">
            <div
              className="bg-blue-500 h-4 rounded-full"
              style={{ width: "90%" }}
            ></div>
          </div>
          <p className="text-sm text-gray-500 text-center mt-2">
            90% Completed
          </p>
        </div>
      </div>
      
    </>
  );
};

export default ProjectContent;
