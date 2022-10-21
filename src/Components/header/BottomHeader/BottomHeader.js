import React from "react";
import "./BottomHeader.css";
import { useParams, useLocation, NavLink } from "react-router-dom";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Typography from "@mui/material/Typography";
import {
	ctgsBreadcrumbs,
	doorBreadcrumbs,
	artiumsBreadcrumbs,
	curtainWallBreadcrumbs,
	slidingDoorBreadcrumbs,
	railingsBreadcrumbs,
	windowBreadcrumbs,
	shutterBreadcrumbs,
	partionsBreadcrumbs,
} from "../../../constants/index";
import { isActiveClass } from "../../../constants/index";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";

import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";

const drawerWidth = 240;
const navItems = ["Products", "Who Are We", "Projects", "Contact"];

function BottomHeader() {
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
	} else if (location.pathname === "/product-details") {
		heading = "";
	}
	console.log(heading);

	// Mobile Menu setting
	const [mobileOpen, setMobileOpen] = React.useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};
	const [open, setOpen] = React.useState(false);

	const handleClick = () => {
		setOpen(!open);
	};

	const drawer = (
		<Box
			// onClick={handleDrawerToggle}
			sx={{ textAlign: "center" }}
		>
			<Typography variant="h6" sx={{ my: 2 }}>
				<NavLink to="/">
					<img
						src="logo.png"
						alt="asd"
						width={170}
						onClick={handleDrawerToggle}
					/>
				</NavLink>
			</Typography>
			<Divider />
			<List>
				{/* {navItems.map((item) => (
					<ListItem key={item} disablePadding>
						<ListItemButton sx={{ textAlign: "left" }}>
							<ListItemText primary={item} />
						</ListItemButton>
					</ListItem>
				))} */}
				<ListItemButton>
					<NavLink
						to="/products"
						className="drawer-sec-heading"
						onClick={handleDrawerToggle}
						style={({ isActive }) => (isActive ? isActiveClass : undefined)}
					>
						<ListItemText primary="Products" className="" />
					</NavLink>
					{open ? (
						<ExpandLess onClick={handleClick} />
					) : (
						<ExpandMore onClick={handleClick} />
					)}
				</ListItemButton>
				<Collapse in={open} timeout="auto" unmountOnExit>
					<List component="div" disablePadding>
						<ListItemButton sx={{ pl: 4 }}>
							<NavLink
								to="/product-details/door"
								className="drawer-sec-sub-heading"
								onClick={handleDrawerToggle}
								style={({ isActive }) => (isActive ? isActiveClass : undefined)}
							>
								<ListItemText primary="Door" />
							</NavLink>
						</ListItemButton>
						<ListItemButton sx={{ pl: 4 }}>
							<NavLink
								to="/product-details/window"
								className="drawer-sec-sub-heading"
								onClick={handleDrawerToggle}
								style={({ isActive }) => (isActive ? isActiveClass : undefined)}
							>
								<ListItemText primary="Windows" />
							</NavLink>
						</ListItemButton>
						<ListItemButton sx={{ pl: 4 }}>
							<NavLink
								to="/product-details/curtian-wall"
								className="drawer-sec-sub-heading"
								onClick={handleDrawerToggle}
								style={({ isActive }) => (isActive ? isActiveClass : undefined)}
							>
								<ListItemText primary="Curtain Wall" />
							</NavLink>
						</ListItemButton>
						<ListItemButton sx={{ pl: 4 }}>
							<NavLink
								to="/product-details/railings"
								className="drawer-sec-sub-heading"
								onClick={handleDrawerToggle}
								style={({ isActive }) => (isActive ? isActiveClass : undefined)}
							>
								<ListItemText primary="Railings" />
							</NavLink>
						</ListItemButton>
						<ListItemButton sx={{ pl: 4 }}>
							<NavLink
								to="/product-details/ARTIUM"
								className="drawer-sec-sub-heading"
								onClick={handleDrawerToggle}
								style={({ isActive }) => (isActive ? isActiveClass : undefined)}
							>
								<ListItemText primary="Artiums" />
							</NavLink>
						</ListItemButton>
						<ListItemButton sx={{ pl: 4 }}>
							<NavLink
								to="/product-details/partions"
								className="drawer-sec-sub-heading"
								onClick={handleDrawerToggle}
								style={({ isActive }) => (isActive ? isActiveClass : undefined)}
							>
								<ListItemText primary="Partions" />
							</NavLink>
						</ListItemButton>
						<ListItemButton sx={{ pl: 4 }}>
							<NavLink
								to="/product-details/shutter"
								className="drawer-sec-sub-heading"
								onClick={handleDrawerToggle}
								style={({ isActive }) => (isActive ? isActiveClass : undefined)}
							>
								<ListItemText primary="Shutter" />
							</NavLink>
						</ListItemButton>
						<ListItemButton sx={{ pl: 4 }}>
							<NavLink
								to="/product-details/sliding-door"
								className="drawer-sec-sub-heading"
								onClick={handleDrawerToggle}
								style={({ isActive }) => (isActive ? isActiveClass : undefined)}
							>
								<ListItemText primary="Automatic Sliding Door" />
							</NavLink>
						</ListItemButton>
					</List>
				</Collapse>
				<ListItemButton>
					<NavLink
						to="/whoarewe"
						className="drawer-sec-heading"
						onClick={handleDrawerToggle}
						style={({ isActive }) => (isActive ? isActiveClass : undefined)}
					>
						<ListItemText primary="Who Are We" className="" />
					</NavLink>
				</ListItemButton>
				<ListItemButton>
					<NavLink
						to="/projects"
						className="drawer-sec-heading"
						onClick={handleDrawerToggle}
						style={({ isActive }) => (isActive ? isActiveClass : undefined)}
					>
						<ListItemText primary="Projects" className="" />
					</NavLink>
				</ListItemButton>
				<ListItemButton>
					<NavLink
						to="/contact"
						className="drawer-sec-heading"
						onClick={handleDrawerToggle}
						style={({ isActive }) => (isActive ? isActiveClass : undefined)}
					>
						<ListItemText primary="Contact" className="" />
					</NavLink>
				</ListItemButton>
			</List>
		</Box>
	);
  console.log("PATH",location.pathname)

	return (
		<>
			<div className="bottom-header-content">
				<ul className="nav-items">
					<li>
						<NavLink
							to="products"
							className="navlink"
							style={({ isActive }) => (isActive ? isActiveClass : undefined)}
						>
							{location.pathname === "/more-products" ||
							location.pathname === "/product-details/door" ||
							location.pathname === "/product-details/artium" ||
							location.pathname === "/product-details/curtain-wall" ||
							location.pathname === "/product-details/sliding-door" ||
							location.pathname === "/product-details/railings" ||
							location.pathname === "/product-details/window" ||
							location.pathname === "/product-details/partions" ||
							location.pathname === "/product-details/shutter" ? (
								<Breadcrumbs
									separator={<NavigateNextIcon fontSize="small" />}
									aria-label="breadcrumb"
									className="breadCrumb"
								>
									{location.pathname === "/more-products" && ctgsBreadcrumbs}
									{location.pathname === "/product-details/door" &&
										doorBreadcrumbs}
									{location.pathname === "/product-details/artium" &&
										artiumsBreadcrumbs}
									{location.pathname === "/product-details/curtain-wall" &&
										curtainWallBreadcrumbs}
									{location.pathname === "/product-details/sliding-door" &&
										slidingDoorBreadcrumbs}
									{location.pathname === "/product-details/railings" &&
										railingsBreadcrumbs}
									{location.pathname === "/product-details/window" &&
										windowBreadcrumbs}
									{location.pathname === "/product-details/partions" &&
										partionsBreadcrumbs}
									{location.pathname === "/product-details/shutter" &&
										shutterBreadcrumbs}
								</Breadcrumbs>
							) : (
								<p className="anti-skew">products</p>
							)}
						</NavLink>
					</li>
					<li>
						<NavLink
							to="whoarewe"
							className="navlink"
							style={({ isActive }) => (isActive ? isActiveClass : undefined)}
						>
							<p className="anti-skew">who are we</p>
						</NavLink>
					</li>
					<li>
						<NavLink
							to="projects"
							className="navlink"
							style={({ isActive }) => (isActive ? isActiveClass : undefined)}
						>
							<p className="anti-skew">projects</p>
						</NavLink>
					</li>
					<li>
						<NavLink
							to="contact"
							className="navlink"
							style={({ isActive }) => (isActive ? isActiveClass : undefined)}
						>
							<p className="anti-skew">contact</p>
						</NavLink>
					</li>
				</ul>
				<div className="header-heading">
					<h1>{heading}</h1>
				</div>
			</div>
			<Box sx={{ display: { xs: "block", sm: "none" } }}>
				<AppBar
					component="nav"
					sx={{
						color: "white",
						position: "absolute",

						// top: "px",
						// left: "12px",
					}}
				>
					<Toolbar
						sx={{
							background: "#f9f9f90",
							position: "absolute",
							color: "black",
							left: "12px",
							top: "5px",
						}}
					>
						<IconButton
							color="inherit"
							aria-label="open drawer"
							edge="start"
							onClick={handleDrawerToggle}
							sx={{
								mr: 2,
								display: { sm: "none" },
							}}
						>
							<MenuIcon />
						</IconButton>
						<Typography
							variant="h6"
							component="div"
							sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
						>
							ALAWAL
						</Typography>
						<Box sx={{ display: { xs: "none", sm: "block" }, color: "white" }}>
							{navItems.map((item) => (
								<Button key={item} sx={{ color: "#fff" }}>
									{item}
								</Button>
							))}
						</Box>
					</Toolbar>
				</AppBar>
				<Box component="nav" sx={{ color: "#fff" }}>
					<Drawer
						// container={container}
						variant="temporary"
						open={mobileOpen}
						onClose={handleDrawerToggle}
						ModalProps={{
							keepMounted: true,
						}}
						sx={{
							display: { xs: "block", sm: "none" },
							"& .MuiDrawer-paper": {
								boxSizing: "border-box",
								width: drawerWidth,
							},
						}}
					>
						{drawer}
					</Drawer>
				</Box>
			</Box>
		</>
	);
}

export default BottomHeader;
