import React, {useEffect, useState} from 'react';
import Allcourses from './All-courses';
import '../Css/Populer-courses.css';
import '../Css/Main_bootstrap.css';
import axios from 'axios';
import Registrationform from './Registration-form';
import Loginform from './Login-form';

export default function Populer_courses(){
/*const [data, setData] = useState([]);*/
const data = JSON.parse(localStorage.getItem('pcdata'));
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = dd + '/' + mm + '/' + yyyy;

function getdata(){
  axios
    .get('https://elearning786.herokuapp.com/courses/populer')
    .then( (deta) => {
      /*setData(deta.data);*/
      localStorage.removeItem('pcdata');
      localStorage.setItem('pcdata', JSON.stringify(deta.data));
    })
};

useEffect(() => {
    getdata();
  });
  
const userinfo = JSON.parse(localStorage.getItem('userinfo'));
  
 
function En(e, cid, cname, owner, description, oprice, cprice, image, duration, instructor, writer, linkforlectures, linkfornotes, linkforbooks, date){
  e.preventDefault(false);
  const qdata = {cid: cid, cname: cname, uid: userinfo._id, owner: owner, description: description, oprice: oprice, cprice: cprice, image: image, duration: duration, instructor: instructor, writer: writer, linkforlectures: linkforlectures, linkfornotes: linkfornotes, linkforbooks: linkforbooks, date: date, email: userinfo.email, mobilenumber: userinfo.mobilenumber, odate: today}
  axios
     .post('https://elearning786.herokuapp.com/enroll', qdata)
     .then((res) =>
     {
       if ( res.data.message == "This Course Successfully Added In Your Dashboard") {
       localStorage.removeItem('usercourses');
       localStorage.setItem('usercourses', JSON.stringify(res.data.user.courses));
       alert(res.data.message);
       } else if ( res.data.message == "This Course Is Already Exist In Your Dashboard") {
         alert(res.data.message);
       }
     });
     
}

const tokenemailstudentuser = localStorage.getItem('tokenemailstudentuser');

  if (tokenemailstudentuser) {
      if (data) {
        return(
        <>
        <div className="Courses">
            <div className="row g-0 justify-content-around">
            
               <div className="col-sm-12">
                  
                  <div className="row  g-0 m-0 pt-2">
                     <div className="col-sm-12 d-flex justify-content-center bg-warning">
                        <div className="populer-div">
                           <h1 className="head">
                              <b>POPULER COURSES</b>
                           </h1>
                        </div>
                     </div>
                  </div>
                
                  <div className="row g-0 m-0 p-0 justify-content-around">
                     
            {
              data.map((data) => 
              <div className="col-sm-5 col-xl-3 col-lg-4 col-md-4 d-flex pt-4 justify-content-center">
                        <div>
                           <div className=" courses-card">
                              <div className="card carded bg-dark">
                                 <img src={data.image} className="card-img-top" alt="..."/>
                                 <div className="card-body">
                                    <h5 className="card-title">{data.tittle}</h5>
                                    <p className="card-text">{data.description}</p>
                                 </div>
                                 <form method="post" className="px-2 pb-3">
                      
                      <div class="row g-0 bg-light p-2">
                       <div class="col-sm-2 col-2 d-flex justify-content-center">
                       <h3><i class="fas fa-rupee-sign text-black"></i></h3>
                        </div>
                      <div class="col-sm-4 col-4 d-flex justify-content-start">
                       <h3  class=" text-black">
                       <s  class=" text-black">
                        <b>{data.cprice}</b></s></h3>
                        </div>
                      <div class="col-sm-3 col-3 d-flex justify-content-start">
                       <h4 class=" text-black"><b>{data.oprice}</b></h4>
                        </div>
                        
                       <div class="col-sm-3 col-3 d-flex justify-content-end">
                      <button className="btn btn-primary" onClick={(e) =>{
                         En(e, data._id, data.tittle, data.owner, data.description, data.oprice, data.cprice, data.image, data.duration, data.instructor, data.writer, data.linkforlectures, data.linkfornotes, data.linkforbooks, data.date);
                      }}>Enroll</button>
                        </div>
                      </div>
                                 </form>
                              </div>
                           </div>
                        </div>
                     </div>
                     
              )
            }
                     
                  </div>
                  
                  <div className="row g-0 m-0 pt-2">
                     <div className="col-sm-12 d-flex justify-content-center bg-warning">
                        <div className="populer-div">
                       
    <h1 className="head1 text-black"><b>ALL COURSES</b></h1>
                        </div>
                     </div>
                  </div>
                  
<div>
  <div>
    <Allcourses/>
  </div>
</div>
               </div>
          
            </div>
      
         </div>
        </>
      );
    
      } else {
        return(
          <>
        <div className="Courses">
            <div className="row g-0 justify-content-around">
            
               <div className="col-sm-12">
                  
                  <div className="row  g-0 m-0 pt-2">
                     <div className="col-sm-12 d-flex justify-content-center bg-warning">
                        <div className="populer-div">
                           <h1 className="head">
                              <b>POPULER COURSES</b>
                           </h1>
                        </div>
                     </div>
                  </div>
                
                  <div class="row gy-3 gx-0  py-3 justify-content-around bg-light px-3">
        <div class="col-sm-3 bg-success d-flex justify-content-center p-5">
          <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
          </div>
        </div>
        <div class="col-sm-3 bg-warning d-flex justify-content-center p-5">
          <div class="spinner-border text-danger" role="status">
          <span class="visually-hidden">Loading...</span>
          </div>
        </div>
        <div class="col-sm-3 bg-primary d-flex justify-content-center p-5">
          <div class="spinner-border text-black" role="status">
          <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
        
                  
                  <div className="row g-0 m-0 pt-2">
                     <div className="col-sm-12 d-flex justify-content-center bg-warning">
                        <div className="populer-div">
                       
    <h1 className="head1 text-black"><b>ALL COURSES</b></h1>
                        </div>
                     </div>
                  </div>
                  
<div>
  <div>
    <Allcourses/>
  </div>
</div>
               </div>
          
            </div>
      
         </div>
          </>
          );
      }
  }else{
    if(data){
    return(
        <>
        <div className="Courses">
            <div className="row g-0 justify-content-around">
            
               <div className="col-sm-12">
                  
                  <div className="row  g-0 m-0 pt-2">
                     <div className="col-sm-12 d-flex justify-content-center bg-warning">
                        <div className="populer-div">
                           <h1 className="head">
                              <b>POPULER COURSES</b>
                           </h1>
                        </div>
                     </div>
                  </div>
                
                  <div className="row g-0 m-0 p-0 justify-content-around">
                     
            {
              data.map((data) => 
              <div className="col-sm-5 col-xl-3 col-lg-4 col-md-4 d-flex pt-4 justify-content-center">
                        <div>
                           <div className=" courses-card">
                              <div className="card carded bg-dark">
                                 <img src={data.image} className="card-img-top" alt="..."/>
                                 <div className="card-body">
                                    <h5 className="card-title">{data.tittle}</h5>
                                    <p className="card-text">{data.description}</p>
                                 </div>
                                 <form method="post" className="px-2 pb-3">
                      
                      <div class="row g-0 bg-light p-2">
                       <div class="col-sm-2 col-2 d-flex justify-content-center">
                       <h3><i class="fas fa-rupee-sign text-black"></i></h3>
                        </div>
                      <div class="col-sm-4 col-4 d-flex justify-content-start">
                       <h3  class=" text-black">
                       <s  class=" text-black">
                        <b>{data.cprice}</b></s></h3>
                        </div>
                      <div class="col-sm-3 col-3 d-flex justify-content-start">
                       <h4 class=" text-black"><b>{data.oprice}</b></h4>
                        </div>
                        
                       <div class="col-sm-3 col-3 d-flex justify-content-end">
  <button class="btn btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal1">
    Enroll
  </button>
                        </div>
                      </div>
                                 </form>
                              </div>
                           </div>
                        </div>
                     </div>
                     
              )
            }
                     
                  </div>
                  
                  <div className="row g-0 m-0 pt-2">
                     <div className="col-sm-12 d-flex justify-content-center">
                        <div className="populer-div">
<button class="btn btn-info" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
    <h1 className="head1 text-black"><b>VIEW All COURSES</b></h1>
  </button>
                        </div>
                     </div>
                  </div>
                  
<div>
  <div class="collapse" id="collapseExample">
    <Allcourses/>
  </div>
</div>
               </div>
          
            </div>
      
         </div>
         <Registrationform/>
    <Loginform/>
        </>
      );
  }else{
    return(
      <>
      <div className="Courses">
            <div className="row g-0 justify-content-around">
            
               <div className="col-sm-12">
                  
                  <div className="row  g-0 m-0 pt-2">
                     <div className="col-sm-12 d-flex justify-content-center bg-warning">
                        <div className="populer-div">
                           <h1 className="head">
                              <b>POPULER COURSES</b>
                           </h1>
                        </div>
                     </div>
                  </div>
                
        <div class="row gy-3 gx-0  py-3 justify-content-around bg-light px-3">
        <div class="col-sm-3 bg-success d-flex justify-content-center p-5">
          <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
          </div>
        </div>
        <div class="col-sm-3 bg-warning d-flex justify-content-center p-5">
          <div class="spinner-border text-danger" role="status">
          <span class="visually-hidden">Loading...</span>
          </div>
        </div>
        <div class="col-sm-3 bg-primary d-flex justify-content-center p-5">
          <div class="spinner-border text-black" role="status">
          <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
                  
                  <div className="row g-0 m-0 pt-2">
                     <div className="col-sm-12 d-flex justify-content-center">
                        <div className="populer-div">
<button class="btn btn-info" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
    <h1 className="head1 text-black"><b>VIEW All COURSES</b></h1>
  </button>
                        </div>
                     </div>
                  </div>
                  
<div>
  <div class="collapse" id="collapseExample">
    <Allcourses/>
  </div>
</div>
               </div>
          
            </div>
      
         </div>
      </>
      );
  }
  }
  
}