import React, { useState } from "react";
import { motion } from "framer-motion";
import news1 from "../assets/News/news2.jpg";
import news2 from "../assets/News/news3.jpeg";
import smartAR from "../assets/News/smartAR.jpg";
import smartAR2 from "../assets/News/smartAR2.jpg";
import gif from "../assets/News/new.gif";
import unity from "../assets/News/CIT Workshop Brochure Final.pdf";
import smartarpdf from "../assets/News/Smart AR_CIT (5)_compressed.pdf";
import immersiveShiftPDF from "../assets/News/ImmersiveShift2025.pdf"; 
import "./news1.css";

function Events() {
  const [selectedEvent, setSelectedEvent] = useState("Event 1");

  const events = [
    {
      id: "Event 1",
      title: "Two-day Online Workshop on Smart AR",
      image: smartarpdf,
    },
    {
      id: "Event 2",
      title: "Two-day Workshop on Virtual Reality Development",
      description:
        "Centre for Faculty & Professional Development and Centre for Immersive Technologies (CIT) jointly conducted a Two-day Workshop on Virtual Reality Development with Unity 3D.",
      image: news2,
    },
    {
      id: "Event 3",
      title: "Virtual Reality Development with Unity 3D",
      image: unity,
    },
    {
      id: "Event 4",
      title: "Internship Program 2023",
      description:
        "CIT successfully completed a 5-week Internship program 2023, developing VR POCs for Digital Twin, a 360° virtual tour for CEG, and Relaxation VR.",
      image: news1,
    },
    {
      id: "Event 5",
      title:
        "The Immersive Shift: Future of XR Devices, Platforms, and Metaverse Integration",
      description:
        "An Industry-Collaborated Two-Day Online Training Program organized by the Centre for Immersive Technologies, CEG, Anna University, Chennai on June 27 and 28, 2025. The program covered the latest XR innovations and Metaverse platforms, featuring live demos and expert-led sessions.",
      image: immersiveShiftPDF,
    },
  ];

  const currentEvent = events.find((event) => event.id === selectedEvent);

  return (
    <div className="bg-gray-50 py-8">
      {/* NEW PDF DISPLAY BLOCK WITH REGISTRATION */}
{/*   
<div className="bg-white p-6 mx-4 md:mx-16 my-6 rounded-xl shadow-lg">
  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-900 font-raleway tracking-wide">
    An Industry-Collaborated Two-Day Online Training Program on
  </h2>
  <h3 className="text-xl md:text-2xl font-semibold mb-2 text-gray-800">
    “The Immersive Shift: Future of XR Devices, Platforms, and Metaverse Integration”
  </h3>
  <p className="text-gray-700 mt-2 mb-2">
    <strong>Organized by:</strong> Centre for Immersive Technologies, CEG, Anna University, Chennai
  </p>
  <p className="text-gray-700 mb-4">
    <strong>Dates:</strong> June 27 and 28, 2025
  </p>
  <p className="text-gray-700 mb-4">
    This program, led by experts from both industry and academia, will spotlight the latest innovations and emerging trends in XR technologies and Metaverse platforms. Sessions will include live demos and guided walkthroughs of cutting-edge XR tools.
  </p>
  <p className="text-gray-700 mb-4 font-semibold">
    No prior experience or technical background is required.
  </p>
  <p className="text-gray-700 mb-4">
    <strong>Who can attend?</strong><br />
    • Students from any college/university<br />
    • Pursuing any UG/PG degree or Research Scholars<br />
    • From any department (engineering or non-engineering)<br />
    • Faculty members<br />
    <br />
    <strong>ALL YEARS OF STUDY ARE ELIGIBLE TO PARTICIPATE</strong><br />
    <br />
    Single/Team registration allowed. Check the brochure for payment details.
  </p>
  <p className="text-green-700 font-semibold mb-4">
    All participants will receive an E-Certificate upon successful completion.
  </p>
  <p className="text-blue-700 font-semibold mb-4">
    Register here: <a href="https://bit.ly/4dvhS06" target="_blank" rel="noopener noreferrer" className="underline">https://bit.ly/4dvhS06</a><br />
    <span className="text-red-600 font-bold">Last date to register: June 25, 2025</span>
  </p>
  <p className="text-blue-700 font-semibold text-lg mb-3 text-center">
    View Brochure Below
  </p>
  <iframe
    src={immersiveShiftPDF}
    title="Immersive Shift PDF"
    width="100%"
    height="500"
    className="rounded-lg border border-gray-300"
  ></iframe>
</div> */}


      {/* COMPLETED EVENTS */}
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
            {currentEvent.id === "Event 1" ||
            currentEvent.id === "Event 3" ||
            currentEvent.id === "Event 5" ? (
              <div>
                <iframe
                  src={currentEvent.image}
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
