import React from "react";
import "./Main.css";
import mainCard from "../Assets/main-card.png";


const Main = () => {
	return (
		<React.Fragment>
			<div className="inner-main-div animate__animated animate__fadeInLeft">
				<img src={mainCard} alt="main-image" className="main-img"></img>
			</div>
		</React.Fragment>
	);
};

export default Main;
