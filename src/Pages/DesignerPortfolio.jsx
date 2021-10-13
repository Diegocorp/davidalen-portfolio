import React from "react";
import ScrollToTop from "react-scroll-up";
import TextLoop from "react-text-loop";
import Scrollspy from "react-scrollspy";
import {
  FiChevronUp,
  FiHeadphones,
  FiMail,
  FiMapPin,
  FiX,
  FiMenu,
} from "react-icons/fi";

import FooterTwo from "../Components/FooterTwo";
import TabThree from "../Components/TabThree";
import Helmet from "../Components/Helmet";
import Contact from "../Components/Contact";
import Brand from "../Components/Brand";
import HeaderDynamic from "../Components/HeaderDynamic";

const SlideList = [
  {
    textPosition: "text-left",
    category: "Welcome to my Portfolio",
    description: "",
    buttonText: "",
    buttonLink: "",
  },
];

const DesignerPortfolio = () => {
  return (
    <div>
      <Helmet pageTitle="Designer Portfolio" />

      {/* Start Header Area  */}
      <HeaderDynamic />
      {/* End Header Area  */}

      {/* Start Home section */}
      <div className="slider-wrapper" id="home">
        {SlideList.map((value, index) => (
          <div
            className="slide designer-portfolio slider-style-3  d-flex align-items-center justify-content-center bg_color--5 rn-slider-height"
            key={index}
          >
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-5">
                  <div className="designer-thumbnail">
                    <img
                      src="/assets/images/about/designer-avatar.png"
                      alt="Slider Images"
                    />
                  </div>
                </div>
                <div className="col-lg-7 mt_md--40 mt_sm--40">
                  <div className={`inner ${value.textPosition}`}>
                    {value.category ? <span>{value.category}</span> : ""}
                    <h1 className="title">
                      I’m David Alen
                      <br />
                      <TextLoop>
                        <span> UX Designer.</span>
                        <span> UI Designer.</span>
                        <span> Content Writter.</span>
                      </TextLoop>{" "}
                    </h1>
                    <h2>based in Bangladesh.</h2>
                    {value.description ? (
                      <p className="description">{value.description}</p>
                    ) : (
                      ""
                    )}
                    {value.buttonText ? (
                      <div className="slide-btn">
                        <a
                          className="rn-button-style--2 btn-primary-color"
                          href={`${value.buttonLink}`}
                        >
                          {value.buttonText}
                        </a>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* End Home section */}

      {/* Start Designer Portfolio  */}
      <div id="projects">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title text-center service-style--3 mt--120">
              <h2 className="title">My Projects</h2>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration.
              </p>
            </div>
          </div>
        </div>
        <div className="designer-portfolio-area ptb--70 bg_color--1">
          <div className="wrapper plr--70 plr_sm--30 plr_md--30">
            <TabThree column="col-lg-4 col-md-6 col-sm-6 col-12" />
          </div>
        </div>
      </div>
      {/* End Designer Portfolio  */}

      {/* Start Brand Section  */}
      <div className="rn-brand-area ptb--120 bg_color--5" id="clients">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center service-style--3 mb--30">
                <h2 className="title">My Clients</h2>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 mt--40">
              <Brand branstyle="branstyle--2" />
            </div>
          </div>
        </div>
      </div>
      {/* End Brand Section  */}

      {/* Start Contact Section  */}
      <div className="rn-brand-area ptb--120 bg_color-white" id="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center service-style--3">
                <h2 className="title">Contact me</h2>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 mt--40">
              <Contact />
            </div>
          </div>
        </div>
      </div>

      {/* End Contact Section  */}

      {/* Start Footer Style  */}
      <FooterTwo />
      {/* End Footer Style  */}

      {/* Start Back To Top */}
      <div className="backto-top">
        <ScrollToTop showUnder={160}>
          <FiChevronUp />
        </ScrollToTop>
      </div>
      {/* End Back To Top */}
    </div>
  );
};

export default DesignerPortfolio;
