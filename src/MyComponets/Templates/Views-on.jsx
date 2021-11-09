import React from 'react';
import '../Css/Views-on.css';
import insta from'../Images/inta.jpeg';
import face from'../Images/face.jpeg';
import linked from'../Images/linked.jpeg';
import '../Css/Main_bootstrap.css';

export default function Views_on(){
  return(
<div class="container-fluid py-4"   style={{backgroundColor: "#00ff99"}} id="viewon">
	<div class="row g-2">
		<div class="col-sm-4">
			<div class="card shadow-sm"><img src={face} class="card-img-top" alt="..."/>
				<div class="card-body bg-dark">
					<p class="card-text" id="card" style={{color: "#fff"}}>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
					<div class="d-grid gap-2">
						<button class="btn btn-outline-info" type="button">View On Facebook</button>
					</div>
				</div>
			</div>
		</div>
		<div class="col-sm-4">
			<div class="card shadow-sm"><img src={insta} class="card-img-top" alt="..."/>
				<div class="card-body bg-dark">
					<p class="card-text" style={{color: "#fff"}}>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
					<div class="d-grid gap-2">
						<button class="btn btn-outline-info" type="button">View On Instagram</button>
					</div>
				</div>
			</div>
		</div>
		<div class="col-sm-4">
			<div class="card shadow-sm"><img src={linked} class="card-img-top" alt="..."/>
				<div class="card-body bg-dark">
					<p class="card-text" style={{color: "#fff"}}>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
					<div class="d-grid gap-2">
						<button class="btn btn-outline-info" type="button">View On LinkedIn</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
    );
}