import React, {useEffect, useState} from 'react';
import axios from 'axios';

export default function Adminhome(){
  /*const [data, setData] = useState([]);*/
  const data = JSON.parse(localStorage.getItem('odata'));
  
function Delete(id){
  const qdata = {_id: id}
  if (window.confirm("Do You Really Want To Delete This User")) {
  axios.post('https://elearning786.herokuapp.com/cordered/delete', qdata)
     .then(res => alert(res.data))
    
  }
}

function getdata(){
  axios
    .get('https://elearning786.herokuapp.com/courses')
    .then( (deta) => {
      localStorage.removeItem('cc');
      localStorage.setItem('cc', deta.data.cc);
    })
    axios
    .get('https://elearning786.herokuapp.com/')
    .then( (deta) => {
      localStorage.removeItem('uc');
      localStorage.setItem('uc', deta.data.uc);
    })
    axios
    .get('https://elearning786.herokuapp.com/cordered')
    .then( (deta) => {
      localStorage.removeItem('odata');
      localStorage.setItem('odata', JSON.stringify(deta.data.odata));
      localStorage.removeItem('oc');
      localStorage.setItem('oc', deta.data.oc);
    })
};

 useEffect(() => {
    getdata();
  });
if(data){
    return(
    <>
    <div class="py-3">
    
      <div class="row gy-3 gx-0  pb-3 justify-content-around bg-light px-3">
        <div class="col-sm-3 bg-success d-flex justify-content-center p-5">
          <div class="">
          <h2 class="text-center">{localStorage.getItem('cc')}</h2>
          <h2 class="text-center">Courses</h2>
          </div>
        </div>
        <div class="col-sm-3 bg-warning d-flex justify-content-center p-5">
          <div class="">
          <h2 class="text-center">{localStorage.getItem('uc')}</h2>
          <h2 class="text-center">Students</h2>
          </div>
        </div>
        <div class="col-sm-3 bg-primary d-flex justify-content-center p-5">
          <div class="">
          <h2 class="text-center">{localStorage.getItem('oc')}</h2>
          <h2 class="text-center">Sold</h2>
          </div>
        </div>
      </div>
      
    </div>
      <div class="container all-available">
      <div class="row g-0">
        <div class="col-sm-12 d-flex justify-content-center r-log-b-h1 p-3 bg-secondary">
          <h2 class="text-white"><b>Ordered Courses</b></h2>
        </div>
      </div>
    </div>
    
        <div class="container overflow-auto pt-2">
        <table class="table table-primary">
  <thead>
    <tr>
      <th>Order Id</th>
      <th>Student Email</th>
      <th>Course</th>
      <th>Payment</th>
      <th>Date</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    {
      data.map( ( data) =>
      <tr>
        <td>{data._id}</td>
        <td>{data.email}</td>
        <td>{data.coursename}</td>
        <td>{data.paymentstatus}</td>
        <td>{data.date}</td>
        <td>
        <div>
        <button class="btn-danger"  onClick={() => Delete(data._id)}><i class="fas fa-trash-alt"></i></button>
        </div>
        </td>
      </tr>
      )
    }
  </tbody>
</table>
</div>

    </>
    );
  } else {
    return(
        <>
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
      
        <div class="container pt-2 all-available">
      <div class="row g-0">
        <div class="col-sm-12 d-flex justify-content-center r-log-b-h1 p-3 bg-secondary">
          <h2 class="text-white"><b>Ordered Courses</b></h2>
        </div>
      </div>
    </div>
    <div class="container py-2">
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
        </>
      );
  }
}