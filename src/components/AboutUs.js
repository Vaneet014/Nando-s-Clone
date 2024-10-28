// AboutUs.js
import React from 'react';
import './AboutUs.css';

function AboutUs() {
  return (
    <div className="aboutus-container">
      <h2 className="aboutus-heading">About Us</h2>
      <p className="aboutus-text">
        Welcome to Nando's, home of the legendary flame-grilled PERi-PERi chicken. Our story began with a fiery passion for great food, 
        and today, our flame burns brighter than ever. Join us and experience our unique flavors, warm atmosphere, and unforgettable 
        experience at every visit.
      </p>
      <div className="social-icons">
        <a href="https://facebook.com" className="social-icon" aria-label="Facebook">F</a>
        <a href="https://twitter.com" className="social-icon" aria-label="Twitter">T</a>
        <a href="https://instagram.com" className="social-icon" aria-label="Instagram">I</a>
      </div>
      <p className="aboutus-footer">© 2023 Nando's. All rights reserved.</p>
    </div>
  );
}

export default AboutUs;
