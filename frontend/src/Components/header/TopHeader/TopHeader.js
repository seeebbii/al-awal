import React from "react";
import { Link } from "react-router-dom";
import "./TopHeader.css";

function TopHeader() {
	return (
		<div className="top-header-content">
			<Link to='/'><img src="logo.png" alt="asd" width={170} /></Link>
			<p>EN/AR</p>
		</div>
	);
}

export default TopHeader;
