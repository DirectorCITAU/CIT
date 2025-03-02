import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import news1 from "../assets/News/news2.jpg";
import news2 from "../assets/News/news3.jpeg";
import smartAR from "../assets/News/smartAR.jpg";
import smartAR2 from "../assets/News/smartAR2.jpg";
import gif from "../assets/News/new.gif";
import unity from "../assets/News/CIT Workshop Brochure Final.pdf";
import "./news1.css";

function Events() {
  const [selectedEvent, setSelectedEvent] = useState("Event 1");

  const events = [
    {
      id: "Event 1",
      title: "Two-day Workshop on Virtual Reality Development",
      description:
        "Centre for Faculty & Professional Development and Centre for Immersive Technologies (CIT) jointly conducted a Two-day Workshop on Virtual Reality Development with Unity 3D.",
      image: news2,
    },
    {
      id: "Event 2",
      title: "Virtual Reality Development with Unity 3D",
      image: unity,
    },
    {
      id: "Event 3",
      title: "Internship Program 2023",
      description:
        "CIT successfully completed a 5-week Internship program 2023, developing VR POCs for Digital Twin, a 360° virtual tour for CEG, and Relaxation VR.",
      image: news1,
    },
  ];

  const currentEvent = events.find((event) => event.id === selectedEvent);

  return (
    <div className="bg-gray-50 py-8">
      <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold pt-8 text-[#232627] text-center underline underline-offset-8 decoration-blue-200 decoration-1 font-raleway tracking-wider">
        COMPLETED EVENTS
      </h1>
      <div className="max-w-7xl mx-auto p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col space-y-4">
            {events.map((event) => (
              <motion.div
                key={event.id}
                onClick={() => setSelectedEvent(event.id)}
                className={`p-4 rounded-lg shadow-md cursor-pointer transition-transform duration-200 ease-in-out ${
                  selectedEvent === event.id
                    ? "bg-blue-50 text-blue-900"
                    : "bg-white text-gray-800"
                } hover:bg-gray-200 hover:scale-105`}
              >
                <h3 className="text-lg font-semibold flex items-center">
                  {event.title}
                </h3>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="bg-white shadow-lg rounded-lg p-6 col-span-2"
            key={currentEvent.id}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-blue-950 mb-4">
              {currentEvent.title}
            </h2>
            <p className="text-gray-700 text-justify mb-4">
              {currentEvent.description}
            </p>
            {currentEvent.id === "Event 2" ? (
              <div>
                <iframe
                  src={unity}
                  title="Workshop Brochure"
                  width="100%"
                  height="500"
                  className="rounded-lg"
                ></iframe>
              </div>
            ) : (
              <motion.img
                src={currentEvent.image}
                alt={currentEvent.title}
                className="rounded-lg shadow-lg w-full"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              />
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Events;
