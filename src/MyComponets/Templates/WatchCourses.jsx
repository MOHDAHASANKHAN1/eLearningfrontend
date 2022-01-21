import React, {useEffect, useState} from "react";
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'; 
import '../Css/WatchCourses.css';
import $ from 'jquery';
import axios from 'axios';

export default function WatchCourses(){

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = dd + '/' + mm + '/' + yyyy;

  const [bdata, setBdata] = useState([]);
  const [ndata, setNdata] = useState([]);
  const [ldata, setLdata] = useState([]);
  /*const ldata = JSON.parse(localStorage.getItem('lcdata'));
  const ndata = JSON.parse(localStorage.getItem('ncdata'));
  const bdata = JSON.parse(localStorage.getItem('bcdata'));*/
  
//start Lectures variable
const [ltittle, setLtittle] = useState('');
const [lowner, setLowner] = useState('');
const [lcategory, setLcategory] = useState('');
const [ldescription, setLdescription] = useState('');
const [linstructor, setLinstructor] = useState('');
const [ldate, setLdate] = useState(today);
const [lvideoid, setLvideoid] = useState('https://www.youtube.com/embed/');
const [lupid, setLupid] = useState('');
//end Lectures variable

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
const [bupid, setBupid] = useState('');
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
const [nupid, setNupid] = useState('');
//end Notes variable

function getdata(){
  const lnkbk = localStorage.getItem('linkforbooks');
  const lnknt = localStorage.getItem('linkfornotes');
  const lnklc = localStorage.getItem('linkforlectures');
  
    axios
    .get("https://elearning786.herokuapp.com" + lnkbk)
    .then( (deta) => {
      setBdata(deta.data)
      /*localStorage.removeItem('bcdata');
      localStorage.setItem('bcdata', JSON.stringify(deta.data));*/
    })
    axios
    .get("https://elearning786.herokuapp.com" + lnknt)
    .then( (deta) => {
      setNdata(deta.data)
      /*localStorage.removeItem('ncdata');
      localStorage.setItem('ncdata', JSON.stringify(deta.data));*/
    })
    axios
    .get("https://elearning786.herokuapp.com" + lnklc)
    .then( (deta) => {
      setLdata(deta.data)
      /*localStorage.removeItem('lcdata');
      localStorage.setItem('lcdata', JSON.stringify(deta.data));*/
    })
  }
   
  useEffect(() => {
    $('#p-notes').click(function(){
      $('#notes').show();
      $('#books').hide();
      $('#lectures').hide();
    });
    $('#p-books').click(function(){
      $('#books').show();
      $('#lectures').hide();
      $('#notes').hide();
    });
    $('#p-lectures').click(function(){
      $('#lectures').show();
      $('#notes').hide();
      $('#books').hide();
    });
    getdata();
  });
  
  function Deletel(id, category){
  const qdata = {_id: id, lcategory: category}
  if (window.confirm("Do You Really Want To Delete This Lecture")) {
  axios.post('https://elearning786.herokuapp.com//deletelectures', qdata)
     .then(res => alert(res.data))
  }
  }
  
  function Deleten(id, category){
  const qdata = {_id: id, ncategory: category}
  if (window.confirm("Do You Really Want To Delete This Note")) {
  axios.post('https://elearning786.herokuapp.com/deletenotes', qdata)
     .then(res => alert(res.data))
  }
  }
  
  function Deleteb(id, category){
  const qdata = {_id: id, bcategory: category}
  if (window.confirm("Do You Really Want To Delete This Book")) {
  axios.post('https://elearning786.herokuapp.com/deletebooks', qdata)
     .then(res => alert(res.data))
  }
  }
  
  function Updatelset(id, lcategory, lvideoid, ltittle, lowner, linstructor, ldate, ldescription){
    setLupid(id);
    setLcategory(lcategory);
    setLvideoid(lvideoid);
    setLtittle(ltittle);
    setLowner(lowner);
    setLinstructor(linstructor);
    setLdate(ldate);
    setLdescription(ldescription);
  }
  
  function Updatenset(id, ncategory, ntittle, nowner, ninstructor, ndate, ndescription, nwriter, ndownloadlink){
    setNupid(id);
    setNcategory(ncategory);
    setNtittle(ntittle);
    setNowner(nowner);
    setNinstructor(ninstructor);
    setNdate(ndate);
    setNdescription(ndescription);
    setNwriter(nwriter);
    setNdownloadlink(ndownloadlink);
  }
  
  
  function Updatebset(id, bcategory, btittle, bowner, binstructor, bdate, bdescription, bwriter, bdownloadlink){
    setBupid(id);
    setBcategory(bcategory);
    setBtittle(btittle);
    setBowner(bowner);
    setBinstructor(binstructor);
    setBdate(bdate);
    setBdescription(bdescription);
    setBwriter(bwriter);
    setBdownloadlink(bdownloadlink);
  }


function Updatel(e){
    e.preventDefault(false);
  const qdata = {_id: lupid, ltittle: ltittle, lcategory: lcategory, lowner: lowner, linstructor: linstructor, ldescription: ldescription, ldate: ldate, lvideoid: lvideoid};
  if (window.confirm("Do You Really Want To Update This Lecture")) {
  axios.post('https://elearning786.herokuapp.com/updatelectures', qdata)
     .then(res => alert(res.data))
    
  }
  }
  
const [fileData, setFileData] = useState("");
function getFile(e){
  setFileData(e.target.files[0]);
};

function Updateb(e){
  e.preventDefault();
  const data = new FormData();
    data.append("file", fileData);
    data.append("btittle", btittle);
    data.append("_id", bupid);
    data.append("bowner", bowner);
    data.append("bcategory", bcategory);
    data.append("bdescription", bdescription);
    data.append("binstructor", binstructor);
    data.append("bwriter", bwriter);
    data.append("bdate", bdate);
    data.append("bdownloadlink", bdownloadlink);
  if (window.confirm("Do You Really Want To Update This Book")) {
  axios
    .post('https://elearning786.herokuapp.com/updatebooks', data)
    .then((res) => alert(res.data))
    
  }
}
function Updaten(e){
  e.preventDefault();
  const data = new FormData();
    data.append("file", fileData);
    data.append("ntittle", ntittle);
    data.append("_id", nupid);
    data.append("nowner", nowner);
    data.append("ncategory", ncategory);
    data.append("ndescription", ndescription);
    data.append("ninstructor", ninstructor);
    data.append("nwriter", nwriter);
    data.append("ndate", ndate);
    data.append("ndownloadlink", ndownloadlink);
  if (window.confirm("Do You Really Want To Update This Note")) {
  axios
    .post('https://elearning786.herokuapp.com/updatenotes', data)
    .then((res) => alert(res.data))
    
  }
}

  const tokenemailadminuser = localStorage.getItem('tokenemailadminuser');
 
if(tokenemailadminuser){
  if ((ldata || ndata) || bdata) {
    return(
      <>
      <div class="row pt-2 g-0">
        <div class="col-sm-4 d-flex justify-content-center p-r-log-b-h1 col-4 py-3" id="p-lectures">
        <Link class="nav-link d-flex " to="#">
          <h2 class="text-white"><b>Lectures</b>
          </h2>
        </Link>
        </div>
        <div class="col-sm-4 col-4 d-flex justify-content-center p-r-log-b-h1 py-3" id="p-notes">
        <Link class="nav-link d-flex" to="#">
          <h2 class="text-white"><b>Notes</b>
          </h2>
        </Link>
        </div>
        <div class="col-sm-4 col-4 d-flex justify-content-center p-r-log-b-h1 py-3" id="p-books">
        <Link class="nav-link d-flex" to="#">
          <h2 class="text-white"><b>Books</b>
          </h2>
        </Link>
        </div>
      </div>
      
      <div class="container  p-log rounded" id="notes">
          {
            ndata.map((data) =>
    <div class="row g-0 py-3 " >
      <div class="col-sm-12 px-2 r-log-b-h py-2">
      <h4>{data.ntittle} </h4>
      </div>
      <div class="col-sm-4 px-2 r-log-b py-3">
        <img src={data.nimage} className="card-img-top" alt="..."/>
      </div>
      <div class="col-sm-8 px-2  r-log-b  py-3">
        <div class="row">
          <div class="col-sm-12">
          <h6>{data.ndescription}</h6>
        <br/>
          </div>
          <div class="col-sm-5">
          <h6>Instructor : {data.ninstructor}</h6>
          </div>
          <div class="col-sm-6">
          <h6>Writer : {data.nwriter}</h6>
          </div>
          <div class="col-sm-12">
          <h6>Published Date : {data.ndate}</h6>
          </div>
          <div class="col-sm-12 pt-4 pb-2">
      <div class="row g-0">
        <div class="col-sm-4 col-4 d-flex justify-content-center ie ">
          <a  class="nav-link btn-primary text-white px-3 py-1" href={data.ndownloadlink}><i class="fas px-1 fa-arrow-alt-circle-down"></i>Download</a>
          </div>
          <div class="col-sm-4 col-4 d-flex justify-content-center ie">
          <button  data-bs-toggle="modal" data-bs-target="#updaten"  class="btn-success px-3 py-1"  onClick={() => Updatenset(data._id, data.ncategory, data.ntittle, data.nowner, data.ninstructor, data.ndate, data.ndescription, data.nwriter, data.ndownloadlink, )}   ><i class="fas fa-pen px-1"></i> Edit</button>
          </div>
          <div class="col-sm-4 col-4 d-flex justify-content-center ie">
          <button class="btn-danger px-3 py-1" onClick={() => Deleten(data._id, data.ncategory)} ><i class="fas px-1 fa-trash-alt"></i> Delete</button>
          </div>
      </div>
    </div>
    
        </div>
      </div>
      </div>
)
}
</div>

<div class="container p-log rounded" id="books">
          {
            bdata.map((data) =>
    <div class="row g-0 py-3 " >
      <div class="col-sm-12 px-2 r-log-b-h py-2">
      <h4>{data.btittle} </h4>
      </div>
      <div class="col-sm-4 px-2 r-log-b py-3">
        <img src={data.bimage} className="card-img-top" alt="..."/>
      </div>
      <div class="col-sm-8 px-2  r-log-b  py-3">
        <div class="row">
          <div class="col-sm-12">
          <h6>{data.bdescription}</h6>
        <br/>
          </div>
          <div class="col-sm-5">
          <h6>Instructor : {data.binstructor}</h6>
          </div>
          <div class="col-sm-6">
          <h6>Writer : {data.bwriter}</h6>
          </div>
          <div class="col-sm-12">
          <h6>Published Date : {data.bdate}</h6>
          </div>
          <div class="col-sm-12 pt-4 pb-2">
      <div class="row g-0">
        <div class="col-sm-4 col-4 d-flex justify-content-center ie ">
          <a  class="nav-link btn-primary text-white px-3 py-1" href={data.bdownloadlink}><i class="fas px-1 fa-arrow-alt-circle-down"></i> Download</a>
          </div>
          <div class="col-sm-4 col-4 d-flex justify-content-center ie">
          <button  data-bs-toggle="modal" data-bs-target="#updateb"  class="btn-success px-3 py-1"   onClick={() => Updatebset(data._id, data.bcategory, data.btittle, data.bowner, data.binstructor, data.bdate, data.bdescription, data.bwriter, data.bdownloadlink, )} ><i class="fas fa-pen px-1"></i> Edit</button>
          </div>
          <div class="col-sm-4 col-4 d-flex justify-content-center ie">
          <button class="btn-danger px-3 py-1"  onClick={() => Deleteb(data._id, data.bcategory)}><i class="fas px-1 fa-trash-alt"></i> Delete</button>
          </div>
      </div>
    </div>
    
        </div>
      </div>
      </div>
)
}
</div>

<div  class="p-log px-1" id="lectures">
      <div class="row g-0  pt-1" >
      {
          ldata.map((data) => 
          <div class="col-sm-12 py-2">
          <div class="row g-0" >
          <div class="col-sm-12 pt-2">
          <iframe src={data.lvideoid}  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
          </iframe>
          </div>
          <div class="col-sm-12 bg-light py-3">
            <div class="row g-0">
          <div class="col-sm-6 col-6 d-flex justify-content-center ie">
          <button data-bs-toggle="modal" data-bs-target="#update" class="btn-success  px-3 py-1" onClick={() => Updatelset(data._id, data.lcategory, data.lvideoid, data.ltittle, data.lowner, data.linstructor, data.ldate, data.ldescription)}><i class="fas fa-pen px-1"></i> Edit</button>
          </div>
          <div class="col-sm-6 col-6 d-flex justify-content-center ie">
          <button class="btn-danger px-3 py-1"  onClick={() => Deletel(data._id, data.lcategory)}><i class="fas px-1 fa-trash-alt"></i> Delete</button>
          </div>
        </div>
          </div>
          
          </div>
        </div>
          )
        }
      </div>
    </div>
    
<div class="modal fade" id="update" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog m-dlg modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header bg-info">
        <h5 class="modal-title" id="exampleModalLabel">Update Lectures Detailes Here</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body bg-info">
      
      <div class="py-2">
    <div class="row g-0">
        <div class="col-sm-12 ">
                <form onSubmit={(e) => Updatel(e)}  method="post" class=" border p-4 bg-light shadow">                    <div class="row g-0">     <div class="col-sm-12 d-flex justify-content-center">
                    <h4 class="mb-3 text-secondary">Update Lectures Detailes</h4>
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

          onChange={((e) => setLvideoid(e.target.value))}
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
                      <button type="submit" class="btn btn-primary px-4 py-2 ">Update Lecture</button>
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
    
    <div class="modal fade" id="updateb" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog m-dlg modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header bg-info">
        <h5 class="modal-title" id="exampleModalLabel">Update Books Detailes Here</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body bg-info">
      
      <div class="py-2">^
    <div class="row g-0">
        <div class="col-sm-12">
                <form onSubmit={(e) => Updateb(e)} method="post" class=" border p-4 bg-light shadow">                    <div class="row g-0">     <div class="col-sm-12 d-flex justify-content-center">
                    <h4 class="mb-3 text-secondary">Update Books Detailes</h4>
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
                      <button type="submit" class="btn btn-primary px-4 py-2 ">Update Book</button>
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
  
  <div class="modal fade" id="updaten" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog m-dlg modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header bg-info">
        <h5 class="modal-title" id="exampleModalLabel">Update Notes Detailes Here</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body bg-info">
      
      <div class="py-2">
    <div class="row g-0">
        <div class="col-sm-12">
                <form onSubmit={(e) => Updaten(e)} method="post" class=" border p-4 bg-light shadow">                    <div class="row g-0">     <div class="col-sm-12 d-flex justify-content-center">
                    <h4 class="mb-3 text-secondary">Update Notes Detailes</h4>
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
                      <button type="submit" class="btn btn-primary px-4 py-2 ">Update Note</button>
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
  } else {
    return(
      <>
      <div class="row py-2 g-0">
        <div class="col-sm-4 d-flex justify-content-center p-r-log-b-h1 col-4 py-3" id="p-lectures">
        <Link class="nav-link d-flex " to="#">
          <h2 class="text-white"><b>Lectures</b>
          </h2>
        </Link>
        </div>
        <div class="col-sm-4 col-4 d-flex justify-content-center p-r-log-b-h1 py-3" id="p-notes">
        <Link class="nav-link d-flex" to="#">
          <h2 class="text-white"><b>Notes</b>
          </h2>
        </Link>
        </div>
        <div class="col-sm-4 col-4 d-flex justify-content-center p-r-log-b-h1 py-3" id="p-books">
        <Link class="nav-link d-flex" to="#">
          <h2 class="text-white"><b>Books</b>
          </h2>
        </Link>
        </div>
      </div>
      <div class="py-2">
      <div  class="container p-log rounded py-2" id="lectures">
      
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
        
        <div class="container p-log rounded py-2" id="books">
        
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

<div class="container p-log rounded py-2" id="notes">

 <div class="row gy-3 gx-0 py-3 justify-content-around bg-light px-3">
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
      </div>
      </>
      );
  }
}else{
  if ((ldata || ndata) || bdata) {
    return(
      <>
      <div class="row pt-2 g-0">
        <div class="col-sm-4 d-flex justify-content-center p-r-log-b-h1 col-4 py-3" id="p-lectures">
        <Link class="nav-link d-flex " to="#">
          <h2 class="text-white"><b>Lectures</b>
          </h2>
        </Link>
        </div>
        <div class="col-sm-4 col-4 d-flex justify-content-center p-r-log-b-h1 py-3" id="p-notes">
        <Link class="nav-link d-flex" to="#">
          <h2 class="text-white"><b>Notes</b>
          </h2>
        </Link>
        </div>
        <div class="col-sm-4 col-4 d-flex justify-content-center p-r-log-b-h1 py-3" id="p-books">
        <Link class="nav-link d-flex" to="#">
          <h2 class="text-white"><b>Books</b>
          </h2>
        </Link>
        </div>
      </div>
      
      <div  class="p-log" id="lectures">
      <div class="row g-0 px-1 pt-1" >
      {
          ldata.map((data) => 
          <div class="col-sm-12 py-2">
          <div class="row g-0" >
          <div class="col-sm-12 pt-2">
          <iframe src={data.lvideoid}  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
          </iframe>
          </div>
          </div>
        </div>
          )
        }
        </div>
        </div>
        
        <div class="container p-log rounded" id="books">
          {
            bdata.map((data) =>
    <div class="row g-0 py-3 " >
      <div class="col-sm-12 px-2 r-log-b-h py-2">
      <h4>{data.btittle} </h4>
      </div>
      <div class="col-sm-4 px-2 r-log-b py-3">
        <img src={data.bimage} className="card-img-top" alt="..."/>
      </div>
      <div class="col-sm-8 px-2  r-log-b  py-3">
        <div class="row">
          <div class="col-sm-12">
          <h6>{data.bdescription}</h6>
        <br/>
          </div>
          <div class="col-sm-5">
          <h6>Instructor : {data.binstructor}</h6>
          </div>
          <div class="col-sm-6">
          <h6>Writer : {data.bwriter}</h6>
          </div>
          <div class="col-sm-12">
          <h6>Published Date : {data.bdate}</h6>
          </div>
          <div class="col-sm-12 pt-4 pb-2">
      <div class="row g-0">
        <div class="col-sm-12 col-12 d-flex justify-content-center ie ">
          <a  class="nav-link btn-primary text-white px-3 py-1" href={data.bdownloadlink}><i class="fas px-1 fa-arrow-alt-circle-down"></i> Download</a>
          </div>
      </div>
    </div>
    
        </div>
      </div>
      </div>
)
}
</div>

<div class="container p-log rounded" id="notes">
          {
            ndata.map((data) =>
    <div class="row g-0 py-3 " >
      <div class="col-sm-12 px-2 r-log-b-h py-2">
      <h4>{data.ntittle} </h4>
      </div>
      <div class="col-sm-4 px-2 r-log-b py-3">
        <img src={data.nimage} className="card-img-top" alt="..."/>
      </div>
      <div class="col-sm-8 px-2 r-log-b  py-3">
        <div class="row">
          <div class="col-sm-12">
          <h6>{data.ndescription}</h6>
        <br/>
          </div>
          <div class="col-sm-5">
          <h6>Instructor : {data.ninstructor}</h6>
          </div>
          <div class="col-sm-6">
          <h6>Writer : {data.nwriter}</h6>
          </div>
          <div class="col-sm-12">
          <h6>Published Date : {data.ndate}</h6>
          </div>
          <div class="col-sm-12 pt-4 pb-2">
      <div class="row g-0">
        <div class="col-sm-12 col-12 d-flex justify-content-center ie ">
          <a  class="nav-link btn-primary text-white px-3 py-1" href={data.ndownloadlink}><i class="fas px-1 fa-arrow-alt-circle-down"></i> Download</a>
          </div>
      </div>
    </div>
    
        </div>
      </div>
      </div>
)
}
</div>

      </>
      );
  } else {
    return(
      <>
      <div class="row py-2 g-0">
        <div class="col-sm-4 d-flex justify-content-center p-r-log-b-h1 col-4 py-3" id="p-lectures">
        <Link class="nav-link d-flex " to="#">
          <h2 class="text-white"><b>Lectures</b>
          </h2>
        </Link>
        </div>
        <div class="col-sm-4 col-4 d-flex justify-content-center p-r-log-b-h1 py-3" id="p-notes">
        <Link class="nav-link d-flex" to="#">
          <h2 class="text-white"><b>Notes</b>
          </h2>
        </Link>
        </div>
        <div class="col-sm-4 col-4 d-flex justify-content-center p-r-log-b-h1 py-3" id="p-books">
        <Link class="nav-link d-flex" to="#">
          <h2 class="text-white"><b>Books</b>
          </h2>
        </Link>
        </div>
      </div>
      <div class="py-2">
      <div  class="container p-log rounded py-2" id="lectures">
      
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
        
        <div class="container p-log rounded py-2" id="books">
        
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

<div class="container p-log rounded py-2" id="notes">

 <div class="row gy-3 gx-0 py-3 justify-content-around bg-light px-3">
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
      </div>
      </>
      );
  }
  
}
}
