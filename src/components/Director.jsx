// import React from "react";
// import { motion } from "framer-motion";
// import Dmm from "../assets/director.webp";

// function DirectorMessage() {
//   return (
//     <div
//     className="flex flex-col items-center justify-center min-h-screen bg-gray-100"
//     style={{ backgroundColor: "rgba(229, 229, 229, 0.84)", padding: "20px" }}
//   >
//     <h1
//       className="text-4xl font-bold mb-6 tracking-wider underline underline-offset-8 decoration-blue-200 decoration-1 pt-7 text-center"
//       style={{
//         color: "#232627",
//         fontFamily: "Raleway, sans-serif",
//       }}
//     >
//       DIRECTOR'S MESSAGE
//     </h1>
//     <motion.div
//       className="max-w-4xl bg-white rounded-xl shadow-md p-8 md:flex items-center"
//       style={{
//         backgroundColor: "#f9fafc",
//         padding: "40px",
//         borderRadius: "12px",
//         boxShadow: "0px 10px 30px rgba(5, 5, 5, 0.31)",
//         margin: "30px auto",
//         textAlign: "center",
//       }}
//       initial={{ opacity: 0, y: 50 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 1 }}
//     >
//       <motion.img
//         src={Dmm}
//         alt="Director"
//         className="w-48 h-48 mx-auto md:mr-8 md:ml-0"
//         style={{
//           width: "240px",
//           height: "320px",
//           borderRadius: "10%",
//           border: "4px solid #1b263b",
//           objectFit: "cover",
//           boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)",
//         }}
//         initial={{ scale: 0 }}
//         animate={{ scale: 1 }}
//         transition={{ duration: 1 }}
//       />
//       <div className="md:flex-1 text-justify" style={{ padding: "0 20px" }}>
//         <motion.p
//           className="mb-6 pb-2"
//           style={{ color: "#2f3e54", fontSize: "1.1rem", lineHeight: "1.8" }}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.5, duration: 1 }}
//         >
//           It is my pleasure to welcome you to the Center for Immersive Technologies.
//           Our research centre is dedicated to exploring the possibilities of immersive
//           technologies such as Augmented Reality (AR), Virtual Reality (VR), Extended Reality
//           (XR), Digital Twin, and Metaverse. We strive to push the boundaries of these
//           technologies to create new experiences, applications, and opportunities for students,
//           researchers, and industries.
//           <br />
//           <br />
//           As the Director of the Center for Immersive Technologies, I am proud of the work that
//           our team is doing to advance the field of immersive technologies. Our focus areas
//           include AR and VR development, XR applications, Digital Twin, and Metaverse design.
//           We believe that these technologies have the potential to revolutionize industries such
//           as education, healthcare, entertainment, and more.
//         </motion.p>

//         <motion.p
//           style={{ color: "#2f3e54", fontSize: "1.1rem", lineHeight: "1.8" }}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 1, duration: 1 }}
//         >
//           At the Center for Immersive Technologies, we are committed to conducting cutting-edge
//           research in immersive technologies. We work closely with industry partners, academic
//           institutions, and other research organizations to share our findings and collaborate on
//           new projects. We are also dedicated to creating immersive educational content that
//           engages and inspires learners, enhancing their understanding and retention of complex
//           topics. We believe that collaboration is key to advancing the field of immersive
//           technologies. We welcome individuals and organizations who share our passion to join
//           us in this exciting journey.
//           <br />
//           <br />
//           Thank you for visiting the Center for Immersive Technologies. We invite you to explore
//           our website to learn more about our research activities, educational content, and
//           collaborative opportunities.
//           <br />
//           <br />
//           <strong>Best regards,</strong>
//           <br />
//           <strong>Dr. S Chitrakala,</strong>
//           <br />
//           Director,
//           <br />
//           Center for Immersive Technologies.
//         </motion.p>
//       </div>
//     </motion.div>
//   </div>
//   );
// }

// export default DirectorMessage;
import React from "react";
import { motion } from "framer-motion";
import Dmm from "../assets/director.webp";

function DirectorMessage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4 py-10">
      {/* Title */}
      <h1
        className="text-4xl font-bold mb-6 tracking-wider underline underline-offset-8 decoration-blue-200 decoration-1 text-center"
        style={{
          color: "#232627",
          fontFamily: "Raleway, sans-serif",
        }}
      >
        DIRECTOR'S MESSAGE
      </h1>

      {/* Message Container */}
      <motion.div
        className="bg-white rounded-xl shadow-md p-8 w-full max-w-4xl flex flex-col md:flex-row items-center md:items-start"
        style={{
          backgroundColor: "#f9fafc",
          borderRadius: "12px",
          boxShadow: "0px 10px 30px rgba(5, 5, 5, 0.31)",
        }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Image Section */}
        <motion.img
          src={Dmm}
          alt="Director"
          className="w-48 h-64 md:w-56 md:h-72 mb-6 md:mb-0 md:mr-6 rounded-lg border-4 border-gray-800 shadow-lg"
          style={{ objectFit: "cover" }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
        />

        {/* Text Content */}
        <div className="text-justify flex-1">
          <motion.p
            className="mb-6 pb-2"
            style={{ color: "#2f3e54", fontSize: "1.1rem", lineHeight: "1.8" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            It is my pleasure to welcome you to the Center for Immersive Technologies.
            Our research centre is dedicated to exploring the possibilities of immersive
            technologies such as Augmented Reality (AR), Virtual Reality (VR), Extended Reality
            (XR), Digital Twin, and Metaverse. We strive to push the boundaries of these
            technologies to create new experiences, applications, and opportunities for students,
            researchers, and industries.
            <br />
            <br />
            As the Director of the Center for Immersive Technologies, I am proud of the work that
            our team is doing to advance the field of immersive technologies. Our focus areas
            include AR and VR development, XR applications, Digital Twin, and Metaverse design.
            We believe that these technologies have the potential to revolutionize industries such
            as education, healthcare, entertainment, and more.
          </motion.p>

          <motion.p
            style={{ color: "#2f3e54", fontSize: "1.1rem", lineHeight: "1.8" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            At the Center for Immersive Technologies, we are committed to conducting cutting-edge
            research in immersive technologies. We work closely with industry partners, academic
            institutions, and other research organizations to share our findings and collaborate on
            new projects. We are also dedicated to creating immersive educational content that
            engages and inspires learners, enhancing their understanding and retention of complex
            topics.
            <br />
            <br />
            Thank you for visiting the Center for Immersive Technologies. We invite you to explore
            our website to learn more about our research activities, educational content, and
            collaborative opportunities.
            <br />
            <br />
            <strong>Best regards,</strong>
            <br />
            <strong>Dr. S Chitrakala,</strong>
            <br />
            Director,
            <br />
            Center for Immersive Technologies.
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
}

export default DirectorMessage;
