import React, { useState} from 'react';
import '../Css/Login-form.css';
import '../Css/Main_bootstrap.css';
import { useForm } from "react-hook-form";
import classNames from 'classnames';
import { useHistory } from "react-router-dom";
import axios from 'axios';
import  {NumberContext}  from './context';


function Login_form(){
 const history = useHistory();
 const {state, dispatch} = React.useContext(NumberContext);
  const { handleSubmit, register, formState: { errors } } = useForm();

function Submit(data){
  axios
    .post('https://elearning786.herokuapp.com/login', data)
    .then( (res) => {
        if (res.data.message == "Login Successfull Adminuser") {
        localStorage.setItem('userinfo', JSON.stringify(res.data.user));
        if (localStorage.getItem('userinfo')) {
          alert("Login Successfull");
          history.push("/");
          localStorage.setItem('tokenemailadminuser', res.data.user.email);
          window.location.reload(false);
        } else {
          localStorage.clear();
          history.push("/");
          window.location.reload(false);
        }
        
        }else if (res.data.message == "Login Successfull Studentuser"){
        localStorage.setItem('userinfo', JSON.stringify(res.data.user));
        localStorage.setItem('usercourses', JSON.stringify(res.data.user.courses));
        if (localStorage.getItem('userinfo')) {
          alert("Login Successfull");
          history.push("/");
          localStorage.setItem('tokenemailstudentuser', res.data.user.email);
          window.location.reload(false);
        } else {
          localStorage.clear();
          history.push("/");
          window.location.reload(false);
        }
        }else if (res.data.message == "Password Is Invalid") {
          alert(res.data.message);
        }else if (res.data.message == "This User Is Not Registered") {
          alert("This User " + res.data.user + " Is Not Registered");
        }
      })
  };
  
  return(
      <>
      <div class="modal fade" id="exampleModal2" >
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content bg-info">
      <div class="modal-header">
        <h3 class="modal-title" id="exampleModalLabel">Login Here</h3>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form  onSubmit={handleSubmit(Submit)} method="post">
        <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label h2">Email address</label>
    <input type="email" className={classNames("form-control ", {"is-invalid": errors.email}
    )} id="exampleInputEmail1" aria-describedby="emailHelp" autocomplete="off" 
    placeholder="Please Enter Your Email Id"
    {...register("email", {
          required: "Your Email Address Is Required Please Enter Email",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Please Enter Valid Email Address"
          }
        })}
    />
   <div id="emailHelp" className="form-text text-danger"><h5> {errors.email && errors.email.message}</h5></div>
  </div>
   <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label h2">Password</label>
    <input type="password" className={classNames("form-control ", {"is-invalid": errors.Password1}
    )} id="exampleInputPassword1" autocomplete="off"
    placeholder="Please Enter Your Password"
      {...register("password", {
          required: "Your Password Is Required Please Enter Password",
          minLength: {
            value: 8,
            message: "Remember Your Password For Future Login"
          }
        })}
     />
    <div id="password1Help" className="form-text text-danger"><h5>{errors.password && errors.password.message}</h5></div>
  </div>
  <div class="d-grid m-3">
  <button class="btn btn-primary " type="submit"><p class="h1">Login</p></button>
</div>

</form>
      </div>
      </div>
    </div>
</div>
</>
    );
}
export default Login_form;