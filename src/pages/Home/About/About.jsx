// import React from 'react';
// import { Container } from 'react-bootstrap';

// import './About.css'
// import g1 from '../../../assets/gallery5.png'
// import g2 from '../../../assets/gallery4.jpg'
// import g3 from '../../../assets/gallery3.jpeg'

// const About = () => {
//     return (
//         <Container className="gallery-container mt-5">
//         <h2 className="gallery-heading">Gallery</h2>
//         <div className="gallery">
//           <div className="gallery-item">
//             <img src={g1} alt="Gallery Image 1" className="gallery-image" />
//           </div>
//           <div className="gallery-item">
//             <img src={g2} alt="Gallery Image 2" className="gallery-image" />
//           </div>
//           <div className="gallery-item">
//             <img src={g3} alt="Gallery Image 3" className="gallery-image" />
//           </div>
//           {/* Add more gallery items as needed */}
//         </div>
//       </Container>
//     );
// };

// export default About;

import React from 'react';
import { Container, Button } from 'react-bootstrap';

import './About.css';
import g1 from '../../../assets/gy1.jpg';
import g2 from '../../../assets/gy6.jpg';
import g3 from '../../../assets/gy3.jpeg';

const About = () => {
  return (
    <Container className="gallery-container mt-5">
      <h2 className="gallery-heading">Toy Paradise Gallery</h2>
      <div className="gallery">
      
       <div> 
       <h3 className="gallery-item-title">Action Figures</h3>
        <div className="gallery-item">
          <img src={g1} alt="Toy Image 1" className="gallery-image" />
          <div className="gallery-overlay">
         
            <Button variant="primary" className="gallery-item-button">Shop Now</Button>
         
          </div>
        </div></div>
        <div>
        <h3 className="gallery-item-title">Educational Toys</h3>
        <div className="gallery-item">
          <img src={g2} alt="Toy Image 2" className="gallery-image " style={{height: "412px"}}/>
          <div className="gallery-overlay">
           
            <Button variant="primary" className="gallery-item-button">Shop Now</Button>
          </div>
        </div>
        </div>
      <div>
      <h3 className="gallery-item-title">Plush Toys</h3>
      <div className="gallery-item">
      
      <img src={g3} alt="Toy Image 3" className="gallery-image" />
      <div className="gallery-overlay">
     
        <Button variant="primary" className="gallery-item-button">Shop Now</Button>
      </div>
    </div>
      </div>
       
      </div>
    </Container>
  );
};

export default About;
