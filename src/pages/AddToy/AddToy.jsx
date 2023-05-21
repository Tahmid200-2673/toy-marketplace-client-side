


import  { useContext, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { AuthContext } from '../../Providers/AuthProvider';

const AddToy = () => {
  const { user } = useContext(AuthContext);

  const [pictureUrl, setPictureUrl] = useState('');
  const [name, setName] = useState('');
  const [sellerName, setSellerName] = useState('');
  const [sellerEmail, setSellerEmail] = useState('');
  const [subcategory, setSubcategory] = useState('');
  const [price, setPrice] = useState('');
  const [rating, setRating] = useState('');
  const [quantity, setQuantity] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Handle form submission logic here
    // You can send the form data to an API or perform any other actions

    const form = event.target;
    console.log(form.name);
    const toy = {
      pictureUrl: form.pictureUrl.value,
      name: form.name.value,
      sellerName: user?.displayName,
      email: user?.email,
      subcategory: form.subcategory.value,
      price: form.price.value,
      rating: form.rating.value,
      quantity: form.quantity.value,
      description: form.description.value,
    };

    console.log(toy);

    fetch('https://b7a11-toy-marketplace-server-side-one.vercel.app/toys', {
        method: 'POST', 
        headers: {
            'content-type': 'application/json'
        }, 
        body: JSON.stringify(toy)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if(data.insertedId){
            alert('toy added successfully')
        }
       
    })

    // Reset the form fields
    setPictureUrl('');
    setName('');
    setSellerName('');
    setSellerEmail('');
    setSubcategory('');
    setPrice('');
    setRating('');
    setQuantity('');
    setDescription('');
  };

  const handleInputChange = (event) => {
    const { id, value } = event.target;

    // Update the corresponding state variable based on the input field's id
    switch (id) {
      case 'pictureUrl':
        setPictureUrl(value);
        break;
      case 'name':
        setName(value);
        break;
      case 'sellername':
        setSellerName(value);
        break;
      case 'selleremail':
        setSellerEmail(value);
        break;
      case 'subcategory':
        setSubcategory(value);
        break;
      case 'price':
        setPrice(value);
        break;
      case 'rating':
        setRating(value);
        break;
      case 'quantity':
        setQuantity(value);
        break;
      case 'description':
        setDescription(value);
        break;
      default:
        break;
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="pictureUrl">
        <Form.Label>Picture URL of the toy</Form.Label>
        <Form.Control type="text" value={pictureUrl} onChange={handleInputChange} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" value={name} onChange={handleInputChange} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="sellername">
        <Form.Label>Seller Name</Form.Label>
        <Form.Control type="text" value={user?.displayName} onChange={handleInputChange} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="selleremail">
        <Form.Label>Seller Email</Form.Label>
        <Form.Control type="text" value={user?.email} onChange={handleInputChange} />
      </Form.Group>

      

      <Form.Group className="mb-3" controlId="subcategory">
        <Form.Label>Sub-category</Form.Label>
        <Form.Control as="select" value={subcategory} onChange={handleInputChange}>
          <option value="">Select a sub-category</option>
          <option value="Marvel">Marvel</option>
          <option value="Star Wars">Star Wars</option>
          <option value="Transformers">Transformers</option>
        </Form.Control>
      </Form.Group>

      <Form.Group className="mb-3" controlId="price">
        <Form.Label>Price</Form.Label>
        <Form.Control type="number" value={price} onChange={handleInputChange} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="rating">
        <Form.Label>Rating</Form.Label>
        <Form.Control type="number" value={rating} onChange={handleInputChange} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="quantity">
        <Form.Label>Available Quantity</Form.Label>
        <Form.Control type="number" value={quantity} onChange={handleInputChange} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="description">
        <Form.Label>Detail Description</Form.Label>
        <Form.Control as="textarea" rows={3} value={description} onChange={handleInputChange} />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default AddToy;
