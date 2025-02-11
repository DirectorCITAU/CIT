import { useState } from 'react';
import PropTypes from 'prop-types';
import { Typewriter } from 'react-simple-typewriter';

const Card = ({ backgroundImage, text }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  Card.propTypes = {
    backgroundImage: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  };

  return (
    <div
      className={`card glass w-80 shadow-xl transform transition duration-300 hover:scale-105 rounded-xl ${
        isHovered ? 'shadow-[#2c3e50] shadow-lg' : 'shadow-md'
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <figure className="w-full h-64 overflow-hidden">
        <img
          src={backgroundImage}
          alt={text}
          className="w-full h-full object-cover rounded-t-lg"
        />
      </figure>
      <div className="card-body p-6 text-center">
        {isHovered ? (
          <h2 className="card-title text-lg font-semibold text-[#232627]">
            <Typewriter
              words={[text]}
              loop={1}
              cursor
              typeSpeed={50}
              deleteSpeed={30}
            />
          </h2>
        ) : (
          <h2 className="card-title text-lg font-semibold text-[#232627]">
            {text}
          </h2>
        )}
      </div>
    </div>
  );
};

export default Card;
