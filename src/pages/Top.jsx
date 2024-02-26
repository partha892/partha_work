import React from 'react';
import './Top.css'; // Import CSS file for styling
import img3 from './IMG.png'
import img4 from './IMG2.png'


const Top = () => {
  return (
    <div className="container">
      <h1 className="heading">Best Website Builders in the US</h1>
      <div className="icons">
        <img src={img3} alt="Icon 1" className="icon" />
        <span className="update">Last Update - February 22, 2020</span>
        <img src={img4} alt="Icon 2" className="icon" />
        <span className="disclosure">Advertising Disclosure</span>
      </div>
    </div>
  );
};

export default Top;


