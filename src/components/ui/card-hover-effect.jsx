import { cn } from "../../lib/utils.jsx";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";

export const HoverEffect = ({ items, className }) => {
  let [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 justify-center p-8", className)}>
      {items.map((item, idx) => (
        <Link
          to={item?.link || "#"}
          key={idx}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <Card image={item.image} hovered={hoveredIndex === idx}>
            <CardTitle>{item.name}</CardTitle>
            <CardDescription>{item.position}</CardDescription>
            <p className="text-gray-500">{item.description}</p> 
            <p className="text-gray-500">{item.address}</p> 
          </Card>
        </Link>
      ))}
    </div>
  );
};

export const Card = ({ className, children, image, hovered }) => {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-lg p-6 flex flex-col md:flex-row items-center space-x-4 container transition-all duration-200 ease-in-out",
        "bg-[#f9fafb] shadow-sm hover:shadow-md",
        "min-h-[250px] md:min-h-[250px] lg:min-h-[250px] w-full", 
        className
      )}
    >
      {/* Hover Effect Covering Entire Card */}
      <AnimatePresence>
        {hovered && (
          <motion.span
            className="absolute inset-0 h-full w-full bg-gray-200 opacity-70"
            layoutId="hoverBackground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.2 } }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
          />
        )}
      </AnimatePresence>

      {/* Image - On Top (Mobile) and Left (Desktop) */}
      {image && (
        <img 
          src={image} 
          alt="Committee Member" 
          className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover border-2 border-gray-300 relative z-10 mb-4 md:mb-0 md:mr-4"
        />
      )}

      {/* Text Content */}
      <div className="flex flex-col justify-center relative z-10 p-2 w-full text-center md:text-left">
        {children}
      </div>
    </div>
  );
};
export const CardTitle = ({ className, children }) => {
  return (
    <h2 className={cn("text-lg md:text-xl font-bold text-[#191b1c] relative z-20", className)}>
      {children}
    </h2>
  );
};

export const CardDescription = ({ className, children }) => {
  return (
    <p className={cn("text-gray-700 text-sm md:text-base relative z-20", className)}>
      {children}
    </p>
  );
};
