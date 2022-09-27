import Footer from '../layout/footer';
import Header from '../layout/header';
import { useState } from 'react';
import ModalVideo from 'react-modal-video';
import FeaturesDigitalMarketing from '../element/features-digital-marketing';
import Cta from "../element/cta";
import Link from 'next/link';


function DigitalMarketingFeatures() {
	const [isOpen, setOpen] = useState(false)
  return (
    <>
    <Header/>
    <div className="page-content bg-white">
		{/* <!-- Banner  --> */}
		{/* <div className="dlab-bnr-inr overlay-primary-dark" style={{"backgroundImage":"url(images/banner/digital-marketing-bnr.jpg)"}}>
			<div className="container">
				<div className="dlab-bnr-inr-entry">
					<h1>Digital Marketing Features</h1>
					<nav aria-label="breadcrumb" className="breadcrumb-row">
						<ul className="breadcrumb">
							<li className="breadcrumb-item"><Link href="/"><a>Home</a></Link></li>
							<li className="breadcrumb-item active" aria-current="page">Digital Marketing Features</li>
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
							<img src="images/blog/default/digital-marketing-thum.jpg" alt=""/>
						</div> */}
						<br/>
						<div className="dlab-content">
							<div className="m-b40">
								<h3>Digital Marketing Features</h3>
								<p>We strive to make your digital marketing journey an easy path.
								</p>
							</div>
							<div className="row">
								<div className="col-lg-6">
									<h3>How Can <span class="text-loudspeaker-one">Loudspeaker One</span> Ease Your Digital Marketing Operation?</h3>
									<p>For decades, we have provided digital marketing consulting and services to our clients, and we understand that there is a lot to do in digital marketing. We decided to pick some critical digital marketing operations based on our experience and simplify them in our tools to make things easier for you.</p>
									<ul className="list-arrow secondary m-b30">
										<li>Leave your time-sensitive task to our scheduler.</li>
										<li>Make your marketing operations more automated.</li>
										<li>Manage your digital news with ease.</li>
										<li>Retain your loyal customer.</li>
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
		<FeaturesDigitalMarketing/>
		
		{/* <!-- Call To action --> */}
        <Cta />
		
	</div>
     <Footer/>
    </>
  )
}

export default DigitalMarketingFeatures;