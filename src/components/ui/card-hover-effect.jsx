import { cn } from "../../lib/utils.jsx";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { useState } from "react";

export const HoverEffect = ({
  items,
  className
}) => {
  let [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center p-8", className)}>
      {items.map((item, idx) => (
        <Link
          href={item?.link}
          key={item?.link}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <CardTitle>{item.name}</CardTitle>
            <CardDescription>{item.position}</CardDescription>
            <p className="text-gray-500 text-center">{item.description}</p> 
            <p className="text-gray-500 text-center">{item.address}</p> 
          </Card>
        </Link>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children
}) => {
  return (
    <div
      className={cn(
        "rounded-lg p-6 flex flex-col items-center justify-center container",
        "min-h-[200px] min-w-[250px] md:min-h-[250px] md:min-w-[350px] lg:max-h-[250px] lg:min-h-[250px] lg:max-w-[400px] lg:min-w-[300px]",
        "bg-[#f2f6fb] shadow-sm hover:shadow-md transition-all duration-200 ease-in-out",  
        className
      )}
    >
      <div className="relative z-50">
        <div className="lg:p-4 md:p-6">{children}</div>
      </div>
    </div>
  );
};

export const CardTitle = ({
  className,
  children
}) => {
  return (
    <h2 className={cn("text-2xl font-bold mb-2 text-[#191b1c] text-center", className)}>
      {children}
    </h2>
  );
};

export const CardDescription = ({
  className,
  children
}) => {
  return (
    <p className={cn("text-gray-700 mb-2 text-center", className)}>
      {children}
    </p>
  );
};
