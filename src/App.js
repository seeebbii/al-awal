import React from "react";

import "./App.css"
import Main from "./components/Main";
import Header from "./components/header/Header";
import HorizontalNav from "./components/HorizontalNav";
import {Routes,Route} from "react-router-dom"
import Projects from "./components/pages/Projects.jsx";
import ContactUS from "./components/pages/ContactUS.jsx";
import Products from "./components/pages/Products.jsx";
import WhoAreWe from "./components/pages/WhoAreWe.jsx";
import ProductDetails from "./components/pages/ProductDetails";
import {useLocation} from "react-router-dom"

//import WhoAreWe from "./components/WhoAreWe";

function App() {
	const location=useLocation();
	return (
		<div className="app">
			<Header />
			<div className="app-main-div">
			<Routes>	
			<Route path="/" element={<Main/>}/>
			<Route path="/products" element={<Products/>}/>
			<Route path="/whoarewe" element={<WhoAreWe/>}/>
			<Route path="/projects" element={<Projects/>}/>
			<Route path="/contact" element={<ContactUS/>}/>
			<Route path="/productdetails" element={<ProductDetails/>}/>
			</Routes>
			{location.pathname!=="/productdetails"&&<HorizontalNav/>}
			</div>

			{/* <Main /> */}
			{/* <WhoAreWe /> */}
		

		</div>

	);
}

export default App;
