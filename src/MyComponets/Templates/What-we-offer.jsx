import React, { useState, useEffect } from 'react';
import '../Css/What-we-offer.css';
import '../Css/Main_bootstrap.css';
import axios from 'axios';

export default function Views_on(){

  return(
    <div>
  <div className="whatoffer">
  <hr class="dropdown-divider"/>
<div className="row g-0">

   <div className="col-sm-12">
  
  <div className="row  g-0 m-0 p-0">
 <div className="col-sm-12 d-flex justify-content-center">
<div className="populer-div">
   <h1 className="head text-white">
  <b>What We Offer?</b>
   </h1>
</div>
 </div>
  </div>


<div className="row g-0 p-3 justify-content-start">
  <div className="col-sm-6 bg-light">
    <div className="row g-0 py-4">
      <div className="col-3 col-sm-3 d-flex justify-content-center align-items-center">
        <i class="fas fass fa-chalkboard-teacher"></i>
      </div>
      <div className="col-9 col-sm-9">
        <div className="companybox">
        <h3 className="companyboxhead">Our Skilled Teachers</h3>
        <p>jojii iidddr ffdssf ttffffff fffxjdf ttdd duxx fffiix dudi ixii ixid idid iiixci fiix cid </p>
        </div>
      </div>
    </div>
  </div>
</div>
<div className="row g-0 p-3 justify-content-end">
  <div className="col-sm-6 bg-light">
    <div className="row g-0 py-4">
      <div className="col-3 col-sm-3 d-flex justify-content-center align-items-center">
        <i class="fas fass fa-headset"></i>
      </div>
      <div className="col-9 col-sm-9">
        <div className="companybox">
        <h3 className="companyboxhead">24x7 Hours Services</h3>
        <p>jojii iidddr ffdssf ttffffff fffxjdf ttdd duxx fffiix dudi ixii ixid idid iiixci fiix cid </p>
        </div>
      </div>
    </div>
  </div>
</div>
<div className="row g-0 p-3 justify-content-start">
  <div className="col-sm-6 bg-light">
    <div className="row g-0 py-4">
      <div className="col-3 col-sm-3 d-flex justify-content-center align-items-center">
        <i class="fas fass fa-certificate"></i>
      </div>
      <div className="col-9 col-sm-9">
        <div className="companybox">
        <h3 className="companyboxhead">Certificate Distribution</h3>
        <p>jojii iidddr ffdssf ttffffff fffxjdf ttdd duxx fffiix dudi ixii ixid idid iiixci fiix cid </p>
        </div>
      </div>
    </div>
  </div>
</div>

  
   </div>
  
</div>
 </div>
 </div>
);
}