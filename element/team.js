
import TeamSlider from './../component/teamSlider';

function Team() {
  return (
    <>
      <section className="content-inner">
			<div className="container">
				<div className="section-head style-1 text-center">
					{/* <h6 className="sub-title bgl-primary m-b20 text-primary">Team</h6> */}
					<h2 className="title">We Are Always Here To Support You with <span class="text-loudspeaker-one">Loudspeaker One</span></h2>
				</div>
				<div className="row">
					<div className="col-lg-12">
						<TeamSlider/>
					</div>
				</div>
			</div>
		</section>	
    </>
  )
}

export default Team;