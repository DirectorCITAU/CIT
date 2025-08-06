import { useState } from 'react';
import PropTypes from 'prop-types';

const Card = ({ backgroundImage, text }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const cardStyle = {
    width: '300px',
    height: '400px',
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
    borderRadius: '10px',
    overflow: 'hidden',
    cursor: 'pointer',
    transition: 'transform 0.3s ease-in-out',
    transform: isHovered ? 'scale(1.1)' : 'scale(1)',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  };

  const textStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    position: 'absolute',
    bottom: '20px',
    left: '0',
    width: '100%',
    padding: '0 20px',
    color: '#fff',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)',
    textAlign: 'center',
    fontSize: '18px',
  };

  return (
    <div
      style={cardStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div style={textStyle}>{text}</div>
    </div>
  );
};

Card.propTypes = {
  backgroundImage: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Card;
