import React from 'react';
import { Outlet } from 'react-router-dom';
import Blog from '../pages/Blog/Blog';
import { Row, Col } from 'react-bootstrap';

const MainComponent = () => {
  return (
    <Row>
    <Col sm={3} className='bg-warning'>
      <Blog />
    </Col>
    <Col sm={9}>
      <Outlet />
    </Col>
  </Row>
  );
};

export default MainComponent;
