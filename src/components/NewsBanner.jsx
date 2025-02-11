import React from 'react';

function NewsBanner() {
  return (
    <div className="news-banner-container">
      <div className="news-banner-content animate-marquee">
        <span className="news-banner-text">
          Welcome to the Centre for Immersive Technologies! Check out our latest news and updates.
        </span>
        <button className="read-more-btn">
          <a href="/events&news">Read More</a>
        </button>
      </div>
    </div>
  );
}

export default NewsBanner;
