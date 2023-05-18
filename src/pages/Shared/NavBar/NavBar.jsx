
import { Navbar, Nav, NavDropdown, Image, Container } from 'react-bootstrap';
import toy from '../../../assets/toy.jpg'
const NavBar = () => {
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
            <Nav.Link href="/all-toys">All Toys</Nav.Link>
            <Nav.Link href="/my-toys">My Toys</Nav.Link>
            <Nav.Link href="/add-toy">Add a Toy</Nav.Link>
            <Nav.Link href="/blogs">Blogs</Nav.Link>
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