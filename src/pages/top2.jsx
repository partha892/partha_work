import React from 'react';
import './Top2.css'; // Import CSS file for styling

const Top2 = () => {
  return (
    <nav className="Top2">
      <ul className="nav-list">
        <li className="nav-item">Tools</li>
        <li className="nav-item">AWS Builders</li>
        <li className="nav-item">Start Build</li>
        <li className="nav-item">Build Support Tooling</li>
        <li className="nav-item">Blue Hosting</li>
      </ul>
      <ul className="subnav-list">
        <li className="subnav-item">Home <span className="arrow">&#9654;</span></li>
        <li className="subnav-item">Hosting for all <span className="arrow">&#9654;</span></li>
        <li className="subnav-item">Hosting <span className="arrow">&#9654;</span></li>
        <li className="subnav-item">Hosting <span className="arrow">&#9654;</span></li>
        <li className="subnav-item">Hosting <span className="arrow">&#9654;</span></li>
        <li className="subnav-item">Hosting <span className="arrow">&#9654;</span></li>
        <li className="subnav-item right">Top Relevant  <span className="arrow">&#9660;</span>
</li>
      </ul>
    </nav>
  );
};

export default Top2;
