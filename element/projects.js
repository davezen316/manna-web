import Portfolio from "../component/portfolio";

function Projects() {
    return (
        <>
            <section className="content-inner">
                <div className="container">
                    <div className="section-head style-1 text-center">
                        {/* <h6 className="sub-title bgl-primary m-b20 text-primary">
                            All Features
                        </h6> */}
                        <h2 className="title">
                            Features That Designed to Build Digital Presence
                        </h2>
                    </div>

                    <Portfolio />
                    {/* <div className="text-center">
                        <btn className="btn btn-primary">Get A Demo</btn>
                    </div> */}
                </div>
            </section>
        </>
    );
}

export default Projects;
