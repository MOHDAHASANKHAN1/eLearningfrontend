import React from 'react';
import '../Css/Contactus.css';
import '../Css/Main_bootstrap.css';

export default function Contactus(){
  return(
      <div id="bod" className=" container-fluid mb-1 my-0 mt-1 mx-0" >
	<div className="contact-form">
		<h1>Contact Us</h1>
		<hr/>
		<div className="row">
			<div className="col-md-6">
				<h1 className="contcthead"><b>let's get in touch</b></h1>
				<br/><i className="fa fa-map-marker" aria-hidden="true"><h6 className="size">Location: Mohanlalganj, Lucknow</h6></i>
				<br/><i className="fa fa-envelope" aria-hidden="true"><h6 className="size">Email: aimtahsankhan@gmail.com</h6></i>
				<br/><i className="fa fa-phone" aria-hidden="true"><h6 className="size">Phone: +91-9918423716</h6></i>
				<br/>
				<br/>
						</div>
			<div className="col-md-6">
				<form method="post" action="/Contactus">
					<div className="form-group">
						<label>Name</label>
						<input className="form-control" name="name"/>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input className="form-control" name="email" />
					</div>
					<div className="form-group">
						<label>Massage</label>
						<textarea className="form-control" rows="7" name="disc"></textarea>
					</div>
					<br/>
					<div className="form-group">
						<div className="d-grid">
							<button className="btn btn-primary" type="submit">Send</button>
						</div>
					</div>
				</form>
			</div>
			</div>
		</div>
</div>
    );
}