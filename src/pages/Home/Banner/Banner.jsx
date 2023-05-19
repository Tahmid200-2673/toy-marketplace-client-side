
 import { Container, Button } from 'react-bootstrap';
 import img2 from '../../../assets/banner2.jpeg'; 
 import './Banner.css';

 const Banner = () => {
   return (
     <Container className="banner-container mt-5">
       <div id="toy" >
       <div className="banner-image">
               <img src={img2} className="d-block w-100 rounded" alt="..." />
             </div>
             <div className="description">
               <div className="banner-text">
                 <h1 className="banner-heading">Explore a World of Toys</h1>
                 <p className="banner-subheading">Unleash Imagination and Fun</p>
                 <Button variant="primary" className="banner-button">Shop Now</Button>
               </div>
             </div>
       </div>
     </Container>
   );
 };

 export default Banner;





