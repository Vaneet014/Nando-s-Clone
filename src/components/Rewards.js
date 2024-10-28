// Rewards.js
import React from 'react';
import './Rewards.css';

function Rewards() {
  return (
    <div className="rewards-container">
      <h2 className="rewards-heading">Nando's Rewards</h2>
      <div className="rewards-images">
        <div className="reward-item">
          <img src="https://www.nandos.co.uk/sites/all/themes/nandos/nandos-2015-styleguide-dist/images/hiw/join.svg" alt="Reward 1" className="reward-image" />
          <p>Earn Points</p>
        </div>
        <div className="reward-item">
          <img src="https://www.nandos.co.uk/sites/all/themes/nandos/nandos-2015-styleguide-dist/images/hiw/wallet.svg" alt="Reward 2" className="reward-image" />
          <p>Free Meals</p>
        </div>
        <div className="reward-item">
          <img src="https://www.nandos.co.uk/sites/all/themes/nandos/nandos-2015-styleguide-dist/images/hiw/wallet.svg" alt="Reward 3" className="reward-image" />
          <p>Exclusive Access</p>
        </div>
        <div className="reward-item">
          <img src="https://www.nandos.co.uk/sites/all/themes/nandos/nandos-2015-styleguide-dist/images/hiw/tap.svg" alt="Reward 4" className="reward-image" />
          <p>Birthday Gifts</p>
        </div>
        <div className="reward-item">
          <img src="https://www.nandos.co.uk/sites/all/themes/nandos/nandos-2015-styleguide-dist/images/hiw/earn.svg" alt="Reward 5" className="reward-image" />
          <p>Special Discounts</p>
        </div>
      </div>
      <div className="rewards-buttons">
        <button className="join-button">Join Now</button>
        <button className="login-button">Login</button>
      </div>
    </div>
  );
}

export default Rewards;
