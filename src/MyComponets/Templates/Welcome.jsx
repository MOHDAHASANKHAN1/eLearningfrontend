import React, {useEffect, useState} from 'react';
import '../Css/Populer-courses.css';
import '../Css/Main_bootstrap.css';

export default function Welcome(){
  
const userinfo = JSON.parse(localStorage.getItem('userinfo'));

const tokenemailstudentuser = localStorage.getItem('tokenemailstudentuser');
const tokenemailadminuser = localStorage.getItem('tokenemailadminuser');

  if ((tokenemailstudentuser || tokenemailadminuser) && userinfo) {
    return(
        <>
        <div className="Courses">
            <div className="row g-0 justify-content-around">
            
            
               <div className=" bg-danger col-sm-12">
                  
                  <div className="row  g-0 m-0 p-0">
                     <div className="col-sm-12 d-flex justify-content-center">
                        <div className="populer-div">
                           <h1 className="head">
                              <b>Welcome {userinfo.firstname + " " + userinfo.lastname}</b>
                           </h1>
                        </div>
                     </div>
                  </div>
                </div>
              </div>
            </div>
          </>
      );
  }else{
    return(
        <>
        </>
      );
  }
}