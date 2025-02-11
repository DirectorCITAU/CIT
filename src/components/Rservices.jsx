import { useState } from "react";
import { FaChalkboardTeacher } from "react-icons/fa";
import { BiSearchAlt } from "react-icons/bi";
import { SiOpenaccess, SiRoamresearch } from "react-icons/si";
import { MdModelTraining, MdSupportAgent } from "react-icons/md";
import { Link } from "react-router-dom";

const Rservices = () => {
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
            <div className="rounded-full bg-[#47D5CD] p-4 hover:bg-[#0f9e97] transition-colors duration-300 ease-in-out">
              <BiSearchAlt className="text-7xl text-white" />
            </div>
            <h3 className="text-3xl font-bold tracking-wider text-[#47D5CD] font-raleway pl-7">
              FOR RESEARCHERS
            </h3>
          </div>
          <p className="text-[#2D2D2D] text-center text-lg font-roboto pt-5 ">
            We are dedicated to supporting researchers who are interested in the
            field of immersive technologies, including Augmented Reality (AR),
            Virtual Reality (VR), Extended Reality (XR), and Metaverse. Our team
            of experts can provide a range of services to assist researchers in
            their work.<br></br>
            Some of the services we offer include
          </p>
        </div>
        <div className="bg-white rounded-lg p-4 flex flex-col items-start justify-center w-10/12 md:w-3/5 mb-4 pt-8">
          <div className="flex items-center mb-2">
            <div className="bg-white rounded-full p-4 border-[#47D5CD] border-2 flex items-center justify-center w-20 h-20 mb-4 hover:border-[#0f9e97] transition-colors duration-300 ease-in-out">
              <FaChalkboardTeacher className="text-[#47D5CD] text-4xl hover:text-[#0f9e97] transition-colors duration-300 ease-in-out" />
            </div>
            <h3 className="text-2xl font-bold text-[#232627] font-roboto pl-7">
              Consultation Services
            </h3>
          </div>
          <p className="text-[#565656] text-lg text-center-justify font-roboto">
            We offer one-on-one consultation services to researchers who require
            expert advice in immersive technologies. Our team can provide
            insights and recommendations for your research projects, ensuring
            that you have access to the latest knowledge and techniques.
          </p>
        </div>
        <hr className="border-gray-300 w-10/12 md:w-3/5 my-4" />{" "}
        {/* Line separator */}
        <div className="bg-white rounded-lg p-4 flex flex-col items-start justify-center w-10/12 md:w-3/5 mb-4 pt-8">
          <div className="flex items-center mb-2">
            <div className="bg-white rounded-full p-4 border-[#47D5CD] border-2 flex items-center justify-center w-20 h-20 mb-4 hover:border-[#0f9e97] transition-colors duration-300 ease-in-out">
              <SiRoamresearch className="text-[#47D5CD] text-4xl hover:text-[#0f9e97] transition-colors duration-300 ease-in-out" />
            </div>
            <h3 className="text-2xl font-bold text-[#232627] font-roboto pl-7">
              Research Collaboration
            </h3>
          </div>
          <p className="text-[#565656] text-lg text-center-justify font-roboto">
            We are always open to collaborating with researchers who share our
            passion for immersive technologies. We welcome researchers from all
            disciplines to work with us on joint projects, leveraging our
            resources and expertise to advance the field.
          </p>
        </div>
        <hr className="border-gray-300 w-10/12 md:w-3/5 my-4" />{" "}
        {/* Line separator */}
        <div className="bg-white rounded-lg p-4 flex flex-col items-start justify-center w-10/12 md:w-3/5 mb-4 pt-8">
          <div className="flex items-center mb-2">
            <div className="bg-white rounded-full p-4 border-[#47D5CD] border-2 flex items-center justify-center w-20 h-20 mb-4 hover:border-[#0f9e97] transition-colors duration-300 ease-in-out">
              <SiOpenaccess className="text-[#47D5CD] text-4xl hover:text-[#0f9e97] transition-colors duration-300 ease-in-out" />
            </div>
            <h3 className="text-2xl font-bold text-[#232627] font-roboto pl-7">
              Access to Immersive Technology Resources
            </h3>
          </div>
          <p className="text-[#565656] text-lg text-center-justify font-roboto">
            The Center for Immersive Technologies houses a range of immersive
            technology resources, including VR headsets, AR devices, motion
            capture equipment, and more. Researchers can access these resources
            and tools for their projects to conduct their research.
          </p>
        </div>
        <hr className="border-gray-300 w-10/12 md:w-3/5 my-4" />{" "}
        {/* Line separator */}
        <div className="bg-white rounded-lg p-4 flex flex-col items-start justify-center w-10/12 md:w-3/5 mb-4 pt-8">
          <div className="flex items-center mb-2">
            <div className="bg-white rounded-full p-4 border-[#47D5CD] border-2 flex items-center justify-center w-20 h-20 mb-4 hover:border-[#0f9e97] transition-colors duration-300 ease-in-out">
              <MdModelTraining className="text-[#47D5CD] text-4xl hover:text-[#0f9e97] transition-colors duration-300 ease-in-out" />
            </div>
            <h3 className="text-2xl font-bold text-[#232627] font-roboto pl-7">
              Training and Workshops
            </h3>
          </div>
          <p className="text-[#565656] text-lg text-center-justify font-roboto">
            We offer training and workshops on a range of topics related to
            immersive technologies. These sessions can help researchers gain new
            skills and knowledge in areas such as VR development, XR design, and
            more.
          </p>
        </div>
        <hr className="border-gray-300 w-10/12 md:w-3/5 my-4" />{" "}
        {/* Line separator */}
        <div className="bg-white rounded-lg p-4 flex flex-col items-start justify-center w-10/12 md:w-3/5 mb-4 pt-8">
          <div className="flex items-center mb-2">
            <div className="bg-white rounded-full p-4 border-[#47D5CD] border-2 flex items-center justify-center w-20 h-20 mb-4 hover:border-[#0f9e97] transition-colors duration-300 ease-in-out">
              <MdSupportAgent className="text-[#47D5CD] text-4xl hover:text-[#0f9e97] transition-colors duration-300 ease-in-out" />
            </div>
            <h3 className="text-2xl font-bold text-[#232627] font-roboto pl-7">
              Research Publication Support
            </h3>
          </div>
          <p className="text-[#565656] text-lg text-center-justify font-roboto">
            Our team can assist researchers with preparing and publishing their
            research work in top-tier journals and conferences.
          </p>
        </div>
        <hr className="border-gray-300 w-10/12 md:w-3/5 my-4" />{" "}
        {/* Line separator */}
        <div className="bg-white rounded-lg p-4 flex flex-col items-start justify-center w-10/12 md:w-3/5 mb-4 pt-8">
          <div className="flex items-center mb-2">
            <h3 className="text-xl text-[#232627] font-roboto pl-7">
              At the{" "}
              <b className="text-[#47D5CD]">
                Center for Immersive Technologies
              </b>
              , we are committed to supporting researchers who are working to
              advance the field of immersive technologies. We are always looking
              for new ways to support researchers, and we welcome your
              suggestions and feedback on how we can better serve you.<br></br>
              <br></br>
              If you are a researcher who is interested in our services or would
              like to collaborate with us, please feel free to contact us. We
              look forward to working with you.
            </h3>
          </div>         
          <div className="flex justify-center items-center">
            <Link
    to="#"
    onClick={(e) => {
      e.preventDefault(); // Prevent default link behavior
      window.scrollTo({ top: 0, behavior: "smooth" });
    }}
    className="bg-[#47D5CD] text-white rounded-lg px-4 py-2 mt-4 hover:bg-[#64f9f4] transition-all"
  >
   Return to Top
         </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rservices;
