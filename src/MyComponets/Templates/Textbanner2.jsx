import React from 'react';
import '../Css/Textbanner2.css';
import '../Css/Main_bootstrap.css';

export default function Textbanner2(){
  return(
      <div class="text-bannerr mt-1">
            <div class="container-fluide d-flex flex-column flex-md-row justify-content-between bg-success border border-light p-4">
               <h5>
                  <a class="d-md-inline-block  bottem-banner2" href="#">
                    <i class="fab fa-whatsapp px-2"></i>
                     WhatsApp
                  </a>
               </h5>
               <h5>
                  <a class="d-md-inline-block  bottem-banner2" href="#">
                     <i class="fab fa-facebook-f px-2"></i>
                   Facebook
                  </a>
               </h5>
               <h5>
                  <a class=" d-md-inline-block bottem-banner2" href="#">
                     <i class="fab fa-linkedin-in px-2"></i>
                     LinkedIn
                  </a>
               </h5>
               <h5><a class="d-md-inline-block bottem-banner2" href="#">
                 <i class="fab fa-twitter px-2"></i>
                 Twitter</a></h5>
            </div>
         </div>
         
    );
}