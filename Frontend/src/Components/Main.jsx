import React from "react";
import "./Main.css";
import mainCard from "../Assets/main-card.png";
import { useLocation } from "react-router-dom";


const Main = () => {
	const location = useLocation();
	let heading = "WELCOME";
	if (location.pathname === "/") {
		heading = "WELCOME";
	} else if (location.pathname === "/contact") {
		heading = "CONTACT US";
	} else if (location.pathname === "/projects") {
		heading = "OUR PROJECTS";
	} else if (location.pathname === "/products") {
		heading = "OUR PRODUCTS";
	} else if (location.pathname === "/whoarewe") {
		heading = "WHO ARE WE?";
	} else if (location.pathname === "/productdetails") {
		heading = "";
	}
	return (
		<React.Fragment>
			<div className="inner-main-div animate__animated animate__fadeInLeft">
				<div className="main-heading-mob">{heading}</div>
				<img src={mainCard} alt="main-image" className="main-img"></img>
			</div>
		</React.Fragment>
	);
};

export default Main;
