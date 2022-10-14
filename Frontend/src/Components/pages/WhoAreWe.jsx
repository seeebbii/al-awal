import React from "react";
import "./WhoAreWe.css";

import heroImage from "../../Assets/who-we-are-hero.jpg";

const WhoAreWe = () => {
	return (
		<>
			<div className="wwa-main animate__animated animate__fadeInLeft">

				<div className="wwa-main-inner">
				<div className="main-heading-mob-wwa">Who Are We</div>
					<img src={heroImage} alt="asd" width={100} />
					<div className="wwa-text-content-l">
						<h1>CERTIFICATIONS</h1>
						<p>
							The continuous development of our quality assurance program
							regarding both production processes and our own products
							themselves is a process that come in accordance to the strict
							European and international standards. This allows us to maintain
							our competitive advantage, which in many cases is a prerequisite
							of cooperation with our partners and the main reason to choose our
							systems
						</p>
					</div>
					<div className="wwa-text-content-r">
						<h1>PRODUCTION</h1>
						<p>
							By harmonizing every aspect of our production process in
							accordance with strict European and international legislation, we
							maintain the highest quality not only of our products but also for
							the working conditions. More detailed, the new standards of the
							world economy enforce us to adopt the new rules that focus on core
							values such as:
						</p>
					</div>
					<div className="wwa-text-content-l">
						<h1>QUALITY</h1>
						<p>
							Environmental Protection <br /> Health <br /> Safety at work{" "}
							<br /> All these values are respected and fundamental priorities
							in the AL AWAAL since our foundation.
						</p>
					</div>
					<div className="wwa-text-content-r">
						<h1>PRODUCTS</h1>
						<p>
							Our total respect to the customer and end-user of our products, as
							well as our philosophy in the continuous improvement of the
							quality of the products and services provided, led us to establish
							the certifications of aluminium systems as a significant
							competitive advantage and in many cases a prerequisite of
							cooperation. More than thirty years we certify our systems in:
						</p>
						<div className="products-link">
							<a href="/">THERMAL INSULATION</a>
							<a href="/">AIRTIGHT/AIR PERMEABILITY</a>
							<a href="/">WIND LOAD RESISTANCE</a>
							<a href="/">WATER TIGHTNESS</a>
							<a href="/">BURGLAR RESISTANCE</a>
						</div>
						<p>
							Quality assurance and the certified performance in all these of
							high-importance indicators for our aluminium systems are approved
							by internationally recognized certification institutes
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default WhoAreWe;
