// ThreeColumnSection.js
import React from 'react';
import './ThreeColoumnSection.css';

function ThreeColumnSection() {
  return (
    <div className="section-container">
      <div className="three-column-container">
        {/* Column 1 */}
        <div className="column">
          <h3>Quality Ingredients</h3>
          <p>Only the freshest ingredients make it to our kitchen to ensure top-quality meals every time.</p>
          <button className="column-button">Learn More</button>
        </div>

        {/* Column 2 */}
        <div className="column">
          <h3>Exclusive Recipes</h3>
          <p>Our chefs craft exclusive recipes that bring out the best flavors in every dish.</p>
          <button className="column-button">Learn More</button>
        </div>

        {/* Column 3 */}
        <div className="column">
          <h3>Exceptional Service</h3>
          <p>We pride ourselves on providing friendly, professional service to every customer.</p>
          <button className="column-button">Learn More</button>
        </div>
      </div>
    </div>
  );
}

export default ThreeColumnSection;
