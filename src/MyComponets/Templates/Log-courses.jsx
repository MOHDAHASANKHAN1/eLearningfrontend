import React, {useState, useEffect} from 'react';
import '../Css/Log-courses.css';
import axios from 'axios';
import {Link} from 'react-router-dom';
import $ from 'jquery';

export default function LogCourses() {

const usercourses = JSON.parse(localStorage.getItem('usercourses'));

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = dd + '/' + mm + '/' + yyyy;

const [tittle, setTittle] = useState('');
const [owner, setOwner] = useState('');
const [description, setDescription] = useState('');
const [oprice, setOprice] = useState('');
const [cprice, setCprice] = useState('');
const [image, setImage] = useState('');
const [duration, setDuration] = useState('');
const [instructor, setInstructor] = useState('');
const [writer, setWriter] = useState('');
const [upid, setUpid] = useState('');
/*const [data, setData] = useState([]);*/
const data = JSON.parse(localStorage.getItem('cdata'));
const [linkforlectures, setLinkforlectures] = useState('');
const [linkfornotes, setLinkfornotes] = useState('');
const [linkforbooks, setLinkforbooks] = useState('');
const [date, setDate] = useState(today);

function getdata(){
  axios
    .get('https://elearning786.herokuapp.com/courses')
    .then( (deta) => {
      localStorage.removeItem('cdata');
      localStorage.setItem('cdata', JSON.stringify(deta.data.courses));
    })

};


function Watchset(linkforbooks, linkfornotes, linkforlectures){
  localStorage.removeItem('linkforbooks');
  localStorage.removeItem('linkfornotes');
  localStorage.removeItem('linkforlectures');
  localStorage.removeItem('bcdata');
  localStorage.removeItem('ncdata');
  localStorage.removeItem('lcdata');
  localStorage.setItem('linkforbooks', linkforbooks);
  localStorage.setItem('linkfornotes', linkfornotes);
  localStorage.setItem('linkforlectures', linkforlectures);
}

 useEffect(() => {
   $('textarea').hover(function(){
      $(this).css({"background-color": "red"});
    }, function(){
      $(this).css({"background-color": "white"});
    });
    getdata();

  });

function Delete(id){
  const qdata = {_id: id}
  if (window.confirm("Do You Really Want To Delete This Course")) {
  axios.post('https://elearning786.herokuapp.com/courses/delete', qdata)
     .then(res => alert(res.data))
  }
}

function Updateset(upid, tittle, owner, description, oprice, cprice, duration, instructor, writer, linkforbooks, linkfornotes, linkforlectures, date){
  setTittle(tittle);
  setOwner(owner);
  setDescription(description);
  setOprice(oprice);
  setCprice(cprice);
  setDuration(duration);
  setInstructor(instructor);
  setWriter(writer);
  setUpid(upid);
  setDate(data);
  setLinkforbooks(linkforbooks);
  setLinkfornotes(linkfornotes);
  setLinkforlectures(linkforlectures);
}
function getFile(e){
  setFileData(e.target.files[0]);
};

const [fileData, setFileData] = useState("");

function Update(e){
  e.preventDefault();
  
  const data = new FormData();
    data.append("file", fileData);
    data.append("tittle", tittle);
    data.append("_id", upid);
    data.append("owner", owner);
    data.append("description", description);
    data.append("oprice", oprice);
    data.append("cprice", cprice);
    data.append("duration", duration);
    data.append("instructor", instructor);
    data.append("writer", writer);
    data.append("linkforlectures", linkforlectures);
    data.append("linkfornotes", linkfornotes);
    data.append("linkforbooks", linkforbooks);
    data.append("date", date);
    
  if (window.confirm("Do You Really Want To Update This Course")) {
  axios.post('https://elearning786.herokuapp.com/courses/update', data)
       .then(res => alert(res.data))
    
  }
}

  const tokenemailadminuser = localStorage.getItem('tokenemailadminuser');
   

function Render(){
  if (tokenemailadminuser) {
    if (data) {
      return(
      <>
      <div class="container all-available">
      <div class="row py-3 g-0">
        <div class="col-sm-12 d-flex justify-content-center r-log-b-h1 p-3">
          <h2 class="text-white"><b> All Available Courses</b></h2>
        </div>
      </div>
    </div>
          {
            data.map((data) =>
        <div class="container all-available">
            <div class="row pb-4 g-0" >
      <div class="col-sm-12 r-log-b-h px-2 py-2">
      <h4>Learn {data.tittle} A To Z</h4>
      </div>
      <div class="col-sm-4 px-2 r-log-b py-3">
        <img src={data.image} className="card-img-top" alt="..."/>
      </div>
      <div class="col-sm-8 px-2 r-log-b  py-3">
        <div class="row">
          <div class="col-sm-12">
          <div class="row g-0">
          <div class="col-sm-12">
          <h6>{data.description}</h6>
          <br/>
          </div>
          <div class="col-sm-4">
          <h6>Instructor : {data.instructor}</h6>
          </div>
          <div class="col-sm-6">
          <h6>Writer : {data.writer}</h6>
          </div>
          <div class="col-sm-4">
          <h6>Duration : {data.duration}</h6>
          </div>
          <div class="col-sm-6">
          <h6>Price : <s>{data.cprice}</s> {data.oprice}</h6>
          </div>
        </div>
          </div>
    <div class="col-sm-12 pt-4 pb-2">
      <div class="row g-0">
        <div class="col-sm-4 col-4 d-flex justify-content-center ie ">
          <Link to="/watchcourses">
          <button class="btn-primary px-3 py-1" onClick={() => Watchset( data.linkforbooks, data.linkfornotes, data.linkforlectures)}><i class="far fa-play-circle px-1"></i> Watch</button>
          </Link>
          </div>
          <div class="col-sm-4 col-4 d-flex justify-content-center ie">
          <button  data-bs-toggle="modal" data-bs-target="#updatec"  class="btn-success px-3 py-1"  onClick={() => Updateset(data._id, data.tittle, data.owner, data.description, data.oprice, data.cprice,  data.duration, data.instructor, data.writer, data.linkforbooks, data.linkfornotes, data.linkforlectures, data.date, data.image)}><i class="fas fa-pen px-1"></i> Edit</button>
          </div>
          <div class="col-sm-4 col-4 d-flex justify-content-center ie">
          <button class="btn-danger px-3 py-1"  onClick={() => Delete(data._id)}><i class="fas px-1 fa-trash-alt"></i> Delete</button>
          </div>
      </div>
    </div>
      </div>
    </div>
  </div>
</div>
  )
  }
      </>
      );
    } else {
      return(
        <>
        <div class="container all-available">
      <div class="row py-3 g-0">
        <div class="col-sm-12 d-flex justify-content-center r-log-b-h1 p-3">
          <h2 class="text-white"><b> All Available Courses</b></h2>
        </div>
      </div>
    </div>
  <div class="container py-3">
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
    
  </div>
        </>
        );
    }
  } else{
 if (usercourses) {
   return(
      <>
      <div class="container all-available">
      <div class="row py-3 g-0">
        <div class="col-sm-12 d-flex justify-content-center r-log-b-h1 p-3">
          <h2 class="text-white"><b>Your Courses</b></h2>
        </div>
      </div>
    </div>
          {
            usercourses.map((data) =>
        <div class="container all-available">
            <div class="row pb-4 g-0" >
      <div class="col-sm-12 r-log-b-h px-2 py-2">
      <h4>Learn {data.tittle} A To Z</h4>
      </div>
      <div class="col-sm-4 px-2 r-log-b py-3">
        <img src={data.image} className="card-img-top" alt="..."/>
      </div>
      <div class="col-sm-8 px-2 r-log-b  py-3">
        <div class="row">
          <div class="col-sm-12">
          <div class="row g-0">
          <div class="col-sm-12">
          <h6>{data.description}</h6>
          <br/>
          </div>
          <div class="col-sm-4">
          <h6>Instructor : {data.instructor}</h6>
          </div>
          <div class="col-sm-6">
          <h6>Writer : {data.writer}</h6>
          </div>
          <div class="col-sm-4">
          <h6>Duration : {data.duration}</h6>
          </div>
          <div class="col-sm-6">
          <h6>Price : <s>{data.cprice}</s> {data.oprice}</h6>
          </div>
          <div class="col-sm-12">
          <h6>Published Date : {data.date}</h6>
          </div>
        </div>
          </div>
    <div class="col-sm-12 pt-4 pb-2">
      <div class="row g-0">
        <div class="col-sm-12 col-12 d-flex justify-content-center ie ">
          <Link to="/watchcourses">
          <button class="btn-primary px-3 py-1" onClick={() => Watchset( data.linkforbooks, data.linkfornotes, data.linkforlectures)}><i class="far fa-play-circle px-1"></i> Watch</button>
          </Link>
          </div>
      </div>
    </div>
      </div>
    </div>
  </div>
</div>
  )
  }
      </>
      );
 } else {
   return(
     <>
     <div class="row gy-3 gx-0  py-3 justify-content-around bg-light px-3">
        <div class="col-sm-3 bg-success d-flex justify-content-center p-2">
        <div class="">
          <h2 class="text-center">Now You Have No </h2>
          <h2 class="text-center">Courses</h2>
          </div>
        </div>
        <div class="col-sm-3 bg-warning d-flex justify-content-center p-2">
        <div class="">
          <h2 class="text-center">Now You Have No </h2>
          <h2 class="text-center">Courses</h2>
          </div>
        </div>
        <div class="col-sm-3 bg-primary d-flex justify-content-center p-2">
        <div class="">
          <h2 class="text-center">Now You Have No </h2>
          <h2 class="text-center">Courses</h2>
          </div>
        </div>
      </div>
      <div class="row gy-3 gx-0  py-3 justify-content-around bg-light px-3">
        <div class="col-sm-3 bg-success d-flex justify-content-center p-2">
        <div class="">
          <h2 class="text-center">Now You Have No </h2>
          <h2 class="text-center">Courses</h2>
          </div>
        </div>
        <div class="col-sm-3 bg-warning d-flex justify-content-center p-2">
        <div class="">
          <h2 class="text-center">Now You Have No </h2>
          <h2 class="text-center">Courses</h2>
          </div>
        </div>
        <div class="col-sm-3 bg-primary d-flex justify-content-center p-2">
        <div class="">
          <h2 class="text-center">Now You Have No </h2>
          <h2 class="text-center">Courses</h2>
          </div>
        </div>
      </div>
      <div class="row gy-3 gx-0  py-3 justify-content-around bg-light px-3">
        <div class="col-sm-3 bg-success d-flex justify-content-center p-2">
        <div class="">
          <h2 class="text-center">Now You Have No </h2>
          <h2 class="text-center">Courses</h2>
          </div>
        </div>
        <div class="col-sm-3 bg-warning d-flex justify-content-center p-2">
        <div class="">
          <h2 class="text-center">Now You Have No </h2>
          <h2 class="text-center">Courses</h2>
          </div>
        </div>
        <div class="col-sm-3 bg-primary d-flex justify-content-center p-2">
        <div class="">
          <h2 class="text-center">Now You Have No </h2>
          <h2 class="text-center">Courses</h2>
          </div>
        </div>
      </div>
      <div class="row gy-3 gx-0  py-3 justify-content-around bg-light px-3">
        <div class="col-sm-3 bg-success d-flex justify-content-center p-2">
        <div class="">
          <h2 class="text-center">Now You Have No </h2>
          <h2 class="text-center">Courses</h2>
          </div>
        </div>
        <div class="col-sm-3 bg-warning d-flex justify-content-center p-2">
        <div class="">
          <h2 class="text-center">Now You Have No </h2>
          <h2 class="text-center">Courses</h2>
          </div>
        </div>
        <div class="col-sm-3 bg-primary d-flex justify-content-center p-2">
        <div class="">
          <h2 class="text-center">Now You Have No </h2>
          <h2 class="text-center">Courses</h2>
          </div>
        </div>
      </div>
      <div class="row gy-3 gx-0  py-3 justify-content-around bg-light px-3">
        <div class="col-sm-3 bg-success d-flex justify-content-center p-2">
        <div class="">
          <h2 class="text-center">Now You Have No </h2>
          <h2 class="text-center">Courses</h2>
          </div>
        </div>
        <div class="col-sm-3 bg-warning d-flex justify-content-center p-2">
        <div class="">
          <h2 class="text-center">Now You Have No </h2>
          <h2 class="text-center">Courses</h2>
          </div>
        </div>
        <div class="col-sm-3 bg-primary d-flex justify-content-center p-2">
        <div class="">
          <h2 class="text-center">Now You Have No </h2>
          <h2 class="text-center">Courses</h2>
          </div>
        </div>
      </div>
      <div class="row gy-3 gx-0  py-3 justify-content-around bg-light px-3">
        <div class="col-sm-3 bg-success d-flex justify-content-center p-2">
        <div class="">
          <h2 class="text-center">Now You Have No </h2>
          <h2 class="text-center">Courses</h2>
          </div>
        </div>
        <div class="col-sm-3 bg-warning d-flex justify-content-center p-2">
        <div class="">
          <h2 class="text-center">Now You Have No </h2>
          <h2 class="text-center">Courses</h2>
          </div>
        </div>
        <div class="col-sm-3 bg-primary d-flex justify-content-center p-2">
        <div class="">
          <h2 class="text-center">Now You Have No </h2>
          <h2 class="text-center">Courses</h2>
          </div>
        </div>
      </div>
      <div class="row gy-3 gx-0  py-3 justify-content-around bg-light px-3">
        <div class="col-sm-3 bg-success d-flex justify-content-center p-2">
        <div class="">
          <h2 class="text-center">Now You Have No </h2>
          <h2 class="text-center">Courses</h2>
          </div>
        </div>
        <div class="col-sm-3 bg-warning d-flex justify-content-center p-2">
        <div class="">
          <h2 class="text-center">Now You Have No </h2>
          <h2 class="text-center">Courses</h2>
          </div>
        </div>
        <div class="col-sm-3 bg-primary d-flex justify-content-center p-2">
        <div class="">
          <h2 class="text-center">Now You Have No </h2>
          <h2 class="text-center">Courses</h2>
          </div>
        </div>
      </div>
      <div class="row gy-3 gx-0  py-3 justify-content-around bg-light px-3">
        <div class="col-sm-3 bg-success d-flex justify-content-center p-2">
        <div class="">
          <h2 class="text-center">Now You Have No </h2>
          <h2 class="text-center">Courses</h2>
          </div>
        </div>
        <div class="col-sm-3 bg-warning d-flex justify-content-center p-2">
        <div class="">
          <h2 class="text-center">Now You Have No </h2>
          <h2 class="text-center">Courses</h2>
          </div>
        </div>
        <div class="col-sm-3 bg-primary d-flex justify-content-center p-2">
        <div class="">
          <h2 class="text-center">Now You Have No </h2>
          <h2 class="text-center">Courses</h2>
          </div>
        </div>
      </div>
     </>
     );
 }
  }
}

     return(
         <>
         <Render/>
         
         <div class="modal fade" id="updatec" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog m-dlg modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header bg-info">
        <h5 class="modal-title" id="exampleModalLabel">Update Courses Detailes Here</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body bg-info">
      <div class="container py-2 ">
    <div class="row g-0">
        <div class="col-sm-12">
                <form onSubmit={(e) => Update(e)}  method="post" class=" border p-4 bg-light shadow">                    <div class="row g-0">     <div class="col-sm-12 d-flex justify-content-center">
                    <h4 class="mb-3 text-secondary">Update Courses Detailes</h4>
                    </div>
                    </div>
                    <div class="row">
                        <div class="mb-3 col-sm-6">
                        <label>Course Tittle<span class="text-danger">*</span></label>
    <input type="text" value={tittle} className="form-control"
    
    placeholder="Enter Course Tittle"
    
        onChange={((e) => setTittle(e.target.value))}
    />
                        </div>

                        <div class="mb-3 col-sm-6">
                            <label>Course Owner Name<span class="text-danger">*</span></label>
  <input type="text" value={owner} className="form-control"
    placeholder="Enter Course Owner Name"
   
       onChange={((e) => setOwner(e.target.value))}
    />
                        </div>
                        <div class="mb-3 col-sm-6">
                            <label>Course Cut Price<span class="text-danger">*</span></label>
    <input type="text" value={cprice} className="form-control"
    placeholder="Enter Course Cut Price"
    
        onChange={((e) => setCprice(e.target.value))}
     />
                        </div>
                        <div class="mb-3 col-sm-6">
                            <label>Course Original Price<span class="text-danger">*</span></label>
    <input type="text" value={oprice} className="form-control"
    placeholder="Enter Course Original Price"
    
        onChange={((e) => setOprice(e.target.value))}
     />
                        </div>
                        <div class="mb-3 col-sm-6">
                            <label>Course Instrutor Name<span class="text-danger">*</span></label>
    <input type="text" value={instructor} className="form-control"
    placeholder="Enter Course Instrutor Name"

          onChange={((e) => setInstructor(e.target.value))}
    />
                        </div>
                        <div class="mb-3 col-sm-6">
                            <label>Course Writer Name<span class="text-danger">*</span></label>
    <input type="text" value={writer} className="form-control"
    placeholder="Enter Course Writer Name"

          onChange={((e) => setWriter(e.target.value))}
    />
                        </div>
                        
                        <div class="mb-3 col-sm-6">
                            <label>Course Duration<span class="text-danger">*</span></label>
    <input type="text" value={duration} className="form-control"
    placeholder="Enter Course Duration"
    
        onChange={((e) => setDuration(e.target.value))}
    />
                        </div>
                        <div class="mb-3 col-sm-6">
                            <label>Path For Lectures Api<span class="text-danger">*</span></label>
    <input type="text" value={linkforlectures} className="form-control"
    placeholder="Enter Path For Lectures Api"
    
        onChange={((e) => setLinkforlectures(e.target.value))}
    />
                        </div>
                        <div class="mb-3 col-sm-6">
                            <label>Path For Notes Api<span class="text-danger">*</span></label>
    <input type="text" value={linkfornotes} className="form-control"
    placeholder="Enter Path For Notes Api"
    
        onChange={((e) => setLinkfornotes(e.target.value))}
    />
                        </div><div class="mb-3 col-sm-6">
                            <label>Path For Books Api<span class="text-danger">*</span></label>
    <input type="text" value={linkforbooks} className="form-control"
    placeholder="Enter Path For Books Api"
    
        onChange={((e) => setLinkforbooks(e.target.value))}
    />
                        </div>
                        <div class="mb-3 col-sm-6">
                            <label>Publish Date<span class="text-danger">*</span></label>
    <input  type="date" value={date} className="form-control"
        onChange={((e) => setDate(e.target.value))}
    />
                        </div>
                        <div class="mb-3 col-sm-6">
                            <label>Course Image<span class="text-danger">*</span></label>
    <input type="file" value={image} className="form-control"
    
        onChange={((e) => {
        setImage(e.target.value);
        getFile(e);
        })}
    />
                        </div>
                        <div class="mb-3 col-sm-12">
                        <label>Course Description<span class="text-danger">*</span></label>
    
    <textarea rows="6" value={description} className="form-control"
    placeholder="Enter Course Description"
    
        onChange={((e) => setDescription(e.target.value))}>
        </textarea>
                        </div>
                        
                        <div class="col-md-12">
                      <div class="row g-0">
                      <div class="col-sm-12  d-flex justify-content-center ie">
                      <button type="submit" class="btn btn-primary px-4 py-2">Update Course</button>
                      </div>
                      </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
  </div>
  
      </div>
     </div>
  </div>
</div>

         </>
         );
   }
   