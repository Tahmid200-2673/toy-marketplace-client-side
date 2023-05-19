
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faUndo, faHeadset, faGift } from '@fortawesome/free-solid-svg-icons';
import { Card, Row } from 'react-bootstrap';
import './Support.css'

const Support = () => {
  return (
    <div className="support mt-5 mx-5">
        <h2 className="support-title text-center">Customer Support and Benefits</h2>
      <Row xs={1} md={2} lg={4} className="support-row">
        <Card className="support-card support-card-shipping">
          <Card.Body>
            <FontAwesomeIcon icon={faTruck} size="2x" className="support-icon" />
            <Card.Title>Free Shipping</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Enjoy free shipping on all orders over $50.</Card.Subtitle>
          </Card.Body>
        </Card>
        <Card className="support-card support-card-returns">
          <Card.Body>
            <FontAwesomeIcon icon={faUndo} size="2x" className="support-icon" />
            <Card.Title>Free Returns</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Not satisfied? We offer hassle-free returns within 30 days.</Card.Subtitle>
          </Card.Body>
        </Card>
        <Card className="support-card support-card-support">
          <Card.Body>
            <FontAwesomeIcon icon={faHeadset} size="2x" className="support-icon" />
            <Card.Title>24/7 Support</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Our dedicated support team is available 24/7 to assist you.</Card.Subtitle>
          </Card.Body>
        </Card>
        <Card className="support-card support-card-gift">
          <Card.Body>
            <FontAwesomeIcon icon={faGift} size="2x" className="support-icon" />
            <Card.Title>Receive Gift Card</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Get a free gift card with every purchase over $100.</Card.Subtitle>
          </Card.Body>
        </Card>
      </Row>
    </div>
  );
};

export default Support;