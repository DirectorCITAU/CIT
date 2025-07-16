
import React from 'react';

function NewsBanner() {
  return (
    <div className="news-banner-container bg-blue-100 py-2 px-4">
      <div className="news-banner-content animate-marquee flex items-center justify-between space-x-4">
        <span className="news-banner-text font-medium text-blue-900 whitespace-nowrap">
        Welcome to the Centre for Immersive Technologies! Check out our latest news and updates.
        </span>
        <button className="read-more-btn bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition-all duration-200">
          <a href="/events&news">Read More</a>
        </button>
      </div>
    </div>
  );
}

export default NewsBanner;

