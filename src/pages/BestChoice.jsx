import React from 'react';
import './Bestchoice.css'; // Import CSS file for styling
import Image from './IMg3.png'


const BestChoice = () => {
  return (
    <div className="best-choice">
      <img src={Image} alt="Trophy" className="trophy-icon" />
      <span className="best-choice-text">Best Choice</span>
    </div>
  );
};

export default BestChoice;
