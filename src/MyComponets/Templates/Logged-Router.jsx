import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'; 
import Navbar from './Navbar';
import Contact from './Contactus';
import Logcourses from './Log-courses';
import Footer from './Footer';
import Profile from './Profile';
import WatchCourses from './WatchCourses';
import Populercourses from './Populer-courses';
import Welcome from './Welcome';

export default function Logged_Router() {
     return(
         <>
         <Router>
         <Navbar />
         <Welcome/>
         <Route exact path="/Contact" component={Contact} />
         <Route exact path="/profile" component={Profile} />
         <Route exact path="/Contact" component={Populercourses} />
         <Route exact path="/profile" component={Populercourses} />
      <Route exact path="/" component={Populercourses} />
         <Route exact path="/courses" component={Logcourses} />
         <Route exact path="/feedback" component={Populercourses} />
         <Route exact path="/watchcourses" component={WatchCourses} />
         <Footer/>
         </Router>
         </>
         );
   }
   