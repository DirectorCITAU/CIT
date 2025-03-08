import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "../css/Image.css";

import I1 from "../assets/Gallery/General/1.webp";
import I2 from "../assets/Gallery/General/2.webp";
import I3 from "../assets/Gallery/General/3.webp";
import I4 from "../assets/Gallery/General/4.webp";
import I5 from "../assets/Gallery/General/5.webp";
import I6 from "../assets/Gallery/General/6.webp";

import II1 from "../assets/Gallery/Inaugural/in1.webp";
import II2 from "../assets/Gallery/Inaugural/in2.webp";
import II3 from "../assets/Gallery/Inaugural/in3.webp";
import II4 from "../assets/Gallery/Inaugural/in4.webp";
import II5 from "../assets/Gallery/Inaugural/in5.webp";
import II6 from "../assets/Gallery/Inaugural/in6.webp";
import II7 from "../assets/Gallery/Inaugural/in7.webp";

import SM1 from "../assets/Gallery/SM/si1.webp";
import SM2 from "../assets/Gallery/SM/si2.webp";
import SM3 from "../assets/Gallery/SM/si3.webp";
import SM4 from "../assets/Gallery/SM/si4.webp";
import SM5 from "../assets/Gallery/SM/si5.webp";
import SM6 from "../assets/Gallery/SM/si6.webp";
import SM7 from "../assets/Gallery/SM/si7.webp";
import SM8 from "../assets/Gallery/SM/si8.webp";

import IU1 from "../assets/Gallery/Indo-Uk/i1.webp";
import IU2 from "../assets/Gallery/Indo-Uk/i2.webp";
import IU3 from "../assets/Gallery/Indo-Uk/i3.webp";
import IU4 from "../assets/Gallery/Indo-Uk/i5.webp";
import IU5 from "../assets/Gallery/Indo-Uk/i4.webp";

import v1 from "../assets/Gallery/VR/i1.webp"
import v2 from "../assets/Gallery/VR/i2.webp"
import v3 from "../assets/Gallery/VR/i3.webp"
import v4 from "../assets/Gallery/VR/i4.webp"
import v5 from "../assets/Gallery/VR/i5.webp"
import v6 from "../assets/Gallery/VR/i6.webp"
import v7 from "../assets/Gallery/VR/i7.webp"
import v8 from "../assets/Gallery/VR/i8.webp"
import v9 from "../assets/Gallery/VR/i9.webp"
import v10 from "../assets/Gallery/VR/i10.webp"



const ImageGallery = () => {
  const [category, setCategory] = useState("General");
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  const images = {
    General: [I4, I6, I5,I3,I2, I1],
    Inaugural: [II1, II2, II3, II4, II5, II6, II7],
    "Summer Intern": [SM8, SM1, SM2, SM3, SM4, SM5, SM6, SM7],
    "Indo-UK": [IU1, IU2, IU3, IU4, IU5],
    VR:[v1,v2,v3,v4,v5,v6,v7,v8,v9,v10]
  };

  const filteredImages =
    category === "All"
      ? images.General.concat(
          images.Inaugural,
          images["Summer Intern"],
          images["Indo-UK"],
          images.VR
        )
      : images[category];

  const slides = filteredImages.map((src) => ({ src }));

  const handleImageClick = (index) => {
    setLightboxIndex(index);
  };

  return (
    <div className="p-4">
      <Helmet>
        {filteredImages.map((src, index) => (
          <link key={index} rel="preload" href={src} as="image" />
        ))}
      </Helmet>  
      <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
        <button
          type="button"
          onClick={() => setCategory("General")}
          className={`text-white border border-gray-900 bg-blue-900 hover:bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 hover:text-blue-900 ${
            category === "General" ? "border-white text-black" : "text-black"
          }`}
        >
          General
        </button>
        <button
          type="button"
          onClick={() => setCategory("Inaugural")}
          className={`text-white border border-gray-900 bg-blue-900 hover:bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 hover:text-blue-900 ${
            category === "Inaugural" ? "border-white text-black" : "text-black"
          }`}
        >
          Inaugural
        </button>
        <button
          type="button"
          onClick={() => setCategory("Summer Intern")}
          className={`text-white border border-gray-900 bg-blue-900 hover:bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 hover:text-blue-900 ${
            category === "Summer Intern"
              ? "border-white text-black"
              : "text-black"
          }`}
        >
          Summer Intern - 23
        </button>
        <button
          type="button"
          onClick={() => setCategory("Indo-UK")}
          className={`text-white border border-gray-900 bg-blue-900 hover:bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 hover:text-blue-900 ${
            category === "Indo-UK" ? "border-white text-black" : "text-black"
          }`}
        >
          Indo - UK
        </button>
        <button
          type="button"
          onClick={() => setCategory("VR")}
          className={`text-white border border-gray-900 bg-blue-900 hover:bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 hover:text-blue-900 ${
            category === "Inaugural" ? "border-white text-black" : "text-black"
          }`}
        >
          VR workshop
        </button>
        
      </div>
      <div className="flex justify-center flex-wrap">
        {filteredImages.map((image, index) => (
          <div
            key={index}
            className="p-2"
            onClick={() => handleImageClick(index)}
          >
            <img
              className={`${
                category === "General" ? "h-44 sm:h-60 md:h-80" : "h-56 md:h-80"
              } max-w-full rounded-lg object-contain cursor-pointer`}
              src={image}
              alt={`Image ${index + 1}`}
            />
          </div>
        ))}
      </div>
      <Lightbox
        slides={slides}
        open={lightboxIndex >= 0}
        index={lightboxIndex}
        close={() => setLightboxIndex(-1)}
      />
    </div>
  );
};

export default ImageGallery;