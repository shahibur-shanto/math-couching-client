import React from "react";
import { Link } from "react-router-dom";
import Products from "../Products/Products";
import "./Admin.css";

const Admin = () => {
  return (
    <div className="admin container-fluid">
      <div className="left-sidebar">
      <ul>
            <li>
              <Link to="/manageProduct">Manage Product</Link>
            </li>
            <li>
              <Link to="/admin">Add Product</Link>
            </li>
            <li>
              <Link to="/manageProduct">Add Product</Link>
            </li>
          </ul>
      </div>
      <div className="right-sidebar">
        <Products></Products>
      </div>
    </div>
  );
};

export default Admin;
