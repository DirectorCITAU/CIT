import {FiMail,FiPhoneCall} from "react-icons/fi"
import Dir from '../assets/director.webp'
import Pa1 from '../assets/pa.webp'
import { motion } from "framer-motion";
import React from "react";
import Typewriter from "typewriter-effect"; 
const TeamPage = () => {
    
      return (
//         <> 
//         {/* <div className="flex items-center justify-center pt-16 pb-8 bg-gray-100 text-5xl font-serif font-extrabold underline underline-offset-8 font-bold text-blue-900">
//         <Typewriter
//           onInit={(typewriter) => {
//             typewriter
//               .typeString("TEAM")
//               .pauseFor(1000)
//               .start();
//           }}
//           options={{
//             cursor: "",  // Disable the blinking cursor
//             delay: 75,    // Optional: Adjust typing speed
//           }}
//         />
//       </div> */}
//     <div className="min-h-screen flex flex-col items-center justify-center pt-16 pb-16 space-y-8 bg-gray-100">
//       {/* Director Card */}
//       <motion.div
//         className="card lg:card-side bg-base-100 shadow-xl flex items-center"
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         <figure>
//           <img
//             src={Dir}
//             alt="Director"
//             className="rounded-lg shadow-lg w-80 h-90 object-cover"
            
//           />
//         </figure>
//         <div className="card-body flex flex-col items-center justify-center text-center">
//   <h1 className="text-4xl font-extrabold text-black-900 mb-4">
//     DIRECTOR
//   </h1>
//   <h2 className="text-3xl font-bold text-black-900 mb-4">
//     Dr. S. Chitrakala, B.E, M.E, Ph.D
//   </h2>
//   <p className="text-lg leading-relaxed">
//     Professor<br />
//     Department of Computer Science Engineering<br />
//     College of Engineering Guindy, Anna University
//   </p>
//   <p className="font-light leading-relaxed text-black-600 mb-4">
//                   <div className='flex items-center justify-center'><div><FiMail /></div><pre> </pre><a href='mailto:directorcit2023@gmail.com'>directorcit2023@gmail.com  </a></div>
//                   <div className='flex items-center justify-center'><div><FiPhoneCall /></div><pre> </pre><a href='tel:04422357791'>044 2235 7791</a></div>

//                 </p>
// </div>

//       </motion.div>

//       {/* Professional Assistant -I Card */}
//       <motion.div
//         className="card lg:card-side bg-base-100 shadow-xl flex items-center"
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, delay: 0.5 }}
//       >
//         <figure>
//           <img
//             src={Pa1}
//             alt="Professional Assistant -I"
//             className="rounded-lg shadow-lg w-80 h-90 object-cover"
            
//           />
//         </figure>
//         <div className="card-body flex flex-col items-center justify-center text-center">
//           <h1 className="text-4xl font-extrabold text-black-900 mb-4 text-center">
//             Professional Assistant -I
//           </h1>
//           <h2 className="text-3xl font-bold text-black-900 mb-4 text-center">
//             P. Sangeethaa, B.Tech
//           </h2>
//         </div>
//       </motion.div>
//     </div>
    
//     </>
<>
<div className='uppercase p-5 font-serif font-extrabold text-2xl text-indigo-900 underline underline-offset-8 border-b-blue-200 leading-normal mb-1 text-center tracking-wider'>Director</div>

<div className="relative max-w-md mx-auto md:max-w-2xl min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-xl mt-16 hover:shadow-2xl transition-shadow duration-300 ease-in-out">
  <div className="px-6">
    <div className="flex flex-wrap justify-center">
      <div className="w-full flex justify-center">
        <div className="transition-transform transform hover:scale-105 duration-300 ease-in-out">
          <img src={Dir} className="shadow-xl rounded-full align-middle border-none -m-16 -ml-20 lg:-ml-16 max-w-[150px]" />
        </div>
      </div>
      <div className="w-full text-center mt-20"></div>
    </div>
    <div className="text-center mt-2">
      <h3 className="text-2xl text-slate-700 font-bold leading-normal mb-1 hover:text-indigo-800 transition-colors duration-300">Dr. S. Chitrakala, B.E, M.E, Ph.D</h3>
      <div className="text-2x1 mt-0 mb-2 text-black-900 font-bold uppercase">
      Professor
      </div>
      {/* <div className="text-xs mt-0 mb-2 text-slate-400 font-bold uppercase">
        <i className="fas fa-map-marker-alt mr-2 text-slate-400 opacity-75"></i>Department of Computer Science Engineering
      </div>
      <div className="text-xs mt-0 mb-2 text-slate-400 font-bold uppercase">
        <i className="fas fa-map-marker-alt mr-2 text-slate-400 opacity-75"></i>College of Engineering Guindy, Anna University.
      </div> */}
      <p className="text-lg leading-relaxed">
   Department of Computer Science Engineering<br />
   College of Engineering Guindy, Anna University
  </p>
    </div>
    <div className="mt-6 py-6 border-t border-slate-200 text-center">
      <div className="flex flex-wrap justify-center">
        <div className="w-full px-4">
          <p className="font-light leading-relaxed text-slate-700 mb-4">
            <div className='flex items-center justify-center'>
              <div><FiMail /></div><pre> </pre><a href='mailto:directorcit2023@gmail.com' className="hover:text-blue-500 transition-colors duration-300">directorcit2023@gmail.com</a>
            </div>
            <div className='flex items-center justify-center'>
              <div><FiPhoneCall /></div><pre> </pre><a href='tel:04422357791' className="hover:text-blue-500 transition-colors duration-300">044 2235 7791</a>
            </div>
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
<div className='uppercase p-5 font-serif font-extrabold text-2xl text-indigo-900 underline underline-offset-8 border-b-blue-200 leading-normal mb-1 text-center tracking-wider'>Professional Assistant -I</div>


<div className="relative max-w-md mx-auto md:max-w-2xl min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-xl mt-16 hover:shadow-2xl transition-shadow duration-300 ease-in-out">
  <div className="px-6">
    <div className="flex flex-wrap justify-center">
      <div className="w-full flex justify-center">
        <div className="transition-transform transform hover:scale-105 duration-300 ease-in-out">
          <img src={Pa1} className="shadow-xl rounded-full align-middle border-none -m-16 -ml-20 lg:-ml-16 max-w-[150px]" />
        </div>
      </div>
      <div className="w-full text-center mt-20"></div>
    </div>
    <div className="text-center mt-2">
      <h3 className="text-2xl text-slate-700 font-bold leading-normal mb-1 hover:text-indigo-800 transition-colors duration-300">P. Sangeethaa, B.Tech</h3>
      <div className="text-xs mt-0 mb-2 text-slate-400 font-bold uppercase">
        <i className="fas fa-map-marker-alt mr-2 text-slate-400 opacity-75"></i>
      </div>
    </div>
    <div className="mt-6 py-6 border-t border-slate-200 text-center">
      <div className="flex flex-wrap justify-center">
        <div className="w-full px-4">
          <p className="font-light leading-relaxed text-slate-600 mb-4">
            {/* Empty for now */}
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

</>
  );
};

export default TeamPage;
