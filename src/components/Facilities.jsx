// import RTX3070 from '../assets/facilities/RTX3070-1.webp';
// import VR from '../assets/facilities/vr.webp';
// import Quest from '../assets/facilities/quest.webp';
// import Logi from '../assets/facilities/logi.webp';
// import Asus from '../assets/facilities/asus.webp';
// import Dual from '../assets/facilities/dualband.webp';
// import Samsung from '../assets/facilities/samsung.webp';
// import { useState } from 'react';
// import { Carousel } from 'primereact/carousel';
// import Typewriter from "typewriter-effect"; 
// import PropTypes from 'prop-types';

// "use client";

// import React from "react";
// import { CardBody, CardContainer, CardItem } from "./ui/3d-card.jsx";
// const useMediaQuery = (query) => {
//   const [matches, setMatches] = useState(window.matchMedia(query).matches);

//   React.useEffect(() => {
//     const mediaQueryList = window.matchMedia(query);
//     const listener = (event) => setMatches(event.matches);

//     mediaQueryList.addListener(listener);
//     return () => mediaQueryList.removeListener(listener);
//   }, [query]);

//   return matches;
// };
// function Card({ imageSrc, title }) {
//   return (
//     <a className="relative flex-1 block bg-gray-900 group mx-4 mb-8 rounded-lg overflow-hidden shadow-lg transform hover:translate-y-[-5px] transition-transform duration-300">
//       <img
//         className="absolute inset-0 object-cover w-full h-full group-hover:opacity-50"
//         src={imageSrc}
//         alt="Card Image"
//       />
//       <div className="relative p-5">
//         <div className="mt-40">
//           <div className="transition-all transform translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
//             <div className="p-2">
//               <p className="text-lg text-white font-roboto">{title}</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </a>
//   );
// }

// Card.propTypes = {
//   imageSrc: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
// };
// const Facilities = () => {
//   const isMobile = useMediaQuery("(max-width: 767px)");
//   const [facilities] = useState([
//     { image: RTX3070, desc: "High End Workstation with GPU Workstation with RTX3070", name: 'RTX3070' },
//     { image: VR, desc: "Leap motion controller with SDK VR Headset - PICO 4 All-inOne 128GB", name: 'VR' },
//     { image: Quest, desc: "VR Headset - Meta Quest 2 128GB", name: 'Quest' },
//     { image: Logi, desc: "Web Camera - Logitech C922 Pro Stream Webcam", name: 'Logi' },
//     { image: Asus, desc: "Asus TUF Gaming AX5400", name: 'Asus' },
//     { image: Dual, desc: "Dual Band WiFi 6 Gaming Router", name: 'Dual' },
//     { image: Samsung, desc: "Samsung Galaxy Tab (S6 lite)", name: 'Samsung' },
//   ]);

//   const responsiveOptions = [
//     { breakpoint: '1400px', numVisible: 3, numScroll: 1 },
//     { breakpoint: '1199px', numVisible: 2, numScroll: 1 },
//     { breakpoint: '767px', numVisible: 1, numScroll: 1 },
//     { breakpoint: '575px', numVisible: 1, numScroll: 1 },
//   ];

//   const productTemplate = (facilities) => {
//     return (
//       <div className="carousel-item-container p-4">
//         <CardContainer className="inter-var">
//           <CardBody
//   className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-96 h-96 rounded-xl p-4 border flex flex-col items-center flex-grow-0">

//             <CardItem
//               as="p"
//               translateZ="60"
//               className="text-lg leading-relaxed">
//               {facilities.desc}
//             </CardItem>
//             <CardItem translateZ="100" className="w-full mt-4">
//               <img
//                 src={facilities.image}
//                 alt={facilities.name}
//                 className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
//               />
//             </CardItem>
//           </CardBody>
//         </CardContainer>
//       </div>
//     );
//   };
   

//   return (
//     <>
    
//     <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold pt-8 text-[#232627] text-center underline underline-offset-8 decoration-blue-200 decoration-1 font-raleway tracking-wider">
//     FACILITIES
// </h1>
//       <div className="card">
//       {isMobile ? (
//         <div className='bg-[#f3f4f6]'>
     
        
//         <div className="flex flex-wrap justify-center mt-12 ">
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
//             <Card
//               imageSrc={RTX3070}
//               title="High End Workstation with GPU Workstation with RTX3070"
//             />
//             <Card
//               imageSrc={VR}
//               title="Leap motion controller with SDK VR Headset - PICO 4 All-inOne 128GB"
//             />
//             <Card
//               imageSrc={Quest}
//               title="VR Headset - Meta Quest 2 128GB"
//             />
//             <Card
//               imageSrc={Logi}
//               title="Web Camera - Logitech C922 Pro Stream Webcam"
//             />
//              <Card
//               imageSrc={Asus}
//               title="Asus TUF Gaming AX5400"
//             />
//              <Card
//               imageSrc={Dual}
//               title="Dual Band WiFi 6 Gaming Router"
//             />
//              <Card
//               imageSrc={Samsung}
//               title="Samsung Galaxy Tab (S6 lite)"
//             />
//           </div>
//         </div>
//       </div>
//         ) : (
//         <Carousel
//           value={facilities}
//           numVisible={3}
//           numScroll={1}
//           responsiveOptions={responsiveOptions}
//           className="custom-carousel"
//           circular
//           autoplayInterval={3000}
//           itemTemplate={productTemplate}
//         />)}
//       </div>
//     </>
//   );
// };

// export default Facilities;
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
      // <CardContainer key={index} className="inter-var">
      //   <CardBody
      //     className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-96 h-96 rounded-xl p-4 border flex flex-col items-center"
      //   >
      //     <CardItem
      //       as="p"
      //       translateZ="60"
      //       className="text-lg leading-relaxed text-center"
      //     >
      //       {facility.desc}
      //     </CardItem>
      //     <CardItem translateZ="100" className="w-full mt-4">
      //       <img
      //         src={facility.image}
      //         alt={facility.desc}
      //         className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
      //       />
      //     </CardItem>
      //   </CardBody>
      // </CardContainer>
      <CardContainer key={index} className="inter-var">
  <CardBody
    className="bg-gray-50 relative group/card dark:bg-gray-50 dark:border-white/[0.2] border-black/[0.1] w-96 h-96 rounded-xl p-4 border flex flex-col items-center"
  >
    <CardItem
      as="p"
      translateZ="60"
      className="text-lg leading-relaxed text-center text-gray-800 dark:text-gray-800"
    >
      {facility.desc}
    </CardItem>
    <CardItem translateZ="100" className="w-full mt-4">
      <img
        src={facility.image}
        alt={facility.desc}
        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
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
