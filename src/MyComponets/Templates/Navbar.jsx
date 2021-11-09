import React, {useContext} from 'react';
import { useHistory } from "react-router-dom";
import '../Css/Navbar.css';
import '../Css/Main_bootstrap.css'; 
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'; 
import Registrationform from './Registration-form';
import Loginform from './Login-form';
import  {NumberContext}  from './context';

export default function Navbar(){
  const history = useHistory();
  const {state, dispatch} = React.useContext(NumberContext);

function Logout(){
  localStorage.clear();
  history.push("/");
  window.location.reload(false);
}

const Render = () => {
  const {state, dispatch} = React.useContext(NumberContext);
  
  const tokenemailstudentuser = localStorage.getItem('tokenemailstudentuser');
  const tokenemailadminuser = localStorage.getItem('tokenemailadminuser');
  
    if(tokenemailstudentuser)
    {
      return(
        <>
      <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
   <div class="container-fluid py-sm-3 px-sm-2 ">
        <Link class="navbar-brand" to="#">E Learning</Link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
      </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
         <ul class="navbar-nav me-auto mb-2 mb-md-0">
            <li class="nav-item">
               <Link class="nav-link" to="/">
               <i class="fas fa-home px-1" ></i>
               Home
               </Link>
            </li>
            <li class="nav-item">
               <Link class="nav-link" to="/courses">
               <i class="fas fa-book-open px-1"></i>
               MyCourses
               </Link>
            </li>
            <li class="nav-item">
               <Link class="nav-link" to="contact">
               <i class="fas fa-address-card px-1"></i>
               ContactUs
               </Link>
            </li>
            <li class="nav-item">
               <Link class="nav-link" to="feedback">
               <i class="fas fa-comments px-1"></i>
               Feedback
               </Link>
            </li>
            <li class="nav-item">
            <Link class="nav-link" to="profile">
            <i class="fas fa-user-circle px-1"></i>
            Profile
            </Link>
            </li>
         </ul>
          <form class="d-flex">
            <button class="btn btn-danger mx-2 " type="button" onClick=
            {Logout}>Logout</button>
         </form>
      </div>
       </div>
</nav>
<div class="log_main"></div>
      </>
      );
    }
  else if(tokenemailadminuser)
    {
      return(
        <>
      <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
   <div class="container-fluid py-sm-3 px-sm-2 ">
        <Link class="navbar-brand" to="#">E Learning</Link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
      </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
         <ul class="navbar-nav me-auto mb-2 mb-md-0">
            <li class="nav-item">
               <Link class="nav-link" to="/">
               <i class="fas fa-home px-1" ></i>
               Home
               </Link>
            </li>
            <li class="nav-item">
               <Link class="nav-link" to="/courses">
               <i class="fas fa-book-open px-1"></i>
               Courses
               </Link>
            </li>
            <li class="nav-item">
               <Link class="nav-link" to="/studentinfo">
               <i class="fas fa-info-circle px-1"></i>
               Student Info
               </Link>
            </li>
            <li class="nav-item">
            <Link class="nav-link" to="profile">
            <i class="fas fa-key px-1"></i>
            Change Password
            </Link>
            </li>
         </ul>
          <form class="d-flex">
            <button class="btn btn-danger mx-2 " type="button" onClick=
            {Logout}>Logout</button>
         </form>
      </div>
       </div>
</nav>
<div class="log_main"></div>
      </>
      );
    }
    
    else{
      return(
        <>
      <nav class="navbar navbar-expand-md navbar-dark fixed-top">
   <div class="container-fluid py-sm-3 px-sm-2 ">
        <Link class="navbar-brand" to="#">E Learning</Link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
      </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
         <ul class="navbar-nav me-auto mb-2 mb-md-0">
            <li class="nav-item">
               <Link class="nav-link" to="/">
               <i class="fas fa-home px-1" ></i>
               Home
               </Link>
            </li>
            <li class="nav-item">
               <Link class="nav-link" to="courses">
               <i class="fas fa-book-open px-1"></i>
               Courses
               </Link>
            </li>
            <li class="nav-item">
               <Link class="nav-link" to="contact">
               <i class="fas fa-address-card px-1"></i>
               ContactUs
               </Link>
            </li>
            <li class="nav-item">
               <Link class="nav-link" to="about">
               <i class="fab fa-buysellads px-1"></i>
               AboutUs
               </Link>
            </li>
            <li class="nav-item">
               <Link class="nav-link" to="feedback">
               <i class="fas fa-comments px-1"></i>
               Feedback
               </Link>
            </li>
         </ul>
      <form>
       <button class="btn btn-primary mx-2 " type="button" data-bs-toggle="modal" data-bs-target="#exampleModal1">Signup</button>
       <button class="btn btn-success mx-2 " type="button" data-bs-toggle="modal" data-bs-target="#exampleModal2">Login</button>
      </form>
      </div>
       </div>
</nav>
      </>
      );
    }
}

  return(
    <div>
 <Render/>
<NumberContext.Provider value={{state, dispatch}}>
    <Registrationform/>
    <Loginform/>
</NumberContext.Provider>
</div>
    );
}