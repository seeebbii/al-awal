import React from "react";
import { Grid, Card, CardMedia } from "@mui/material";
import { categories } from "../../constants";
import doors from "../../Assets/categories-images/doors.png";
import artiums from "../../Assets/categories-images/artiums.png";
import curtainWall from "../../Assets/categories-images/curtain-wall.png";
import slidingDoor from "../../Assets/categories-images/sliding-door.png";
import railings from "../../Assets/categories-images/railing.png";
import window from "../../Assets/categories-images/windows.png";
import partions from "../../Assets/categories-images/partions.png";
import shutter from "../../Assets/categories-images/shutter.png";
import "./MoreProducts.css";
import {Link} from "react-router-dom"
function MoreProducts() {
	const catImages = [
		doors,
		artiums,
		curtainWall,
		slidingDoor,
		railings,
		window,
		partions,
		shutter,
	];
	console.log(categories);
	return (
		<>
			<Grid container xs={12} direction="row">
				<Grid item xs={12} sm={4} textAlign="left">
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
				<Grid item xs={12} sm={8} my={5}>
					<Grid container xs={12} direction="row">
						<Grid
							container
							xs={12}
							direction="row"
							textAlign="left"
							alignContent="left"
						>
							{categories.map((category, index) => {
								return (
									<Card
										sx={{
											maxWidth: 545,
											marginTop: "0.5rem",
											marginRight: "0.75rem",
										}}
									>
										<div style={{ position: "relative" }}>
											<Link to="/productdetails">
											<CardMedia
												component="img"
												className="cat_img"
												image={catImages[index]}
												alt="green iguana"
											/>
											<div className="categories-text">
												<a href="www.demo.com">{category.text}</a>
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
