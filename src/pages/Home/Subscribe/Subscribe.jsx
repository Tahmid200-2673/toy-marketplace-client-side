
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Button, Card, Form } from 'react-bootstrap';

const Subscribe = () => {
    return (
        <Card className="subscribe-card my-5" style={{ backgroundColor: '#f0f0f0' }}>
      <Card.Body>
        <h3 className="subscribe-title text-dark">Subscribe to Our Newsletter</h3>
        <p className="subscribe-description text-dark">Stay updated with the latest toys and exclusive offers!</p>
        <Form className="subscribe-form">
          <Form.Group controlId="formEmail" className="mb-3">
            <Form.Label srOnly>Email Address</Form.Label>
            <div className="input-group">
              <Form.Control type="email" placeholder="Enter your email" className="subscribe-input" />
              <Button variant="primary" className="subscribe-button">
                <FontAwesomeIcon icon={faEnvelope} className="subscribe-icon" />
                 &nbsp;Subscribe
              </Button>
            </div>
          </Form.Group>
        </Form>
      </Card.Body>
    </Card>
    );
};

export default Subscribe;