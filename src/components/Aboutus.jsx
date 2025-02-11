import React, { useState } from "react";
import { motion } from "framer-motion";
import { AiOutlineCheckCircle } from "react-icons/ai";
import AboutImage from "../assets/abgif.webp";
import comp1 from "../assets/wwr.webp";
import ObjectivesImage from "../assets/ab1.webp";
import OpportunitiesImage from "../assets/op2.webp";

function Aboutus() {
  const [selectedTopic, setSelectedTopic] = useState("Who We Are");

  const topics = [
    {
      id: "Who We Are",
      title: "Who We Are",
      content: (
        <p className="text-gray-700 text-justify">
          Our research center is committed to pioneering advanced research and investigating the potential of immersive technologies, including Extended Reality (XR),
          which encompasses Augmented Reality (AR), Virtual Reality (VR), Mixed Reality (MR), Digital Twin, and the Metaverse. Our objective is to expand the frontiers
          of these technologies to generate innovative experiences, applications, and opportunities for both researchers and various industries. We are convinced that
          these technologies possess the capacity to transform sectors such as education, healthcare, entertainment, and beyond. Additionally, we create immersive
          educational content aimed at revolutionizing the learning and teaching processes. This center represents a foundational step in positioning Anna University
          as a leader in the burgeoning Metaverse and virtual landscape.
        </p>
      ),
      image: comp1,
    },
    {
      id: "Objectives",
      title: "Objectives",
      content: (
        <ul className="text-gray-700 space-y-3">
          <li>Conduct cutting-edge research in the field of immersive technologies, including AR, VR, XR, and Metaverse.</li>
          <li>Develop and refine techniques for immersive content creation, with a particular emphasis on educational content.</li>
          <li>Foster collaboration and partnerships with industry, academic institutions, and other research organisations.</li>
          <li>Train the next generation of immersive technology professionals by offering educational programs and opportunities for hands-on experience.</li>
          <li>Create a vibrant community of immersive technology enthusiasts, including students, researchers, industry professionals, and other stakeholders.</li>
          <li>Influence policy and regulatory frameworks around the use of immersive technologies to ensure their responsible and ethical deployment.</li>
        </ul>
      ),
      image: ObjectivesImage,
    },
    {
      id: "Opportunities",
      title: "Opportunities",
      content: (
        <ul className="text-gray-700 space-y-3">
          <li>Collaborate on innovative projects in XR and Metaverse technologies.</li>
          <li>Engage in interdisciplinary research opportunities to develop cutting-edge solutions.</li>
          <li>Access specialized training programs in AR, VR, and immersive technologies for career advancement.</li>
          <li>Contribute to the development and refinement of immersive educational tools for diverse learning environments.</li>
          <li>Join a growing network of professionals and researchers in the immersive technology field.</li>
          <li>Explore funding and grant opportunities to support innovative research and development projects.</li>
          <li>Gain experience through industry partnerships and internships focused on the future of immersive technologies.</li>
        </ul>
      ),
      image: OpportunitiesImage,
    },
  ];

  const currentTopic = topics.find((topic) => topic.id === selectedTopic);

  return (

    <div className="bg-gray-50">
      {/* Hero Section 
      <div
        style={{ backgroundImage: `url(${AboutImage})` }}
        className="relative bg-cover bg-center h-96"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-60"></div>
        ABOUT US text 
        <motion.div
          className="absolute left-10 top-1/2 text-5xl font-extrabold text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{
            textShadow: "2px 2px 10px rgba(0, 0, 0, 0.7), 0 0 25px rgba(255, 255, 255, 0.5)",
          }}
        >
          ABOUT US
        </motion.div>
        <div className="relative z-10 flex items-center justify-center h-full"></div>
      </div> */}
      <div className="lg:h-100 md:h-100 justify-center">
        <img  style={{ width: "100%"}} src={AboutImage}></img>
      </div>
      {/* Main Content Section */}
      <div className="max-w-7xl mx-auto p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Section */}
          <div className="flex flex-col space-y-4">
            {topics.map((topic) => (
              <motion.div
                key={topic.id}
                onClick={() => setSelectedTopic(topic.id)}
                className={`p-4 rounded-lg shadow-md cursor-pointer ${selectedTopic === topic.id
                    ? "bg-blue-50 text-[#1b263b]"
                    : "bg-white text-[#1b263b]"
                  } hover:bg-gray-200`}
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-lg font-semibold">{topic.title}</h3>
              </motion.div>
            ))}
          </div>

          {/* Right Section */}
          <motion.div
            className="bg-white shadow-lg rounded-lg p-6 col-span-2"
            key={currentTopic.id}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-blue-900 mb-4">
              {currentTopic.title}
            </h2>
            {currentTopic.content}
            <motion.img
              src={currentTopic.image}
              alt={currentTopic.title}
              className="rounded-lg shadow-lg w-full mt-4"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
