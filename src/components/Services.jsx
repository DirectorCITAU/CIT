import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Rservices from "./Rservices";
import Sservices from "./Sservices";
import Cservices from "./Cservices";
import Gservices from "./Gservices";


function Services() {
  const [selectedTopic, setSelectedTopic] = useState("For Researchers");
  const [isMobileScreen, setIsMobileScreen] = useState(false);
useEffect(() => {
    const handleResize = () => {
      setIsMobileScreen(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const topics = [
    {
      id: "For Researchers",
      title: "For Researchers",
      content: (
       <Rservices/>
      )
    },
    {
      id: "For Students",
      title: "For Students",
      content: (
        <Sservices/>
      )
    },
    {
      id: "For Company",
      title: "For Company",
      content: (
        <Cservices/>
      )
    },
  ];

  const currentTopic = topics.find((topic) => topic.id === selectedTopic);

  return (
    <div className="bg-gray-50">
      <Gservices/>

      {/* Main Content Section */}
      {!isMobileScreen ?
           ( <><div className="max-w-7xl mx-auto p-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      {/* Left Section */}
    <div className="flex flex-col space-y-4 md:col-span-1 md:col-span-1">
    {topics.map((topic) => (
        <motion.div
          key={topic.id}
          onClick={() => setSelectedTopic(topic.id)}
          className={`p-4 rounded-lg shadow-md cursor-pointer ${
            selectedTopic === topic.id
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
      className="bg-white shadow-lg rounded-lg p-6 md:col-span-3"
      key={currentTopic.id}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold text-blue-900 mb-4">
        {currentTopic.title}
      </h2>
      {currentTopic.content}
    </motion.div> 

  </div>

</div></>)
:
(<><div className="max-w-7xl mx-auto p-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      {/* Left Section */}
    <div className="flex flex-col space-y-4 md:col-span-1 md:col-span-1">
    {topics.map((topic) => (
        <motion.div
          key={topic.id}
          onClick={() => setSelectedTopic(topic.id)}
          className={`p-4 rounded-lg shadow-md cursor-pointer ${
            selectedTopic === topic.id
              ? "bg-blue-50 text-[#1b263b]"
              : "bg-white text-[#1b263b]"
          } hover:bg-gray-200`}
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-lg font-semibold">{topic.title}</h3>
        </motion.div>
      ))}
    </div>
  </div>
</div>
{currentTopic.content}
</>
)}
    </div>
  );
}

export default Services;
