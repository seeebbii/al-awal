import React from "react";
import "./App.css";
import Main from "../src/components/Main";
import Header from "../src/components/header/Header";
import WhoAreWe from "./components/WhoAreWe";
function App() {
	return (
		<div className="app">
			<Header />
			{/* <Main /> */}
			<WhoAreWe />
		</div>
	);
}

export default App;
