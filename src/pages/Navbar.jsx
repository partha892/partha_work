import React from 'react';
import './Navbar.css'; // Import CSS file for styling

const Navbar = () => {
  const handleSearch = () => {
    // Function to handle search functionality
    console.log('Searching...'); // Placeholder action
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-search">
          <input type="text" placeholder="Search" className="search-input" />
          <button onClick={handleSearch} className="search-button">Search</button>
        </div>
        <div className="navbar-links">
          <a href="#" className="navbar-link">Categories</a>
          <a href="#" className="navbar-link">Website Building</a>
          <a href="#" className="navbar-link">Today's Deal</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
