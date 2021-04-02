import React from 'react';
import { Link } from 'react-router-dom';

const SideBar = () => {
    return (
        <div>
            <ul>
            <li>
              <Link to="/manageProduct">Manage Product</Link>
            </li>
            <li>
              <Link to="/addProduct">Add Product</Link>
            </li>
            <li>
              <Link to="/admin">Edit Product</Link>
            </li>
          </ul>
        </div>
    );
};

export default SideBar;