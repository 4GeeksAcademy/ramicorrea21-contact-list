import React from "react";
import { Link } from "react-router-dom";
import ContactCard from "../component/ContactCard.jsx";
export const Home = () => {
	return(
		<>
		<div className=" d-flex justify-content-end container ">
			<div className="my-2">
			<Link to="/addcontact"><button className="btn btn-success">Add New Contact</button></Link>
			</div>
		</div>
		<div className="d-flex justify-content-center container my-2">
		<ContactCard/>
		</div>
		</>
	)
}
