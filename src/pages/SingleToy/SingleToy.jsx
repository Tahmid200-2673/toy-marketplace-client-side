import { useLoaderData } from "react-router-dom";
import './SingleToy.css'
import Rating from "react-rating";
import { FaRegStar, FaStar } from "react-icons/fa";


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
            <h6>Seller: {sellerName || 'N/A'}</h6>
            <h6>Seller Email: {email}</h6>
          </div> 
          
          
          <br />
        
          <Rating
                        placeholderRating={toy.rating}
                        readonly
                        emptySymbol={<FaRegStar></FaRegStar>}
                        placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                        fullSymbol={<FaStar></FaStar>}
                    ></Rating>
           <h6 className="rating">Rating: {rating}</h6>
          <br />
          <h6 className="price">Price: ${price}</h6>
          <h6 className="quantity">Available Quantity: {quantity}</h6>
          <h6 className="descriptionTwo">Description : {description}</h6>
          </div>
        </div>
      </div>
    </div>
        
    );
};

export default SingleToy;