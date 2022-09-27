import Footer from '../layout/footer';
import Header from '../layout/header';
import { useState } from 'react';
import ModalVideo from 'react-modal-video';
import FeaturesGeneral from '../element/features-general';
import Cta from "../element/cta";
import Link from 'next/link';


function GeneralFeatures() {
	const [isOpen, setOpen] = useState(false)
  return (
    <>
    <Header/>
    <div className="page-content bg-white">
		{/* <!-- Banner  --> */}
		{/* <div className="dlab-bnr-inr overlay-primary-dark" style={{"backgroundImage":"url(images/general-features/banner.jpg)"}}>
			<div className="container">
				<div className="dlab-bnr-inr-entry">
					<h1>General Features</h1>
					<nav aria-label="breadcrumb" className="breadcrumb-row">
						<ul className="breadcrumb">
							<li className="breadcrumb-item"><Link href="/"><a>Home</a></Link></li>
							<li className="breadcrumb-item active" aria-current="page">General Features</li>
						</ul>
					</nav>
				</div>
			</div>
		</div> */}
		{/* <!-- Banner End --> */}
		
		{/* <!-- Services Details --> */}
		<section className="content-inner-2" style={{"backgroundImage":"url(images/background/bg1.png)"}}>
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						{/* <div className="dlab-media m-b30 rounded-md">
							<img src="images/general-features/thumbnail.jpg" alt=""/>
						</div> */}
						<br/>
						<div className="dlab-content">
							<div className="m-b40">
								<h3>General Features</h3>
								<p>We considered everything you might need in your business.
								</p>
							</div>
							<div className="row">
								<div className="col-lg-6">
									<h3>Why did we include these features into our system?</h3>
									<p>Other than digital marketing, we also considered everything that could ease you in promote your digital presence or run a business, to make your life easier. 
										We also selected a few of services our customers love, and integrated them into our system.</p>
									<ul className="list-arrow secondary m-b30">
										<li>Location-based digital presence enhancement.</li>
										<li>GDPR compliance configuration.</li>
										<li>Posting job openings on your website.</li>
										<li>Simple to use email layout creative studio.</li>
									</ul>
									<Link href="/contact-us"><a className="btn btn-link d-inline-flex align-items-center"><i className="fa fa-angle-right m-r10"></i>Start Trial</a></Link>
								</div>
								<div className="col-lg-6">
									<div className="video-bx style-3">
										<img src="images/video/pic3.jpg" alt=""/>
										<div className="video-btn">
										<a href="#" className="popup-youtube" onClick={()=> setOpen(true)}><i className="flaticon-play"></i></a>
										</div>
										<ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="UpolBSznWp0" onClose={() => setOpen(false)} />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		
		{/* Web Builder Services */}
		<FeaturesGeneral/>
		
		{/* <!-- Call To action --> */}
        <Cta />
		
	</div>
     <Footer/>
    </>
  )
}

export default GeneralFeatures;