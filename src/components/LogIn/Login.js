import React, { useContext, useState } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebaseConfig';
import { userContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';


const Login = () => {


     const [loggedInuser, setLoggedInUser] =useContext(userContext);
     const [newUser,setNewuser] =useState(false);
     const [user,setUser] =useState({
       isSignedIn:false,
       name:'',
       email:'',
       password:'',
       photo:''
     });

   const history= useHistory();
   const location = useLocation();
 const { from } = location.state || { from: { pathname: "/" } };
    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }

   const handleGoogleSignIn=()=>{
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
    .then(res=> {
        console.log(res);
        const {displayName,photoURL, email} =res.user;
        const signInUser= {
            isSignedIn:true,
             name: displayName,
             email:email,
             photo:photoURL
            }
            setLoggedInUser(signInUser);
      history.replace(from);
      
    }).catch((error)=> {
        console.log(error)
    });
   }

   const faceBookSignIn =()=>{
    const provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider)
    .then(res=> {
        const {displayName,photoURL, email} =res.user;
        const signInUser= {
            isSignedIn:true,
             name: displayName,
             email:email,
             password:'',
             photo:photoURL
            }
            setLoggedInUser(signInUser);
            setUser(signInUser)
            history.replace(from);
      
    }).catch((error)=> {
        console.log(error)
    });
   }

   const handleChange=(event)=>{
    let isFormValid=true;
    if(event.target.name === 'email'){
     isFormValid = /\S+@\S+\.\S+/.test(event.target.value);
     
    }
    if(event.target.name === 'password'){
      const isPasswordValid=event.target.value.length > 6;
      const isNumberHas=/\d{1}/.test(event.target.value);
     isFormValid= isPasswordValid && isNumberHas;
      
    }
    if(isFormValid){
   
         const newUserInfo = {...user};
         newUserInfo[event.target.name] =event.target.value;
         setLoggedInUser(newUserInfo);
         setUser(newUserInfo);
        }
        
   }

const handleSubmit=(e)=>{
    if( user.email && user.password){
        firebase.auth().createUserWithEmailAndPassword(user.name, user.email,user.password)
        .then(res=>{
            console.log(res);
        })
        .catch((error)=>{
            const newUserInfo = {...user}
         newUserInfo.error= error.message;
         setUser(newUserInfo);
         
        })
    }
    e.preventDefault();
}
    return (
        <div>
   
         <div style={{textAlign:'center'}}>
          <div style={{ padding:'50px', textAlign:'center'}}>
          <form onSubmit={handleSubmit}>
           <input type="text" onBlur={handleChange} name="name"  placeholder='Your name' required/>
             <br/>
              <input type="text" onBlur={handleChange}  name="email" placeholder="Your Email Address" required />
              <br/>
              <input type="password" onBlur={handleChange} name="password"  placeholder="Your Password"  required/>
              <br/>
              <button type="submit" value="submit" >Sign in</button>
              </form>
          </div>
          
  
            <button onClick={handleGoogleSignIn}>Google Sign in</button>
            <button onClick={faceBookSignIn}>Facebook sign in</button>
            </div>
        </div>
    );
};

export default Login;