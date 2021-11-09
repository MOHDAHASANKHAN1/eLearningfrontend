import React from 'react';
import '../Css/Video-banner.css';
import video from '../Videos/index.mp4'
import audio from '../Videos/index1.mp4'
import '../Css/Main_bootstrap.css';

export default function Video_banner(){
  return(
      <div class="vid-parent rm-vid-marg">
            <video playsinline autoPlay muted loop>
               <source src={video} type="video/mp4"></source>
            </video>
            <div class="overlay"></div>
            <div class="vid-content">
               <h1 class="Welcome-content">Welcome to E Learning</h1>
               <small class="Learn-content mt-4">Learn and Implement</small>
               <br/>
               <a href="#"  class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal1">Get Started</a>
            </div>
         </div>
    );
}