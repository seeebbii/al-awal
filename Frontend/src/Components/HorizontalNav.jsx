import React from 'react'
import { Link } from 'react-router-dom'
import './HorizontalNav.css'
import { useParams,useLocation } from 'react-router-dom'
 


const HorizontalNav = () => {
  const location=useLocation();
  const loc=location.pathname
   console.log(loc)
  return (
		<div
			className="horiz-nav animate__animated animate__fadeIn"
			style={loc === "/" ? { width: "36%" } : { width: "27%" }}
		>
			{loc !== "/products" && (
				<div>
					<p>
						<Link to="/products" className="link">
							PRODUCTS
						</Link>
					</p>
				</div>
			)}
			{loc !== "/whoarewe" && (
				<div>
					<p style={{ marginTop: "580%" }}>
						<Link to="/whoarewe" className="link">
							WHO ARE WE?
						</Link>
					</p>
				</div>
			)}
			{loc !== "/projects" && (
				<div>
					<p>
						<Link to="/projects" className="link">
							PROJECTS
						</Link>
					</p>
				</div>
			)}
			{loc !== "/contact" && (
				<div>
					<p>
						<Link to="/contact" className="link">
							CONTACT
						</Link>
					</p>
				</div>
			)}
		</div>
	);
}

export default HorizontalNav