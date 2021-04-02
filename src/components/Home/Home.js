import React, { useEffect, useState } from "react";
import AllProducts from "../AllProducts/AllProducts";
import "./Home.css";

const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(`https://enigmatic-badlands-35643.herokuapp.com/products`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, [products]);

  return (
    <div className="container-fluid">
      <div className="row">
        {products.map((product) => (
          <AllProducts product={product} key={product._id}></AllProducts>
        ))}
      </div>
    </div>
  );
};

export default Home;
