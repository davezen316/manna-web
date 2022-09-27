import Footer from '../layout/footer';
import Header from '../layout/header';
import { useState } from 'react';
import ModalVideo from 'react-modal-video';
import WebBuilderServices from '../element/service-web-builder';
import FeaturesWebBuilder from '../element/features-web-builder';
import Cta from "../element/cta";
import Link from 'next/link';


function WebBuilder() {
	const [isOpen, setOpen] = useState(false)
  return (
    <>
    <Header/>
    <div className="page-content bg-white">
		{/* <!-- Banner  --> */}
		{/* <div className="dlab-bnr-inr overlay-primary-dark" style={{"backgroundImage":"url(images/homepage/web-builder.jpg)"}}>
			<div className="container">
				<div className="dlab-bnr-inr-entry">
					<h1>Web Builder</h1>
					
					<nav aria-label="breadcrumb" className="breadcrumb-row">
						<ul className="breadcrumb">
							<li className="breadcrumb-item"><Link href="/"><a>Home</a></Link></li>
							<li className="breadcrumb-item active" aria-current="page">Web Builder</li>
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
							<img src="images/homepage/web-builder.jpg" alt=""/>
						</div> */}
						<br/>
						<div className="dlab-content">
							<div className="m-b40">
								<h3>Everyone's Web Builder</h3>
								<p>
									Discover the platform that requires no technical knowledge, we provide everything, so just get started.
								</p>
							</div>
							<div className="row">
								<div className="col-lg-6">
									<ul className="list-arrow secondary m-b30">
										<li>Create and maintain you homepage easily</li>
										<li>Easy to build your own unique layout</li>         
										<li>Make changes any time</li>
										<li>Use your own domain</li>
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
		<FeaturesWebBuilder/>
		
		{/* <!-- Service --> */}
		<WebBuilderServices/>
		
		{/* <!-- Call To action --> */}
        <Cta />
		
	</div>
     <Footer/>
    </>
  )
}

export default WebBuilder;