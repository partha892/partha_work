import React from 'react';
import './1stcard.css'; // Import CSS file for styling
import Image from './download.png'

const Biulder2 = () => {
  return (
    <div className="card-section1">
      {/* Card 1 */}
      <div className="card1">
        <img src={Image} className="card-img1" />
        <p>Builder 1</p>
      </div>
      {/* Card 2 */}
      <div className="card1">
        <h2 className="card-title">SiteCraft 68-Inch Ultimate Web Design Studio-</h2>
        <p className="card-description"> Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)</p>
        <div className="highlights">
          <h3 className="highlight-title">Main highlights</h3>
          <p className="highlight-description">[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations.</p>
          <button className="show-more-button">Show More</button>
        </div>
      </div>
      {/* Card 3 */}
      <div className="card1">
        <div className="rectangle">
          <p className="rating">9.5</p>
        
        <p className="rating-text">Excellent</p>
        <p>*****</p>
        </div>
        <button className="view-button">View</button>
      </div>
    </div>
  );
};

export default Biulder2;
