import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { UserContext } from "../../App";

const BookNow = () => {
    const [loggedInUser,setLoggedInUser] = useContext(UserContext)
  const [products, setProducts] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://enigmatic-badlands-35643.herokuapp.com/book/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        console.log(data);
      });
  }, [id]);

  const handleConfirm = () => {
    const eventData = {
        name:products[0].name,
        price:products[0].price,
        quantity:1,
        email:loggedInUser.email                
    }
    const url =`https://enigmatic-badlands-35643.herokuapp.com/booking`;
    console.log(eventData);
    fetch(url,{
        method:'POST',
        headers:{
            'content-type':'application/json'
          },
      body:JSON.stringify(eventData)
    })
    .then(res=>console.log('server side response', res))
  };
  return (
    <div>
      <h1>Hello, {loggedInUser.name} please Book Now</h1>
      <div className="row">
        <div className="col-md-4">
          <h3>Description</h3>
        </div>
        <div className="col-md-4">
          <h3>Quantity</h3>
        </div>
        <div className="col-md-4">
          <h3>price</h3>
        </div>
        {products.map((product) => {
            
          return (
            <>
            
              <div className="col-md-4">
                <h3>{product.name}</h3>
              </div>
              <div className="col-md-4">
                <h3>1</h3>
              </div>
              <div className="col-md-4">
                <h3>{product.price}</h3>
              </div>
            
            </>
          );
        })}
      </div>

      <button className="btn btn-success" onClick={handleConfirm}>
        Checkout
      </button>
    </div>
  );
};

export default BookNow;
