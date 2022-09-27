

function Newsletter() {
    return (
      <>
        <section className="content-inner-3 bg-primary" style={{"backgroundImage":"url(images/background/bg13.png)","backgroundRepeat":"no-repeat","backgroundSize":"cover"}}>
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-4 col-md-5 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.2s">
						<div className="dlab-media m-b30">
							<img src="images/about/img9.png" className="move-2" alt=""/>
						</div>
					</div>
					<div className="col-lg-8 col-md-7 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.4s">
						<div className="section-head style-1 text-white">
							<h6 className="sub-title bgl-light m-b20">Newsletter</h6>
							<h2 className="title m-b15">Subscribe To Our Newsletter For Latest Update Of <span class="text-loudspeaker-one">Loudspeaker One</span> </h2>
							<p>Keep in touch with us! We will give you updates if there is a new feature release, insider tips for performing your digital marketing, and fascinating stories about digital marketing.</p>
						</div>
						<div className="dlab-subscribe style-2 max-w500">
							<form className="dzSubscribe" action="script/mailchamp.php" method="post">
								<div className="dzSubscribeMsg"></div>
								<div className="form-group">
									<div className="input-group">
										<input name="dzEmail" required="required" type="email" className="form-control" placeholder="Email Address"/>
										<div className="input-group-addon">
											<button name="submit" value="Submit" type="submit" className="btn rounded-xl shadow btn-primary">Subscribe Now</button>
										</div>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
      </>
    )
  }
  
  export default Newsletter;