

import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { Link } from 'react-router-dom';
import Rating from 'react-rating';
import { FaRegStar, FaStar } from 'react-icons/fa';

const MyToys = () => {
  const myImageStyle = { width: '5rem', height: '5rem' };
  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState([]);
  const [sortOrder, setSortOrder] = useState('asc');

  useEffect(() => {
    const url = `https://b7a11-toy-marketplace-server-side-one.vercel.app/toys?email=${user?.email}&sortOrder=${sortOrder}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, [user?.email, sortOrder]);

  const handleAscendingOrder = () => {
    setSortOrder('asc');
  };

  const handleDescendingOrder = () => {
    setSortOrder('desc');
  };

  const Delete = (id) => {
    const confirmation = window.confirm('Are you sure you want to delete?');
    if (confirmation) {
      fetch(`https://b7a11-toy-marketplace-server-side-one.vercel.app/toys/${id}`, {
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert('Delete successful');
            const toyRemains = toys.filter((toy) => toy._id !== id);
            setToys(toyRemains);
          }
        });
    }
  };

  return (
    <div className='mt-5 text-center'>
         
<div className="mb-5 d-flex align-items-center text-center">
  <h3 className="me-3">Based On Price :</h3>
  <button onClick={handleAscendingOrder} className="btn btn-secondary me-3">
    Ascending Order
  </button>
  <button onClick={handleDescendingOrder} className="btn btn-secondary">
    Descending Order
  </button>
</div>
      <table className='table'>
        <thead>
          <tr>
            <th>Image</th>
            <th>Toy Name</th>
            <th>Seller Name</th>
            <th>Seller Email</th>
            <th>Sub-category</th>
            <th>Price</th>
            <th>Rating</th>
            <th>Available Quantity</th>
            <th>Detail Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {toys.map((toy) => (
            <tr key={toy.id}>
              <td>
                <img src={toy.pictureUrl} alt='' style={myImageStyle} />
              </td>
              <td>&nbsp;{toy.name}</td>
              <td>&nbsp;&nbsp;&nbsp;{toy.sellerName || 'N/A'}</td>
              <td>{toy.email}</td>
              <td>&nbsp;&nbsp;&nbsp;{toy.subcategory}</td>
              <td>&nbsp;&nbsp;&nbsp;{toy.price}</td>
               <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{toy.rating}</td> 
              <td>&nbsp;&nbsp;&nbsp;&nbsp;{toy.quantity}</td>
              <td>&nbsp;&nbsp;&nbsp;{toy.description}</td>
              <td>
                <Link to={`/updatetoy/${toy._id}`}>
                  <button className='btn btn-primary mx-1'>Update</button>
                </Link>
                <button onClick={() => Delete(toy._id)} className='btn btn-danger'>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyToys;
