// src/components/VisitorCounter.jsx
import { useEffect, useState } from "react";
import { Counter } from "counterapi";
import CountUp from "react-countup";
import { FaUsers } from "react-icons/fa";
const VisitorCounter = () => {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const counter = new Counter({ workspace: "citwebsite" }); 
    async function incrementCounter() {
      try {
        const result = await counter.up("visitors-cit");
        setCount(result.data.up_count);
        setLoading(false);
      } catch (err) {
        console.error("Counter API error:", err);
        setCount(0);
        setLoading(false);
      }
    }

    incrementCounter();
  }, []);

  return (
    <div className="flex justify-center mt-12">
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-sm w-full text-center border border-gray-200 flex flex-col items-center">
        <div className="bg-[#E0F2FF] p-4 rounded-full mb-4">
          <FaUsers className="text-[#0B69FF] text-3xl" />
        </div>

        <h2 className="text-2xl font-raleway font-bold text-[#232627] mb-4">
          Total Visitors
        </h2>

        <p className="text-4xl font-roboto font-bold text-[#2D2D2D]">
          {loading ? (
            "Loading..."
          ) : (
            <CountUp end={count} duration={2} separator="," />
          )}
        </p>
      </div>
    </div>
  );
};

export default VisitorCounter;
