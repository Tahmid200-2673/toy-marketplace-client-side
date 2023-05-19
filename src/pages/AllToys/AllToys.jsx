import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';



const AllToys = () => {

    const { user } = useContext(AuthContext);
    const [toys, setToys] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredToys, setFilteredToys] = useState([]);

     const url = `http://localhost:5000/toys`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setToys(data))
    }, [url]);
    useEffect(() => {
        const filtered = toys.filter(toy => toy.name.toLowerCase().includes(searchTerm.toLowerCase()));
        setFilteredToys(filtered);
    }, [toys, searchTerm]);

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };
    return (
        <div>
           
           <h2>All Toys</h2>
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search by toy name"
                    value={searchTerm}
                    onChange={handleSearch}
                    className="form-control"
                />
            </div>
            <table className="table table-striped mt-3">
                <thead>
                    <tr>
                        <th>Seller</th>
                        <th>Toy Name</th>
                        <th>Sub-category</th>
                        <th>Price</th>
                        <th>Available Quantity</th>
                        <th>View Details</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredToys.slice(0, 20).map(toy => (
                        <tr key={toy.id}>
                            <td>{toy.seller || 'N/A'}</td>
                            <td>{toy.name}</td>
                            <td>{toy.subcategory}</td>
                            <td>${toy.price}</td>
                            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{toy.quantity}</td>
                            <td>
                                <button className="btn btn-primary view-details-btn">View Details</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AllToys;