import React from 'react';
import './Image2.css';

function Image2() {
  return (
    <div className="image2-container">
      <div className="image2-item">
        <img src="https://www.nandos.co.uk/sites/default/files/styles/banner-max/public/GCdesktop.webp?itok=FoZjAdP_" alt="Option 1" className="image2-image" />
        <div className="image2-content">
          <h2 className="image2-heading">Flavor Burst</h2>
          <p className="image2-text">Enjoy a rich taste in every bite</p>
          <button className="order-button">Order Now</button>
        </div>
      </div>
      <div className="image2-item">
        <img src="https://www.nandos.co.uk/sites/default/files/styles/banner-mobile/public/2105-Sus-768x550.webp?itok=_HH2yL4V" alt="Option 2" className="image2-image" />
        <div className="image2-content">
          <h2 className="image2-heading">Savor the Spice</h2>
          <p className="image2-text">An adventure for your taste buds</p>
          <button className="order-button">Order Now</button>
        </div>
      </div>
    </div>
  );
}

export default Image2;
