
// import { Navbar, Nav, NavDropdown, Image, Container, Button } from 'react-bootstrap';
// import toy from '../../../assets/toy.jpg'
// import { useContext } from 'react';
// import { AuthContext } from '../../../Providers/AuthProvider';
// import { Link } from 'react-router-dom';
// import { Tooltip } from 'react-tooltip';
// import 'react-tooltip/dist/react-tooltip.css'
// import ReactRoundedImage from "react-rounded-image"


// const NavBar = () => {
//   const {user, fnLogOut} = useContext(AuthContext);

//   const handleLogOut = () => {
//     fnLogOut()
//     .then(() =>{})
//     .catch( error => console.log(error))
// }
//     return (
//        <Container className='mt-4'>
//          <Navbar bg="light" expand="lg">
//         <Navbar.Brand href="/" className="mx-3">
//           <img src={toy} alt="Website Logo" height="30" className="mr-2" />
//          Toys Paradise
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="mx-auto justify-content-center" >
//             <Nav.Link href="/">Home</Nav.Link>
//             <Nav.Link href="/alltoys">All Toys</Nav.Link>
//              <Nav.Link href="/mytoys">My Toys</Nav.Link> 
//             <Nav.Link href="/addtoy">Add a Toy</Nav.Link>
//             <Nav.Link href="/blogs">Blogs</Nav.Link>
//             {user ? (
              
//   <div className="d-flex align-items-center">
    
//     <a id="my-anchor-element">
    
//     <ReactRoundedImage
 
//   image={user.photoURL}
//   roundedColor="#FFFFFF"
//   imageWidth="50"
//   imageHeight="50"
//   roundedSize="13"
//   hoverColor="#DD1144"
// />
//     </a> 
//   <Tooltip 
//   anchorSelect="#my-anchor-element" 
//   content={user.displayName} 
// />
// <Button onClick={handleLogOut} variant="secondary" className='mx-3'>Logout</Button>
//   </div>
// ) : (
//   <Link to="/login">
//     <Button variant="secondary">Login</Button>
//   </Link>
// )} 
            
//           </Nav>
          
//         </Navbar.Collapse>
//       </Navbar>
//        </Container>
//     );
// };

// export default NavBar;

// import { Navbar, Nav, Button } from 'react-bootstrap';
// import toy from '../../../assets/toy.jpg';
// import { useContext } from 'react';
// import { AuthContext } from '../../../Providers/AuthProvider';
// import { Link } from 'react-router-dom';
// import ReactRoundedImage from 'react-rounded-image';
// import { Tooltip } from 'react-tooltip';
// import 'react-tooltip/dist/react-tooltip.css'

// const NavBar = () => {
//   const { user, fnLogOut } = useContext(AuthContext);

//   const handleLogOut = () => {
//     fnLogOut()
//       .then(() => {})
//       .catch(error => console.log(error));
//   };

//   return (
//     <Navbar bg="light" expand="lg" className="py-3">
//       <Navbar.Brand href="/" className="mx-3">
//         <img src={toy} alt="Website Logo" height="30" className="mr-2" />
//         Toys Paradise
//       </Navbar.Brand>
//       <Navbar.Toggle aria-controls="basic-navbar-nav" />
//       <Navbar.Collapse id="basic-navbar-nav">
//         <Nav className="mx-auto">
//           <Nav.Link href="/">Home</Nav.Link>
//           <Nav.Link href="/alltoys">All Toys</Nav.Link>
//           {user && (
//             <>
//               <Nav.Link href="/mytoys">My Toys</Nav.Link>
//               <Nav.Link href="/addtoy">Add a Toy</Nav.Link>
//             </>
//           )}
//           <Nav.Link href="/blogs">Blogs</Nav.Link>
//         </Nav>
//         <Nav>
//           {user ? (
//             <div className="d-flex align-items-center">
//              <a id="my-anchor-element">
    
//     <ReactRoundedImage
 
//   image={user.photoURL}
//   roundedColor="#FFFFFF"
//   imageWidth="50"
//   imageHeight="50"
//   roundedSize="13"
//   hoverColor="#FFFFFF"
// />
//     </a> 
//   <Tooltip 
//   anchorSelect="#my-anchor-element" 
//   content={user.displayName} 
// />
//               <Button onClick={handleLogOut} variant="outline-dark" className="mx-3">
//                 Logout
//               </Button>
//             </div>
//           ) : (
//             <Link to="/login">
//               <Button variant="outline-dark">Login</Button>
//             </Link>
//           )}
//         </Nav>
//       </Navbar.Collapse>
//     </Navbar>
//   );
// };

// export default NavBar;

// import { Navbar, Nav, Button } from 'react-bootstrap';
// import toy from '../../../assets/toy.jpg';
// import { useContext } from 'react';
// import { AuthContext } from '../../../Providers/AuthProvider';
// import { Link, NavLink, useLocation } from 'react-router-dom';
// import ReactRoundedImage from 'react-rounded-image';
// import { Tooltip } from 'react-tooltip';
// import 'react-tooltip/dist/react-tooltip.css';

// const NavBar = () => {
//   const { user, fnLogOut } = useContext(AuthContext);
//   const location = useLocation();

//   const handleLogOut = () => {
//     fnLogOut()
//       .then(() => {})
//       .catch(error => console.log(error));
//   };

//   return (
//     <Navbar bg="light" expand="lg" className="py-3">
//       <Navbar.Brand as={Link} to="/" className="mx-3">
//         <img src={toy} alt="Website Logo" height="30" className="mr-2" />
//         Toys Paradise
//         {location.pathname !== '/' && <span className="current-route">{location.pathname}</span>}
//       </Navbar.Brand>
//       <Navbar.Toggle aria-controls="basic-navbar-nav" />
//       <Navbar.Collapse id="basic-navbar-nav">
//         <Nav className="mx-auto">
//           <Nav.Link as={NavLink} exact to="/" activeClassName="active">
//             Home
//           </Nav.Link>
//           <Nav.Link as={NavLink} to="/alltoys" activeClassName="active">
//             All Toys
//           </Nav.Link>
//           {user && (
//             <>
//               <Nav.Link as={NavLink} to="/mytoys" activeClassName="active">
//                 My Toys
//               </Nav.Link>
//               <Nav.Link as={NavLink} to="/addtoy" activeClassName="active">
//                 Add a Toy
//               </Nav.Link>
//             </>
//           )}
//           <Nav.Link as={NavLink} to="/blogs" activeClassName="active">
//             Blogs
//           </Nav.Link>
//         </Nav>
//         <Nav>
//           {user ? (
//             <div className="d-flex align-items-center">
//               <a id="my-anchor-element">
//                 <ReactRoundedImage
//                   image={user.photoURL}
//                   roundedColor="#FFFFFF"
//                   imageWidth="50"
//                   imageHeight="50"
//                   roundedSize="13"
//                   hoverColor="#FFFFFF"
//                 />
//               </a>
//               <Tooltip anchorSelect="#my-anchor-element" content={user.displayName} />
//               <Button onClick={handleLogOut} variant="outline-dark" className="mx-3">
//                 Logout
//               </Button>
//             </div>
//           ) : (
//             <Link to="/login">
//               <Button variant="outline-dark">Login</Button>
//             </Link>
//           )}
//         </Nav>
//       </Navbar.Collapse>
//     </Navbar>
//   );
// };

// export default NavBar;

import { Navbar, Nav, Button } from 'react-bootstrap';
import toy from '../../../assets/toy.jpg';
import { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import { Link, NavLink, useLocation } from 'react-router-dom';
import ReactRoundedImage from 'react-rounded-image';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

const NavBar = () => {
  const { user, fnLogOut } = useContext(AuthContext);
  const location = useLocation();

  const handleLogOut = () => {
    fnLogOut()
      .then(() => {})
      .catch(error => console.log(error));
  };

  const getPageTitle = path => {
    let pageTitle = '';

    switch (path) {
      case '/':
        pageTitle = 'Home';
        break;
      case '/alltoys':
        pageTitle = 'All Toys';
        break;
      case '/mytoys':
        pageTitle = 'My Toys';
        break;
      case '/addtoy':
        pageTitle = 'Add a Toy';
        break;
      case '/blogs':
        pageTitle = 'Blogs';
        break;
      default:
        pageTitle = '';
        break;
    }

    return `Toys Paradise | ${pageTitle}`;
  };

  return (
    <Navbar bg="light" expand="lg" className="py-3">
      <Navbar.Brand as={Link} to="/" className="mx-3">
        <img src={toy} alt="Website Logo" height="30" className="mr-2" />
        {getPageTitle(location.pathname)}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          <Nav.Link as={NavLink} exact to="/" activeClassName="active">
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} to="/alltoys" activeClassName="active">
            All Toys
          </Nav.Link>
          {user && (
            <>
              <Nav.Link as={NavLink} to="/mytoys" activeClassName="active">
                My Toys
              </Nav.Link>
              <Nav.Link as={NavLink} to="/addtoy" activeClassName="active">
                Add a Toy
              </Nav.Link>
            </>
          )}
          <Nav.Link as={NavLink} to="/blog" activeClassName="active">
            Blogs
          </Nav.Link>
        </Nav>
        <Nav>
          {user ? (
            <div className="d-flex align-items-center">
              <a id="my-anchor-element">
                <ReactRoundedImage
                  image={user.photoURL}
                  roundedColor="#FFFFFF"
                  imageWidth="50"
                  imageHeight="50"
                  roundedSize="13"
                  hoverColor="#A9A9A9"
                />
              </a>
              <Tooltip anchorSelect="#my-anchor-element" content={user.displayName} />
              <Button onClick={handleLogOut} variant="outline-dark" className="mx-3">
                Logout
              </Button>
            </div>
          ) : (
            <Link to="/login">
              <Button variant="outline-dark">Login</Button>
            </Link>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
