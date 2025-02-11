import { useState } from "react";
import { FaPeopleArrows, FaGraduationCap } from "react-icons/fa";
import { SiOpenaccess } from "react-icons/si";
import {
  MdModelTraining,
  MdSupportAgent,
  MdCastForEducation,
} from "react-icons/md";
import { Link } from "react-router-dom";

const Sservices = () => {
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
            <div className="rounded-full bg-[#31AF66F5] p-4 hover:bg-[#2f8753f5] transition-colors duration-300 ease-in-out">
              <FaGraduationCap className="text-7xl text-white" />
            </div>
            <h3 className="text-3xl font-bold tracking-wider text-[#31AF66F5] font-raleway pl-7">
              FOR STUDENTS
            </h3>
          </div>
          <p className="text-[#2D2D2D] text-center text-lg font-roboto pt-5 ">
            We are committed to supporting students who are interested in
            immersive technologies, including Augmented Reality (AR), Virtual
            Reality (VR), Extended Reality (XR), and Metaverse.<br></br>
            We offer a range of services to help students learn about immersive
            technologies and develop their skills in this exciting field. Some
            of the services we offer include
          </p>
        </div>
        <div className="bg-white rounded-lg p-4 flex flex-col items-start justify-center w-10/12 md:w-3/5 mb-4 pt-8">
          <div className="flex items-center mb-2">
            <div className="bg-white rounded-full p-4 border-[#31AF66F5] border-2 flex items-center justify-center w-20 h-20 mb-4 hover:border-[#2f8753f5] transition-colors duration-300 ease-in-out">
              <MdModelTraining className="text-[#31AF66F5] text-4xl hover:text-[#2f8753f5] transition-colors duration-300 ease-in-out" />
            </div>
            <h3 className="text-2xl font-bold text-[#232627] font-roboto pl-7">
              Workshops and Training
            </h3>
          </div>
          <p className="text-[#565656] text-lg text-center-justify font-roboto">
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
            <div className="bg-white rounded-full p-4 border-[#31AF66F5] border-2 flex items-center justify-center w-20 h-20 mb-4 hover:border-[#2f8753f5] transition-colors duration-300 ease-in-out">
              <SiOpenaccess className="text-[#31AF66F5] text-4xl hover:text-[#2f8753f5] transition-colors duration-300 ease-in-out" />
            </div>
            <h3 className="text-2xl font-bold text-[#232627] font-roboto pl-7">
              Access to Immersive Technology Resources
            </h3>
          </div>
          <p className="text-[#565656] text-lg text-center-justify font-roboto">
            The Center for Immersive Technologies houses a range of immersive
            technology resources, including VR headsets, AR devices, motion
            capture equipment, and more. Students can access these resources to
            work on their projects, gain experience, and develop their skills.
          </p>
        </div>
        <hr className="border-gray-300 w-10/12 md:w-3/5 my-4" />{" "}
        {/* Line separator */}
        <div className="bg-white rounded-lg p-4 flex flex-col items-start justify-center w-10/12 md:w-3/5 mb-4 pt-8">
          <div className="flex items-center mb-2">
            <div className="bg-white rounded-full p-4 border-[#31AF66F5] border-2 flex items-center justify-center w-20 h-20 mb-4 hover:border-[#2f8753f5] transition-colors duration-300 ease-in-out">
              <MdCastForEducation className="text-[#31AF66F5] text-4xl hover:text-[#2f8753f5] transition-colors duration-300 ease-in-out" />
            </div>
            <h3 className="text-2xl font-bold text-[#232627] font-roboto pl-7">
              Immersive Educational Content
            </h3>
          </div>
          <p className="text-[#565656] text-lg text-center-justify font-roboto">
            We develop immersive educational content that engages and inspires
            learners. Our VR content will enhance understanding and retention of
            complex topics, and we make it available to students who are
            interested in learning more about immersive technologies.
          </p>
        </div>
        <hr className="border-gray-300 w-10/12 md:w-3/5 my-4" />{" "}
        {/* Line separator */}
        <div className="bg-white rounded-lg p-4 flex flex-col items-start justify-center w-10/12 md:w-3/5 mb-4 pt-8">
          <div className="flex items-center mb-2">
            <div className="bg-white rounded-full p-4 border-[#31AF66F5] border-2 flex items-center justify-center w-20 h-20 mb-4 hover:border-[#2f8753f5] transition-colors duration-300 ease-in-out">
              <MdSupportAgent className="text-[#31AF66F5] text-4xl hover:text-[#2f8753f5] transition-colors duration-300 ease-in-out" />
            </div>
            <h3 className="text-2xl font-bold text-[#232627] font-roboto pl-7">
              Mentorship and Guidance
            </h3>
          </div>
          <p className="text-[#565656] text-lg text-center-justify font-roboto">
            Our team of experts is available to provide mentorship and guidance
            to students who are interested in immersive technologies. We can
            help students develop their research projects, offer advice on
            career paths, and provide support throughout their learning journey.
          </p>
        </div>
        <hr className="border-gray-300 w-10/12 md:w-3/5 my-4" />{" "}
        {/* Line separator */}
        <div className="bg-white rounded-lg p-4 flex flex-col items-start justify-center w-10/12 md:w-3/5 mb-4 pt-8">
          <div className="flex items-center mb-2">
            <div className="bg-white rounded-full p-4 border-[#31AF66F5] border-2 flex items-center justify-center w-20 h-20 mb-4 hover:border-[#2f8753f5] transition-colors duration-300 ease-in-out">
              <FaPeopleArrows className="text-[#31AF66F5] text-4xl hover:text-[#2f8753f5] transition-colors duration-300 ease-in-out" />
            </div>
            <h3 className="text-2xl font-bold text-[#232627] font-roboto pl-7">
              Networking Opportunities
            </h3>
          </div>
          <p className="text-[#565656] text-lg text-center-justify font-roboto">
            We offer networking opportunities for students to connect with
            professionals and peers who are interested in immersive
            technologies. These connections can provide students with valuable
            insights and opportunities for collaboration.
          </p>
        </div>
        <hr className="border-gray-300 w-10/12 md:w-3/5 my-4" />{" "}
        {/* Line separator */}
        <div className="bg-white rounded-lg p-4 flex flex-col items-start justify-center w-10/12 md:w-3/5 mb-4 pt-8">
          <div className="flex items-center mb-2">
            <h3 className="text-xl text-[#232627] font-roboto pl-7">
              At the{" "}
              <b className="text-[#31AF66F5]">
                Center for Immersive Technologies
              </b>
              , we are committed to supporting students who are interested in
              immersive technologies. We believe that these technologies have
              the potential to revolutionise industries such as education,
              healthcare, entertainment, and more, and we are excited to help
              the next generation of innovators develop their skills in this
              exciting field.<br></br>
              <br></br>
              If you are a student who is interested in our services, please
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
    className="bg-[#31AF66F5] text-white rounded-lg px-4 py-2 mt-4 hover:bg-[#64e89bf5] transition-all"
>
   Return to Top
         </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sservices;
