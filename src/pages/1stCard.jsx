import React from 'react';
import './1stcard.css'; // Import CSS file for styling
import Image from './download.png'

const CardSection = () => {
  return (
    <div className="card-section1">
      {/* Card 1 */}
      <div className="card1">
        <img src={Image} className="card-img1" />
        <p>Builder 1</p>
      </div>
      {/* Card 2 */}
      <div className="card1">
        <h2 className="card-title">WixPro 72-Inch Responsive Website Builder</h2>
        <p className="card-description">Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)</p>
        <div className="highlights">
          <h3 className="highlight-title">Main highlights</h3>
          <p className="highlight-description">[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides</p>
          <button className="show-more-button">Show More</button>
        </div>
      </div>
      {/* Card 3 */}
      <div className="card1">
        <div className="rectangle">
          <p className="rating">9.8</p>
        
        <p className="rating-text">Exceptional </p>
        <p>*****</p>
        </div>
        <button className="view-button">View</button>
      </div>
    </div>
  );
};

export default CardSection;
