import React from "react";
import BottomHeader from "./BottomHeader/BottomHeader";
import "./Header.css";
import TopHeader from "./TopHeader/TopHeader";

function Header() {
	return (
		<div id="main-header">
			<TopHeader />
			<BottomHeader />
		</div>
	);
}

export default Header;
