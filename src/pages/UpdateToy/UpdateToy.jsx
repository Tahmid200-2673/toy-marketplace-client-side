// import React, { useContext, useState } from 'react';
// import { Button } from 'react-bootstrap';
// import { Form, useLoaderData } from 'react-router-dom';
// import { AuthContext } from '../../Providers/AuthProvider';

// const UpdateToy = () => {
//      const toy= useLoaderData();
//      const { name, pictureUrl, sellerName, email,subcategory, price, rating, quantity, description } = toy;


//     const { user } = useContext(AuthContext);

    
//     return (
//        <div>{name}</div>
      
//     );
// };

// export default UpdateToy;


import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const UpdateToy = () => {
   const toy = useLoaderData();
  const { name, pictureUrl, sellerName, email, subcategory, price, rating, quantity, description } = toy;
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [updatedPrice, setUpdatedPrice] = useState(price);
  const [updatedQuantity, setUpdatedQuantity] = useState(quantity);
  const [updatedDescription, setUpdatedDescription] = useState(description);

 


  const handleUpdateToy = (e) => {
    e.preventDefault();
  
    const updatedToy = {
      _id: toy._id, // Add the _id to the toy object
      pictureUrl: toy.pictureUrl,
      name: toy.name,
      sellerName: user?.displayName,
      email: user?.email,
      subcategory: toy.subcategory,
      price: updatedPrice,
      rating: toy.rating,
      quantity: updatedQuantity,
      description: updatedDescription,
    };
  
    fetch(`https://b7a11-toy-marketplace-server-side-one.vercel.app/toys/${toy._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedToy),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          alert('Toy updated successfully');
          navigate('/mytoys');
        }
      })
      .catch((error) => {
        console.log('Error updating toy:', error);
      });
  };


  return (
    <Form onSubmit={handleUpdateToy}>
      <Form.Group className="mb-3" controlId="pictureUrl">
        <Form.Label>Picture URL of the toy</Form.Label>
        <Form.Control type="text" value={pictureUrl} readOnly />
      </Form.Group>

      <Form.Group className="mb-3" controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" value={name} readOnly />
      </Form.Group>

      <Form.Group className="mb-3" controlId="sellername">
        <Form.Label>Seller Name</Form.Label>
        <Form.Control type="text" value={user?.displayName} readOnly />
      </Form.Group>

      <Form.Group className="mb-3" controlId="selleremail">
        <Form.Label>Seller Email</Form.Label>
        <Form.Control type="text" value={user?.email} readOnly />
      </Form.Group>

      <Form.Group className="mb-3" controlId="subcategory">
        <Form.Label>Sub-category</Form.Label>
        <Form.Control as="select" value={subcategory} readOnly>
          <option value="">Select a sub-category</option>
          <option value="Marvel">Marvel</option>
          <option value="Star Wars">Star Wars</option>
          <option value="Transformers">Transformers</option>
        </Form.Control>
      </Form.Group>

      <Form.Group className="mb-3" controlId="price">
        <Form.Label>Price</Form.Label>
        <Form.Control type="number" value={updatedPrice} onChange={(e) => setUpdatedPrice(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="quantity">
        <Form.Label>Available Quantity</Form.Label>
        <Form.Control type="number" value={updatedQuantity} onChange={(e) => setUpdatedQuantity(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="description">
        <Form.Label>Detail Description</Form.Label>
        <Form.Control as="textarea" rows={3} value={updatedDescription} onChange={(e) => setUpdatedDescription(e.target.value)} />
      </Form.Group>

      <Button variant="primary" type="submit">
        Update
      </Button>
    </Form>
  );
};

export default UpdateToy;
