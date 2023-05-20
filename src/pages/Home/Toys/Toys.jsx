

// import React, { useContext, useEffect, useState } from 'react';
// import { AuthContext } from '../../../Providers/AuthProvider';
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';
//  import './Toys.css'
// import { Link } from 'react-router-dom';

// const Toys = () => {
//   const { user } = useContext(AuthContext);
//   const [toys, setToys] = useState([]);
//   // const [activeCategory, setActiveCategory] = useState('Marvel');

//   const url = `http://localhost:5000/toys?email=${user?.email}`;
//   useEffect(() => {
//     fetch(url)
//       .then(res => res.json())
//       .then(data => setToys(data))
//       .catch(error => console.error('Error fetching toys:', error));
//   }, [url]);

//   const { _id } = toys;
//   const subCategories = ['Marvel', 'Star Wars', 'Transformers'];

//   // const handleTabClick = (category) => {
//   //   setActiveCategory(category);
//   // };

//   return (
//    <div className='mt-5 text center'>
//     <h1 className='collection-title text center'>Our Collections</h1>
//      <div className="toys-container">
      
//       <Tabs className="tabs-container">
//         <TabList className="tabs-list">
//           {subCategories.map(category => (
//             <Tab key={category}>{category}</Tab>
//           ))}
//         </TabList>

//         {subCategories.map(category => (
//           <TabPanel key={category}>
//             <div className="cards-container">
//               {toys
//                 .filter(toy => toy.subcategory === category)
//                 .map(toy => (
//                   <div className="card" key={toy.id} id="tabs-cards">
//                     <img src={toy.pictureUrl} alt={toy.name} className="card-image" />
//                     <div className="card-body">
//                       <h5 className="card-title">{toy.name}</h5>
//                       <p className="card-text">Price: ${toy.price}</p>
//                       <p className="card-text">Rating: {toy.rating}</p>
//                   <Link to={`/toys/${toy._id}`}>    <button className="view-details-btn">View Details</button></Link>
//                     </div>
//                   </div>
//                 ))}
//             </div>
//           </TabPanel>
//         ))}
//       </Tabs>
//     </div>
//    </div>
//   );
// };

// export default Toys;
                                   


import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './Toys.css';
import { Link } from 'react-router-dom';
import './Toys.css';

const Toys = () => {
  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState([]);
  const subCategories = ['Marvel', 'Star Wars', 'Transformers'];

  useEffect(() => {
    if (user) {
       const url = `http://localhost:5000/toys?email=${user.email}`;
     
      fetch(url)
        .then(res => res.json())
        .then(data => setToys(data))
        .catch(error => console.error('Error fetching toys:', error));
    }
    
  }, [user]);

  return (
    <div className='mt-5 text-center'>
      <h1 className='collection-title text-center'>Our Collections</h1>
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
                        <p className="card-text rating1">Rating: {toy.rating}</p>
                       </div>
                        <Link to={`/toys/${toy._id}`}>
                          <button className="view-details-btn">View Details</button>
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
