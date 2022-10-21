import { Link } from "react-router-dom";

export const categories = [
	{
		id: 1,
		text: "door",
	},
	{
		id: 2,
		text: "artiums",
	},
	{
		id: 3,
		text: "curtain wall",
	},
	{
		id: 4,
		text: "sliding door",
	},
	{
		id: 5,
		text: "railings",
	},
	{
		id: 6,
		text: "window",
	},
	{
		id: 7,
		text: "partions",
	},
	{
		id: 8,
		text: "shutter",
	},
];

export const ctgsBreadcrumbs = [
	<Link key="1" to="/products">
		Products
	</Link>,
	<Link key="2" to="/more-products">
		Category
	</Link>,
];
export const doorBreadcrumbs = [
	<Link key="1" to="/products">
		Products
	</Link>,
	<Link key="2" to="/more-products">
		Category
	</Link>,
	<Link key="2" to="/product-details/door">
		Door
	</Link>,
];

export const artiumsBreadcrumbs = [
	<Link key="1" to="/products">
		Products
	</Link>,
	<Link key="2" to="/more-products">
		Category
	</Link>,
	<Link key="2" to="/product-details/artium">
		Artium
	</Link>,
];
export const curtainWallBreadcrumbs = [
	<Link key="1" to="/products">
		Products
	</Link>,
	<Link key="2" to="/more-products">
		Category
	</Link>,
	<Link key="2" to="/product-details/curtain-wall">
		Curtain Wall
	</Link>,
];
export const slidingDoorBreadcrumbs = [
	<Link key="1" to="/products">
		Products
	</Link>,
	<Link key="2" to="/more-products">
		Category
	</Link>,
	<Link key="2" to="/product-details/sliding-door">
		Sliding Door
	</Link>,
];
export const railingsBreadcrumbs = [
	<Link key="1" to="/products">
		Products
	</Link>,
	<Link key="2" to="/more-products">
		Category
	</Link>,
	<Link key="2" to="/product-details/railings">
		Railings
	</Link>,
];
export const windowBreadcrumbs = [
	<Link key="1" to="/products">
		Products
	</Link>,
	<Link key="2" to="/more-products">
		Category
	</Link>,
	<Link key="2" to="/product-details/window">
		Window
	</Link>,
];
export const partionsBreadcrumbs = [
	<Link key="1" to="/products">
		Products
	</Link>,
	<Link key="2" to="/more-products">
		Category
	</Link>,
	<Link key="2" to="/product-details/partions">
		Partions
	</Link>,
];
export const shutterBreadcrumbs = [
	<Link key="1" to="/products">
		Products
	</Link>,
	<Link key="2" to="/more-products">
		Category
	</Link>,
	<Link key="2" to="/product-detials/shutter">
		Shutter
	</Link>,
];

export const isActiveClass = {
	color: "#0854a1",
};
export const isInActive = {
	color: "#000000",
};

export const bottomNavIsActiveClass = {
	color: "#0854a1",
	marginBottom: "10px",
	textShadow: "0px 4px 4px rgb(0 0 0 / 24%)",
};
