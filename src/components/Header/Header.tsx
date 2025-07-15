import React from "react";
import "./header.css";

const Header: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="nav-brand">
        <h3>Suresh Photo</h3>
      </div>
      <ul className="nav-links">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#gallery">Gallery</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
