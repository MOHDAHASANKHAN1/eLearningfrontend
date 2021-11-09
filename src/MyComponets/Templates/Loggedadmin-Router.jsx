import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'; 
import Navbar from './Navbar';
import Footer from './Footer';
import Studentinfo from './Studentinfo';
import  AdminshowCourses from './AdminshowCourses';
import Profile from './Profile';
import WatchCourses from './WatchCourses';
import Adminhome from './Adminhome';
import Welcome from './Welcome';

export default function Loggedadmin_Router() {
     return(
         <>
         <Router>
         <Navbar />
         <Welcome/>
         <Route exact path="/" component={Adminhome} />
         <Route exact path="/studentinfo" component={Studentinfo} />
         <Route exact path="/courses" component={AdminshowCourses} />
         <Route exact path="/watchcourses" component={WatchCourses} />
         <Route exact path="/profile" component={Profile} />
         <Route exact path="/profile" component={Adminhome} />
         <Footer/>
         </Router>
         </>
         );
   }
   