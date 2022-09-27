import Link from "next/link";

function AboutUsSME() {
    return (
      <>
        {/* <!-- About us --> */}
		<section className="content-inner about-wraper-1" style={{"backgroundImage":"url(images/background/bg15.png)","backgroundSize":"contain","backgroundPosition":"center right","backgroundRepeat":"no-repeat"}}>
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-6 m-b30 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.2s">
						<div className="dz-media left">
							<img src="images/about/pic1.jpg" alt=""/>
						</div>
					</div>
					<div className="col-lg-6 m-b30 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.4s">
						<div className="section-head style-3">
							{/* <h6 className="sub-title text-primary bgl-primary m-b15">ABOUT US</h6> */}
							<h2 className="title m-b20">We Will Help You Facilitate Your Digital Marketing Operations</h2>
							<p>
								Our company, which was founded 20 years ago, has provided a wide range of digital marketing 
								services to our clients based on their needs. We use our expertise in digital marketing 
								approaches to facilitate our clients' digital marketing operations, allowing them to save 
								time and improve their digital marketing results. While this allows business owners to devote 
								enough time to their daily operations, they will still be able to expand their digital presence 
								with our assistance.
                            </p>
							<Link href="/contact-us"><a className="btn btn-link d-inline-flex align-items-center"><i className="fa fa-angle-right m-r10"></i>Start Trial</a></Link>
						</div>
						{/* <ul className="list-check primary m-b30">
							<li>Suspendisse ullamcorper mollis orci in facilisis.</li>
							<li>Etiam orci magna, accumsan varius enim volutpat.</li>
							<li>Donec fringilla velit risus, in imperdiet turpis euismod quis.</li>
							<li>Aliquam pulvinar diam tempor erat pellentesque, accumsan mauri.</li>
						</ul> */}
					</div>
					
					<div className="col-lg-6 m-b30 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.4s">
						<div className="section-head style-3">
							{/* <h6 className="sub-title text-primary bgl-primary m-b15">ABOUT US</h6> */}
							<h2 className="title m-b20">And We Have Developed <span className="text-primary">Loudspeaker One</span> To Serve You Better</h2>
							<p>
								A complete web based tool which is perfect for businesses that want to stay lean 
								and have fully measurable return on investment.
								It is an one-stop platform where you can create and manage your brand online, 
								schedule social media posts, send email campaigns, easily create and 
								maintain your web-presence and for sure also get your shop running.
                            </p>
							<Link href="/contact-us"><a className="btn btn-link d-inline-flex align-items-center"><i className="fa fa-angle-right m-r10"></i>Start Trial</a></Link>
						</div>
						{/* <ul className="list-check primary m-b30">
							<li>Suspendisse ullamcorper mollis orci in facilisis.</li>
							<li>Etiam orci magna, accumsan varius enim volutpat.</li>
							<li>Donec fringilla velit risus, in imperdiet turpis euismod quis.</li>
							<li>Aliquam pulvinar diam tempor erat pellentesque, accumsan mauri.</li>
						</ul> */}
					</div>

					<div className="col-lg-6 m-b30 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.2s">
						<div className="dz-media right">
							<img src="images/landingpage/sme/manna-admin-portal.png" alt=""/>
						</div>
					</div>
				</div>
			</div>
		</section>
      </>
    )
  }
  
  export default AboutUsSME;