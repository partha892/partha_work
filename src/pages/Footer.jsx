import React from 'react';
import './Footer.css'; // Import CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3 className="footer-heading">Categories</h3>
          <ul className="footer-list">
            <li className="footer-item">Web Building</li>
            <li className="footer-item">Hosting</li>
            <li className="footer-item">Data Center</li>
            <li className="footer-item">Robotic Automation</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3 className="footer-heading">Contact</h3>
          <ul className="footer-list">
            <li className="footer-item">Contact</li>
            <li className="footer-item">Privacy Policy</li>
            <li className="footer-item">Team</li>
            <li className="footer-item">Terms of Service</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3 className="footer-heading">Select Region</h3>
          <select className="footer-select">
            <option value="us">United States</option>
            {/* Add more options for other regions as needed */}
          </select>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
