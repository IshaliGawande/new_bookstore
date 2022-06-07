import React, { Fragment, useEffect, useState } from "react";
import "./Products.css";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, getProduct } from "../../actions/productAction";
import Loader from "../layout/Loader/Loader";
import ProductCard from "../Home/ProductCard";
import Pagination from "react-js-pagination";
import Slider from "@material-ui/core/Slider";
import { useAlert } from "react-alert";
import Typography from "@material-ui/core/Typography";
import MetaData from "../layout/MetaData";

import "./css/bootstrap.css";

import "./css/style.css";

import "./css/responsive.css";

import "bootstrap/dist/css/bootstrap.min.css";

import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

import { AiTwotoneEnvironment } from "react-icons/ai";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faFacebook,
  faTwitter,
  faGoogle,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const categories = [
  "Old-Books",
  "Notes",
  "Accessories",
  "Referance Books",
  "Interview Prep",
  "Coding",
];

const Products = ({ match }) => {
  const dispatch = useDispatch();

  const alert = useAlert();

  const [currentPage, setCurrentPage] = useState(1);
  const [price, setPrice] = useState([0, 25000]);
  const [category, setCategory] = useState("");

  const [ratings, setRatings] = useState(0);

  const {
    products,
    loading,
    error,
    productsCount,
    resultPerPage,
    filteredProductsCount,
  } = useSelector((state) => state.products);

  const keyword = match.params.keyword;

  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };

  const priceHandler = (event, newPrice) => {
    setPrice(newPrice);
  };
  let count = filteredProductsCount;

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    dispatch(getProduct(keyword, currentPage, price, category, ratings));
  }, [dispatch, keyword, currentPage, price, category, ratings, alert, error]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="PRODUCTS -- ECOMMERCE" />
          <h2 className="productsHeading">Products</h2>

          <div className="products">
            {products &&
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div>

          <div className="filterBox">
            <Typography>Price</Typography>
            <Slider
              value={price}
              onChange={priceHandler}
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
              min={0}
              max={25000}
            />

            <Typography>Categories</Typography>
            <ul className="categoryBox">
              {categories.map((category) => (
                <li
                  className="category-link"
                  key={category}
                  onClick={() => setCategory(category)}
                >
                  {category}
                </li>
              ))}
            </ul>

            <fieldset>
              <Typography component="legend">Ratings Above</Typography>
              <Slider
                value={ratings}
                onChange={(e, newRating) => {
                  setRatings(newRating);
                }}
                aria-labelledby="continuous-slider"
                valueLabelDisplay="auto"
                min={0}
                max={5}
              />
            </fieldset>
          </div>
          {resultPerPage < count && (
            <div className="paginationBox">
              <Pagination
                activePage={currentPage}
                itemsCountPerPage={resultPerPage}
                totalItemsCount={productsCount}
                onChange={setCurrentPageNo}
                nextPageText="Next"
                prevPageText="Prev"
                firstPageText="1st"
                lastPageText="Last"
                itemClass="page-item"
                linkClass="page-link"
                activeClass="pageItemActive"
                activeLinkClass="pageLinkActive"
              />
            </div>
          )}

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

export default Products;
