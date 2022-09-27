import Footer from '../layout/footer';
import Header from '../layout/header';
import { useState } from 'react';
import ModalVideo from 'react-modal-video';
import FeaturesEntrepriseSolutions from '../element/features-entreprise-solutions';
import Cta from "../element/cta";
import Link from 'next/link';


function EntrepriseSolutions() {
	const [isOpen, setOpen] = useState(false)
  return (
    <>
    <Header/>
    <div className="page-content bg-white">
		{/* <!-- Banner  --> */}
		{/* <div className="dlab-bnr-inr overlay-primary-dark" style={{"backgroundImage":"url(images/enterprise-solutions/banner.jpg)"}}>
			<div className="container">
				<div className="dlab-bnr-inr-entry">
					<h1>Entreprise Solutions</h1>
					
					<nav aria-label="breadcrumb" className="breadcrumb-row">
						<ul className="breadcrumb">
							<li className="breadcrumb-item"><Link href="/"><a>Home</a></Link></li>
							<li className="breadcrumb-item active" aria-current="page">Entreprise Solutions</li>
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
							<img src="images/enterprise-solutions/thumbnail.jpg" alt=""/>
						</div> */}
						<br />
						<div className="dlab-content">
							<div className="m-b40">
								<h3>Entreprise Solutions</h3>
								<p><span class="text-loudspeaker-one">Loudspeaker One</span> was originally designed for entreprises to manage the digital marketing operations of their networks.
								</p>
							</div>
							<div className="row">
								<div className="col-lg-6">
									<h3>We are started as an entreprise digital marketing solutions provider</h3>
									<p>Managing enterprise-level digital marketing is complex because the operations will cover a wide range of business activities, but we have been assisting in this field for the past two decades and will continue to do so. The experience and on-the-ground effort provide us with knowledge to develop <span class="text-loudspeaker-one">Loudspeaker One</span>, which is capable of assisting the enterprise in carrying out digital marketing operations of unimaginable complexity.</p>
									<ul className="list-arrow secondary m-b30">
										<li>Sell the system under your own brand.</li>
										<li>Distribute content and media to all of your clients.</li>
										<li>Develop marketing campaign for your clients with ease.</li>
										<li>Layout and features at your wish.</li>
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
		<FeaturesEntrepriseSolutions/>
		
		{/* <!-- Call To action --> */}
        <Cta />
		
	</div>
     <Footer/>
    </>
  )
}

export default EntrepriseSolutions;