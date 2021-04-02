import React from 'react';
import { useHistory } from 'react-router';
import './AllProducts.css';

const AllProducts = (props) => {
    const {name,imageURL,price,_id} = props.product;
    let history = useHistory();
    const handleBook = (id)=>{
        history.push(`/book/${id}`);
    }
    return (
        <div className="col-md-3">
            <div className="cart">
            <div className="image-div"><img className="image" src={imageURL} alt=""/></div>
            <h4>{name}</h4>
            <span className="price">${price}</span>
            <button className="btn btn-primary" onClick={()=>handleBook(_id)}>Buy Now</button>
            </div>
        </div>
    );
};

export default AllProducts;