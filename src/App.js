import React from "react";

import "./App.css"
import Main from "./components/Main";
import Header from "./components/header/Header";
import HorizontalNav from "./components/HorizontalNav";
import {Routes,Route} from "react-router-dom"
import Projects from "./components/pages/Projects";
import ContactUS from "./components/pages/ContactUS.jsx";

//import WhoAreWe from "./components/WhoAreWe";

function App() {
	return (
		<div className="app">
			<Header />
			<div className="app-main-div">
			<Routes>	
			<Route path="/" element={<Main/>}/>
			<Route path="/projects" element={<Projects/>}/>
			<Route path="/contact" element={<ContactUS/>}/>
			</Routes>
			<HorizontalNav/>
			</div>

			{/* <Main /> */}
			{/* <WhoAreWe /> */}

		</div>

	);
}

export default App;
