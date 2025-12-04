// src/components/VisitorCounter.jsx
import { useEffect, useState } from "react";
import { Counter } from "counterapi";
import CountUp from "react-countup";
import { FaUsers } from "react-icons/fa";

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
  return null;
}

function setCookie(name, value, days = 1) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${value}; expires=${expires}; path=/; SameSite=Lax`;
}

const VisitorCounter = () => {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const counter = new Counter({ workspace: "citwebsite" });
    const counterKey = "visitors-cit";
    const lastVisitKey = "lastVisitTime";
    const now = Date.now();
    const lastVisit = getCookie(lastVisitKey);
    const oneDay = 24 * 60 * 60 * 1000;

    async function incrementIfAllowed() {
      try {
        let result;

        if (!lastVisit || now - parseInt(lastVisit, 10) > oneDay) {
          result = await counter.up(counterKey);
          setCookie(lastVisitKey, now.toString(), 1);
          setCount(result.data.up_count);
        } else {
          result = await counter.get(counterKey);
          setCount(result.data.up_count);
        }

        setLoading(false);
      } catch (err) {
        console.error("Counter API error:", err);
        setCount(0);
        setLoading(false);
      }
    }

    incrementIfAllowed();
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
          {loading ? "Loading..." : <CountUp end={count} duration={2} separator="," />}
        </p>
      </div>
    </div>
  );
};

export default VisitorCounter;
