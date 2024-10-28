import React, { useState, useEffect } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './ImageCarousel.css';  
const images = [
  {
    src: 'https://www.nandos.co.uk/sites/default/files/styles/banner-tablet/public/2410%20October%20MU%20Wings%20Halloween%20-%20Website%20Hero%20Tablet%201180x820%402x.jpg?itok=4CrkCs-f',
    text: "Delicious Flame-Grilled Chicken",
  },
  {
    src: 'https://www.nandos.co.uk/sites/default/files/styles/banner-tablet/public/2410%20October%20MU%20CP%20Halloween%20-%20Website%20Hero%20Tablet%201180x820%402x.jpg?itok=DkYDSZK4',
    text: "Spicy Peri-Peri Chicken",
  },
];

function ImageCarousel() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
    const handlePrevClick = () => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    };
  
    const handleNextClick = () => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    };
  
    useEffect(() => {
      const interval = setInterval(() => {
        handleNextClick();
      }, 5000);
  
      return () => clearInterval(interval); 
    }, []);
  
    return (
      <div className="carousel-container">
        <div className="carousel-image-container">
          <img
            src={images[currentImageIndex].src}
            alt="Chicken"
            className="carousel-image"
          />
          <div className="carousel-text">
            {images[currentImageIndex].text}
          </div>
  
          <button className="carousel-arrow left-arrow" onClick={handlePrevClick}>
            <i className="bi bi-chevron-left"></i>
          </button>
  
          <button className="carousel-arrow right-arrow" onClick={handleNextClick}>
            <i className="bi bi-chevron-right"></i>
          </button>
        </div>
       
      </div>
    );
  }
  
  export default ImageCarousel;