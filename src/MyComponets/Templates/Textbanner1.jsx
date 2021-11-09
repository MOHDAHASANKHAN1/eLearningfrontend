import React from 'react';
import '../Css/Textbanner1.css';
import '../Css/Main_bootstrap.css';

export default function Textbanner1(){
  return(
      <div class="text-bannerr">
            <div class="container-fluide d-flex flex-column flex-md-row justify-content-between bg-danger p-4">
               <h5>
                  <a class="d-md-inline-block  bottem-banner" href="#">
                     <li class="fas fa-book-open px-2"></li>
                     100+ Online Courses
                  </a>
               </h5>
               <h5>
                  <a class="d-md-inline-block  bottem-banner" href="#">
                     <li class="fas fa-users px-2"></li>
                     Expert instructors
                  </a>
               </h5>
               <h5>
                  <a class=" d-md-inline-block bottem-banner" href="#">
                     <li class="fas fa-keyboard px-2"></li>
                     Lifetime Access
                  </a>
               </h5>
               <h5><a class="d-md-inline-block bottem-banner" href="#"><i class="fas fa-rupee-sign px-2"></i>Money Back Guarantee*</a></h5>
            </div>
         </div>
    );
}