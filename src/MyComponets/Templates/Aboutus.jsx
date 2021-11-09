import React from 'react';
import '../Css/Aboutus.css';
import '../Css/Main_bootstrap.css';
import aboutourcompany from '../Images/aboutourcompany.jpeg';

export default function Aboutus(){
  return(
      <div id="aboutus">
            <div className="row g-0">
            
               <div className="col-sm-12">
                  
                  
                  <div className="row g-0 m-0 p-4">
                     <div className="col-sm-6 d-flex justify-content-cente">
                     <div className="px-2 py-4"><h4 className="abouthead">About Our Company</h4>
                     <br/>
                     <h2 className="abouthead">Your Partner For Your Future Life</h2>
                     <br/>
                     <h5 className="text-white">dgfffkjd iiiiiitr gossox iiiitttt gggsffff yyysdi iiixdd fffxcc ggggxxxi dfi dd doo dgfffkjd iiiiiitr gossox iiiitttt gggsffff yyysdi iiixdd fffxcc ggggxxxi dfi dd doo  </h5>
                    </div>
                     </div>
                    <div className="col-sm-6 d-flex justify-content-center">
                     <img src={aboutourcompany} class="img-fluid" alt="..."/>
                    </div>
                  </div>
                  
                 
                  
               </div>
          
            </div>
           </div>
    );
}