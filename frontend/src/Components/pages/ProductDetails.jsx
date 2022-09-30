import React from 'react'
import "../pages/ProductDetails.css"
import doorimage1 from "../../Assets/front-door.png"
import doorimage2 from "../../Assets/front-door2.png"
import liveImage1 from "../../Assets/door-live1.jpg"
import liveImage2 from "../../Assets/door-live2.jpg"
import liveImage3 from "../../Assets/door-live3.jpg"
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

import { useDialog } from '../../shared-components/useDialog'
import ProductsDialog from '../../shared-components/ProductsDialog'

// Slick
import Slider from "react-slick";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
const images = [liveImage1, liveImage2, liveImage3, liveImage2];

// Images data
const dooData = [
	{
		name: "one sash titlt and turn",
		imag: require("../../Assets/door-pic3.png"),
	},
	{
		name: "titlt and turn with fix light on top",
		imag: require("../../Assets/door-pic6.png"),
	},
	{
		name: "titlt and turn with fanlight",
		imag: require("../../Assets/door-pic6.png"),
	},
	{
		name: "Double titlt and turn window",
		imag: require("../../Assets/door-pic7.jpg"),
	},
	{
		name: "Double titlt and turn with light",
		imag: require("../../Assets/door-pic2.png"),
	},
	{
		name: "Double titlt and turn window with fixedlight",
		imag: require("../../Assets/door-pic8.png"),
	},
	{
		name: "Double titlt and turn with fanlight",
		imag: require("../../Assets/door-pic9.png"),
	},
	{
		name: "Double titlt and turn with fixedlight sideways",
		imag: require("../../Assets/door-pic10.png"),
	},
];

const itemData = [
	{
		img: doorimage1,
	},
	{
		img: doorimage2,
	},
];


const ProductDetails = () => {
  const { isDialogOpen, openDialog, closeDialog } = useDialog();
  const NextArrow = ({ onClick }) => {
		return (
			<div className="arrow next" onClick={onClick}>
				<BiChevronRight />
			</div>
		);
	};

	const PrevArrow = ({ onClick }) => {
		return (
			<div className="arrow prev" onClick={onClick}>
				<BiChevronLeft />
			</div>
		);
	};

	const [imageIndex, setImageIndex] = React.useState(0);

	const settings = {
		// customPaging: function (i) {
		// 	return (
		// 		<a>
		// 			<img src={liveImage1} />
		// 		</a>
		// 	);
		// },
		infinite: true,
		lazyLoad: true,
		speed: 300,
		slidesToShow: 3,
		centerMode: true,
		centerPadding: 0,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
		beforeChange: (current, next) => setImageIndex(next),
	};

  
  return (
		<>
			<ProductsDialog
				isOpen={isDialogOpen}
				onClose={closeDialog}
				title="Preview"
			>
				<Slider {...settings}>
					{images.map((img, idx) => (
						<div
							className={
								idx === imageIndex ? "slide activeSlide" : "slide non-active"
							}
						>
							<img src={img} alt={img} />
						</div>
					))}
				</Slider>
			</ProductsDialog>
			<div className="main animate__animated animate__fadeIn">
				<div className="main-div">
					<p>AL AWAAL DOOR</p>
					<ImageList cols={2}>
						{itemData.map((item) => (
							<ImageListItem key={item.img}>
								<img
									src={`${item.img}`}
									srcSet={`${item.img}`}
									alt={item.title}
									loading="lazy"
								/>
							</ImageListItem>
						))}
					</ImageList>
				</div>

				<div className="generic">
					<p>Generic</p>
					<div className="generic-details">
						<p>
							WINDOW TYPES<br></br>Hinged
						</p>
						<p>
							THERMAL INSULATION<br></br>Yes
						</p>
						<p>
							EXTENSION SHAPES<br></br>Flat
						</p>
					</div>
				</div>

				<div className="typologies">
					<div className=" typology-heading">
						<p className="typo">TYPOLOGIES</p>
						<p className="typo2">All available typologies</p>
					</div>
					<div className="typology-details">
						{dooData.map((data) => {
							return (
								<div className="pic-div">
									<img src={data.imag} alt="doorPic"></img>
									<p>{data.name}</p>
								</div>
							);
						})}
					</div>
				</div>

				<div className="examples">
					<p className="live-text">LIVE EXAMPLES</p>
					<div className="live-image" onClick={() => openDialog()}>
						<div className="live-left">
							<img src={liveImage2} alt="live-image0"></img>
							<img src={liveImage3} alt="live-image1"></img>
						</div>
						<div className="live-center">
							<img src={liveImage1} alt="live-image2"></img>
						</div>
						<div className="live-right">
							<img src={liveImage2} alt="live-image3"></img>
							<img src={liveImage3} alt="live-image4"></img>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default ProductDetails