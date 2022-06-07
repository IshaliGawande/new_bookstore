import React from "react";
import "./aboutSection.css";
import "./css/bootstrap.css";
// import "./css/font-awesome.min.css";
import "./css/style.css";
import "./css/responsive.css";
import about_img from "../About/images/about-img.png";

import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

// import { Button, Typography, Avatar } from "@material-ui/core";
// import YouTubeIcon from "@material-ui/icons/YouTube";
// import InstagramIcon from "@material-ui/icons/Instagram";
const About = () => {
  //   const visitInstagram = () => {
  //     window.location = "https://instagram.com/meabhisingh";
  //   };
  return (
    <body class="sub_page">
      <section class="about_section layout_padding">
        <div class="container ">
          <div class="row">
            <div class="col-md-6">
              <div class="img-box">
                <img src={about_img} alt="" />
              </div>
            </div>
            <div class="col-md-6">
              <div class="detail-box">
                <div class="heading_container">
                  <h2>About Our Bookstore</h2>
                </div>
                <p>
                  Bookstore 101 is a online bookstore at a college level. Here
                  you can find two types of services, buying a second hand
                  books,notes and accessories and selling the same. Juniors can
                  buy a book or accessories in half of a original price and save
                  their money. Seniors can sell their belongings and make money
                  rather than wasting it.This idea helps in multiplying
                  knowledge and divide money in simple ways. Also seekers dont
                  have to search here and there for seeking help. This is the
                  one platform where you can find everything. Also we ensure the
                  quality of products to be maintain as it is.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="info_section layout_padding2">
        <div class="container">
          <div class="row">
            <div class="col-md-6 col-lg-3 info-col">
              <div class="info_detail">
                <h4>About Us</h4>
                <p>
                  We are final year students of GCOEY. We are the group of 4
                  members namely Ishali, Vaishnavi ,Rujuta and Mohanish.
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
    </body>
  );
};

export default About;

// import React from "react";
// import "./aboutSection.css";
// import { Button, Typography, Avatar } from "@material-ui/core";
// import YouTubeIcon from "@material-ui/icons/YouTube";
// import InstagramIcon from "@material-ui/icons/Instagram";
// const About = () => {
//   const visitInstagram = () => {
//     window.location = "https://instagram.com/meabhisingh";
//   };
//   return (
//     <div className="aboutSection">
//       <div></div>
//       <div className="aboutSectionGradient"></div>
//       <div className="aboutSectionContainer">
//         <Typography component="h1">About Us</Typography>

//         <div>
//           <div>
//             <Avatar
//               style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
//               src="https://res.cloudinary.com/tripleayt/image/upload/v1631555947/products/jpyibarlaxawvcvqjv5b.png"
//               alt="Founder"
//             />
//             <Typography>Abhishek Singh</Typography>
//             <Button onClick={visitInstagram} color="primary">
//               Visit Instagram
//             </Button>
//             <span>
//               This is a sample wesbite made by @meabhisingh. Only with the
//               purpose to teach MERN Stack on the channel 6 Pack Programmer
//             </span>
//           </div>
//           <div className="aboutSectionContainer2">
//             <Typography component="h2">Our Brands</Typography>
//             <a
//               href="https://www.youtube.com/channel/UCO7afj9AUo0zV69pqEYhcjw"
//               target="blank"
//             >
//               <YouTubeIcon className="youtubeSvgIcon" />
//             </a>

//             <a href="https://instagram.com/meabhisingh" target="blank">
//               <InstagramIcon className="instagramSvgIcon" />
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;
