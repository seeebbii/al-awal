import React, { useEffect, useState } from 'react'
import "../pages/ProductDetails.css"
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import axios from "axios"
import { useDialog } from '../../shared-components/useDialog'
import ProductsDialog from '../../shared-components/ProductsDialog'

// Slick
import Slider from "react-slick";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
import { useParams } from 'react-router-dom'




const ProductDetails = () => {
	const [details,setDetails]=useState([]);
	const [liveImage,setliveImage]=useState([]);
	const params=useParams();
	const category={
		id:params.id
	}

	useEffect(()=>{
		const fetchData=async()=>{
			try {
				const resp=await axios.post('http://localhost:8000/api/product/details/',category)
				const data =await resp.data;
				setDetails(data)
				
				 setliveImage(data[0].liveExamples)

			} catch (error) {
				console.log(error)
			}
		}
		fetchData();
	 },[])
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
    
	let cols=1;
	if(params.id==="DOOR"||params.id==='RAILINGS'||params.id==='WINDOW'){
		cols=2;
	}
  return (
		<>
			<ProductsDialog
				isOpen={isDialogOpen}
				onClose={closeDialog}
				title="Preview"
			>
				<Slider {...settings}>
					{liveImage.map((img, idx) => (
						<div
							className={
								idx === imageIndex ? "slide activeSlide" : "slide non-active"
							}
						>
							<img src={`http://localhost:${img}`} alt={img} />
						</div>
					))}
				</Slider>
			</ProductsDialog>
			<div className="main animate__animated animate__fadeIn">
				{details.map(detail=>{
				return(
					<div key={detail._id}>
				<div className="main-div">
					<p>{detail.productName}</p>
					<ImageList cols={cols}>
						{detail.mainImage.map((item) => (
							<ImageListItem key={item.img}>
								<img
									src={`http://localhost:${item}`}
									srcSet={`http://localhost:${item}`}
									alt={item.title}
									loading="lazy"
								/>
							</ImageListItem>
						))}
					</ImageList>
				</div>

				<div className="generic">
					<p>Generic</p>
					{detail.productName==="PARTIONS"||detail.productName==="RAILINGS"
					||detail.productName==="CURTAIN WALL" ?
					(<div>
					{detail.genericDetails.map(generic=>{
						return(
						<div className="generic-details" key={detail._id}>
							<p>
								PHILOSOPHY<br></br>{generic.philosophy}
							</p>
							<p>
								PLACEMENT-INSTALLATION<br></br>{generic.placementInstallation}
							</p>
							<p>
								USE<br></br>{generic.use}
							</p>
							<p>
								APPLICATION<br></br>{generic.application}
							</p>
							<p>
								HANDRAILS<br></br>{generic.handRails}
							</p>
							<p>
								MAX STRUCTURE LENGTH<br></br>{generic.maxStructureLength}
							</p>
							{detail.productName==="RAILINGS"&&<p>
								END COVERS<br></br>{generic.endCovers}
							</p>}
							
						</div>)
						})}
						</div>):
					(detail.genericDetails.map(generic=>{
					return(
					<div className="generic-details" key={detail._id}>
						<p>
							{detail.productName==="SHUTTER"?"DOOR":detail.productName } TYPE<br></br>{generic.type}
						</p>
						<p>
							THERMAL INSULATION<br></br>{generic.thermalInsulation}
						</p>
						<p>
							EXTENSION SHAPES<br></br>{generic.exteriorShapes}
						</p>
						<p>
							TYPE OF HOLDING GLAZING<br></br>{generic.typeOfHoldingGlazing}
						</p>
					</div>)
					})
                  )
				}
				</div>

				<div className="typologies">
					<div className=" typology-heading">
						<p className="typo">TYPOLOGIES</p>
						<p className="typo2">All available typologies</p>
					</div>
					<div className="typology-details">
						{detail.topologies.map((data) => {
							return (
								<div className="pic-div" key={data.image} >
									<img src={`http://localhost:${data.image}`} alt="doorPic" style={{height:data.text==="Aluminium foam shutter"?"430px":""}}></img>
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
							<img src={`http://localhost:${detail.liveExamples[0]}`} alt="live-image0"></img>
							<img src={`http://localhost:${detail.liveExamples[1]}`} alt="live-image1" style={{height:detail.productName==="SHUTTER"?"220px":""}}></img>
						</div>
						<div className="live-center">
							<img src={`http://localhost:${detail.liveExamples[2]}`} alt="live-image2"></img>
						</div>
						<div className="live-right">
							<img src={`http://localhost:${detail.liveExamples[3]}`} alt="live-image3"></img>
							<img src={`http://localhost:${detail.liveExamples[4]}`} alt="live-image4" style={{height:detail.productName==="SHUTTER"?"220px":""}}></img>
						</div>
					</div>
					
				</div>
				</div>
				)
            })}
			</div>
		</>
	);
}

export default ProductDetails