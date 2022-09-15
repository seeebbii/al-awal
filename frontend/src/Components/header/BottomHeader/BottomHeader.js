import React from "react";
import "./BottomHeader.css";
import {useParams,useLocation, Link} from 'react-router-dom'

function BottomHeader() {
	const location=useLocation();
	let heading="WELCOME";
	if(location.pathname==="/"){
		 heading="WELCOME"
	}else if(location.pathname==="/contact"){
		 heading="CONTACT US"
	}else if(location.pathname==="/projects"){
		 heading="OUR PROJECTS"
	}else if(location.pathname==="/products"){
		 heading="OUR PRODUCTS"
	}else if(location.pathname==="/whoarewe"){
		heading="WHO ARE WE?"
   }else if(location.pathname==="/productdetails"){
	heading=""
   }
	return (
		<div className="bottom-header-content">
			<ul className="nav-items">
				<li>
					<Link to="products" className="navlink"><p className="anti-skew">products</p></Link>
				</li>
				<li>
					<Link to="whoarewe" className="navlink"><p className="anti-skew">who are we</p></Link>
				</li>
				<li>
					<Link to="projects" className="navlink"><p className="anti-skew">projects</p></Link>
				</li>
				<li>
					<Link to="contact" className="navlink"><p className="anti-skew">contact</p></Link>
				</li>
			</ul>
			<div className="header-heading">
				<h1>{heading}</h1>
			</div>
		</div>
	);
}

export default BottomHeader;
