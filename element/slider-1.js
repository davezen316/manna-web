import Link from "next/link";
import Slider from "react-slick";
import useTranslation from 'next-translate/useTranslation';

function Slider1 () {
	const { t } = useTranslation('common');
	return (
		<>
			<div className="banner-one" style={{"backgroundImage":"url(images/main-slider/slider1/pic2.png)"}}>
				<div className="container">
					<div className="banner-inner">
						<div className="img1"><img src="images/main-slider/slider1/pic3.png" alt=""/></div>
						<div className="img2"><img src="images/main-slider/slider1/pic4.png" alt=""/></div>
						<div className="row align-items-center">
							<div className="col-md-6">
								<div className="banner-content">
									<h6 data-wow-duration="1s" data-wow-delay="0.5s" className="wow fadeInUp sub-title text-loudspeaker-one">{ t('shoutYourMessageOutLoud') }</h6>
									<h1 data-wow-duration="1.2s" data-wow-delay="1s" className="wow fadeInUp ">Unleash Your <span className="text-loudspeaker-one">Full Digital Marketing Potential</span></h1>
									<p  data-wow-duration="1.4s" data-wow-delay="1.5s" className="wow fadeInUp m-b30">We created an all-in-one app to simplify all of your digital marketing operations, let's establish your digital presence with ease now!</p>
									<Link href="/contact-us"><a className="btn btn-link d-inline-flex align-items-center"><i className="fa fa-angle-right m-r10"></i>Start Trial</a></Link>
									{/* <Link href="/about-us-1" ><a  data-wow-duration="1.6s" data-wow-delay="2s" className="wow fadeInUp btn btn-link d-inline-flex align-items-center" ><i className="fa fa-angle-right m-r10"></i>Learn More</a></Link> */}
								</div>
							</div>
							<div className="col-md-6">
								<div className="dz-media move-box wow fadeIn" data-wow-duration="1.6s" data-wow-delay="0.8s" >
									<img className="move-1" src="images/move/pic1.png" alt=""/>
									<img className="move-2" src="images/move/pic2.png" alt=""/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Slider1;