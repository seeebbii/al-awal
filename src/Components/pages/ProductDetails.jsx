import React from "react";
//import { useEffect, useState } from 'react'
import "../pages/ProductDetails.css";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
// import axios from "axios";
import productData from "../../products_data.js";
import { useDialog } from "../../shared-components/useDialog";
import ProductsDialog from "../../shared-components/ProductsDialog";

// Slick
import Slider from "react-slick";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
	// const [details,setDetails]=useState([]);
	// const [liveImage,setliveImage]=useState([]);
	const params = useParams();
	// const category={
	// 	id:params.id
	// }
	console.log("Params", params);
	const currentProduct = productData.productDetails.find(
		(data) => data.productPath === params.id
	);
	console.log("asdasdsada", currentProduct, productData.productDetails);
	// useEffect(()=>{
	// 	const fetchData=async()=>{
	// 		try {
	// 			const resp=await axios.post('http://localhost:8000/api/product/details/',category)
	// 			const data =await resp.data;
	// 			setDetails(data)

	// 			 setliveImage(data[0].liveExamples)

	// 		} catch (error) {
	// 			console.log(error)
	// 		}
	// 	}
	// 	fetchData();
	//  },[])
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

	let cols = 1;
	if (
		params.id === "door" ||
		params.id === "railings" ||
		params.id === "window"
	) {
		cols = 2;
	}
	return (
		<>
			<ProductsDialog
				isOpen={isDialogOpen}
				onClose={closeDialog}
				title="Preview"
			>
				<Slider {...settings}>
					{currentProduct?.liveExamples.map((img, idx) => (
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
					<p>{currentProduct?.productName}</p>
					<ImageList cols={cols}>
						{currentProduct?.mainImage.map((item) => (
							<ImageListItem key={item.img}>
								<img src={item} srcSet={item} alt={item.title} loading="lazy" />
							</ImageListItem>
						))}
					</ImageList>
				</div>

				<div className="generic">
					<p>Generic</p>
					{currentProduct?.productName === "partions" ||
					currentProduct?.productName === "railings" ||
					currentProduct?.productName === "curtain wall" ? (
						<div>
							{currentProduct?.genericDetails.map((generic) => {
								return (
									<div
										className="generic-details"
										key={currentProduct?.productName}
									>
										<p>
											PHILOSOPHY<br></br>
											{generic.philosophy}
										</p>
										<p>
											PLACEMENT-INSTALLATION<br></br>
											<span className="sub-generic-heading">
												{generic.placementInstallation}
											</span>
										</p>
										<p>
											USE<br></br>
											<span className="sub-generic-heading">{generic.use}</span>
										</p>
										<p>
											APPLICATION<br></br>
											<span className="sub-generic-heading">
												{generic.application}
											</span>
										</p>
										<p>
											HANDRAILS<br></br>
											<span className="sub-generic-heading">
												{generic.handRails}
											</span>
										</p>
										<p>
											MAX STRUCTURE LENGTH<br></br>
											<span className="sub-generic-heading">
												{generic.maxStructureLength}
											</span>
										</p>
										{currentProduct?.productName === "railings" && (
											<p>
												END COVERS<br></br>
												<span className="sub-generic-heading">
													{generic.endCovers}
												</span>
											</p>
										)}
									</div>
								);
							})}
						</div>
					) : (
						currentProduct?.genericDetails.map((generic) => {
							return (
								<div className="generic-details" key={currentProduct?._id}>
									<p>
										{currentProduct?.productName === "shutter"
											? "door"
											: currentProduct?.productName}{" "}
										TYPE<br></br>
										<span className="sub-generic-heading">{generic.type}</span>
									</p>
									<p>
										THERMAL INSULATION<br></br>
										<span className="sub-generic-heading">
											{generic.thermalInsulation}
										</span>
									</p>
									<p>
										EXTENSION SHAPES<br></br>
										<span className="sub-generic-heading">
											{generic.exteriorShapes}
										</span>
									</p>
									<p>
										TYPE OF HOLDING GLAZING<br></br>
										<span className="sub-generic-heading">
											{generic.typeOfHoldingGlazing}
										</span>
									</p>
								</div>
							);
						})
					)}
				</div>

				<div className="typologies">
					<div className=" typology-heading">
						<p className="typo">TYPOLOGIES</p>
						<p className="typo2">All available typologies</p>
					</div>
					<div className="typology-details">
						{currentProduct?.topologies.map((data) => {
							return (
								<div className="pic-div" key={data.image}>
									<img
										src={data.image}
										alt="doorPic"
										style={{
											height:
												data.text === "Aluminium foam shutter" ? "430px" : "",
										}}
									></img>
									<p>{data.text}</p>
								</div>
							);
						})}
					</div>
				</div>

				<div className="examples">
					<p className="live-text">LIVE EXAMPLES</p>

					<div className="live-image" onClick={() => openDialog()}>
						<div className="live-left">
							<img
								src={currentProduct?.liveExamples[0]}
								alt="live-image0"
							></img>
							<img
								src={currentProduct?.liveExamples[1]}
								alt="live-image1"
								style={{
									height:
										currentProduct?.productName === "shutter" ? "220px" : "",
								}}
							></img>
						</div>
						<div className="live-center">
							<img
								src={currentProduct?.liveExamples[2]}
								alt="live-image2"
							></img>
						</div>
						<div className="live-right">
							<img
								src={currentProduct?.liveExamples[3]}
								alt="live-image3"
							></img>
							<img
								src={currentProduct?.liveExamples[4]}
								alt="live-image4"
								style={{
									height:
										currentProduct?.productName === "shutter" ? "220px" : "",
								}}
							></img>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ProductDetails;
