import React, { useEffect, useState } from "react";
import AllProducts from "../AllProducts/AllProducts";
import Loading from "../Loading/Loadering";
import "./Home.css";

const Home = () => {

  const [products, setProducts] = useState([]);
  const [isLoading,setIsLoading] = useState(true)
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
        setIsLoading(false)     
      })     
      
  }, []);
  
  
  

 

  return (
    <div className="container-fluid">
       {
         isLoading ? <Loading /> : <div className="row">
        {products.map((product) => (
          <AllProducts product={product} key={product._id}></AllProducts>
        ))}
      </div>
       }
      
    </div>
  );
};

export default Home;
