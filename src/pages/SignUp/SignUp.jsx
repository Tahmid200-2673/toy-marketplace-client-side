
import { useContext, useState } from 'react';
import { Button, Card, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const SignUp = () => {
  const [err, setErr] = useState('');
    const [result, setResult] = useState('');
    const { fnCreateUser } = useContext(AuthContext);
    const fnSignUp = event => {
      
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, photo, email, password)

        if (password.length < 6) {
          setErr(' Add at least 6 characters in your password')
          return;
      }


        fnCreateUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user)
            setErr('');
            event.target.reset();
            setResult('User created successfully');
        })
        .catch(error => console.log(error))
        setErr(err.message);


        

       
    }
    return (
        <Container className="d-flex align-items-center justify-content-center vh-100">
      <Card className="w-75">
        <Card.Body>
          <h3 className="text-center">Register</h3>
          <Form onSubmit={fnSignUp}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name="name" placeholder="Your Name" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Photo URL</Form.Label>
              <Form.Control type="text" name="photo" placeholder="Photo URL" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" name="email" placeholder="Enter email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" name="password" placeholder="Password" required />
            </Form.Group>

            <div className="text-center">
        <Button className="btn btn-dark mx-5" variant="primary" type="submit" style={{ width: "19rem" }}>
          Register
       </Button>

        <br />
       <Form.Text className="text-secondary">
        Already Have an Account? <Link to="/login">Login</Link>
      </Form.Text>
     </div>
     <Form.Text className="text-success " >
            {result}
            </Form.Text>
            <Form.Text className="text-danger">
            {err}
            </Form.Text>
          </Form>
        </Card.Body>
      </Card>
    </Container>
    );
};

export default SignUp;