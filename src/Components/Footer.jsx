import React from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      className="footer-style-2 ptb--30 bg_image bg_image--1"
      data-black-overlay="6"
    >
      <div className="wrapper plr--50 plr_sm--20">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-4 col-md-6 col-sm-6 col-12">
            <div className="inner">
              <div className="logo text-center text-sm-left mb_sm--20">
                <p>Privacy Policy | © 2021 David Alen. All Rights Reserved.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12 col-12">
            <div className="inner text-lg-right text-center mt_md--20 mt_sm--20 pr-2">
              <div className="text">
                <p>
                  Developed by
                  <a href="https://www.diegosandoval.tech/" target="_blank">
                    <strong> Diego Sandoval</strong>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
