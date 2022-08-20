import React from "react";
import "./BottomHeader.css";

function BottomHeader() {
	return (
		<div className="bottom-header-content">
			<ul className="nav-items">
				<li>
					<p className="anti-skew">products</p>
				</li>
				<li>
					<p className="anti-skew">who are we</p>
				</li>
				<li>
					<p className="anti-skew">projects</p>
				</li>
				<li>
					<p className="anti-skew">contact</p>
				</li>
			</ul>
			<div className="header-heading">
				<h1>WELCOME</h1>
			</div>
		</div>
	);
}

export default BottomHeader;
