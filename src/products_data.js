const categories = [
	{
		categoryName: "door",
		categoryImage: `/images/doors.png`,
		categoryPath: "door",
	},
	{
		categoryName: "artium",
		categoryImage: `/images/artiums.png`,
		categoryPath: "artium",
	},
	{
		categoryName: "curtain wall",
		categoryImage: `/images/curtain-wall.png`,
		categoryPath: "curtain-wall",
	},
	{
		categoryName: "sliding door",
		categoryImage: `/images/sliding-door.png`,
		categoryPath: "sliding-door",
	},
	{
		categoryName: "railings",
		categoryImage: `/images/railing.png`,
		categoryPath: "railings",
	},
	{
		categoryName: "window",
		categoryImage: `/images/windows.png`,
		categoryPath: "window",
	},
	{
		categoryName: "partions",
		categoryImage: `/images/partions.png`,
		categoryPath: "partions",
	},
	{
		categoryName: "shutter",
		categoryImage: `/images/shutter.jpg`,
		categoryPath: "shutter",
	},
];

const productDetails = [
	{
		category: "632b35b17dbaf3b084965fc3",
		productName: "door",
		productPath: "door",
		mainImage: [`/images/main-door1.png`, `/images/main-door2.png`],
		genericDetails: [
			{
				type: "Hinged",
				thermalInsulation: "Yes",
				exteriorShapes: "Flat",
				typeOfHoldingGlazing: "Structural Silicon",
			},
		],
		topologies: [
			{
				text: "One sach tilt and turn",
				image: `/images/door-pic1.png`,
			},
			{
				text: "Tilt and turn with fix light on top",
				image: `/images/door-pic2.png`,
			},
			{
				text: "Double tilt and turn window",
				image: `/images/door-pic3.jpg`,
			},
			{
				text: "Double tilt and turn window with fixed light",
				image: `/images/door-pic4.png`,
			},
			{
				text: "Hinged door",
				image: `/images/door-pic5.png`,
			},
			{
				text: "Double tilt and turn with fanlight",
				image: `/images/door-pic6.png`,
			},
			{
				text: "Double tilt and turn with fixed lights sideways",
				image: `/images/door-pic7.png`,
			},
			{
				text: "Hinged door inwards",
				image: `/images/door-pic8.png`,
			},
			{
				text: "Hinged door inwards/outwards",
				image: `/images/door-pic9.png`,
			},
			{
				text: "Odd number of vents on one side",
				image: `/images/door-pic10.png`,
			},
			{
				text: "Odd number of vents on both sides",
				image: `/images/door-pic11.png`,
			},
			{
				text: "Odd number of vents on both sides",
				image: `/images/door-pic12.png`,
			},
			{
				text: "Odd number of vents on one side",
				image: `/images/door-pic13.png`,
			},
			{
				text: "Odd number of vents on one side",
				image: `/images/door-pic14.png`,
			},
		],
		liveExamples: [
			`/images/door-live1.jpg`,
			`/images/door-live2.jpg`,
			`/images/door-live3.jpg`,
			`/images/door-live1.jpg`,
			`/images/door-live2.jpg`,
		],
	},
	{
		category: "632b35b17dbaf3b084965fc4",
		productName: "artium",
		productPath: "artium",
		mainImage: [`/images/artium-main.png`],
		genericDetails: [
			{
				type: "Stick",
				thermalInsulation: "180kg",
				exteriorShapes: "Yes",
				typeOfHoldingGlazing: "Pressure Plate or Structural Silicon",
			},
		],
		topologies: [
			{
				text: "Skylight with projected window",
				image: `/images/artium-pic1.png`,
			},
			{
				text: "Pyramid Skylight",
				image: `/images/artium-pic2.png`,
			},
			{
				text: "Polyhedron Skylight",
				image: `/images/artium-pic3.png`,
			},
			{
				text: "Skylight (wintergarden)",
				image: `/images/artium-pic4.png`,
			},
			{
				text: "Conservatorium",
				image: `/images/artium-pic5.png`,
			},
		],
		liveExamples: [
			`/images/artiums-live1.jpg`,
			`/images/artiums-live2.jpg`,
			`/images/artiums-live3.jpg`,
			`/images/artiums-live4.jpg`,
			`/images/artiums-live5.jpg`,
			`/images/artiums-live6.jpg`,
			`/images/artiums-live7.jpg`,
			`/images/artiums-live8.jpg`,
			`/images/artiums-live9.jpg`,
			`/images/artiums-live10.jpg`,
		],
	},
	{
		category: "632b35b17dbaf3b084965fc8",
		productName: "window",
		productPath: "window",
		mainImage: [`/images/window-main1.jpg`, `/images/window-main2.png`],
		genericDetails: [
			{
				type: "Hinged",
				thermalInsulation: "Yes",
				exteriorShapes: "Flat",
				typeOfHoldingGlazing: "Structural Silicon",
			},
		],
		topologies: [
			{
				text: "One sach tilt and turn",
				image: `/images/window-pic1.png`,
			},
			{
				text: "Single tilt and turn with fix light on top",
				image: `/images/window-pic2.png`,
			},
			{
				text: "Single tilt ",
				image: `/images/window-pic3.png`,
			},
			{
				text: "Double tilt",
				image: `/images/window-pic4.png`,
			},
			{
				text: "Double tilt and turn window with fixed light",
				image: `/images/window-pic5.png`,
			},
			{
				text: "Double tilt",
				image: `/images/window-pic6.png`,
			},
			{
				text: "Hinged door inwards",
				image: `/images/window-pic7.png`,
			},
			{
				text: "Double leaf door inwards",
				image: `/images/window-pic8.png`,
			},
			{
				text: "Hinged door inwards",
				image: `/images/window-pic9.png`,
			},
			{
				text: "Hinged door inwards/outwards",
				image: `/images/window-pic10.png`,
			},
		],
		liveExamples: [
			`/images/window-live1.jpg`,
			`/images/window-live2.jpg`,
			`/images/window-live3.jpg`,
			`/images/window-live4.jpg`,
			`/images/window-live5.jpg`,
			`/images/window-live6.jpg`,
		],
	},
	{
		category: "632b35b17dbaf3b084965fc6",
		productName: "sliding door",
		productPath: "sliding-door",
		mainImage: [`/images/sliding-main.png`],
		genericDetails: [
			{
				type: "Attached",
				thermalInsulation: "Yes",
				exteriorShapes: "Flat",
				typeOfHoldingGlazing: "Structural Silicon",
			},
		],
		topologies: [
			{
				text: "Single Sliding",
				image: `/images/sliding-pic1.png.jpg`,
			},
			{
				text: "Double Sliding",
				image: `/images/sliding-pic2.jpg`,
			},
		],
		liveExamples: [
			`/images/sliding-live1.jpg`,
			`/images/sliding-live2.jpeg`,
			`/images/sliding-live3.jpeg.jpg`,
			`/images/sliding-live1.jpg`,
			`/images/sliding-live2.jpeg`,
		],
	},
	{
		category: "632b35b17dbaf3b084965fca",
		productName: "shutter",
		productPath: "shutter",
		mainImage: [`/images/shutter-main.png`],
		genericDetails: [
			{
				type: "Shutter",
				thermalInsulation: "No",
				exteriorShapes: "Curved",
				typeOfHoldingGlazing: "Structural",
			},
		],
		topologies: [
			{
				text: "Aluminium foam shutter",
				image: `/images/shutter-pic1.png`,
			},
			{
				text: "Aluminium heavy duty shutter",
				image: `/images/shutter-pic2.png`,
			},
			{
				text: "Perforated heavy duty shutter",
				image: `/images/shutter-pic3.png`,
			},
			{
				text: "Polycarbonate heavy duty shutter",
				image: `/images/shutter-pic4.jpg`,
			},
		],
		liveExamples: [
			`/images/shutter-live1.png`,
			`/images/shutter-live2.jpeg`,
			`/images/shutter-live3.jpg`,
			`/images/shutter-live4.png`,
			`/images/shutter-live5.webp`,
		],
	},
	{
		category: "632b35b17dbaf3b084965fc7",
		productName: "railings",
		productPath: "railings",
		mainImage: [`/images/railings-main1.jpg`, `/images/railings-main2.jpg`],
		genericDetails: [
			{
				philosophy: "Continous Profile with simple wedges",
				placementInstallation: "On-floor,side-mounted,embedded,curved",
				use: "Outdoor,Indoor,Seaside",
				application: "modern residence,hotels,office,buildings",
				handRails: "Various Shapes(flat,oval,round,square)",
				maxStructureLength: "unlimited",
				endCovers: "inox and coated aluminium",
			},
		],
		topologies: [
			{
				text: "With glass",
				image: `/images/railings-pic1.jpg`,
			},
			{
				text: "With horizontal bar",
				image: `/images/railings-pic2.jpg`,
			},
			{
				text: "With vertical bar",
				image: `/images/railings-pic3.jpg`,
			},
		],
		liveExamples: [
			`/images/railings-live1.jpg`,
			`/images/railings-live2.jpg`,
			`/images/railings-live3.jpg`,
			`/images/railings-live4.jpg`,
			`/images/railings-live5.jpg`,
			`/images/railings-live6.jpg`,
			`/images/railings-live7.jpg`,
		],
	},
	{
		category: "632b35b17dbaf3b084965fc9",
		productName: "partions",
		productPath: "partions",
		mainImage: [`/images/partions-main.jpg`],
		genericDetails: [
			{
				philosophy: "Partitioning System",
				placementInstallation: "On-floor,side-mounted,embedded,curved",
				use: "Outdoor,Indoor,Seaside",
				application: "Meeting rooms,hotels,office-buildings,airports etc.",
				handRails: "Luminium framed glass panel",
				maxStructureLength: "unlimited",
			},
		],
		topologies: [
			{
				text: "Fixed partition wall",
				image: `/images/partions-pic1.png`,
			},
			{
				text: "Fixed partition wall open air",
				image: `/images/partions-pic2.png`,
			},
			{
				text: "Fixed partition wall open air",
				image: `/images/partions-pic3.png`,
			},
			{
				text: "Fixed partition wall open air",
				image: `/images/partions-pic4.png`,
			},
			{
				text: "Fixed partition wall in adjustable angle(90*-180*)",
				image: `/images/partions-pic5.png`,
			},
			{
				text: 'Fixed partition wall in "T" construction',
				image: `/images/partions-pic6.png`,
			},
			{
				text: "Fixed partition wall in cross-shape construction",
				image: `/images/partions-pic7.png`,
			},
		],
		liveExamples: [
			`/images/partions-live1.jpg`,
			`/images/partions-live2.jpeg`,
			`/images/partions-live3.jpg`,
			`/images/partions-live4.jpg`,
			`/images/partions-live5.jpg`,
			`/images/partions-live6.jpg`,
		],
	},
	{
		category: "632b35b17dbaf3b084965fc5",
		productName: "curtain wall",
		productPath: "curtain-wall",
		mainImage: [`/images/curtain-main.jpg`],
		genericDetails: [
			{
				philosophy: "Standard,Structural,Semi-Structural",
				placementInstallation: "On-floor,side-mounted,embedded",
				use: "Outdoor",
				application: "Fixed,Projected,Parallel-Projected",
				handRails: "Security of visible load",
				maxStructureLength: "unlimited",
			},
		],
		topologies: [
			{
				text: "Tilt and turn Window",
				image: `/images/curtain-pic1.png`,
			},
			{
				text: "Parallel and Projected outward window",
				image: `/images/curtain-pic2.png`,
			},
			{
				text: "Hinged opening outward window",
				image: `/images/curtain-pic3.png`,
			},
			{
				text: "Hinged opening inward window",
				image: `/images/curtain-pic4.png`,
			},
			{
				text: "Projected outward window",
				image: `/images/curtain-pic5.png`,
			},
			{
				text: "Parallel Projected outward window",
				image: `/images/curtain-pic6.png`,
			},
			{
				text: "Fixed Window",
				image: `/images/curtain-pic7.jpg`,
			},
		],
		liveExamples: [
			`/images/curtain-live1.jpg`,
			`/images/curtain-live2.jpg`,
			`/images/curtain-live3.jpg`,
			`/images/curtain-live4.jpg`,
			`/images/curtain-live5.jpg`,
			`/images/curtain-live6.jpg`,
		],
	},
];

const productData = {
	categories,
	productDetails,
};

export default productData;
