import React from 'react';
import '../Css/Footer.css';
import '../Css/Main_bootstrap.css';

export default function Footer(){
  return(
    <>
    <div class="">
      <footer class="footer">
  	 <div class="container">
  	 	<div class="row">
  	 		<div class="footer-col">
  	 			<h4>company</h4>
  	 			<ul>
  	 				<li><a href="#">about us</a></li>
  	 				<li><a href="#">our services</a></li>
  	 				<li><a href="#">privacy policy</a></li>
  	 				<li><a href="#">affiliate program</a></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>get help</h4>
  	 			<ul>
  	 				<li><a href="#">FAQ</a></li>
  	 				<li><a href="#">chat</a></li>
  	 				<li><a href="#">order status</a></li>
  	 				<li><a href="#">payment options</a></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>online courses</h4>
  	 			<ul>
  	 				<li><a href="#">python</a></li>
  	 				<li><a href="#">java</a></li>
  	 				<li><a href="#">c++ & c#</a></li>
  	 				<li><a href="#">nodejs</a></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>follow us</h4>
  	 			<div class="social-links">
  	 				<a href="#"><i class="fab fa-facebook-f"></i></a>
  	 				<a href="#"><i class="fab fa-twitter"></i></a>
  	 				<a href="#"><i class="fab fa-instagram"></i></a>
  	 				<a href="#"><i class="fab fa-linkedin-in"></i></a>
  	 			</div>
  	 		</div>
  	 	</div>
  	 </div>
  </footer>
<div class="d-flex justify-content-center bg-dark text-white">
  	   <div class="d-flex inline">
  	      <p class="">Created By <span class="text-danger">Ahsan Khan</span> <i class="far fa-copyright"></i> 2021 All rights reserved</p>
  	   </div>
  	 </div>
  	 </div>
  	 </>
    );
}