import React, {useState, useEffect, useRef} from 'react';
import '../Css/AdminshowCourses.css';
import axios from 'axios';
import {Link} from 'react-router-dom';
import $ from 'jquery';
import Logcourses from './Log-courses';
import { useForm } from "react-hook-form";
import classNames from 'classnames';

export default function AdminshowCourses() {
  
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = dd + '/' + mm + '/' + yyyy;


const { handleSubmit, register, formState: { errors }, watch} = useForm();
const Password = useRef({});
Password.current = watch("password", "");

//start user info variabel
const [firstname, setFirstname] = useState('');
const [lastname, setLastname] = useState('');
const [email, setEmail] = useState('');
const [mobilenumber, setMobilenumber] = useState('');
const [password, setPassword] = useState('');
const [cpassword, setCpassword] = useState('');

//end user info variabel


//start Courses variable
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
const [data, setData] = useState([]);
const [linkforlectures, setLinkforlectures] = useState('/Lectures/');
const [linkfornotes, setLinkfornotes] = useState('/Notes/');
const [linkforbooks, setLinkforbooks] = useState('/Books/');
const [date, setDate] = useState(today);
//end Courses variable

//start books variable
const [btittle, setBtittle] = useState('');
const [bowner, setBowner] = useState('');
const [bcategory, setBcategory] = useState('');
const [bdescription, setBdescription] = useState('');
const [binstructor, setBinstructor] = useState('');
const [bwriter, setBwriter] = useState('');
const [bdate, setBdate] = useState(today);
const [bdownloadlink, setBdownloadlink] = useState();
const [bimage, setBimage] = useState('');
//end books variable

//start Notes variable
const [ntittle, setNtittle] = useState('');
const [nowner, setNowner] = useState('');
const [ncategory, setNcategory] = useState('');
const [ndescription, setNdescription] = useState('');
const [ninstructor, setNinstructor] = useState('');
const [nwriter, setNwriter] = useState('');
const [ndate, setNdate] = useState(today);
const [ndownloadlink, setNdownloadlink] = useState();
const [nimage, setNimage] = useState('');
//end Notes variable

//start Lectures variable
const [ltittle, setLtittle] = useState('');
const [lowner, setLowner] = useState('');
const [lcategory, setLcategory] = useState('');
const [ldescription, setLdescription] = useState('');
const [linstructor, setLinstructor] = useState('');
const [ldate, setLdate] = useState(today);
const [lvideoid, setLvideoid] = useState('');
//end Lectures variable

 useEffect(() => {
   $('textarea').hover(function(){
      $(this).css({"background-color": "red"});
    }, function(){
      $(this).css({"background-color": "white"});
    });
    $('#p-add').click(function(){
      $('.add-course').show();
      $('.all-available').hide();
    });
    $('#p-action').click(function(){
      $('.all-available').show();
      $('.add-course').hide();
    });
  });


function Submit(data){
  axios
    .post('https://elearning786.herokuapp.com/register', data)
    .then( (res) => {
      if (res.data.message == "Successfully Register") {
        alert('User SuccessFully Added');
      }else if (res.data.message == "This User Is Already Exist") {
        alert("This User " + res.data.user + " Is Already Exist")
      }
      });
}

const [fileData, setFileData] = useState("");
function getFile(e){
  setFileData(e.target.files[0]);
};

function Addcourse(e){
   e.preventDefault()
   
  const data = new FormData();
    data.append("file", fileData);
    data.append("tittle", tittle);
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
    
   axios
    .post('https://elearning786.herokuapp.com/addcourse', data)
    .then((res) => alert(res.data))
    
}

function Addbooks(e){
  e.preventDefault();
  const data = new FormData();
    data.append("file", fileData);
    data.append("btittle", btittle);
    data.append("bowner", bowner);
    data.append("bcategory", bcategory);
    data.append("bdescription", bdescription);
    data.append("binstructor", binstructor);
    data.append("bwriter", bwriter);
    data.append("bdate", bdate);
    data.append("bdownloadlink", bdownloadlink);
    
  axios
    .post('https://elearning786.herokuapp.com/addbooks', data)
    .then((res) => alert(res.data))
}
function Addnotes(e){
  e.preventDefault();
  const data = new FormData();
    data.append("file", fileData);
    data.append("ntittle", ntittle);
    data.append("nowner", nowner);
    data.append("ncategory", ncategory);
    data.append("ndescription", ndescription);
    data.append("ninstructor", ninstructor);
    data.append("nwriter", nwriter);
    data.append("ndate", ndate);
    data.append("ndownloadlink", ndownloadlink);
  axios
    .post('https://elearning786.herokuapp.com/addnotes', data)
    .then((res) => alert(res.data))
}
function Addlectures(e){
  e.preventDefault();
  var lv = lvideoid.split("/");
  var lc = "https://www.youtube.com/embed/"
  var lb = lc + lv[3];
  const qdata = {ltittle: ltittle, lowner: lowner, lcategory: lcategory, ldescription: ldescription, linstructor: linstructor, ldate: ldate, lvideoid: lb};
  axios
    .post('https://elearning786.herokuapp.com/addlectures', qdata)
    .then((res) => alert(res.data))
}

     return(
         <>
          <div class="container">
         <div class="row pt-3 g-0">
        <div class="col-sm-6 col-6 d-flex justify-content-center p-r-log-b-h4 py-3" id="p-action">
        <Link class="nav-link d-flex" to="#">
          <h2 class="text-white"><b>Show</b>
          </h2>
        </Link>
        </div>
        <div class="col-sm-6 col-6 d-flex justify-content-center p-r-log-b-h4 py-3" id="p-add">
        <Link class="nav-link d-flex" to="#">
          <h2 class="text-white"><b>Add</b>
          </h2>
        </Link>
        </div>
      </div>
      </div>
      <div class="all-available">
      <Logcourses/>
      </div>
      <div class="container py-2 add-course">
    <div class="row g-0">
        <div class="col-sm-12">
                <form onSubmit={(e) => Addcourse(e)}  method="post" class=" border p-4 bg-light shadow">                    <div class="row g-0">     <div class="col-sm-12 d-flex justify-content-center">
                    <h4 class="mb-3 text-secondary">Add Courses Detailes</h4>
                    </div>
                    </div>
                    <div class="row">
                        <div class="mb-3 col-sm-6">
                        <label>Course Tittle<span class="text-danger">*</span></label>
    <input type="text" value={tittle} className="form-control"
    
    placeholder="Enter Course Tittle"
    
        onChange={((e) =>{ 
        const str = e.target.value;
        const arr = str.split(" ");
        for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

        }
        const str2 = arr.join(" ");
        setTittle(str2);
        })}
    />
                        </div>

                        <div class="mb-3 col-sm-6">
                            <label>Course Owner Name<span class="text-danger">*</span></label>
  <input type="text" value={owner} className="form-control"
    placeholder="Enter Course Owner Name"
   
       onChange={((e) =>{
        const str = e.target.value;
        const arr = str.split(" ");
        for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

        }
        const str2 = arr.join(" ");
        setOwner(str2);
       }
       )}
    />
                        </div>
                        <div class="mb-3 col-sm-6">
                            <label>Course Cut Price<span class="text-danger">*</span></label>
    <input type="text" value={cprice} className="form-control"
    placeholder="Enter Course Cut Price"
    
        onChange={((e) => 
        {
        const str = e.target.value;
        const arr = str.split(" ");
        for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

        }
        const str2 = arr.join(" ");
        setCprice(str2);
        })}
     />
                        </div>
                        <div class="mb-3 col-sm-6">
                            <label>Course Original Price<span class="text-danger">*</span></label>
    <input type="text" value={oprice} className="form-control"
    placeholder="Enter Course Original Price"
    
        onChange={((e) => {
        const str = e.target.value;
        const arr = str.split(" ");
        for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

        }
        const str2 = arr.join(" ");
        setOprice(str2);
        }
        )}
     />
                        </div>
                        <div class="mb-3 col-sm-6">
                            <label>Course Instrutor Name<span class="text-danger">*</span></label>
    <input type="text" value={instructor} className="form-control"
    placeholder="Enter Course Instrutor Name"

          onChange={((e) =>{
          const str = e.target.value;
        const arr = str.split(" ");
        for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

        }
        const str2 = arr.join(" ");
        setInstructor(str2);
        }
        )}
    />
                        </div>
                        <div class="mb-3 col-sm-6">
                            <label>Course Writer Name<span class="text-danger">*</span></label>
    <input type="text" value={writer} className="form-control"
    placeholder="Enter Course Writer Name"

          onChange={((e) =>{
          const str = e.target.value;
        const arr = str.split(" ");
        for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

        }
        const str2 = arr.join(" ");
        setWriter(str2);
        }
        )}
    />
                        </div>
                        
                        <div class="mb-3 col-sm-6">
                            <label>Course Duration<span class="text-danger">*</span></label>
    <input type="text" value={duration} className="form-control"
    placeholder="Enter Course Duration"
    
        onChange={((e) =>{
        const str = e.target.value;
        const arr = str.split(" ");
        for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

        }
        const str2 = arr.join(" ");
        setDuration(str2);
        }
        )}
    />
                        </div><div class="mb-3 col-sm-6">
                            <label>Path For Lectures Api<span class="text-danger">*</span></label>
    <input type="text" value={linkforlectures} className="form-control"
    placeholder="Enter Path For Lectures Api"
    
        onChange={((e) =>{
        const str = e.target.value;
        const arr = str.split(" ");
        for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

        }
        const str2 = arr.join(" ");
        setLinkforlectures(str2);
        }
        )}
    />
                        </div>
                        <div class="mb-3 col-sm-6">
                            <label>Path For Notes Api<span class="text-danger">*</span></label>
    <input type="text" value={linkfornotes} className="form-control"
    placeholder="Enter Path For Notes Api"
    
        onChange={((e) =>{
        const str = e.target.value;
        const arr = str.split(" ");
        for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

        }
        const str2 = arr.join(" ");
        setLinkfornotes(str2);
        })}
    />
                        </div><div class="mb-3 col-sm-6">
                            <label>Path For Books Api<span class="text-danger">*</span></label>
    <input type="text" value={linkforbooks} className="form-control"
    placeholder="Enter Path For Books Api"
    
        onChange={((e) =>{
        const str = e.target.value;
        const arr = str.split(" ");
        for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

        }
        const str2 = arr.join(" ");
        setLinkforbooks(str2);
        })}
    />
                        </div>
                        <div class="mb-3 col-sm-6">
                            <label>Publish Date<span class="text-danger">*</span></label>
    <input type="date" className="form-control"
    value={date}
        onChange={(e) => setDate(e.target.value)}
    />
                        </div>
                        <div class="mb-3 col-sm-6">
                            <label>Course Image<span class="text-danger">*</span></label>
    <input type="file" value={image} className="form-control"
        onChange={(e)=> {
        setImage(e.target.value);
        getFile(e);
        }}
    />
                        </div>
                        <div class="mb-3 col-sm-12">
                        <label>Course Description<span class="text-danger">*</span></label>
    
    <textarea rows="6" value={description} className="form-control"
    placeholder="Enter Course Description"
    
        onChange={((e) =>{
        const str = e.target.value;
        const arr = str.split(" ");
        for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

        }
        const str2 = arr.join(" ");
        setDescription(str2);
        })}>
        </textarea>
                        </div>
                        
                        <div class="col-md-12">
                      <div class="row g-0">
                      <div class="col-sm-12   d-flex justify-content-center ie">
                      <button type="submit" class="btn btn-primary px-4 py-2 ">Add Course</button>
                      </div>
                      </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
  </div>
  <div class="container py-2 add-course">
    <div class="row g-0">
        <div class="col-sm-12">
                <form onSubmit={(e) => Addbooks(e)}  method="post" class=" border p-4 bg-light shadow">                    <div class="row g-0">     <div class="col-sm-12 d-flex justify-content-center">
                    <h4 class="mb-3 text-secondary">Add Books Detailes</h4>
                    </div>
                    </div>
                    <div class="row">
                        <div class="mb-3 col-sm-6">
                        <label>Book Tittle<span class="text-danger">*</span></label>
    <input type="text" value={btittle} className="form-control"
    
    placeholder="Enter Book Tittle"
    
        onChange={((e) =>{
        const str = e.target.value;
        const arr = str.split(" ");
        for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

        }
        const str2 = arr.join(" ");
        setBtittle(str2);
       } )}
    />
                        </div>
              <div class="mb-3 col-sm-6">
                        <label>Book Category<span class="text-danger">*</span></label>
    <input type="text" value={bcategory} className="form-control"
    
    placeholder="Enter Book Category"
    
        onChange={((e) =>{
        const str = e.target.value;
        const arr = str.split(" ");
        for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

        }
        const str2 = arr.join(" ");
        setBcategory(str2);
       })}
    />
                        </div>
                        <div class="mb-3 col-sm-6">
                            <label>Book Owner Name<span class="text-danger">*</span></label>
  <input type="text" value={bowner} className="form-control"
    placeholder="Enter Course Owner Name"
   
       onChange={((e) =>{
        const str = e.target.value;
        const arr = str.split(" ");
        for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

        }
        const str2 = arr.join(" ");
        setBowner(str2);
       })}
    />
                        </div>
                        <div class="mb-3 col-sm-6">
                            <label>Book  Instrutor Name<span class="text-danger">*</span></label>
    <input type="text" value={binstructor} className="form-control"
    placeholder="Enter Book Instrutor Name"

          onChange={((e) =>{
        const str = e.target.value;
        const arr = str.split(" ");
        for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

        }
        const str2 = arr.join(" ");
        setBinstructor(str2);
       })}
    />
                        </div>
                        <div class="mb-3 col-sm-6">
                            <label>Book Writer Name<span class="text-danger">*</span></label>
    <input type="text" value={bwriter} className="form-control"
    placeholder="Enter Book Writer Name"

          onChange={((e) =>{
        const str = e.target.value;
        const arr = str.split(" ");
        for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

        }
        const str2 = arr.join(" ");
        setBwriter(str2);
       })}
    />
                        </div>
                        <div class="mb-3 col-sm-6">
                            <label>Publish Date<span class="text-danger">*</span></label>
    <input type="date" className="form-control"
    value={bdate}
        onChange={((e) =>{
        const str = e.target.value;
        const arr = str.split(" ");
        for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

        }
        const str2 = arr.join(" ");
        setBdate(str2);
       })}
    />
                        </div>
                        <div class="mb-3 col-sm-6">
                            <label>Book Download Link<span class="text-danger">*</span></label>
    <input type="text" value={bdownloadlink} className="form-control"
    placeholder="Enter Book Download Link"

          onChange={((e) => setBdownloadlink(e.target.value))}
    />
                        </div>
                        <div class="mb-3 col-sm-6">
                            <label>Books Image<span class="text-danger">*</span></label>
    <input type="file" value={bimage} className="form-control"
      onChange={(e)=> {
        setBimage(e.target.value);
        getFile(e);
        }}
    />
                        </div>
                        <div class="mb-3 col-sm-12">
                        <label>Book Description<span class="text-danger">*</span></label>
    
    <textarea rows="6" value={bdescription} className="form-control"
    placeholder="Enter Book Description"
    
        onChange={((e) =>{
        const str = e.target.value;
        const arr = str.split(" ");
        for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

        }
        const str2 = arr.join(" ");
        setBdescription(str2);
       })}>
        </textarea>
                        </div>
                        
                        <div class="col-md-12">
                      <div class="row g-0">
                      <div class="col-sm-12   d-flex justify-content-center ie">
                      <button type="submit" class="btn btn-primary px-4 py-2 ">Add Book</button>
                      </div>
                      </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
  </div><div class="container py-2 add-course">
    <div class="row g-0">
        <div class="col-sm-12">
                <form onSubmit={(e) => Addnotes(e)}  method="post" class=" border p-4 bg-light shadow">                    <div class="row g-0">     <div class="col-sm-12 d-flex justify-content-center">
                    <h4 class="mb-3 text-secondary">Add Notes Detailes</h4>
                    </div>
                    </div>
                    <div class="row">
                        <div class="mb-3 col-sm-6">
                        <label>Notes Tittle<span class="text-danger">*</span></label>
    <input type="text" value={ntittle} className="form-control"
    
    placeholder="Enter Notes Tittle"
    
        onChange={((e) =>{
        const str = e.target.value;
        const arr = str.split(" ");
        for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

        }
        const str2 = arr.join(" ");
        setNtittle(str2);
       })}
    />
                        </div>
              <div class="mb-3 col-sm-6">
                        <label>Notes Category<span class="text-danger">*</span></label>
    <input type="text" value={ncategory} className="form-control"
    
    placeholder="Enter Notes Category"
    
        onChange={((e) =>{
        const str = e.target.value;
        const arr = str.split(" ");
        for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

        }
        const str2 = arr.join(" ");
        setNcategory(str2);
       })}
    />
                        </div>
                        <div class="mb-3 col-sm-6">
                            <label>Notes Owner Name<span class="text-danger">*</span></label>
  <input type="text" value={nowner} className="form-control"
    placeholder="Enter Notes Owner Name"
   
       onChange={((e) =>{
        const str = e.target.value;
        const arr = str.split(" ");
        for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

        }
        const str2 = arr.join(" ");
        setNowner(str2);
       })}
    />
                        </div>
                        <div class="mb-3 col-sm-6">
                            <label>Notes  Instrutor Name<span class="text-danger">*</span></label>
    <input type="text" value={ninstructor} className="form-control"
    placeholder="Enter Notes Instrutor Name"

          onChange={((e) =>{
        const str = e.target.value;
        const arr = str.split(" ");
        for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

        }
        const str2 = arr.join(" ");
        setNinstructor(str2);
       })}
    />
                        </div>
                        <div class="mb-3 col-sm-6">
                            <label>Notes Writer Name<span class="text-danger">*</span></label>
    <input type="text" value={nwriter} className="form-control"
    placeholder="Enter Notes Writer Name"

          onChange={((e) =>{
        const str = e.target.value;
        const arr = str.split(" ");
        for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

        }
        const str2 = arr.join(" ");
        setNwriter(str2);
       })}
    />
                        </div>
                        <div class="mb-3 col-sm-6">
                            <label>Publish Date<span class="text-danger">*</span></label>
    <input type="date" className="form-control"
    value={ndate}
        onChange={((e) => setNdate(e.target.value))}
    />
                        </div>
                        <div class="mb-3 col-sm-6">
                            <label>Notes Download Link<span class="text-danger">*</span></label>
    <input type="text" value={ndownloadlink} className="form-control"
    placeholder="Enter Notes Download Link"

          onChange={((e) => setNdownloadlink(e.target.value))}
    />
                        </div>
                        <div class="mb-3 col-sm-6">
                            <label>Notes Image<span class="text-danger">*</span></label>
    <input type="file" value={nimage} className="form-control"
      onChange={(e)=> {
        setNimage(e.target.value);
        getFile(e);
        }}
    />
                        </div>
                        <div class="mb-3 col-sm-12">
                        <label>Notes  Description<span class="text-danger">*</span></label>
    
    <textarea rows="6" value={ndescription} className="form-control"
    placeholder="Enter Notes Description"
    
        onChange={((e) =>{
        const str = e.target.value;
        const arr = str.split(" ");
        for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

        }
        const str2 = arr.join(" ");
        setNdescription(str2);
       })}>
        </textarea>
                        </div>
                        
                        <div class="col-md-12">
                      <div class="row g-0">
                      <div class="col-sm-12   d-flex justify-content-center ie">
                      <button type="submit" class="btn btn-primary px-4 py-2 ">Add Note</button>
                      </div>
                      </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
  </div>
  <div class="container py-2 add-course">
    <div class="row g-0">
        <div class="col-sm-12">
                <form onSubmit={(e) => Addlectures(e)}  method="post" class=" border p-4 bg-light shadow">                    <div class="row g-0">     <div class="col-sm-12 d-flex justify-content-center">
                    <h4 class="mb-3 text-secondary">Add Lectures Detailes</h4>
                    </div>
                    </div>
                    <div class="row">
                        <div class="mb-3 col-sm-6">
                        <label>Lectures Tittle<span class="text-danger">*</span></label>
    <input type="text" value={ltittle} className="form-control"
    
    placeholder="Enter Lectures Tittle"
    
        onChange={((e) =>{
        const str = e.target.value;
        const arr = str.split(" ");
        for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

        }
        const str2 = arr.join(" ");
        setLtittle(str2);
       })}
    />
                        </div>
              <div class="mb-3 col-sm-6">
                        <label>Lectures Category<span class="text-danger">*</span></label>
    <input type="text" value={lcategory} className="form-control"
    
    placeholder="Enter Lectures Category"
    
        onChange={((e) =>{
        const str = e.target.value;
        const arr = str.split(" ");
        for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

        }
        const str2 = arr.join(" ");
        setLcategory(str2);
       })}
    />
                        </div>
                        <div class="mb-3 col-sm-6">
                            <label>Lectures Owner Name<span class="text-danger">*</span></label>
  <input type="text" value={lowner} className="form-control"
    placeholder="Enter Lectures Owner Name"
   
       onChange={((e) =>{
        const str = e.target.value;
        const arr = str.split(" ");
        for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

        }
        const str2 = arr.join(" ");
        setLowner(str2);
       })}
    />
                        </div>
                        <div class="mb-3 col-sm-6">
                            <label>Lectures  Instrutor Name<span class="text-danger">*</span></label>
    <input type="text" value={linstructor} className="form-control"
    placeholder="Enter Lectures Instrutor Name"

          onChange={((e) =>{
        const str = e.target.value;
        const arr = str.split(" ");
        for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

        }
        const str2 = arr.join(" ");
        setLinstructor(str2);
       })}
    />
                        </div>
                        <div class="mb-3 col-sm-6">
                            <label>Publish Date<span class="text-danger">*</span></label>
    <input type="date" className="form-control"
    value={ldate}
        onChange={((e) => setLdate(e.target.value))}
    />
                        </div>
                        <div class="mb-3 col-sm-6">
                            <label>Lectures Video Id<span class="text-danger">*</span></label>
    <input type="text" value={lvideoid} className="form-control"
    placeholder="Lectures Video Id"

          onChange={((e) => {
          setLvideoid(e.target.value);
          })}
    />
                        </div>
                        <div class="mb-3 col-sm-12">
                        <label>Lectures Description<span class="text-danger">*</span></label>
    
    <textarea rows="6" value={ldescription} className="form-control"
    placeholder="Enter Lectures Description"
    
        onChange={((e) =>{
        const str = e.target.value;
        const arr = str.split(" ");
        for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

        }
        const str2 = arr.join(" ");
        setLdescription(str2);
       })}>
        </textarea>
                        </div>
                        
                        <div class="col-md-12">
                      <div class="row g-0">
                      <div class="col-sm-12   d-flex justify-content-center ie">
                      <button type="submit" class="btn btn-primary px-4 py-2 ">Add Lecture</button>
                      </div>
                      </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
      </div>
      
      
    <div class="container pb-2 add-course">
    <div class="row g-0">
        <div class="col-sm-12">
                <form onSubmit={handleSubmit(Submit)} method="post" class=" border p-4 bg-light shadow">                    <div class="row g-0">     <div class="col-sm-12 d-flex justify-content-center">
                    <h4 class="mb-3 text-secondary">Add New User Detailes</h4>
                    </div>
                    </div>
                    <div class="row">
                        <div class="mb-3 col-sm-6">
                        <label>First Name<span class="text-danger">*</span></label>
    <input type="text"  className={classNames("form-control ", {"is-invalid": errors.firstname,}
    )} id="exampleInputfirstname" aria-describedby="firstnameHelp" autocomplete="off" 
    placeholder="Enter Your FirstName"
    {...register("firstname", {
          required: "Your Firstname Is Required",
          pattern: {
            value: /[A-Za-z0-9]{4}/,
            message: "Your Firstname Contain Minimum 4 Charecters Only letters And Numbers"
          }
        })}
    />
    <div className="form-text text-danger"><h5>{errors.firstname && errors.firstname.message}</h5></div>
                        </div>

                        <div class="mb-3 col-sm-6">
                            <label>Last Name<span class="text-danger">*</span></label>
  <input type="text"  className={classNames("form-control ", {"is-invalid": errors.lastname}
    )} id="exampleInputlastname" aria-describedby="lastnamenameHelp"  autocomplete="off"
    placeholder="Enter Your LastName"
   {...register("lastname", {
          required: "Your Lastname Is Required",
          pattern: {
            value: /[A-Za-z0-9]{4}/,
            message: "Your Lastname Contain Minimum 4 Charecters Only letters And Numbers"
          }
        })}
    />
    <div className="form-text text-danger"><h5>{errors.lastname && errors.lastname.message}</h5></div>
                        </div>
                        <div class="mb-3 col-sm-6">
                        <label>Email Address<span class="text-danger">*</span></label>
    <input type="email"  className={classNames("form-control ", {"is-invalid": errors.email}
    )} id="exampleInputEmail1" aria-describedby="emailHelp" autocomplete="off" 
    placeholder="Enter Your Email Address"
    {...register("email", {
          required: "Your Email Address Is Required",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Please Enter Valid Email Address"
          }
        })}
    />
   <div id="emailHelp" className="form-text text-danger"><h5> {errors.email && errors.email.message}</h5></div>
                        </div>
                        <div class="mb-3 col-sm-6">
                            <label>Mobile Number<span class="text-danger">*</span></label>
    <input type="text" className={classNames("form-control ", {"is-invalid": errors.MobileNumber}
    )} id="exampleInputmobilenumber" aria-describedby="mobilenumberHelp" name="MobileNumber" autocomplete="off"
    placeholder="Enter Your MobileNumber"
    {...register("mobilenumber", {
          required: "Your Mobile Number Required",
          pattern: {
            value: /[789]{1}[0-9]{9}/,
            message: "Please Enter Valid Mobile Number"
          }
        })}
    />
    <div id="mobilenumberHelp" className="form-text text-danger"><h5> {errors.mobilenumber && errors.mobilenumber.message}</h5></div>
                        </div>
                        <div class="mb-3 col-sm-6">
                            <label>Password<span class="text-danger">*</span></label>
    <input type="password"  className={classNames("form-control ", {"is-invalid": errors.Password1}
    )} id="exampleInputPassword1" autocomplete="off"
    placeholder="Create Your New Strong Password"
      {...register("password", {
          required: "Your Password Is Required",
          minLength: {
            value: 8,
            message: "Password Must Have At Least 8 Characters"
          }
        })}
     />
    <div id="password1Help" className="form-text text-danger"><h5>{errors.password && errors.password.message}</h5></div>
                        </div>
                        <div class="mb-3 col-sm-6">
                            <label>Confirm Password<span class="text-danger">*</span></label>
    <input type="password" className={classNames("form-control ", {"is-invalid": errors.Password2}
    )}  id="exampleInputPassword2"    autocomplete="off" 
    placeholder="Confirm Your Password"
    {...register("cpassword", {
          validate: value =>
            value === Password.current || "Your Password Do Not Match"
          })}
    />
    <div id="password2Help" className="form-text text-danger"><h5>{errors.cpassword && errors.cpassword.message}</h5></div>
                        </div>
                        <div class="col-md-12">
                      <div class="row g-0">
                      <div class="col-sm-12  col-12 d-flex justify-content-center">
                      <button type="submit" class="btn btn-primary">Add New User</button>
                      </div>
                      </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
  </div>
  
         </>
         );
   }
   