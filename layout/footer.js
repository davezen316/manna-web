import Link from 'next/link';

function Footer() {
  return (
    <>
      {/* <!-- Footer --> */}
    <footer className="site-footer style-1" id="footer" style={{"backgroundImage":"url(images/background/bg10.png)"}}>
				<div className="footer-top">
					<div className="container">
						<div className="footer-info wow fadeIn" data-wow-duration="2s" data-wow-delay="0.8s">
							<div className="row align-items-center">
								<div className="col-xl-4 col-md-4">
									<div className="footer-logo">
										<a href="/"><img src="images/logo/logo-loudspeaker-light.png" alt=""/></a> 
									</div>
								</div>
								<div className="col-xl-4 col-md-4 col-sm-6">
									<div className="icon-bx-wraper left m-b10">
										<div className="icon-lg"> 
											<Link href="mailto: info@proof-point.com">
												<a className="icon-cell">
													<i className="flaticon-email"></i>
												</a> 
											</Link>	
										</div>
										<div className="icon-content">
											<p>info@proof-point.com</p>
										</div>
									</div>
								</div>
								<div className="col-xl-4 col-md-4 col-sm-6">
									<div className="icon-bx-wraper left m-b10">
										<div className="icon-lg"> 
											<Link href="https://goo.gl/maps/7AiARQWvFze5KcfHA">
												<a className="icon-cell">
													<i className="flaticon-location"></i>
												</a>
											</Link>	
										</div>
										<div className="icon-content">
											<p>Heilig-Geist-Gasse 398, 84028 Landshut, Germany.</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="row">
              
							<div className="col-xl-3 col-lg-3 col-sm-6 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.8s">
								<div className="widget widget_menu">
									<h5 className="footer-title">Legal</h5>
									<ul>
										<li><Link href="/imprint"><a>Imprint</a></Link></li>
                    <li><Link href="/data-policy"><a>Privacy Policy</a></Link></li>
										<li><Link href="#"><a>Terms of use</a></Link></li>
									</ul>
								</div>
							</div>
							{/* <div className="col-xl-3 col-lg-3 col-sm-6 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.4s">
								<div className="widget widget_menu">
									<h5 className="footer-title">Our links</h5>
									<ul>
										<li><Link href="#"><a>Home</a></Link></li>
										<li><Link href="#"><a>About Us</a></Link></li>
										<li><Link href="#"><a>Services</a></Link></li>
										<li><Link href="#"><a>Team</a></Link></li>
										<li><Link href="#"><a>Blog</a></Link></li>
									</ul>
								</div>
							</div> */}
							{/* <div className="col-xl-3 col-lg-3 col-sm-6 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.6s">
								<div className="widget widget_menu">
									<h5 className="footer-title">Our Features</h5>
									<ul>
										<li><Link href="/web-builder"><a>Web Builder</a></Link></li>
										<li><Link href="/digital-marketing-features"><a>Digital Marketing</a></Link></li>
										<li><Link href="/general-features"><a>Features</a></Link></li>
										<li><Link href="/enterprise-solutions"><a>Enterprise</a></Link></li>
									</ul>
								</div>
							</div> */}
							<div className="col-xl-3 col-lg-3 col-sm-6 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.6s">
								<div className="widget widget_menu">
									<h5 className="footer-title">Knowledge</h5>
									<ul>
										{/* <li><Link href="#"><a>GDPR Data Protection</a></Link></li> */}
										<li><Link href="/web-builder"><a>Academy</a></Link></li>
										<li><Link href="/digital-marketing-features"><a>Support / Help</a></Link></li>
									</ul>
								</div>
							</div>
							<div className="col-xl-3 col-lg-3 col-sm-6 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.6s">
								<div className="widget widget_menu">
									<h5 className="footer-title">Partners</h5>
									<ul>
										<li><Link href="/web-builder"><a>Solution Partners</a></Link></li>
										<li><Link href="/digital-marketing-features"><a>Strategic Partners</a></Link></li>
									</ul>
								</div>
							</div>
							<div className="col-xl-3 col-lg-3 col-sm-6 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.2s">
								<div className="widget widget_menu">
									<h5 className="footer-title">About Us</h5>
									{/* <p>For the last two decades, we have been offering digital marketing consulting and services to businesses, 
										and we now aspire to deliver the greatest all-in-one digital marketing solution to help everyone on their digital marketing journey.</p> */}
                  <ul>
										{/* <li><Link href="#"><a>GDPR Data Protection</a></Link></li> */}
										<li><Link href="/"><a>Board of Management</a></Link></li>
										<li><Link href="/"><a>Team</a></Link></li>
										<li><Link href="/"><a>Career</a></Link></li>
										<li><Link href="/"><a>Investor Relations</a></Link></li>
										<li><Link href="/contact-us"><a>Contact</a></Link></li>
									</ul>
									{/* <div className="dlab-social-icon">
										<ul>
											<li><a className="fa fa-facebook" href="https://en-gb.facebook.com/"></a></li>
											<li><a className="fa fa-instagram" href="https://www.instagram.com/"></a></li>
											<li><a className="fa fa-twitter" href="https://twitter.com/login?lang=en"></a></li>
										</ul>
									</div> */}
								</div>
							</div>
						</div>
						<div className="row"> 
							<div className="col-xl-4 col-lg-4 col-sm-6">
								<p className="footer-title">
									Proof Point Development GmbH
								</p>
								<p>
									Heilig-Geist-Gasse 398
									84028 Landshut
								</p>
							</div>
						</div>
					</div>
        </div>
        {/* <!-- footer bottom part --> */}
        <div className="footer-bottom wow fadeIn" data-wow-duration="2s" data-wow-delay="0.2s">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 text-center"> 
						<span className="copyright-text">Copyright © 2022 <a href="https://www.proof-point.com/" target="_blank">Proof Point Development GmbH </a>. All rights reserved.</span> 
					</div>
                </div>
            </div>
        </div>
    </footer>
    {/* <!-- Footer End --> */}
    </>
  )
}

export default Footer;