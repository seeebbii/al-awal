import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Button, Menu, MenuItem } from "@mui/material";
import { useLocation } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { isActiveClass, isInActive } from "../../../constants/index";


import "./TopHeader.css";

const useStyles = makeStyles({
	menu: {
		"& .MuiPaper-root": {
			backgroundColor: "lightblue",
		},
	},
	rootBtn: {
		color: "white !important",
		backgroundColor: "#0854A1 !important",
		fontFamily: "Light !important",
		padding: " 10px 50px !important",
		fontSize: "12px !important",
		fontStyle: "normal !important",
		fontWeight: "100 !important",
		letterSpacing: "1px !important",
		borderRadius: "0px !important",
		"&:hover": {
			backgroundColor: "#0854A1 !important",
		},
	},
	menuBody: {
		textAlign: "center !important",
		alignContent: "center !important",
		alignItems: "center !important",
		display: "block !important",
		padding: "0px !impotant",
		fontSize: "12px !important",

		fontFamily: "Light !important",
	},
	liItems: {
		justifyContent: "center !important",
		border: "1px solid black !important",
		backgroundColor: "#D9D9D9 !important",
		fontSize: "12px !important",
		fontFamily: "Light !important",
		borderRadius: "0px !important",
	},
	liItemsSmall: {
		fontSize: "11px !important",
	},
	liItemsLast: {
		backgroundColor: "#0854A1 !important",
		fontFamily: "Light !important",
		"&:hover": {
			backgroundColor: "#0854A1 !important",
		},
	},
});

function TopHeader() {
	const classes = useStyles();
	const location = useLocation();

	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
	return (
		<div className="top-header-content">
			<Link to="/">
				<img src="logo.png" alt="asd" width={170} />
			</Link>
			<div className="lng-selection">
				<p>EN/AR</p>
				{location.pathname === "/more-products" ||
				location.pathname === "/product-details/door" ||
				location.pathname === "/product-details/artium" ||
				location.pathname === "/product-details/curtain-wall" ||
				location.pathname === "/product-details/sliding-door" ||
				location.pathname === "/product-details/railings" ||
				location.pathname === "/product-details/window" ||
				location.pathname === "/product-details/partions" ||
				location.pathname === "/product-details/shutter" ? (
					<Button
						id="basic-button"
						aria-controls={open ? "basic-menu" : undefined}
						aria-haspopup="true"
						className={classes.rootBtn}
						aria-expanded={open ? "true" : undefined}
						onClick={handleClick}
					>
						Categories
					</Button>
				) : undefined}
				<Menu
					id="basic-menu"
					anchorEl={anchorEl}
					color="#D9D9D9"
					open={open}
					onClose={handleClose}
					sx={{ padding: "0px", display: { xs: "none", sm: "none" } }}
					className={classes.menuBody}
				>
					<MenuItem onClick={handleClose} className={classes.liItems}>
						<NavLink
							to="/product-details/door"
							style={({ isActive }) => (isActive ? isActiveClass : isInActive)}
						>
							<span className="ctg-btn-text">DOOR</span>
						</NavLink>
					</MenuItem>
					<MenuItem onClick={handleClose} className={classes.liItems}>
						<NavLink
							to="/product-details/window"
							style={({ isActive }) => (isActive ? isActiveClass : isInActive)}
						>
							<span className="ctg-btn-text"> WINDOWS</span>
						</NavLink>
					</MenuItem>
					<MenuItem onClick={handleClose} className={classes.liItems}>
						<NavLink
							to="/product-details/curtain-wall"
							style={({ isActive }) => (isActive ? isActiveClass : isInActive)}
						>
							<span className="ctg-btn-text"> CURTAIN WALL</span>
						</NavLink>
					</MenuItem>
					<MenuItem onClick={handleClose} className={classes.liItems}>
						<NavLink
							to="/product-details/railings"
							style={({ isActive }) => (isActive ? isActiveClass : isInActive)}
						>
							<span className="ctg-btn-text">RAILINGS</span>
						</NavLink>
					</MenuItem>
					<MenuItem onClick={handleClose} className={classes.liItems}>
						<NavLink
							to="/product-details/artium"
							style={({ isActive }) => (isActive ? isActiveClass : isInActive)}
						>
							<span className="ctg-btn-text"> ARTRIUMS</span>
						</NavLink>
					</MenuItem>
					<MenuItem onClick={handleClose} className={classes.liItems}>
						<NavLink
							to="/product-details/partions"
							style={({ isActive }) => (isActive ? isActiveClass : isInActive)}
						>
							<span className="ctg-btn-text">PARTIONS</span>
						</NavLink>
					</MenuItem>
					<MenuItem onClick={handleClose} className={classes.liItems}>
						<NavLink
							to="/product-details/shutter"
							style={({ isActive }) => (isActive ? isActiveClass : isInActive)}
						>
							<span className="ctg-btn-text">SHUTTER</span>
						</NavLink>
					</MenuItem>
					<MenuItem
						onClick={handleClose}
						className={`${classes.liItems} ${classes.liItemsSmall}`}
					>
						<NavLink
							to="/product-details/sliding-door"
							style={({ isActive }) => (isActive ? isActiveClass : isInActive)}
						>
							<span className="ctg-btn-text">AUTOMATIC SLIDING DOOR</span>
						</NavLink>
					</MenuItem>

					<MenuItem
						onClick={handleClose}
						className={`${classes.liItemsLast} ${classes.liItems}`}
					>
						&nbsp;
					</MenuItem>
				</Menu>
			</div>
		</div>
	);
}

export default TopHeader;