
import React, { useState } from 'react';
import './Navbar.css'; 
import logo from "../pictures/logo44.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="nav_container">
      <div className="nav_elements_container">
        <a href="#home">
          <img className="nav_logo" src={logo} alt="Logo" />
        </a>

        <div className="hamburger" onClick={toggleMenu}>
          <span className={`line ${isOpen ? 'open' : ''}`}></span>
          <span className={`line ${isOpen ? 'open' : ''}`}></span>
          <span className={`line ${isOpen ? 'open' : ''}`}></span>
        </div>

        <div className={`nav_links ${isOpen ? 'nav_active' : ''}`}>
          <ul className="nav_ul">
            <li className="nav_li"><a href="#home">Home</a></li>
            <li className="nav_li"><a href="#about">About</a></li>
            <li className="nav_li"><a href="#services">Services</a></li>
            <li className="nav_li"><a href="#vouchers">Vouchers</a></li>
            <li className="nav_li"><a href="#question">FAQ</a></li>
            <li className="nav_li"><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <a href="./GoogleForm" className="book_btn">Book Now</a>


      </div>
    </div>
  );
};

export default Navbar;

