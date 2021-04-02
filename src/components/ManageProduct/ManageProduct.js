import React, { useEffect, useState } from 'react';

const ManageProduct = () => {
    const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(`https://enigmatic-badlands-35643.herokuapp.com/products`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, [products]);

  const handleDelete = (id)=>{
    fetch(`https://enigmatic-badlands-35643.herokuapp.com/delete/${id}`,{
        method:'DELETE'})
        .then(res=>res.json())
        .then((result)=>{
            console.log("sucess");
        })
  }
    return (
        
        <div className="row">
            <div className="col-md-4">
                <h1>Product Name</h1>
            </div>
            <div className="col-md-4">
                <h1>Price</h1>
            </div>
            <div className="col-md-4">
                <h1>Action</h1>
            </div>

            {
                products.map(product=>{
                   return(
                    <>
                    <div className="col-md-4">
                <h1>{product.name}</h1>
            </div>
            <div className="col-md-4">
                <h1>{product.price}</h1>
            </div>
            <div className="col-md-4">
                <h1>
                    <button className="btn btn-success">Edit</button>
                    <button className="btn btn-danger" onClick={()=>handleDelete(product._id)}>Delete</button>
                </h1>
            </div>
            </>
                )})
                }
            
        </div>
    );
};

export default ManageProduct;