import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const ErrorPage = () => {


  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Row>
        <Col className="text-center">
          <h1 style={{ fontSize: '72px', color: '#ff6b6b', marginBottom: '30px' }}>Error 404</h1>
          <p style={{ fontSize: '24px', color: '#333', marginBottom: '50px' }}>Page Not Found</p>
          <Image src="https://i.ibb.co/C1kLGB0/images.jpg" fluid style={{ width: '400px', borderRadius: '50%' }} className='mb-5'/>
        
          <div className="d-flex justify-content-center mt-5">
            <Link to="/">
              <button className="view-details-btn">Back to Home</button>
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ErrorPage;
