import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Products from './components/Products/Products';
import Header from './components/Header/Header';
import { createContext, useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Login from './components/Login/Login';
import Admin from './components/Admin/Admin';
import ManageProduct from './components/ManageProduct/ManageProduct';
import BookNow from './components/BookNow/BookNow';
import Order from './components/Order/Order';
import SideBar from './components/SideBar/SideBar';

export const UserContext = createContext();


function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <div>
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>

        <Switch>
          <Route exact path="/">
            <Header></Header>
            <Home />
          </Route>
          <Route path="/addEvent">
            <Products></Products>
          </Route>
          <PrivateRoute path="/book/:id">
            <Header></Header>
            <BookNow></BookNow>
          </PrivateRoute>
          
          <Route path="/manageProduct">
            <Header></Header>
            <SideBar></SideBar>
            <ManageProduct></ManageProduct>
          </Route>
          <Route path="/addProduct">
            <Header></Header>
            <SideBar></SideBar>
            <Products></Products>
          </Route>
          <PrivateRoute path="/admin">
            <Header></Header>
            <SideBar></SideBar>
          </PrivateRoute>
          <PrivateRoute path="/order">
          <Header></Header>
          <Order></Order>
          
            
          </PrivateRoute>
          <Route path="/login">
          <Header></Header>
          <Login></Login>
            
          </Route>
          
        </Switch>
      
    </Router>
    </UserContext.Provider>
    </div>
  );
}

export default App;
