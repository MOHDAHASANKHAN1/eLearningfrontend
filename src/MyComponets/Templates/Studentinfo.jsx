import React, {useState, useEffect, useRef} from 'react';
import axios from 'axios';
import '../Css/Studentinfo.css';
import $ from 'jquery';
import '../Css/Registration-form.css';
import '../Css/Main_bootstrap.css';
import { useForm } from "react-hook-form";
import classNames from 'classnames';

export default function Studentinfo(){
/*const [data, setData] = useState([]);*/
const data = JSON.parse(localStorage.getItem('sdata'));
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

const [upid, setUpid] = useState('');
//end user info variabel

function getdata(){
  
  axios
    .get('https://elearning786.herokuapp.com/')
    .then( (deta) => {
      if (!data) {
      localStorage.removeItem('sdata');
      localStorage.setItem('sdata', JSON.stringify(deta.data.user));
      }
    })
    
};
 useEffect(() => {
    getdata();
  });

function Delete(id){
  const qdata = {_id: id}
  if (window.confirm("Do You Really Want To Delete This User")) {
  axios.post('https://elearning786.herokuapp.com/user/delete', qdata)
     .then(res => alert(res.data))
    
  }
}

function Updateset(upid, firstname, lastname, email, mobilenumber, password){
  setFirstname(firstname);
  setLastname(lastname);
  setEmail(email);
  setMobilenumber(mobilenumber);
  setPassword(password);
  setCpassword(password);
  setUpid(upid);
}

function Update(e){
  e.preventDefault();
  const qdata = {_id: upid, firstname: firstname, lastname: lastname, email: email, mobilenumber: mobilenumber, password: password, cpassword: cpassword};
  if (window.confirm("Do You Really Want To Update This User")) {
  axios.post('https://elearning786.herokuapp.com/user/update', qdata)
     .then(res => alert(res.data.message))
    
  }
}

    if (data) {
      return(
        <>
        
      <div class="container pt-2 all-available">
      <div class="row g-0">
        <div class="col-sm-12 d-flex justify-content-center r-log-b-h1 p-3 bg-secondary">
          <h2 class="text-white"><b>All Students Information</b></h2>
        </div>
      </div>
    </div>
        
        <div class="container overflow-auto pt-2">
        <table class="table table-primary">
  <thead>
    <tr>
      <th>Firstname</th>
      <th>Lastname</th>
      <th>Email</th>
      <th>Mobile No.</th>
      <th>Password</th>
      <th colspan="2">Action</th>
    </tr>
  </thead>
  <tbody>
    {
      data.map( ( data) =>
      <tr>
        <td>{data.firstname}</td>
        <td>{data.lastname}</td>
        <td>{data.email}</td>
        <td>{data.mobilenumber}</td>
        <td>{data.password}</td>
        <td>
        <div>
        <button class="btn-success" data-bs-toggle="modal" data-bs-target="#updateuser" onClick={() => Updateset(data._id, data.firstname, data.lastname, data.email, data.mobilenumber, data.password)}><i class="fas fa-pen "></i></button>
        </div>
        </td>
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

<div class="modal fade" id="updateuser" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog m-dlg modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header bg-info">
        <h5 class="modal-title" id="exampleModalLabel">Update User Detailes Here</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body bg-info">
       <div class="container pb-2">
    <div class="row g-0">
        <div class="col-sm-12">
                <form onSubmit={(e) => Update(e)} method="post" class=" border p-4 bg-light shadow">                    <div class="row g-0">     <div class="col-sm-12 d-flex justify-content-center">
                    <h4 class="mb-3 text-secondary">Update User Detailes</h4>
                    </div>
                    </div>
                    <div class="row">
                        <div class="mb-3 col-sm-6">
                        <label>First Name<span class="text-danger">*</span></label>
    <input type="text" value={firstname} className="form-control"
    
    placeholder="Enter Your FirstName"
    
        onChange={((e) => setFirstname(e.target.value))}
    />
                        </div>

                        <div class="mb-3 col-sm-6">
                            <label>Last Name<span class="text-danger">*</span></label>
  <input type="text" value={lastname} className="form-control"
    placeholder="Enter Your LastName"
   
       onChange={((e) => setLastname(e.target.value))}
    />
                        </div>
                        <div class="mb-3 col-sm-6">
                        <label>Email Address<span class="text-danger">*</span></label>
    <input type="email" value={email} className="form-control"
    placeholder="Enter Your Email Address"
    
        onChange={((e) => setEmail(e.target.value))}
    />
                        </div>
                        <div class="mb-3 col-sm-6">
                            <label>Mobile Number<span class="text-danger">*</span></label>
    <input type="text" value={mobilenumber} className="form-control"
    placeholder="Enter Your MobileNumber"
    
        onChange={((e) => setMobilenumber(e.target.value))}
    />
                        </div>
                        <div class="mb-3 col-sm-6">
                            <label>Password<span class="text-danger">*</span></label>
    <input type="password" value={password} className="form-control"
    placeholder="Create Your New Strong Password"
    
        onChange={((e) => setPassword(e.target.value))}
     />
                        </div>
                        <div class="mb-3 col-sm-6">
                            <label>Confirm Password<span class="text-danger">*</span></label>
    <input type="password" value={cpassword} className="form-control"
    placeholder="Confirm Your Password"

          onChange={((e) => setCpassword(e.target.value))}
    />
                        </div>
                        <div class="col-md-12">
                      <div class="row g-0">
                      <div class="col-sm-12  col-12 d-flex justify-content-center">
                      <button type="submit" class="btn btn-primary">Update User</button>
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
    <div class="container pt-2 all-available">
      <div class="row g-0">
        <div class="col-sm-12 d-flex justify-content-center r-log-b-h1 p-3 bg-secondary">
          <h2 class="text-white"><b>All Students Information</b></h2>
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