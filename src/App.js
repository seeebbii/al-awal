import React from "react";
import "./App.css"
import Main from "./Components/Main";
import Header from "./Components/header/Header";
import HorizontalNav from "./Components/HorizontalNav";
import {Routes,Route} from "react-router-dom"
import Projects from "./Components/pages/Projects";
import ContactUS from "./Components/pages/ContactUS.jsx";
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
		</div>

	);
}

export default App;
