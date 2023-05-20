
import { Container, Row, Col } from 'react-bootstrap';
import toy from '../../../assets/toy.jpg'
import './Footer.css'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="container-fluid bg-light shady-footer text-dark mt-5 shadow-lg p-3 mb-5 bg-body-tertiary rounded">
      <Container>
        <Row>
          <Col md={4} className="my-4 mx-2">
            <img src={toy} alt="Company Logo" width="100" />
            <h5>Toys Paradise</h5>
            <p className="address">123 Street, Dhaka, Bangladesh</p>
          </Col>
          <Col md={4} className="my-4 mx-5">
            <h5>&nbsp;&nbsp;&nbsp;Contact</h5>
            <ul className="list-unstyled contact-info">
              <li>Phone: +123 456 789</li>
              <li>Email: info@company.com</li>
            </ul>
          </Col>
          <Col md={2} className="my-4 mx-5">
            <h5>Follow Us</h5>
            <ul className="list-unstyled social-links">
              <li>
             
                <a href="https://www.facebook.com" className="facebook"><FaFacebook/>&nbsp;&nbsp;&nbsp;Facebook  </a>
              </li>
              <li>
                <a href="https://www.twitter.com" className="twitter">< FaTwitter/>&nbsp;&nbsp;&nbsp; Twitter</a>
              </li>
              <li>
                <a href="https://www.instagram.com" className="instagram">< FaInstagram/>&nbsp;&nbsp;&nbsp; Instagram</a>
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