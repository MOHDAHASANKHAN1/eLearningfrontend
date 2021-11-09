import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'; 
import Navbar from './Navbar';
import Videobanner from './Video-banner';
import Textbanner1 from './Textbanner1';
import Textbanner2 from './Textbanner2';
import Populercourses from './Populer-courses';
import Contact from './Contactus';
import Footer from './Footer';
import About from './Aboutus';
import Whatweoffer from './What-we-offer';
import Logged_Router from './Logged-Router';
import Loggedadmin_Router from './Loggedadmin-Router';
import Viewson from './Views-on';
import  {NumberContext}  from './context';
import {reducer, initialState} from '../Reducer/useReducer';

export default function Routing() {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const tokenemailstudentuser = localStorage.getItem('tokenemailstudentuser');
  const tokenemailadminuser = localStorage.getItem('tokenemailadminuser');
  
   if(tokenemailstudentuser)
   {
     return(
         <>
         <Logged_Router/>
         </>
         );
   }
  else if(tokenemailadminuser)
   {
     return(
         <>
         <Loggedadmin_Router/>
         </>
         );
   }
   else{
     return(
<Router>
      <NumberContext.Provider value={{state, dispatch}}>
      <Navbar />
      </NumberContext.Provider>
      <Videobanner />
      <Textbanner1 />
      <Route exact path="/courses" component={Populercourses} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/contact" component={Textbanner2} />
      <Route exact path="/about" component={About} />
      <Route exact path="/about" component={Viewson} />
      <Whatweoffer />
     <Route exact path="/" component={About} />
     <Route exact path="/contact" component={About} />
     <Route exact path="/courses" component={About} />
      <Footer />
</Router>

     );
   }
}
