import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [toys, setToys] = useState([]);

     const url = `http://localhost:5000/toys?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setToys(data))
    }, [url]);
   

    return (
        <div className='mt-5'>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Available Quantity</th>
                        <th>Detail Description</th>
                        <th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {toys.map(toy => (
                        <tr key={toy.id}>
                            <td>{toy.name}</td>
                            <td>{toy.price}</td>
                            <td >    &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; {toy.quantity}</td>
                            <td>&nbsp;&nbsp;&nbsp;{toy.description}</td>
                            <td>
                                <button className='btn btn-primary mx-1' >Update</button>
                                <button className='btn btn-danger' >Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MyToys;