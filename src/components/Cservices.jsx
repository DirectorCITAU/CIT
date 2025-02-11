import React, { useState } from "react";
import { GiShakingHands } from "react-icons/gi";
import { MdModelTraining } from "react-icons/md";
import { Link } from "react-router-dom";

const Cservices = () => {
  const [isFirstCardHovered, setIsFirstCardHovered] = useState(false);

  const handleFirstCardHover = () => {
    setIsFirstCardHovered(true);
  };

  const handleFirstCardMouseLeave = () => {
    setIsFirstCardHovered(false);
  };

  return (
    <div className="container mx-auto mt-8 p-4">
      <div className="flex flex-col items-center">
        <div
          className={`bg-white rounded-lg shadow-lg p-4 flex flex-col items-start justify-center w-10/12 md:w-3/5 mb-4 ${
            isFirstCardHovered
              ? "transform hover:translate-y-[-5px] transition-transform duration-300"
              : ""
          }`}
          onMouseEnter={handleFirstCardHover}
          onMouseLeave={handleFirstCardMouseLeave}
        >
          <div className="flex flex-col lg:flex-row items-center mb-2">
            <div className="rounded-full bg-[#EFA700] p-4 hover:bg-[#89640f] transition-colors duration-300 ease-in-out">
              <GiShakingHands className="text-7xl text-white mx-auto" />
            </div>
            <h3 className="text-3xl font-bold tracking-wider text-[#EFA700] font-raleway pl-7">
              FOR COMPANIES
            </h3>
          </div>
          <p className="text-[#2D2D2D] text-center text-lg font-roboto pt-5">
            We are committed to supporting organisations leverage the power of
            immersive technologies, including Augmented Reality (AR), Virtual
            Reality (VR), Extended Reality (XR), and Metaverse, to enhance their
            business operations.
          </p>
        </div>
        <div className="bg-white rounded-lg p-4 flex flex-col items-center justify-center w-10/12 md:w-3/5 mb-4 pt-8">
          <div className="bg-white rounded-full p-4 border-[#EFA700] border-2 flex items-center justify-center w-20 h-20 mb-4 hover:border-[#89640f] transition-colors duration-300 ease-in-out">
            <MdModelTraining className="text-[#EFA700] text-4xl hover:text-[#89640f] transition-colors duration-300 ease-in-out" />
          </div>
          <p className="text-[#565656] text-lg text-center-justify font-roboto pt-5">
            We offer workshops and training sessions on a range of topics
            related to immersive technologies. These sessions are designed to
            provide students with hands-on experience in areas such as VR
            development, XR design, and more.
          </p>
        </div>
        <hr className="border-gray-300 w-10/12 md:w-3/5 my-4" />{" "}
        {/* Line separator */}
        <div className="bg-white rounded-lg p-4 flex flex-col items-start justify-center w-10/12 md:w-3/5 mb-4 pt-8">
          <div className="flex items-center mb-2">
            <h3 className="text-xl text-[#232627] font-roboto pl-7">
              If you are a company that is interested in our services, please
              feel free to contact us. We look forward to working with you.
            </h3>
          </div>
          <div className="flex justify-center items-center">
            <Link
    to="#"
    onClick={(e) => {
      e.preventDefault(); // Prevent default link behavior
      window.scrollTo({ top: 0, behavior: "smooth" });
    }}
    className="bg-[#EFA700] text-white rounded-lg px-4 py-2 mt-4 hover:bg-[#f5c557] transition-all"
    >
   Return to Top
         </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cservices;
