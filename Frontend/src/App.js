import React from "react";

import "./App.css";
import Main from "./Components/Main";
import Header from "./Components/header/Header";
import HorizontalNav from "./Components/HorizontalNav";
import { Routes, Route } from "react-router-dom";
import Projects from "./Components/pages/Projects.jsx";
import ContactUS from "./Components/pages/ContactUS.jsx";
import Products from "./Components/pages/Products.jsx";
import WhoAreWe from "./Components/pages/WhoAreWe.jsx";
import ProductDetails from "./Components/pages/ProductDetails";
import { useLocation } from "react-router-dom";
import MoreProducts from "./Components/pages/MoreProducts";
import Bottom_mob_Nav from "./Components/Bottom_mob_Nav";





function App() {
	const location = useLocation()
	const loc=location.pathname;
	let HorizontalNavbar=<HorizontalNav/>;
	if(loc==="/"||loc==="/products"||loc==="/whoarewe"||loc==="/projects"||loc==="/contact")
	{
     HorizontalNavbar=<HorizontalNav/>
	}
	else if(loc!=="/"||loc!=="/products"||loc!=="/whoarewe"||loc!=="/projects"||loc!=="/contact")
	{
		HorizontalNavbar=null;
	}
	return (
		<div className="app">
			<Header />
			<div className="app-main-div">
				<Routes>
					<Route path="/" element={<Main />} />
					<Route path="/products" element={<Products />} />
					<Route path="/whoarewe" element={<WhoAreWe />} />
					<Route path="/projects" element={<Projects />} />
					<Route path="/more-products" element={<MoreProducts />} />
					<Route path="/contact" element={<ContactUS />} />
					<Route path="/productdetails/:id" element={<ProductDetails />} />
				</Routes>
				{HorizontalNavbar}
				<Bottom_mob_Nav/>
			</div>

			{/* <Main /> */}
			{/* <WhoAreWe /> */}
		</div>
	);
}

export default App;
