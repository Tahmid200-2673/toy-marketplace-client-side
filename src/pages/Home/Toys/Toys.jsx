

  


import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './Toys.css';
import { Link } from 'react-router-dom';
import './Toys.css';
import Rating from 'react-rating';
import { FaRegStar, FaStar } from 'react-icons/fa';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

const Toys = () => {
  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState([]);
  const subCategories = ['Marvel', 'Star Wars', 'Transformers'];

  useEffect(() => {
    
      //  const url = `https://b7a11-toy-marketplace-server-side-one.vercel.app/toys?email=${user.email}`;
      const url = `https://b7a11-toy-marketplace-server-side-one.vercel.app/toys`;
      fetch(url)
        .then(res => res.json())
        .then(data => setToys(data))
        .catch(error => console.error('Error fetching toys:', error));
    
    
  }, []);

  const handleViewDetails = () => {
    if (!user) {
      alert('You have to log in first to view details', {
       
      });
    } 
  };

  return (
    <div className='mt-5 text-center'>
      <h1 className='collection-title text-center'>Shop By Category</h1>
      <div className="toys-container">
        <Tabs className="tabs-container">
          <TabList className="tabs-list">
            {subCategories.map(category => (
              <Tab key={category}>{category}</Tab>
            ))}
          </TabList>

          {subCategories.map(category => (
            <TabPanel key={category}>
              <div className="cards-container">
                {toys
                  .filter(toy => toy.subcategory === category)
                  .map(toy => (
                    <div className="card" key={toy.id} id="tabs-cards">
                      <img src={toy.pictureUrl} alt={toy.name} className="card-image" />
                      <div className="card-body">
                        <h5 className="card-title">{toy.name}</h5>
                       <div className='toy-card'>
                       <p className="card-text price1">Price: ${toy.price}</p>
                       <Rating
                        placeholderRating={toy.rating}
                        readonly
                        emptySymbol={<FaRegStar></FaRegStar>}
                        placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                        fullSymbol={<FaStar></FaStar>}
                    ></Rating>
                        <p className="card-text rating1">Rating: {toy.rating}</p>
                       </div>
                        <Link to={`/toys/${toy._id}`}>
                          <button className="view-details-btn" onClick={handleViewDetails}>View Details</button>
                        </Link>
                      </div>
                    </div>
                  ))}
              </div>
            </TabPanel>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default Toys;
