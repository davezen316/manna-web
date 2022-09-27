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
							<div className="col-xl-3 col-lg-4 col-sm-6 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.2s">
								<div className="widget widget_about">
									<h5 className="footer-title">
										Proof Point Development GmbH
									</h5>
									<p>
										Heilig-Geist-Gasse 398
										84028 Landshut
									</p>
								</div>
							</div>
							<div className="col-xl-3 col-lg-3 col-sm-6 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.6s">
								<div className="widget widget_services">
									{/* <h5 className="footer-title">Our Features</h5>
									<ul>
										<li><Link href="#"><a>GDPR Data Protection</a></Link></li>
										<li><Link href="/web-builder"><a>Web Builder</a></Link></li>
										<li><Link href="/digital-marketing-features"><a>Digital Marketing</a></Link></li>
										<li><Link href="/general-features"><a>Features</a></Link></li>
										<li><Link href="/enterprise-solutions"><a>Enterprise</a></Link></li>
									</ul> */}
								</div>
							</div>
							<div className="col-xl-3 col-lg-2 col-sm-6 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.4s">
								{/* <div className="widget widget_services">
									<h5 className="footer-title">Our links</h5>
									<ul>
										<li><Link href="#"><a>Home</a></Link></li>
										<li><Link href="#"><a>About Us</a></Link></li>
										<li><Link href="#"><a>Services</a></Link></li>
										<li><Link href="#"><a>Team</a></Link></li>
										<li><Link href="#"><a>Blog</a></Link></li>
									</ul>
								</div> */}
							</div>
							<div className="col-xl-3 col-lg-3 col-sm-6 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.8s">
								<div className="widget widget_services">
									<h5 className="footer-title">Legal</h5>
									<ul>
										<li><Link href="/imprint"><a>Imprint</a></Link></li>
                    <li><Link href="/data-policy"><a>Privacy Policy</a></Link></li>
										<li><Link href="/imprint"><a>Terms of Use</a></Link></li>
										{/* <li><Link href="#"><a>FAQ</a></Link></li>
										<li><Link href="#"><a>Portfolio</a></Link></li>
										<li><Link href="#"><a>Privacy Policy</a></Link></li>
										<li><Link href="#"><a>Terms & Conditions</a></Link></li>
										<li><Link href="#"><a>Support </a></Link></li> */}
									</ul>
								</div>
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