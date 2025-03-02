import { HoverEffect } from "./ui/card-hover-effect";
import Manivannan from "../src/assets/ExecutiveCommitee/Manivannan.webp";
import AnilKumar from "../src/assets/ExecutiveCommitee/AnilKumar.webp";
// import  from "src/assets/ExecutiveCommitee/"
// import  from "src/assets/ExecutiveCommitee/"
// import  from "src/assets/ExecutiveCommitee/"
// import  from "src/assets/ExecutiveCommitee/"

const ExecutiveCommittee = () => {
  const committeeMembers = [
    {
      name: "Dr. M.Manivannan, Ph.D",
      position: "Professor & Director",
      description: "Department of Applied Mechanics,",
      address: "Touch Lab IIT Madras",
      image: {Manivannan}, 
    },
    {
      name: "Mr. Anil Kumar P N",
      position: "Vice President",
      description: "Delivery Head & Development Center Head",
      address: "Infosys, Chennai",
      image: {AnilKumar},
    },
    {
      name: "Mr. A. Robert J Ravi, ITS",
      position: "Chief Technology Officer (CTO)",
      description: "Department of IT",
      address: "Government of Tamil Nadu, Chennai",
      image: "src/assets/ExecutiveCommitee/Robert.webp",
    },
    {
      name: "Dr. CSS Bharathy",
      position: "Founder & Industry Certified 4.0 Professional",
      description: "Fusion VR",
      address: "Chennai",
      image: "src/assets/ExecutiveCommitee/Bharathy.webp",
    },
    {
      name: "Dr. P. Hariharan, Ph.D",
      position: "Professor, Dept of Manufacturing Engineering, College of Engineering",
      description: "Director, Centre for Constituent Colleges",
      address: "Anna University, Chennai",
      image: "src/assets/ExecutiveCommitee/Hariharan.webp",
    },
    // Add more committee members here
  ];

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-6 text-[#232627] text-center underline underline-offset-8 decoration-blue-200 decoration-1 p-5 font-raleway tracking-wider">
        EXECUTIVE COMMITTEE
      </h1>
      <HoverEffect items={committeeMembers} />
    </div>
  );
};

export default ExecutiveCommittee;
