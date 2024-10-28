import React from 'react';
import Header from './components/Header';  
import ImageCarousel from './components/ImageCarousel';
import ThreeColumnSection from './components/ThreeColoumnSection';
import Rewards from './components/Rewards.js';
import Image1 from './components/image1.js';
import Image2 from './components/Image2.js';
import AboutUs from './components/AboutUs.js';
function App() {
  return (
    <div className='App' >
      <Header />
      <ImageCarousel/>
      <ThreeColumnSection/>
      <Rewards/>
      <Image1/>
      <Image2/>
      <AboutUs/>
    </div>
  );
}

export default App;
