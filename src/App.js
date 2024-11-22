// // import React from 'react';
// // import Header from './components/Header';  
// // import ImageCarousel from './components/ImageCarousel';
// // import ThreeColumnSection from './components/ThreeColoumnSection';
// // import Rewards from './components/Rewards.js';
// // import Image1 from './components/image1.js';
// // import Image2 from './components/Image2.js';
// // import AboutUs from './components/AboutUs.js';
// // function App() {
// //   return (
// //     <div className='App' >
// //       <Header />
// //       <ImageCarousel/>
// //       <ThreeColumnSection/>
// //       <Rewards/>
// //       <Image1/>
// //       <Image2/>
// //       <AboutUs/>

// //     </div>
    
// //   );
// // }

// // export default App;

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './components/Header';  
// import ImageCarousel from './components/ImageCarousel';
// import ThreeColumnSection from './components/ThreeColoumnSection';
// import Rewards from './components/Rewards';
// import Image1 from './components/image1';
// import Image2 from './components/Image2';
// import AboutUs from './components/AboutUs';
// import ToDoList from './components/ToDoList.tsx'; 

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Header />
//         <Routes>
//           <Route
//             path="/"
//             element={
//               <>
//                 <ImageCarousel />
//                 <ThreeColumnSection />
//                 <Rewards />
//                 <Image1 />
//                 <Image2 />
//                 <AboutUs />
//               </>
//             }
//           />
//           <Route path="/to-do-list" element={<ToDoList />} /> {/* To-Do List route */}
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';  
import ImageCarousel from './components/ImageCarousel';
import ThreeColumnSection from './components/ThreeColoumnSection';
import Rewards from './components/Rewards';
import Image1 from './components/image1';
import Image2 from './components/Image2';
import AboutUs from './components/AboutUs';
import ToDoList from './components/ToDoList.tsx';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        {/* Default route for Home */}
        <Route
          path="/"
          element={
            <>
              <ImageCarousel />
              <ThreeColumnSection />
              <Rewards />
              <Image1 />
              <Image2 />
              <AboutUs />
            </>
          }
        />
        {/* Route for To-Do List */}
        <Route path="/to-do-list" element={<ToDoList />} />
      </Routes>
    </div>
  );
}

export default App;
