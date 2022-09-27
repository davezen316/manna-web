// import Image1 from "images/projects/grid/pic1";
import Image from "next/image";
import { useEffect, useState } from "react";
import SimpleReactLightbox from 'simple-react-lightbox';
import {SRLWrapper, useLightbox} from 'simple-react-lightbox'; 

function Portfolio() {
  const portfolio = [
    // {
    //   title: "Feature Sample",
    //   category: ["all", "web_builder"],
    //   imageSrc: "/images/features/web-builder/page-builder.jpg",
    //   img: (
    //     <Image
    //       src="/images/features/web-builder/page-builder.jpg"
    //       layout="responsive"
    //       width={370}
    //       height={370}
    //     />
    //   ),
    //   author: "Dave Chen",
    //   link:"/web-builder#",
    // },
    {
      title: "Landing Page Builder",
      category: ["all", "web_builder"],
      imageSrc: "/images/homepage/features/landing-page-builder.png",
      img: (
        <Image
          src="/images/homepage/features/landing-page-builder.png"
          layout="responsive"
          width={370}
          height={370}
        />
      ),
      author: "Dave Chen",
      link:"/web-builder#landing-page-builder",
    },
    {
      title: "Section Templates",
      category: ["all", "web_builder"],
      imageSrc: "/images/homepage/features/section-templates.jpg",
      img: (
        <Image
          src="/images/homepage/features/section-templates.png"
          layout="responsive"
          width={370}
          height={370}
        />
      ),
      author: "Dave Chen",
      link:"/web-builder#section-templates",
    },
    {
      title: "Responsive Design Supported",
      category: ["all", "web_builder"],
      imageSrc: "/images/homepage/features/responsive-design-supported.png",
      img: (
        <Image
          src="/images/homepage/features/responsive-design-supported.png"
          layout="responsive"
          width={370}
          height={370}
        />
      ),
      author: "Dave Chen",
      link:"/web-builder#responsive-design-supported",
    },
    // {
    //   title: "Feature Sample",
    //   category: ["all", "web_builder"],
    //   imageSrc: "/images/features/web-builder/multilingual-supported.jpg",
    //   img: (
    //     <Image
    //       src="/images/features/web-builder/multilingual-supported.jpg"
    //       layout="responsive"
    //       width={370}
    //       height={370}
    //     />
    //   ),
    //   author: "Dave Chen",
    // },
    // {
    //   title: "Feature Sample",
    //   category: ["all", "web_builder"],
    //   imageSrc: "/images/features/web-builder/html-coding-supported.jpg",
    //   img: (
    //     <Image
    //       src="/images/features/web-builder/html-coding-supported.jpg"
    //       layout="responsive"
    //       width={370}
    //       height={370}
    //     />
    //   ),
    //   author: "Dave Chen",
    // },
    {
      title: "Matomo Analytics",
      category: ["all", "web_builder"],
      imageSrc: "/images/homepage/features/matomo-analytics.png",
      img: (
        <Image
          src="/images/homepage/features/matomo-analytics.png"
          layout="responsive"
          width={370}
          height={370}
        />
      ),
      author: "Dave Chen",
      link:"/web-builder#matomo-analytics",
    },
    {
      title: "SEO Optimization",
      category: ["all", "web_builder"],
      imageSrc: "/images/homepage/features/seo-optimization.png",
      img: (
        <Image
          src="/images/homepage/features/seo-optimization.png"
          layout="responsive"
          width={370}
          height={370}
        />
      ),
      author: "Dave Chen",
      link:"/web-builder#seo-optimization",
    },
    {
      title: "And More",
      category: ["all", "web_builder"],
      imageSrc: "/images/homepage/features/and-more.png",
      img: (
        <Image
          src="/images/homepage/features/and-more.png"
          layout="responsive"
          width={370}
          height={370}
        />
      ),
      author: "Dave Chen",
      link:"/web-builder",
    },
    {
      title: "Scheduling Tools",
      category: ["digital_marketing"],
      imageSrc: "/images/homepage/features/digital-marketing/scheduling-tools.png",
      img: (
        <Image
          src="/images/homepage/features/digital-marketing/scheduling-tools.png"
          layout="responsive"
          width={370}
          height={370}
        />
      ),
      author: "Dave Chen",
      link:"/digital-marketing#scheduling-tools",
    },
    {
      title: "News",
      category: ["digital_marketing"],
      imageSrc: "/images/homepage/features/digital-marketing/news.png",
      img: (
        <Image
          src="/images/homepage/features/digital-marketing/news.png"
          layout="responsive"
          width={370}
          height={370}
        />
      ),
      author: "Dave Chen",
      link:"/digital-marketing#news",
    },
    {
      title: "Newsletter",
      category: ["digital_marketing"],
      imageSrc: "/images/homepage/features/digital-marketing/newsletter.png",
      img: (
        <Image
          src="/images/homepage/features/digital-marketing/newsletter.png"
          layout="responsive"
          width={370}
          height={370}
        />
      ),
      author: "Dave Chen",
      link:"/digital-marketing#newsletter",
    },
    {
      title: "Funnel Marketing",
      category: ["digital_marketing"],
      imageSrc: "/images/homepage/features/digital-marketing/funnel-marketing.png",
      img: (
        <Image
          src="/images/homepage/features/digital-marketing/funnel-marketing.png"
          layout="responsive"
          width={370}
          height={370}
        />
      ),
      author: "Dave Chen",
      link:"/digital-marketing#funnel-marketing",
    },
    {
      title: "Online Shop",
      category: ["digital_marketing"],
      imageSrc: "/images/homepage/features/digital-marketing/online-shop.png",
      img: (
        <Image
          src="/images/homepage/features/digital-marketing/online-shop.png"
          layout="responsive"
          width={370}
          height={370}
        />
      ),
      author: "Dave Chen",
      link:"/digital-marketing#online-shop",
    },
    {
      title: "Member Area",
      category: ["digital_marketing"],
      imageSrc: "/images/homepage/features/digital-marketing/member-area.png",
      img: (
        <Image
          src="/images/homepage/features/digital-marketing/member-area.png"
          layout="responsive"
          width={370}
          height={370}
        />
      ),
      author: "Dave Chen",
      link:"/digital-marketing#member-area",
    },
    //General Features//
    {
      title: "Local Listing",
      category: ["general"],
      imageSrc: "/images/homepage/features/general-features/local-listing.png",
      img: (
        <Image
          src="/images/homepage/features/general-features/local-listing.png"
          layout="responsive"
          width={370}
          height={370}
        />
      ),
      author: "Dave Chen",
      link:"/general-features#local-listing",
    },
    {
      title: "GDPR Center",
      category: ["general"],
      imageSrc: "/images/homepage/features/general-features/gdpr-center.png",
      img: (
        <Image
          src="/images/homepage/features/general-features/gdpr-center.png"
          layout="responsive"
          width={370}
          height={370}
        />
      ),
      author: "Dave Chen",
      link:"/general-features#gdpr-center",
    },
    {
      title: "Google Jobs Integration",
      category: ["general"],
      imageSrc: "/images/homepage/features/general-features/google-jobs-integration.png",
      img: (
        <Image
          src="/images/homepage/features/general-features/google-jobs-integration.png"
          layout="responsive"
          width={370}
          height={370}
        />
      ),
      author: "Dave Chen",
      link:"/general-features#google-jobs-integration",
    },
    {
      title: "Customizable Email",
      category: ["general"],
      imageSrc: "/images/homepage/features/general-features/customizable-email.png",
      img: (
        <Image
          src="/images/homepage/features/general-features/customizable-email.png"
          layout="responsive"
          width={370}
          height={370}
        />
      ),
      author: "Dave Chen",
      link:"/general-features#customizable-email",
    },
    //Enterprise Solutions
    {
      title: "Client Management",
      category: ["enterprise"],
      imageSrc: "/images/homepage/features/enterprise-solutions/client-management.png",
      img: (
        <Image
          src="/images/homepage/features/enterprise-solutions/client-management.png"
          layout="responsive"
          width={370}
          height={370}
        />
      ),
      author: "Dave Chen",
      link:"/entreprise-solutions#customizable-email",
    },
    {
      title: "Client Content Delivery",
      category: ["enterprise"],
      imageSrc: "/images/homepage/features/enterprise-solutions/client-content-delivery.png",
      img: (
        <Image
          src="/images/homepage/features/enterprise-solutions/client-content-delivery.png"
          layout="responsive"
          width={370}
          height={370}
        />
      ),
      author: "Dave Chen",
      link:"/entreprise-solutions#client-content-delivery",
    },
    {
      title: "Client Lead Generation",
      category: ["enterprise"],
      imageSrc: "/images/homepage/features/enterprise-solutions/client-lead-generation.png",
      img: (
        <Image
          src="/images/homepage/features/enterprise-solutions/client-lead-generation.png"
          layout="responsive"
          width={370}
          height={370}
        />
      ),
      author: "Dave Chen",
      link:"/entreprise-solutions#client-lead-generation",
    },
    {
      title: "Custom Layout",
      category: ["enterprise"],
      imageSrc: "/images/homepage/features/enterprise-solutions/custom-layout.png",
      img: (
        <Image
          src="/images/homepage/features/enterprise-solutions/custom-layout.png"
          layout="responsive"
          width={370}
          height={370}
        />
      ),
      author: "Dave Chen",
      link:"/entreprise-solutions#custom-layout",
    },
    {
      title: "Custom Feature",
      category: ["enterprise"],
      imageSrc: "/images/homepage/features/enterprise-solutions/custom-feature.png",
      img: (
        <Image
          src="/images/homepage/features/enterprise-solutions/custom-feature.png"
          layout="responsive"
          width={370}
          height={370}
        />
      ),
      author: "Dave Chen",
      link:"/entreprise-solutions#custom-feature",
    },
  ];

  const [filter, setFilter] = useState("web_builder");
  const [projects, setProjects] = useState([]);
  const { openLightbox } = useLightbox();

  useEffect(() => {
    setProjects(portfolio);
  }, []);

  useEffect(() => {
    setProjects([]);

    const filtered = portfolio.map((p) => ({
      ...p,
      filtered: p.category.includes(filter),
    }));
    setProjects(filtered);
  }, [filter]);
  return (
        <>
            <div className="site-filters style-1 clearfix center m-b40">
			
			
			
                <ul className="filters">
                  {/* <li className={`btn ${filter === "all" ? "active" : ""}`}>
                    <a  active={"all"}  onClick={() => setFilter("all")}>
                      All
                    </a>
                  </li> */}
                  <li className={`btn ${filter === "web_builder" ? "active" : ""}`}>
                    <a
                      active={"web_builder"}
                      onClick={() => setFilter("web_builder")}
                    >
                      Web Builder
                    </a>
                  </li>
                  <li className={`btn ${filter === "digital_marketing" ? "active" : ""}`}>
                    <a
                      active={"digital_marketing"}
                      onClick={() => setFilter("digital_marketing")}
                    >
                      Digital Marketing Features
                    </a>
                  </li>
                  <li className={`btn ${filter === "general" ? "active" : ""}`}>
                    <a
                      active={"general"}
                      onClick={() => setFilter("general")}
                    >
                      General Features
                    </a>
                  </li>
                  <li className={`btn ${filter === "enterprise" ? "active" : ""}`}>
                    <a
                      active={"enterprise"}
                      onClick={() => setFilter("enterprise")}
                    >
                      Enterprise Solutions
                    </a>
                  </li>
                </ul>
				
				
				
            </div>
            {/* <SimpleReactLightbox> */}
                {/* <SRLWrapper > */}
                    <div className="clearfix">
                        <ul id="masonry" className="row" data-column-width="3">
                          {projects.map((item) =>
                            item.filtered === true ? (
                              <>
                                <li
                                  className="card-container col-lg-4 col-md-6 col-sm-6 web_design wow fadeInUp"
                                  data-wow-duration="2s"
                                  data-wow-delay="0.1s"
                                >
                                    <div className="dlab-box style-1 m-b30">
                                        <div className="dlab-media">
                                            <a href={item.link}> {item.img}</a> 
                                        </div>
                                    </div>
                                </li>
                              </>
                            ) : (
                              ""
                            )
                          )}
                        </ul>
                    </div>
                {/* </SRLWrapper >       */}
            {/* </SimpleReactLightbox>   */}
        </>
  );
}

export default Portfolio;
