import React, {useRef, useState, useEffect} from 'react';
import '../Css/Registration-form.css';
import '../Css/Main_bootstrap.css';
import { useForm } from "react-hook-form";
import classNames from 'classnames';
import axios from 'axios';
import  {NumberContext}  from './context';
import { useHistory } from "react-router-dom"
import $ from 'jquery';

function Registration_form(){
const history = useHistory();
const {state, dispatch} = React.useContext(NumberContext);
const { handleSubmit, register, formState: { errors }, watch} = useForm();

const Password = useRef({});
Password.current = watch("password", "");

  useEffect(() => {
    $('input').hover(function(){
      $(this).css({"background-color": "#ffb3ff"});
    }, function(){
      $(this).css({"background-color": "white"});
    });
  });

function Submit(data){
  axios
    .post('https://elearning786.herokuapp.com/register', data)
    .then( (res) => {
      if (res.data.message == "Successfully Registeruser") {
        localStorage.setItem('userinfo', JSON.stringify(res.data.user));
        const userinfo = localStorage.getItem('userinfo');
        if (userinfo) {
          localStorage.setItem('tokenemailstudentuser', res.data.user);
          alert('You Have SuccessFully Registered');
          history.push("/");
          window.location.reload(false);
        } else {
          localStorage.clear();
          history.push("/");
          window.location.reload(false);
        }
      }else if (res.data.message == "This User Is Already Exist") {
        alert("This User " + res.data.user + " Is Already Exist")
      }else if (res.data.message == "Successfully Registeradmin") {
        localStorage.setItem('userinfo', JSON.stringify(res.data.user));
       const userinfo = localStorage.getItem('userinfo');
        if (userinfo) {
          localStorage.setItem('tokenemailadminuser', res.data.user);
          alert('You Have SuccessFully Registered');
          history.push("/");
          window.location.reload(false);
        } else {
          localStorage.clear();
          history.push("/");
          window.location.reload(false);
        }
      }
      });
}

  return(
<div className="modal fade" id="exampleModal1" >
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content bg-info">
      <div className="modal-header">
        <h3 className="modal-title" id="exampleModalLabel">SignUp Here</h3>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <form onSubmit={handleSubmit(Submit)} method="post">
  <div className="mb-3">
    <label for="exampleInputfirstname" className="form-label h2">First Name</label>
    <input type="text" className={classNames("form-control ", {"is-invalid": errors.firstname,}
    )} id="exampleInputfirstname" aria-describedby="firstnameHelp" autocomplete="off" 
    placeholder="Enter Your FirstName"
    {...register("firstname", {
          required: "Your Firstname Is Required Please Enter Firstname",
          pattern: {
            value: /[A-Za-z0-9]{4}/,
            message: "Your Firstname Contain Minimum 4 Charecters Only letters And Numbers"
          }
        })}
       /* onChange={((e) => setFirstname(e.target.value))}*/
    />
    <div id="firstnamelHelp" className="form-text text-danger"><h5>{errors.firstname && errors.firstname.message}</h5></div>
  </div>
  <div className="mb-3">
    <label for="exampleInputlastname" className="form-label h2">Last Name</label>
    <input type="text" className={classNames("form-control ", {"is-invalid": errors.lastname}
    )} id="exampleInputlastname" aria-describedby="lastnamenameHelp"  autocomplete="off"
    placeholder="Enter Your LastName"
   {...register("lastname", {
          required: "Your Lastname Is Required Please Enter Lastname",
          pattern: {
            value: /[A-Za-z0-9]{4}/,
            message: "Your Lastname Contain Minimum 4 Charecters Only letters And Numbers"
          }
        })}
       /* onChange={((e) => setLastname(e.target.value))}*/
    />
    <div id="firstnamelHelp" className="form-text text-danger"><h5>{errors.lastname && errors.lastname.message}</h5></div>
  </div>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label h2">Email address</label>
    <input type="email" className={classNames("form-control ", {"is-invalid": errors.email}
    )} id="exampleInputEmail1" aria-describedby="emailHelp" autocomplete="off" 
    placeholder="Enter Your Email Address"
    {...register("email", {
          required: "Your Email Address Is Required Please Enter Email",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Please Enter Valid Email Address"
          }
        })}
        /*onChange={((e) => setEmail(e.target.value))}*/
    />
   <div id="emailHelp" className="form-text text-danger"><h5> {errors.email && errors.email.message}</h5></div>
  </div>
  <div className="mb-3">
    <label for="exampleInputmobilenumber" className="form-label h2">Mobile Number</label>
    <input type="text" className={classNames("form-control ", {"is-invalid": errors.MobileNumber}
    )} id="exampleInputmobilenumber" aria-describedby="mobilenumberHelp" name="MobileNumber" autocomplete="off"
    placeholder="Enter Your MobileNumber"
    {...register("mobilenumber", {
          required: "Your Mobile Number Required Please Enter Mo. No.",
          pattern: {
            value: /[789]{1}[0-9]{9}/,
            message: "Please Enter Valid Mobile Number"
          }
        })}
        /*onChange={((e) => setMobilenumber(e.target.value))}*/
    />
    <div id="mobilenumberHelp" className="form-text text-danger"><h5> {errors.mobilenumber && errors.mobilenumber.message}</h5></div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label h2">Password</label>
    <input type="password" className={classNames("form-control ", {"is-invalid": errors.Password1}
    )} id="exampleInputPassword1" autocomplete="off"
    placeholder="Create Your New Strong Password"
      {...register("password", {
          required: "Your Password Is Required Please Enter Password",
          minLength: {
            value: 8,
            message: "Password Must Have At Least 8 Characters"
          }
        })}
        /*onChange={((e) => setPassword(e.target.value))}*/
     />
    <div id="password1Help" className="form-text text-danger"><h5>{errors.password && errors.password.message}</h5></div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword2" className="form-label h2">Confirm Password</label>
    <input type="password" className={classNames("form-control ", {"is-invalid": errors.Password2}
    )}  id="exampleInputPassword2"    autocomplete="off" 
    placeholder="Confirm Your Password"
    {...register("cpassword", {
          validate: value =>
            value === Password.current || "Your Password Do Not Match"
          })}
          /*onChange={((e) => setCpassword(e.target.value))}*/
    />
    <div id="password2Help" className="form-text text-danger"><h5>{errors.cpassword && errors.cpassword.message}</h5></div>
  </div>
  <div className="d-grid m-3">
  <button className="btn btn-primary " type="submit"><p className="h1">SignUp</p></button>
</div>
<div className="d-grid">
  <button className="btn alreadyanccount btn-danger"  data-bs-toggle="modal" data-bs-target="#exampleModal2" type="button"><p className="h3 text-dark alreadyanccount">Already Have An Account Click Here</p></button>
</div>

</form>
      </div>
      </div>
    </div>
  
</div>
    );
}
export default Registration_form;