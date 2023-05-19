
import { Button, Card, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {  FaGoogle } from 'react-icons/fa';
import './Login.css'
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';


const Login = () => {
    const { signIn } = useContext(AuthContext);
    const fnLogin = event => {
      
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password)
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.log(error));

        

       
    }
    return (
        <Container className="d-flex align-items-center justify-content-center vh-100">
      <Card className="w-50">
        <Card.Body>
          <h3 className="text-center mb-4">Login</h3>
          <Form onSubmit={fnLogin}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" name="email" placeholder="Enter email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" name="password" placeholder="Password" required />
            </Form.Group>

            <div className="d-flex justify-content-center">
  <Button className="login-btn btn btn-dark mx-5" variant="primary" type="submit" style={{ width: "19rem" }}>
           Login
              </Button>
          </div>
          <br />
          <div className="text-center">
          <Form.Text className="text-secondary mt-3 mx-5">
              New to our platform? <Link to="/signup">Register</Link>
          </Form.Text>
         </div>

            <Form.Text className="text-right mt-5">
              <div className="google-btn-wrapper">
                <button className="google-btn btn btn-warning rounded-circle mx-5">
                  <FaGoogle />
                </button>
              </div>
              <h5 className="mx-5 text-center">Sign-in with Google</h5>
            </Form.Text>
          </Form>
        </Card.Body>
      </Card>
    </Container>
    );
};

export default Login;