import React, { useContext } from 'react';
import firebaseConfig from '../../firebase.config';
// const firebase = require("firebase/app");
// require("firebase/auth");
import firebase from "firebase/app";
import "firebase/auth";
import { useHistory, useLocation } from 'react-router';
import { UserContext } from '../../App';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}


const Login = () => {
  const [loggedInUser,setLoggedInUser] = useContext(UserContext)
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };
  const googleSignIn = ()=>{
    
  firebase.auth()
  .signInWithPopup(googleProvider)
  .then((result) => {
    const  {displayName,email} = result.user;
    const signInUser = {name:displayName,email}
    console.log(signInUser)
    setLoggedInUser(signInUser);
    history.replace(from);
  })
  .catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
  }

  return (
    <div>
      <h1>This is login page</h1>
      <button onClick={googleSignIn} className="btn btn-primary">Sign in with Google</button>
    </div>
  );
};

export default Login;