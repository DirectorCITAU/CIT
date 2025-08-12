import React, { useState } from "react";
import { motion } from "framer-motion";
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
        <ul className="text-gray-700 space-y-3 list-disc pl-5 text-justify">
          <li>Conduct cutting-edge research in the field of immersive technologies, including AR, VR, XR, and Metaverse, with a focus on developing new applications and experiences.</li>
          <li>Develop and refine techniques for immersive content creation, with a particular emphasis on educational content.</li>
          <li>Foster collaboration and partnerships with industry, academic institutions, and other research organisations to advance the field of immersive technologies and create new opportunities for innovation.</li>
          <li>Train the next generation of immersive technology professionals by offering educational programs and opportunities for hands-on experience.</li>
          <li>Create a vibrant community of immersive technology enthusiasts, including students, researchers, industry professionals, and other stakeholders.</li>
          <li>Influence policy and regulatory frameworks around the use of immersive technologies to ensure their responsible and ethical deployment.</li>
          <li>Promote public awareness and understanding of immersive technologies, their potential applications, and their impact on society.</li>
        </ul>
      ),
      image: ObjectivesImage,
    },
    {
      id: "Opportunities",
      title: "Opportunities",
      content: (
        <ul className="text-gray-700 space-y-3 list-disc pl-5 text-justify">
          <p>
            The Center for Immersive Technologies (CIT) offers a wealth of opportunities for individuals who are interested in immersive technologies such as Augmented Reality (AR), Virtual Reality (VR), Extended Reality (XR), Digital Twin and Metaverse.
          </p>
          <li>
            <b>Research Opportunities:</b><br /> The CIT provides a platform for researchers to explore the potential of immersive technologies in various domains. Researchers can access the state-of-the-art facilities and resources available at the CIT to conduct research and develop solutions in this field. The centre offers funding opportunities, research collaborations, and access to specialised hardware and software tools for researchers.
          </li>
          <li>
            <b>Career Opportunities:</b><br /> The CIT also offers opportunities for individuals who are interested in pursuing a career in immersive technologies. By working with the centre's researchers and industry partners, individuals can gain valuable experience and skills that can be applied in various industries such as gaming, education, healthcare, and more.
          </li>
          <li>
            <b>Internship Opportunities:</b><br /> The centre offers internships for students who are interested in gaining hands-on experience in immersive technologies. Through internships, students can work with the centre's researchers and industry partners to develop solutions in this field and gain valuable skills and experience.
          </li>
          <li>
            <b>Educational Opportunities:</b><br /> The CIT offers various training programs, workshops, and courses for students and professionals who are interested in immersive technologies. These programs are designed to provide participants with the knowledge and skills needed to develop immersive applications and solutions. The centre also offers immersive educational content development opportunities for educators who are interested in creating more engaging and effective learning experiences for students.
          </li>
          <li>
            <b>Collaborations with Industry Partners:</b><br /> The CIT works with industry partners to develop solutions that meet their specific needs. By collaborating with the centre's researchers and students, industry partners can access the latest research, tools, and expertise in this field and develop innovative solutions that can transform their businesses.
          </li>
          <p>
            If you are interested in any of the opportunities offered by the Center for Immersive Technologies (CIT), please do not hesitate to contact us. We look forward to hearing from you and exploring how we can work together to advance the field of immersive technologies.
          </p>
        </ul>
      ),
      image: OpportunitiesImage,
    },
  ];

  const currentTopic = topics.find((topic) => topic.id === selectedTopic);

  return (
    <div className="bg-gray-50">
      <div className="lg:h-100 md:h-100 justify-center">
        <img style={{ width: "100%", height: "40vh", objectFit: "cover" }} src={AboutImage} alt="About GIF" />
      </div>
      {/* Main Content Section */}
      <div className="max-w-7xl mx-auto p-4">
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
            className="bg-white shadow-lg rounded-lg p-4 col-span-2"
            key={currentTopic.id}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-blue-900 mb-4">
              {currentTopic.title}
            </h2>
            <div className="text-justify">
              {currentTopic.content}
            </div>
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