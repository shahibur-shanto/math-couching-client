import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import './Products.css';
const Products = () => {
    const [imageURL, setImageURL] = useState(null);
  const { register,handleSubmit } = useForm();
  const onSubmit = (data) => {
      console.log(data);
    const eventData = {
        name:data.name,
        price:data.price,
        imageURL:imageURL
    }
    const url =`https://enigmatic-badlands-35643.herokuapp.com/addEvent`;
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

  const handleImageUpload = (event) => {
    const imageData = new FormData();
    imageData.set("key", "97d788f705b0fef3a249bd0e2c8db6bf");
    imageData.append("image", event.target.files[0]);
    
    axios.post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        setImageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="form-div">
    <h1>Add Product</h1>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <label className="label">Product Name</label>
        <input className="form-control" name="name" defaultValue="Computer" ref={register}/>
        <br/>
        <label className="label">Price</label>
        <input className="form-control" name= "price" defaultValue="50000" ref={register}/>
        <br/>
        <label className="label">Add Photo</label>
        <input className="form-control" name="image" type="file" onChange={handleImageUpload} />
        <br/>
        <input type="submit" />
      </form>
    </div>
  );
};

export default Products;
