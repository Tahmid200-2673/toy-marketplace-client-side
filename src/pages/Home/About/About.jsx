



import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Button, Container } from 'react-bootstrap';


import './About.css';
import g1 from '../../../assets/gy16.jpg';
import g2 from '../../../assets/gy11.jpg';
import g3 from '../../../assets/gy10.jpeg';

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Container className="gallery-container mt-5">
      <h2 className="gallery-heading">Toy Paradise Gallery</h2>
      <div className="gallery">
        <div className="gallery-item" data-aos="fade-up">
          <img src={g1} alt="Toy Image 1" className="gallery-image" style={{ height: '412px' }}/>
          <div className="gallery-overlay"></div>
          <h3 className="gallery-item-title">Transformers Toys</h3>
          <Button variant="primary" className="gallery-item-button mb-5 mt-2">Shop Now</Button>
        </div>
        <div className="gallery-item" data-aos="fade-up">
          <img src={g2} alt="Toy Image 2" className="gallery-image" style={{ height: '412px' }} />
          <div className="gallery-overlay"></div>
          <h3 className="gallery-item-title">Marvel Toys</h3>
          <Button variant="primary" className="gallery-item-button mb-5 mt-2">Shop Now</Button>
        </div>
        <div className="gallery-item" data-aos="fade-up">
          <img src={g3} alt="Toy Image 3" className="gallery-image" style={{ height: '412px' }}/>
          <div className="gallery-overlay"></div>
          <h3 className="gallery-item-title">Star wars Toys</h3>
          <Button variant="primary" className="gallery-item-button mb-5 mt-2">Shop Now</Button>
        </div>
      </div>
    </Container>
  );
};

export default About;
