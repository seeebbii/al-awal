import React from "react";
import { Grid, Card, CardMedia } from "@mui/material";
import "./MoreProducts.css";
import {Link} from "react-router-dom"
import productData from "../../products_data.js"
// import { useEffect } from "react";
// import { useState } from "react";
function MoreProducts() {
	// const [category,setCategory]=useState([]);
	// useEffect(()=>{
	// 	const fetchData=()=>{
	// 		fetch('http://localhost:8000/api/product/category/').then(resp=>resp.json())
	// 		.then(data=>{
	// 			setCategory(data)})
	// 		.catch(error=>{
	// 			console.log(error)
	// 		})
	// 	}
	// 	fetchData();
	//  },[])
	return (
		<>
			<Grid
				container
				xs={12}
				direction="row"
				className="animate__animated animate__fadeIn"
			>
				<Grid item xs={12} sm={4} my={5} textAlign="left" className="mp-mobile-resp-1">
					<div>
						<div className="main-text">
							<p className="text-upper">
								EXCLUSIVE DOOR<br></br>
								<br></br>
								<span className="text-lower">MORE</span>
								<br></br>
								<span style={{ fontSize: "320%" }}>PRODUCTS</span>
							</p>
						</div>

						<div className="quality-text categories">
							<p>
								GUARANTEES<br></br>CONSISTENTLY HIGH <br></br>QUALITY WITHOUT
								<br></br>OVERPAYMENTS
							</p>
						</div>
					</div>
				</Grid>
				<Grid item xs={12} sm={8} sx={{
          margin:{xs:"0px",sm:"50px 0px"}
        }} justifyContent="center">
					<Grid container xs={12} direction="row" justifyContent="center">
						<Grid
							container
							xs={12}
							direction="row"
							textAlign="center"
							alignContent="center"
							justifyContent="center"
						>
              <div className="main-more-products-heading">MORE PRODUCTS</div>
							{productData.categories.map((cat) => {
								return (
									<Card
										sx={{
											maxWidth: { xs: "85%" },
											marginTop: ".5rem",
											marginRight: { xs: "0px", sm: "0.75rem" },
											justifyContent: "center",
										}}
										key={cat._id}
									>
										<div
											style={{ position: "relative" }}
											className="more-products-container-item"
										>
											<Link to={`/product-details/${cat.categoryPath}`}>
												<CardMedia
													component="img"
													className="cat_img"
													image={cat.categoryImage}
													alt="green iguana"
												/>
												<div className="categories-text">
													<a href="www.demo.com">{cat.categoryName}</a>
												</div>
												{/* <div className="categories-btn">
												<Button
													size="small"
													endIcon={<ChevronRightIcon />}
													sx={{ color: "white" }}
												>
													Learn more
												</Button>
											</div> */}
											</Link>
										</div>
									</Card>
								);
							})}
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</>
	);
}

export default MoreProducts;
