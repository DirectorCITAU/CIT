import { MdMiscellaneousServices } from 'react-icons/md';
import { BiSearchAlt } from 'react-icons/bi';
import { GiShakingHands } from 'react-icons/gi';
import { FaGraduationCap } from 'react-icons/fa';

const Gservices = () => {
  return (
    <>
      <div className="flex flex-col items-center pt-7">
        <div className="bg-white rounded-lg p-4 flex flex-col items-start justify-center w-10/12 md:w-3/5 mb-4">
          <div className="flex items-center mb-2">
            <div className="bg-white rounded-full p-4 border-white border-2 flex items-center justify-center w-20 h-20 mb-4 hover:border-black transition-colors duration-300 ease-in-out">
              <MdMiscellaneousServices className="text-black text-6xl hover:text-[#2d2f2ef5] transition-colors duration-300 ease-in-out" />
            </div>
            <h3 className="text-3xl font-bold tracking-wider text-[#232627] font-raleway pl-7 underline underline-offset-8 decoration-blue-200 decoration-1 ">OUR SERVICES</h3>
          </div>
          <p className="text-[#2D2D2D] text-center text-lg font-roboto pt-5">
            We want researchers, students, and companies to be a part of this journey in exploring how immersive visual
            technology can be a beneficial tool for a multitude of functions, be it scientific, industrial, marketing, or
            entertainment. We offer different services from tailor-made exclusive research projects to short-term, easy
            access projects.
          </p>
          
        </div>
      </div>
      <div className="flex flex-wrap justify-center">
        {/* First Card */}
        <div className="bg-white rounded-lg p-4 flex flex-col items-center justify-center w-64 mx-4 my-4">
        <div className="rounded-full bg-[#47D5CD] p-4 hover:scale-110 transition-all duration-300 ease-in-out">
              <BiSearchAlt className="text-7xl text-white " />
                </div>
          <h5 className="text-sm font-semibold tracking-wider text-[#232627] font-raleway mb-4 pt-5"> FOR RESEARCHERS </h5>
          <p className="text-[#2D2D2D] text-center text-sm font-roboto">
            Research Collaboration
          </p>
        </div>

        {/* Second Card */}
        <div className="bg-white rounded-lg p-4 flex flex-col items-center justify-center w-64 mx-4 my-4">
        <div className="rounded-full bg-[#31AF66F5] p-4 hover:scale-110 transition-all duration-300 ease-in-out">
              <FaGraduationCap  className="text-7xl text-white" />
                </div>
          <h5 className="text-sm font-semibold tracking-wider text-[#232627] font-raleway mb-4 pt-5"> FOR STUDENTS </h5>
          <p className="text-[#2D2D2D] text-center text-sm font-roboto">
          Hands-on Student Co-operation
          </p>
        </div>

        {/* Third Card */}
        <div className="bg-white rounded-lg p-4 flex flex-col items-center justify-center w-64 mx-4 my-4">
        <div className="rounded-full bg-[#EFA700] p-4 hover:scale-110 transition-all duration-300 ease-in-out">
              <GiShakingHands className="text-7xl text-white mx-auto" />
            </div>
          <h3 className="text-sm font-semibold tracking-wider text-[#232627] font-raleway mb-4 pt-5">FOR COMPANIES</h3>
          <p className="text-[#2D2D2D] text-center text-sm font-roboto">
            Collaboration with Companies
          </p>
        </div>
        </div>
      </>
  );
};

export default Gservices;
