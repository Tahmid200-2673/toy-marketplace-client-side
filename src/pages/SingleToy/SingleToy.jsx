import { useLoaderData } from "react-router-dom";
import './SingleToy.css'


const SingleToy = () => {
    const myImageStyle = { width: '25rem', height: '50rem' }
    const myStyle = { width: '45rem', height: '50rem' }
    const toy= useLoaderData();
    const { name, pictureUrl, sellerName, email, price, rating, quantity, description } = toy;
    return (
        
    <div className="banner-details mx-5 my-5 rounded text-center" style={{width:"75rem"}}>
      <div className="toy-details ">
        <div className="toy-image ">
          <img src={pictureUrl} alt={name} className="border border-secondary-subtle" style={myImageStyle}/>
        </div>
        <div className="toy-info  bg-dark text-light text-center my-5" style={myStyle}> 
          <div className="toy-info-texts mt-5 position-absolute top-50 start-50">
          <h2 className="toy-name">Toy Name: {name}</h2>
           <div className="seller-info fs-5">
            <p>Seller: {sellerName || 'N/A'}</p>
            <p>Seller Email: {email}</p>
          </div> 
          
          <p className="price">Price: ${price}</p>
          <p className="rating">Rating: {rating}</p>
          <p className="quantity">Available Quantity: {quantity}</p>
          <p className="descriptionTwo">Description : {description}</p>
          </div>
        </div>
      </div>
    </div>
        
    );
};

export default SingleToy;