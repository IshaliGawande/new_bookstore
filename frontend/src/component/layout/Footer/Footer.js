import React, { Fragment } from "react";
// import playStore from "../../../images/playstore.png";
// import appStore from "../../../images/Appstore.png";
//import "./Footer.css";
import "./css/bootstrap.css";
// import "./css/font-awesome.min.css";
import "./css/style.css";
import "./css/responsive.css";

import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <Fragment>
      <section class="info_section layout_padding2">
        <div class="container">
          <div class="row">
            <div class="col-md-6 col-lg-3 info-col">
              <div class="info_detail">
                <h4>About Us</h4>
                <p>
                  Vitae aut explicabo fugit facere alias distinctio, exem
                  commodi mollitia minusem dignissimos atque asperiores incidunt
                  vel voluptate iste
                </p>
                <div class="info_social">
                  {/* <a href="">
                    <i class="fa fa-facebook" aria-hidden="true"></i>
                  </a>
                  <a href="">
                    <i class="fa fa-twitter" aria-hidden="true"></i>
                  </a>
                  <a href="">
                    <i class="fa fa-linkedin" aria-hidden="true"></i>
                  </a>
                  <a href="">
                    <i class="fa fa-instagram" aria-hidden="true"></i>
                  </a> */}
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-3 info-col">
              <div class="info_contact">
                <h4>Address</h4>
                <div class="contact_link_box">
                  <a href="https://www.google.com/maps/dir/20.406977,78.1395228/gcoey/@20.4100783,78.1343243,16z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3bd3ef97f2cbf13f:0x1851e9dd43605803!2m2!1d78.1354878!2d20.4131539">
                    <i class="fa fa-map-marker" aria-hidden="true"></i>
                    <span>Location</span>
                  </a>

                  <i class="fa fa-phone" aria-hidden="true"></i>
                  <span>Call +01 1234567890</span>

                  <i class="fa fa-envelope" aria-hidden="true"></i>
                  <span>demo@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer class="footer_section">
        <div class="container">
          <p>
            &copy; <span id="displayYear"></span> All Rights Reserved By GCOEY
            college
          </p>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
