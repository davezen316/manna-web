import Slider from "react-slick";

function ClientSlider() {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        arrows: false,
		responsive: [
			{
			  breakpoint: 1200,
			  settings: {
				slidesToShow: 4,
				slidesToScroll: 1,
				
			  }
			},	
			{
			  breakpoint: 767,
			  settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				
			  }
			},
			{
			  breakpoint: 480,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				
			  }
			},
		]
    };
    return (
        <>
            <Slider {...settings}>
				<div className="item">
					<div className="clients-logo">
						<img
							className="logo-main"
							src="images/logo/logo-aciso.png"
							alt=""
						/>
						<img
							className="logo-hover"
							src="images/logo/logo-aciso.png"
							alt=""
						/>	
					</div>
				</div>
				<div className="item">
					<div className="clients-logo">
						<img
							className="logo-main"
							src="images/logo/logo-fit-plus.png"
							alt=""
						/>
						<img
							className="logo-hover"
							src="images/logo/logo-fit-plus.png"
							alt=""
						/>
					</div>
				</div>
				<div className="item">
					<div className="clients-logo">
						<img
							className="logo-main"
							src="images/logo/logo-injoy.png"
							alt=""
						/>
						<img
							className="logo-hover"
							src="images/logo/logo-injoy.png"
							alt=""
						/>
					</div>
				</div>
				<div className="item">
					<div className="clients-logo">
						<img
							className="logo-main"
							src="images/logo/logo-ft-club.png"
							alt=""
						/>
						<img
							className="logo-hover"
							src="images/logo/logo-ft-club.png"
							alt=""
						/>
					</div>
				</div>
				<div className="item">
					<div className="clients-logo">
						<img
							className="logo-main"
							src="images/logo/logo-tennis-people.png"
							alt=""
						/>
						<img
							className="logo-hover"
							src="images/logo/logo-tennis-people.png"
							alt=""
						/>
					</div>
				</div>
				<div className="item">
					<div className="clients-logo">
						<img
							className="logo-main"
							src="images/logo/logo-rank-digital.png"
							alt=""
						/>
						<img
							className="logo-hover"
							src="images/logo/logo-rank-digital.png"
							alt=""
						/>
					</div>
				</div>
				<div className="item">
					<div className="clients-logo">
						<img
							className="logo-main"
							src="images/logo/logo-bugi-kollegen.png"
							alt=""
						/>
						<img
							className="logo-hover"
							src="images/logo/logo-bugi-kollegen.png"
							alt=""
						/>
					</div>
				</div>
				<div className="item">
					<div className="clients-logo">
						<img
							className="logo-main"
							src="images/logo/logo-zimmermann.png"
							alt=""
						/>
						<img
							className="logo-hover"
							src="images/logo/logo-zimmermann.png"
							alt=""
						/>
					</div>
				</div>
				<div className="item">
					<div className="clients-logo">
						<img
							className="logo-main"
							src="images/logo/logo-bubb.png"
							alt=""
						/>
						<img
							className="logo-hover"
							src="images/logo/logo-bubb.png"
							alt=""
						/>
					</div>
				</div>
				<div className="item">
					<div className="clients-logo">
						<img
							className="logo-main"
							src="images/logo/logo-pop-beverage.png"
							alt=""
						/>
						<img
							className="logo-hover"
							src="images/logo/logo-pop-beverage.png"
							alt=""
						/>
					</div>
				</div>
			</Slider>
        </>
    );
}

export default ClientSlider;
