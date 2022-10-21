import React from "react";
import "./Bottom_mob_Nav.css";
import { NavLink } from "react-router-dom";
import { bottomNavIsActiveClass } from "../constants";

const Bottom_mob_Nav = () => {
	return (
		<div className="bottom-nav">
			<NavLink
				to="/products"
				className="link"
				style={({ isActive }) => (isActive ? bottomNavIsActiveClass : undefined)}
			>
				PRODUCTS
			</NavLink>
			<NavLink
				to="whoarewe"
				className="link"
				style={({ isActive }) => (isActive ? bottomNavIsActiveClass : undefined)}
			>
				WHO ARE WE
			</NavLink>
			<NavLink
				to="/projects"
				className="link"
				style={({ isActive }) => (isActive ? bottomNavIsActiveClass : undefined)}
			>
				PROJECTS
			</NavLink>
			<NavLink
				to="/contact"
				className="link"
				style={({ isActive }) => (isActive ? bottomNavIsActiveClass : undefined)}
			>
				CONTACT
			</NavLink>
		</div>
	);
};

export default Bottom_mob_Nav;
