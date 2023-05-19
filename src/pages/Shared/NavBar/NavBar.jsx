
import { Navbar, Nav, NavDropdown, Image, Container, Button } from 'react-bootstrap';
import toy from '../../../assets/toy.jpg'
import { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import { Link } from 'react-router-dom';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css'
import ReactRoundedImage from "react-rounded-image"


const NavBar = () => {
  const {user, logOut} = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
    .then(() =>{})
    .catch( error => console.log(error))
}
    return (
       <Container className='mt-4'>
         <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/" className="mx-3">
          <img src={toy} alt="Website Logo" height="30" className="mr-2" />
         Toys Paradise
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto justify-content-center" >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/alltoys">All Toys</Nav.Link>
             <Nav.Link href="/mytoys">My Toys</Nav.Link> 
            <Nav.Link href="/addtoy">Add a Toy</Nav.Link>
            <Nav.Link href="/blogs">Blogs</Nav.Link>
            {user ? (
              
  <div className="d-flex align-items-center">
    
    <a id="my-anchor-element">
    
    <ReactRoundedImage
 
  image={user.photoURL}
  roundedColor="#FFFFFF"
  imageWidth="50"
  imageHeight="50"
  roundedSize="13"
  hoverColor="#DD1144"
/>
    </a> 
  <Tooltip 
  anchorSelect="#my-anchor-element" 
  content={user.displayName} 
/>
<Button onClick={handleLogOut} variant="secondary" className='mx-3'>Logout</Button>
  </div>
) : (
  <Link to="/login">
    <Button variant="secondary">Login</Button>
  </Link>
)} 
            
          </Nav>
          <Nav>
            {/* <NavDropdown
              title={
                <Image
                  src="/profile-picture.jpg"
                  alt="User Profile"
                  roundedCircle
                  width="30"
                  height="30"
                />
              }
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/logout">Logout</NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
       </Container>
    );
};

export default NavBar;