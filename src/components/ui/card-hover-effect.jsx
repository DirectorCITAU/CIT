import { cn } from "../../lib/utils.jsx";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";

export const HoverEffect = ({ items, className }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 justify-center p-6",
        className
      )}
    >
      {items.map((item, idx) => (
        <Link
          to={item?.link || "#"}
          key={idx}
          className="relative group block w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <Card image={item.image} hovered={hoveredIndex === idx}>
            <CardTitle>{item.name}</CardTitle>
            <CardDescription>{item.position}</CardDescription>
            <p className="text-gray-500 text-sm md:text-base">{item.description}</p>
            <p className="text-gray-500 text-sm md:text-base">{item.address}</p>
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
        "relative overflow-hidden rounded-lg flex flex-row items-center gap-6 transition-all duration-200 ease-in-out",
        "bg-[#f9fafb] shadow-sm hover:shadow-md",
        "min-h-[200px] w-full",
        className
      )}
    >
      {/* Hover background overlay */}
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

      {/* Image - No padding, flush left */}
      {image && (
        <img
          src={image}
          alt="Committee Member"
          className="w-32 h-40 md:w-36 md:h-48 object-cover rounded-l-lg border-r border-gray-200 relative z-10"
        />
      )}

      {/* Text content - Right side */}
      <div className="flex flex-col justify-center relative z-10 p-4 w-full">
        {children}
      </div>
    </div>
  );
};

export const CardTitle = ({ className, children }) => {
  return (
    <h2
      className={cn(
        "text-xl md:text-2xl font-semibold text-[#191b1c] mb-1 relative z-20",
        className
      )}
    >
      {children}
    </h2>
  );
};

export const CardDescription = ({ className, children }) => {
  return (
    <p
      className={cn(
        "text-gray-700 text-sm md:text-base mb-1 relative z-20",
        className
      )}
    >
      {children}
    </p>
  );
};
