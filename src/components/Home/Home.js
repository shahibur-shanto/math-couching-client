import React, { useEffect, useState } from "react";
import AllProducts from "../AllProducts/AllProducts";
import "./Home.css";

const Home = () => {

  const [products, setProducts] = useState([]);
  // const toggleSpinner = (show)=>{
  // const spinner = document.getElementById('loading');
    
  //   if(show){
  //     spinner.classList.remove("d-none");  
  //     console.log(spinner.classList);
  //   }
  //   else{
  //     spinner.classList.add("d-none");
  //     console.log(spinner.classList);
  //   }
    
  // }
  useEffect(() => {
    // toggleSpinner(true);
    fetch(`https://enigmatic-badlands-35643.herokuapp.com/products`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);       
      })     
      
  }, []);
  
  
  

 

  return (
    <div className="container-fluid">
      <div id="loading" className="d-flex justify-content-center" >
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
      
      <div className="row">
        {products.map((product) => (
          <AllProducts product={product} key={product._id}></AllProducts>
        ))}
      </div>
    </div>
  );
};

export default Home;
