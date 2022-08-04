import React, { useState } from "react";
import { Link ,useNavigate,} from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import google from "../../../img/google-1088004_960_720.png";
import left from "../../../img/left.png";
import "../Login/Login.css";

const Register = () => {
  const [loginData, setLoginData] = useState({});

  const { user, registerUser, googleLoginUser, isLoading } = useAuth();
  const navigate = useNavigate();
  const handelOnBlur = (e) => {
    const felid = e.target.name;
    const value = e.target.value;
    const newUser = { ...loginData };
    newUser[felid] = value;
    setLoginData(newUser);
  };
  const handelSubmitBtn = (e) => {
    if (loginData.password !== loginData.password2) {
      alert("your password did not match");
      return;
    }
    registerUser(loginData.email, loginData.password, loginData.name,navigate);
    e.preventDefault();
  };
  return (
    <div>
      <div className="container mt-5 p-5 signInBox">
       <div>
       <Link to="/"><img className="left" src={left} alt=""/></Link>
         <h5>Registered</h5>
         <small>See your growth and get consulting support!</small>
 
         <h5 className="google mt-3" onClick={googleLoginUser}>
           <img src={google} alt="" />
           Sign in With Google
         </h5>
         <p className="text-center">
           <small>Or Sign Up with Email</small>
         </p>
         {user?.email && (
           <div className="alert alert-success" role="alert">
             Account has been created correctly!
           </div>
         )}
         {!isLoading && (
           <form onSubmit={handelSubmitBtn}>
             <div className="mb-3">
               <label htmlFor="exampleInputEmail1" className="form-label">
                 Your Name*
               </label>
               <input
                 type="text"
                 name="name"
                 required
                 placeholder="Your Name"
                 onBlur={handelOnBlur}
                 className="form-control"
                 id="exampleInputEmail1"
               />
             </div>
             <div className="mb-3">
               <label htmlFor="exampleInputEmail1" className="form-label">
                 Email address*
               </label>
               <input
                 type="email"
                 name="email"
                 required
                 placeholder="Email address"
                 onBlur={handelOnBlur}
                 className="form-control"
                 id="exampleInputEmail1"
               />
               <div id="emailHelp" className="form-text">
                 <small>We'll never share your email with anyone else.</small>
               </div>
             </div>
             <label htmlFor="inputPassword5" className="form-label">
               Password*
             </label>
             <input
               type="password"
               name="password"
               required
               onBlur={handelOnBlur}
               id="inputPassword5"
               className="form-control"
               placeholder="Min. 8 character"
             />
             <label htmlFor="inputPassword5" className="form-label mt-2">
               Conform Password*
             </label>
             <input
               type="password"
               name="password2"
               onBlur={handelOnBlur}
               placeholder="Conform Password"
               id="inputPassword5"
               className="form-control"
             />
             <input className="w-100 mt-4 mb-5" type="submit" value="Register" />
           </form>
         )}
         {isLoading && (
           <div className="d-flex align-items-center">
             <strong>Loading...</strong>
             <div
               className="spinner-border ms-auto"
               role="status"
               aria-hidden="true"
             ></div>
           </div>
         )}
         <p>
           Already have an Account?<Link to="/login">Login</Link>
         </p>
       </div>
     </div>
     </div>
  );
};

export default Register;
