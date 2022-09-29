import React from "react";
import { Link } from "react-router-dom";
import { Button, Menu, MenuItem } from "@mui/material";
import { useLocation } from "react-router-dom";
import { makeStyles } from "@mui/styles";

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
	const loc = location.pathname;

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
			<div>
				<p>EN/AR</p>
				{loc === "/more-products" && (
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
				)}
				<Menu
					id="basic-menu"
					anchorEl={anchorEl}
					color="#D9D9D9"
					open={open}
					onClose={handleClose}
					sx={{ padding: "0px" }}
					className={classes.menuBody}
				>
					<MenuItem onClick={handleClose} className={classes.liItems}>
						DOOR
					</MenuItem>
					<MenuItem onClick={handleClose} className={classes.liItems}>
						WINDOWS
					</MenuItem>
					<MenuItem onClick={handleClose} className={classes.liItems}>
						CURTAIN WALL
					</MenuItem>
					<MenuItem onClick={handleClose} className={classes.liItems}>
						RAILINGS
					</MenuItem>
					<MenuItem onClick={handleClose} className={classes.liItems}>
						ARTRIUMS
					</MenuItem>
					<MenuItem onClick={handleClose} className={classes.liItems}>
						PARTIONS
					</MenuItem>
					<MenuItem onClick={handleClose} className={classes.liItems}>
						SHUTTER
					</MenuItem>
					<MenuItem
						onClick={handleClose}
						className={`${classes.liItems} ${classes.liItemsSmall}`}
					>
						AUTOMATIC SLIDING DOOR
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