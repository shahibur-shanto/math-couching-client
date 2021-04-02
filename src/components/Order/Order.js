import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from "../../App";

const Order = () => {
    const [loggedInUser,setLoggedInUser] = useContext(UserContext);
    const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch(`https://enigmatic-badlands-35643.herokuapp.com/order?email=`+loggedInUser.email)
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
        console.log(data)
      });
  }, [loggedInUser.email]);
    return (
        <div>
            <h1>This is {loggedInUser.name}'s order page</h1>
            <div className="row">
                <div className="col-md-3 col-sm-3">
                    <h3>Description</h3>
                </div>
                <div className="col-md-3 col-sm-3">
                    <h3>Order Date</h3>
                </div>
                <div className="col-md-3 col-sm-3">
                    <h3>Quantity</h3>
                </div>
                <div className="col-md-3 col-sm-3">
                    <h3>price</h3>
                </div>
                
            {
                orders.map(order=>{
                    return(
                        <>
                    <div className="col-md-3 col-sm-3">
                    <h3>{order.name}</h3>
                </div>
                <div className="col-md-3 col-sm-3">
                    <h3>{(new Date(order.date).toDateString('dd/MM/yyyy'))}</h3>
                </div>
                <div className="col-md-3 col-sm-3">
                    <h3>{order.quantity}</h3>
                </div>
                
                <div className="col-md-3 col-sm-3">
                    <h3>{order.price}</h3>
                </div>
                
                </>
                    )
                })
            }
            </div>
            <div className="row">
                <div className="col-md-9 col-sm-9"><h1>Total:</h1></div>
                <div className="col-md-3 col-sm-3"><h3>{orders.reduce((sum,order)=>sum+parseInt(order.price),0)}</h3></div>
            </div>

        </div>
    );
};

export default Order;