import RTX3070 from '../assets/facilities/RTX3070-1.webp';
import VR from '../assets/facilities/vr.webp';
import Quest from '../assets/facilities/quest.webp';
import Logi from '../assets/facilities/logi.webp';
import Asus from '../assets/facilities/asus.webp';
import Dual from '../assets/facilities/dualband.webp';
import Samsung from '../assets/facilities/samsung.webp';
import { useState } from 'react';
import { CardBody, CardContainer, CardItem } from "./ui/3d-card.jsx";
import React from "react";

"use client";

const Facilities = () => {
  const [facilities] = useState([
    { image: RTX3070, desc: "High End Workstation with GPU Workstation with RTX3070" },
    { image: VR, desc: "Leap motion controller with SDK VR Headset - PICO 4 All-inOne 128GB" },
    { image: Quest, desc: "VR Headset - Meta Quest 2 128GB" },
    { image: Logi, desc: "Web Camera - Logitech C922 Pro Stream Webcam" },
    { image: Asus, desc: "Asus TUF Gaming AX5400" },
    { image: Dual, desc: "Dual Band WiFi 6 Gaming Router" },
    { image: Samsung, desc: "Samsung Galaxy Tab (S6 lite)" },
  ]);

  return (
    <>
      <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold pt-8 text-[#232627] text-center underline underline-offset-8 decoration-blue-200 decoration-1 font-raleway tracking-wider">
        FACILITIES
      </h1>
      <div className="py-4">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-2">
    {facilities.map((facility, index) => (
     
      <CardContainer key={index} className="inter-var">
        <CardBody
          className="bg-gray-50 relative group/card dark:bg-gray-50 dark:border-white/[0.2] border-black/[0.1] w-96 h-96 rounded-xl p-2 border flex flex-col items-center"
        >
          <CardItem
            as="p"
            translateZ="60"
            className="text-lg leading-relaxed text-center text-gray-800 dark:text-gray-800"
          >
            {facility.desc}
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-2">
            <img
              src={facility.image}
              alt={facility.desc}
              className="h-[16rem] w-full object-cover rounded-xl group-hover/card:shadow-xl"
            />
          </CardItem>
        </CardBody>
      </CardContainer>
    ))}
  </div>
</div>

    </>
  );
};

export default Facilities;
