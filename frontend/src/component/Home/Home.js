import React, { Fragment, useEffect } from "react";
//import { CgMouse } from "react-icons/all";
//import "./Home.css";
import "./css/bootstrap.css";
// import "./css/font-awesome.min.css";
import "./css/style.css";
import "./css/responsive.css";
//import ProductCard from "./ProductCard.js";
import MetaData from "../layout/MetaData";
import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";
import slider from "../Home/images/slider-img.png";
import cat1 from "../Home/images/cat1.png";
//import cat2 from "../Home/images/cat2.png";
import cat3 from "../Home/images/cat3.png";
import cat4 from "../Home/images/cat4.png";
import cat5 from "../Home/images/cat5.png";
import cat6 from "../Home/images/cat6.png";
import about_img from "../Home/images/about-img.png";
import c1 from "../Home/images/c1.jpg";
import c2 from "../Home/images/c2.jpg";
import c3 from "../Home/images/c3.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  FaAngleLeft,
  FaAngleRight,
  // FaTwitter,
  // FaFacebook,
  // FaLinkedinIn,
  // FaInstagram,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
import { AiTwotoneEnvironment } from "react-icons/ai";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faGoogle,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { error, loading } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="BOOKSTORE 101" />

          <div class="hero_area">
            <section class="slider_section ">
              <div
                id="customCarousel1"
                class="carousel slide"
                data-ride="carousel"
              >
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <div class="container ">
                      <div class="row">
                        <div class="col-md-6">
                          <div class="detail-box">
                            <h5>Bookstore 101 </h5>
                            <h1>BUY READ SELL REPEAT</h1>
                            <p>
                              A 101 platform where you can MULTIPLY your
                              knowledge and DIVIDE your expense.
                            </p>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="img-box">
                            <img src={slider} alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <div class="carousel-item">
                <div class="container ">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="detail-box">
                        <h5>Bookstore 101 </h5>
                        <h1>
                          For All Your <br />
                          Reading Needs
                        </h1>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Iste quam velit saepe dolorem deserunt quo
                          quidem ad optio.
                        </p>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="img-box">
                        <img src={slider} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
                  {/* <div class="carousel-item">
                <div class="container ">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="detail-box">
                        <h5>Bookstore 101 Bookstore</h5>
                        <h1>
                          For All Your <br />
                          Reading Needs
                        </h1>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Iste quam velit saepe dolorem deserunt quo
                          quidem ad optio.
                        </p>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="img-box">
                        <img src={slider} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
                </div>
                <div class="carousel_btn_box">
                  <a
                    class="carousel-control-prev"
                    href="#customCarousel1"
                    role="button"
                    data-slide="prev"
                  >
                    <FaAngleLeft color="white" />
                    <span class="sr-only">Previous</span>
                  </a>
                  <a
                    class="carousel-control-next"
                    href="#customCarousel1"
                    role="button"
                    data-slide="next"
                  >
                    <FaAngleRight color="white" />
                    <span class="sr-only">Next</span>
                  </a>
                </div>
              </div>
            </section>
          </div>

          <section class="catagory_section layout_padding">
            <div class="catagory_container">
              <div class="container ">
                <div class="heading_container heading_center">
                  <h2>Categories</h2>
                  <p>
                    You can find these categories of products here. Have a look!
                  </p>
                </div>
                <div class="row">
                  <div class="col-sm-6 col-md-4 ">
                    <div class="box ">
                      <div class="img-box">
                        <img src={cat1} alt="" />
                      </div>
                      <div class="detail-box">
                        <h5>Old Textbooks</h5>
                        <p>
                          Textbooks used by your seniors which helps you to
                          understand and grasp the concepts easily.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-md-4 ">
                    <div class="box ">
                      <div class="img-box">
                        <img src={cat1} alt="" />
                      </div>
                      <div class="detail-box">
                        <h5>Notes</h5>
                        <p>
                          Handwritten notes of toppers,which will help you score
                          in your semesters exams.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-md-4 ">
                    <div class="box ">
                      <div class="img-box">
                        <img src={cat3} alt="" />
                      </div>
                      <div class="detail-box">
                        <h5>Coding</h5>
                        <p>
                          Some selected and bookmarked coding practice questions
                          and concepts recommended by seniors.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-md-4 ">
                    <div class="box ">
                      <div class="img-box">
                        <img src={cat4} alt="" />
                      </div>
                      <div class="detail-box">
                        <h5>Referance Books</h5>
                        <p>
                          Referance books to know the concepts more deeply and
                          to know its origin.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-md-4 ">
                    <div class="box ">
                      <div class="img-box">
                        <img src={cat5} alt="" />
                      </div>
                      <div class="detail-box">
                        <h5>Accessories</h5>
                        <p>
                          All types of Accessories which you can use in your
                          practicals or graphics purpose.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-md-4 ">
                    <div class="box ">
                      <div class="img-box">
                        <img src={cat6} alt="" />
                      </div>
                      <div class="detail-box">
                        <h5>Interview Prep</h5>
                        <p>
                          Get to know the Interview tips and tricks to crack
                          placements,suggested by experienced seniors.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

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
                      Bookstore 101 is a online bookstore at a college level.
                      Here you can find two types of services, buying a second
                      hand books,notes and accessories and selling the same.
                      Juniors can buy a book or accessories in half of a
                      original price and save their money. Seniors can sell
                      their belongings and make money rather than wasting
                      it.This idea helps in multiplying knowledge and divide
                      money in simple ways. Also seekers dont have to search
                      here and there for seeking help. This is the one platform
                      where you can find everything. Also we ensure the quality
                      of products to be maintain as it is.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section class="client_section layout_padding">
            <div class="container ">
              <div class="heading_container heading_center">
                <h2>What Says Customers</h2>
                <hr />
              </div>
              <div class="row">
                <div class="col-md-6 mx-auto">
                  <div class="client_container ">
                    <div class="detail-box">
                      <p>
                        Bookstore 101 is a trustable website to buy books as the
                        condition of books are well maintained and clean.
                      </p>
                      <span>
                        <i class="fa fa-quote-left" aria-hidden="true"></i>
                      </span>
                    </div>
                    <div class="client_id">
                      <div class="img-box">
                        <img src={c1} alt="" />
                      </div>
                      <div class="client_name">
                        <h5>Rutwik Kothari</h5>
                        <h6>Student(1st year)</h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 mx-auto">
                  <div class="client_container ">
                    <div class="detail-box">
                      <p>
                        Easy to use interface and systemantic distribution of
                        books and accessories.
                      </p>
                      <span>
                        <i class="fa fa-quote-left" aria-hidden="true"></i>
                      </span>
                    </div>
                    <div class="client_id">
                      <div class="img-box">
                        <img src={c2} alt="" />
                      </div>
                      <div class="client_name">
                        <h5>Gauri Kariya(2nd year)</h5>
                        <h6>Student</h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 mx-auto">
                  <div class="client_container ">
                    <div class="detail-box">
                      <p>
                        On time dilevery and payments. Secure to sell your
                        books.
                      </p>
                      <span>
                        <i class="fa fa-quote-left" aria-hidden="true"></i>
                      </span>
                    </div>
                    <div class="client_id">
                      <div class="img-box">
                        <img src={c3} alt="" />
                      </div>
                      <div class="client_name">
                        <h5>Gunjan Gandhi(3rd year)</h5>
                        <h6>Student</h6>
                      </div>
                    </div>
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
                      <a href="https://www.facebook.com/">
                        {/* <FaFacebook color="white" /> */}
                        <FontAwesomeIcon icon={faFacebook} />
                      </a>
                      <a href="https://twitter.com/">
                        {/* <FaTwitter color="white" /> */}
                        <FontAwesomeIcon icon={faTwitter} />{" "}
                      </a>
                      <a href="https://in.linkedin.com/">
                        {/* <FaLinkedinIn color="white" /> */}
                        <FontAwesomeIcon icon={faGoogle} />{" "}
                      </a>
                      <a href="https://www.instagram.com/">
                        {/* <FaInstagram color="white" /> */}
                        <FontAwesomeIcon icon={faInstagram} />{" "}
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-lg-3 info-col">
                  <div class="info_contact">
                    <h4>Address</h4>
                    <div class="contact_link_box">
                      <a href="https://www.google.com/maps/dir/20.406977,78.1395228/gcoey/@20.4100783,78.1343243,16z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3bd3ef97f2cbf13f:0x1851e9dd43605803!2m2!1d78.1354878!2d20.4131539">
                        <AiTwotoneEnvironment color="white" />
                        <span>Location</span>
                      </a>

                      <FaPhoneAlt color="white" />
                      <span>Call +01 1234567890</span>

                      <FaEnvelope color="white" />
                      <span>ishaligawande@gmail.com</span>
                    </div>
                  </div>
                </div>

                <div class="col-md-6 col-lg-3 info-col">
                  <div class="map_container">
                    <div class="map">
                      <div id="googleMap"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <footer class="footer_section">
            <div class="container">
              <p>
                &copy; <span id="displayYear"></span> All Rights Reserved By
                GCOEY college.
              </p>
            </div>
          </footer>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import React, { Fragment, useEffect } from "react";
// //import { CgMouse } from "react-icons/all";
// import "./Home.css";
// //import "./css/bootstrap.css";
// // import "./css/font-awesome.min.css";
// // import "./css/style.css";
// // import "./css/responsive.css";
// import ProductCard from "./ProductCard.js";
// import MetaData from "../layout/MetaData";
// import { clearErrors, getProduct } from "../../actions/productAction";
// import { useSelector, useDispatch } from "react-redux";
// import Loader from "../layout/Loader/Loader";
// import { useAlert } from "react-alert";
// //import slider from "../Home/images/slider-img.png";
// //import cat1 from "../Home/images/cat1.png";
// //import cat2 from "../Home/images/cat2.png";
// // import cat3 from "../Home/images/cat3.png";
// // import cat4 from "../Home/images/cat4.png";
// // import cat5 from "../Home/images/cat5.png";
// // import cat6 from "../Home/images/cat6.png";
// // import about_img from "../Home/images/about-img.png";
// // import c1 from "../Home/images/c1.jpg";
// // import c2 from "../Home/images/c2.jpg";  j
// // import c3 from "../Home/images/c3.jpg";
// // import { Link } from "react-router-dom";

// const Home = () => {
//   const alert = useAlert();
//   const dispatch = useDispatch();
//   const { loading, error, products } = useSelector((state) => state.products);

//   useEffect(() => {
//     if (error) {
//       alert.error(error);
//       dispatch(clearErrors());
//     }
//     dispatch(getProduct());
//   }, [dispatch, error, alert]);

//   return (
//     <Fragment>
//       {loading ? (
//         <Loader />
//       ) : (
//         <Fragment>
//           <MetaData title="ECOMMERCE" />

//           <div className="banner">
//             <p>Welcome to Ecommerce</p>
//             <h1>FIND AMAZING PRODUCTS BELOW</h1>

//             <a href="#container">
//               <button>Scroll</button>
//             </a>
//           </div>

//           <h2 className="homeHeading">Featured Products</h2>

//           <div className="container" id="container">
//             {products &&
//               products.map((product) => (
//                 <ProductCard key={product._id} product={product} />
//               ))}
//           </div>
//         </Fragment>
//       )}
//     </Fragment>
//   );
// };

// export default Home;
