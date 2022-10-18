import {Link } from "react-router-dom";

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
	<Link key="2" to="/productDetials">
		Door
	</Link>,
];

