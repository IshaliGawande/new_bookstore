// import React from "react";
// import { ReactNavbar } from "overlay-navbar";
// //import WebFont from "webfontloader";
// import "./Header.css";

// const options = {
//   burgerColorHover: "#eb4034",
//   // logo,
//   logoWidth: "20vmax",
//   navColor1: "white",
//   logoHoverSize: "10px",
//   logoHoverColor: "#eb4034",
//   link1Text: "Search",
//   link2Text: "Products",
//   link3Text: "Contact",
//   link4Text: "About",

//   link1Url: "/search",
//   link2Url: "/products",
//   link3Url: "/contact",
//   link4Url: "/about",

//   link1Size: "1.3vmax",
//   link1Color: "rgb(35, 35, 35)",
//   nav1justifyContent: "flex-end",
//   nav1justifyContent: "flex-end",
//   nav3justifyContent: "flex-start",
//   nav4justifyContent: "flex-start",
//   link1ColorHover: "#eb4034",
//   link1Margin: "1vmax",
//   profileIconUrl: "/login",

//   profileIconColor: "rgba(35, 35, 35,0.8)",
//   //SearchIconElement: "",
//   //searchIconColor: "white",
//   cartIconColor: "white",
//   profileIconColorHover: "#eb4034",
//   // searchIconColorHover: "#eb4034",
//   cartIconColorHover: "#eb4034",
//   cartIconMargin: "1vmax",
//};

// const Header = () => {
//   return <ReactNavbar {...options} />;
// };

// export default Header;

import "./css/bootstrap.css";
// import "./css/font-awesome.min.css";
import "./css/style.css";
import "./css/responsive.css";
import { Link } from "react-router-dom";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { solid, regular } from "@fortawesome/fontawesome-svg-core/import.macro";
import storelogo from "../Header/images/storelogo.png";

import "bootstrap/dist/css/bootstrap.css";
import "jquery/dist/jquery.min.js"; // Have to install and import jQuery because of bootstrap modal's dependency
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Header = () => {
  return (
    <header class="header_section">
      <div class="container-fluid">
        <nav class="navbar navbar-expand-lg custom_nav-container ">
          <Link class="navbar-brand" to={`/`}>
            {/* <span>Bookstore 101</span> */}
            <img width="40%" height="40%" src={storelogo} alt="" />
          </Link>

          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class=""> </span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <Link class="nav-link pl-lg-0" to={`/`}>
                  Home <span class="sr-only">(current)</span>
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to={`/about`}>
                  {" "}
                  About
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to={`/login`}>
                  Login
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to={`/products`}>
                  Products
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to={`/contact`}>
                  Contact Us
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to={`/search`}>
                  Search
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
