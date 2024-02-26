import React from 'react';
import './Bestchoice.css'; // Import CSS file for styling
import Image from './IMAGE4.png'


const BestValue = () => {
  return (
    <div className="best-choice">
      <img src={Image} alt="Trophy" className="trophy-icon" />
      <span className="best-choice-text">Best Value</span>
    </div>
  );
};

export default BestValue;
