
import { Container, Row, Col } from 'react-bootstrap';
import toy from '../../../assets/toy.jpg'
import './Footer.css'

const Footer = () => {
    return (
        <div className="container-fluid bg-light shady-footer text-dark mt-5 shadow-lg p-3 mb-5 bg-body-tertiary rounded">
      <Container>
        <Row>
          <Col md={4} className="my-4 mx-2">
            <img src={toy} alt="Company Logo" width="100" />
            <h5>Toys Paradise</h5>
            <p>123 Street, Dhaka, Bangladesh</p>
          </Col>
          <Col md={4} className="my-4 mx-5">
            <h5>Contact</h5>
            <ul className="list-unstyled">
              <li>Phone: +123 456 789</li>
              <li>Email: info@company.com</li>
            </ul>
          </Col>
          <Col md={2} className="my-4 mx-5">
            <h5>Follow Us</h5>
            <ul className="list-unstyled">
              <li>
                <a href="https://www.facebook.com">Facebook</a>
              </li>
              <li>
                <a href="https://www.twitter.com">Twitter</a>
              </li>
              <li>
                <a href="https://www.instagram.com">Instagram</a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      <div className="text-center py-3">
        &copy; {new Date().getFullYear()} Toys Paradise. All rights reserved.
      </div>
    </div>
    );
};

export default Footer;