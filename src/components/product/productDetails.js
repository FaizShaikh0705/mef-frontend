import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Container, Row, Col, Form, Tabs, Tab, Modal } from "react-bootstrap";
import Link from "next/link";
import { Carousel } from "react-bootstrap";
// import dynamic from 'next/dynamic';
import parse from "html-react-parser";
import Image from "next/image";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ProductTestimony from "./productTestimony";
import Accordion from "react-bootstrap/Accordion";
import { VscAccount } from "react-icons/vsc";
import { SlCalender } from "react-icons/sl";
import { AiFillCheckCircle } from "react-icons/ai";
import { FaRegStar } from "react-icons/fa";
import { LiaCommentsSolid } from "react-icons/lia";
import { FaPlus, FaArrowDown, FaMinus } from "react-icons/fa";
import styles from "./product.module.scss";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { database } from "../../config/Fire";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
// import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { FaStar } from "react-icons/fa";
import Slider from "react-slick";
import { publicRequest } from "../../requestMethods";
import { addProduct } from "../../redux/cartRedux";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import * as fbq from '../../../lib/fpixel';


var $ = require("jquery");
if (typeof window !== "undefined") {
  window.$ = window.jQuery = require("jquery");
}

const ProductDetailsContainer = ({
  productDetailsData: initialProductDetailsData,
}) => {
  const [isDatePickerFocused, setDatePickerFocused] = useState(false);

  const [selectedVariants, setSelectedVariants] = useState({});
  const [selectedVariant, setSelectedVariant] = useState({});
  const [productDetailsData, setProductDetailsData] = useState(
    initialProductDetailsData
  );

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [product, setProduct] = useState({});
  const dispatch = useDispatch();

  const router = useRouter();
  const { productId } = 0;

  const handleVariantSelect = (productId, variant) => {
    setSelectedVariant(variant);
    // productId = "test";
    console.log(productId);
    setSelectedVariants((prevVariants) => ({
      ...prevVariants,
      [productId]: variant,
    }));
  };

  // useEffect(() => {
  //   if (initialProductDetailsData) {
  //     fbq.viewContent(initialProductDetailsData._id, initialProductDetailsData.postPriceName);
  //   }
  // }, [initialProductDetailsData]);


  const [rating, setRating] = useState(0); // State to manage rating input

  // Handle click event for star rating
  const handleStarClick = (selectedRating) => {
    setRating(selectedRating === rating ? 0 : selectedRating); // Toggle rating state
  };


  useEffect(() => {
    const productDetailsRef = database.ref("product");
    const handleData = (snapshot) => {
      try {
        if (snapshot && snapshot.val()) {
          const updatedProductDetailsData = snapshot.val();
          setProductDetailsData(updatedProductDetailsData);
        } else {
          console.error("Firebase snapshot is empty or null");
        }
      } catch (error) {
        console.error("Error processing Firebase data:", error);
      }
    };

    productDetailsRef.on("value", handleData);

    return () => {
      productDetailsRef.off("value", handleData);
    };
  }, []);

  const {
    postTopicName,
    postImage,
    postLongDetail,
    postPriceName,
    postPriceName2,
    postVariantName1,
    postVariantName2,
    productCode,
    strikeOutName,
    discoutpercentage,
    starCountNumber,
  } = initialProductDetailsData;

  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const [showReviews, setShowReviews] = useState(true);

  const handleButtonClick = () => {
    setShowReviews(!showReviews);
  };

  const addProductInCart = () => {
    // console.log(selectedVariants,productDetailsData,initialProductDetailsData);

    var item = {};
    // setQuantity(1);
    // console.log(initialProductDetailsData);
    item["_id"] = initialProductDetailsData["_id"];
    item["postImage"] = initialProductDetailsData["postImage"];
    item["postTopicName"] = initialProductDetailsData["postTopicName"];
    item["postVariantName1"] = initialProductDetailsData["postVariantName1"];
    item["selectedVariantName"] = selectedVariant["variantName"]
      ? selectedVariant["variantName"]
      : initialProductDetailsData["postVariantName1"];
    initialProductDetailsData["selectedVariantPrice"] = selectedVariant["price"]
      ? selectedVariant["price"]
      : initialProductDetailsData["postPriceName"];
    item["selectedVariantPrice"] =
      parseInt(initialProductDetailsData["selectedVariantPrice"]) * quantity;
    // // item["quantity"] = 1;
    // console.log(item);
    // // console.log(selectedVariants[key]);
    dispatch(addProduct(item));
    setShowProduct(true);
    // dispatch(addProduct({
    //   product,
    //   ...initialProductDetailsData,
    //   quantity,
    //   price: postPriceName * quantity
    // }))


    fbq.addToCart(initialProductDetailsData._id, initialProductDetailsData.postPriceName);
    // Perform add to cart logic here (Redux, API call, etc.)

  };

  const user = useSelector((state) => state.user);

  const handleFormSubmit = async (values, actions) => {
    try {
      const response = await publicRequest.post("/reviews", {
        userId: user.currentUser._id,
        UserName: values.username,
        email: values.email,
        postLongDetail: values.message,
        rating: rating,
        position: "1",
        status: 0,
      });
      alert("Review submitted successfully.");
      window.location.reload();
      actions.setSubmitting(false);
      actions.resetForm();
      console.log(response);
    } catch (error) {
      console.error("Error submitting review:", error);
      // actions.setSubmitting(false);
    }
  };


  const [showProduct, setShowProduct] = useState(false);

  const handleCloseProduct = () => setShowProduct(false);
  const handleShowProduct = () => setShowProduct(true);

  const settings = {
    customPaging: function (i) {
      return (
        <a>
          <img src={postImage[i]} alt={`Thumbnail-${i}`} />
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };

  return (
    <>
      <section className={styles["breadcrumb"]}>
        <Container>
          <Row className={`text-center ${styles["content"]}`}>
            <h2>Products</h2>
            <p>
              <span>
                <Link href="/#">Home</Link>
              </span>{" "}
              <span>/</span>
              <span> Products</span>
              <span> / </span>
              <span>{postTopicName}</span>
            </p>
          </Row>
        </Container>
      </section>
      <section className={`${styles["productcontent-main"]} py-5`}>
        <Container>
          <Row>
            <Col lg={7}>
              {/* <Carousel>
                {postImage.map((imageUrl, index) => (
                  <Carousel.Item key={index}>
                    <img
                      className={`${styles["product-img"]} d-block`}
                      src={imageUrl}
                      alt={`Product-${index}`}
                    />
                  </Carousel.Item>
                ))}
              </Carousel> */}
              {productCode == "30049011" ?
                <div className="slider-container">
                  <Slider {...settings}>
                    {postImage.map((imageUrl, index) => (
                      <div key={index}>
                        <img
                          className={`${styles["product-img"]} d-block`}
                          src={imageUrl}
                          alt={`Product-${index}`}
                        />
                      </div>
                    ))}
                  </Slider>
                </div>
                :
                <div className="slider-container-comb">
                  <Slider {...settings}>
                    {postImage.map((imageUrl, index) => (
                      <div key={index}>
                        <img
                          className={`${styles["product-img"]} d-block`}
                          src={imageUrl}
                          alt={`Product-${index}`}
                        />
                      </div>
                    ))}
                  </Slider>
                </div>
              }
            </Col>
            <Col lg={5}>
              <div
                className={` mt-5 ${styles["product-quantity"]}`}
              >
                <div>
                  <h3 className="">{`${postTopicName}`}</h3>
                  <p>{parse(`${postLongDetail}`)}</p>
                  {/* <h3 className="">{`${postTopicName} (${selectedVariants[productId]?.variantName || postVariantName1
                    })`}</h3> */}
                  <div className="mt-2 d-flex">
                    <span className="me-2">Trusted by Many Customers</span>
                    <span style={{ color: "#d7b56d" }}>
                      <FaStar className="me-2" /><FaStar className="me-2" /><FaStar className="me-2" /><FaStar className="me-2" />
                    </span>
                  </div>
                </div>

                <div style={{ lineHeight: "2.5" }} className={`${styles['price-txt']}`}>
                  {/* <p className="me-3">
                    <strong>
                      ₹{selectedVariants[productId]?.price || postPriceName}.00
                    </strong>
                  </p> */}
                  {/* <p style={{textDecoration:"line-through"}}>
                    <strong>
                    ₹ 349
                    </strong>
                  </p> */}
                  <p>
                    {strikeOutName == 0 ?
                      (<> Rs. {postPriceName}.00</>) :
                      (<><span className={styles['strike-price']}>Rs. {strikeOutName}.00</span> Rs. {postPriceName}.00</>
                      )}
                  </p>
                  <span className={`${styles['off-box']} rounded-3 ms-3 mt-1`}>
                    {discoutpercentage}% Off
                  </span>
                </div>
              </div>

              <div className={`d-flex ${styles["product-cartbtn"]}`}>
                <div className={`${styles["price-box"]} ms-2`}>
                  <Button
                    href="#"
                    onClick={() => addProductInCart()}
                    style={{ margin: "0px 0px", width: "100%" }}
                    className={styles["pricebtn"]}
                    variant="outline-dark"
                    id="button-addon2"
                  >
                    Add To Cart
                  </Button>
                </div>
                <Modal show={showProduct} onHide={handleCloseProduct} className={styles["cart-modal"]}>
                  <Modal.Header closeButton>
                  </Modal.Header>
                  <Modal.Body style={{ fontFamily: 'Montserrat' }}><strong>Item Added to Cart</strong></Modal.Body>
                  <Modal.Footer>
                    <Button variant="outline-dark" href="/#shop">
                      Continue Shopping
                    </Button>
                    <Button variant="outline-dark" href="/cart">
                      Go to Cart
                    </Button>
                  </Modal.Footer>
                </Modal>
              </div>
              {productCode == "30049011" ?
                <>
                  <div className={styles['ingred-icons']}>
                    <div className={styles['items']}><img src="/images/nochemicals.png" alt="chemicals" /><p className="mt-2">No Chemicals</p></div>
                    <div className={styles['items']}><img src="/images/herbal.png" alt="herbal" /><p className="mt-2">Herbal</p></div>
                    <div className={styles['items']}><img src="/images/noperfume.png" alt="perfume" /><p className="mt-2">No Perfumes</p></div>
                    <div className={styles['items']}><img src="/images/naturalicon.png" alt="natural" /><p className="mt-2">Natural</p></div>
                  </div>
                  <h2 className="text-start" style={{ marginTop: "40px" }}>
                    Our Ingredients
                  </h2>
                  <ul>
                    <div className="d-flex justify-content-between mt-3">
                      <div>
                        <li>Coconut Oil</li>
                        <li>Almond Oil</li>
                        <li>Rosemary</li>
                        <li>Castor Oil</li>
                        <li>Black Seeds</li>
                      </div>
                      <div>
                        <li>Fenugreek Seeds</li>
                        <li>Curry Leaves</li>
                        <li>Bhringraj</li>
                        <li>Hibiscus</li>
                        <li>Lavendar & Base Q.S</li>
                      </div>
                    </div>
                  </ul>
                </>
                :
                <div>
                  <h2 className="text-start" style={{ marginTop: "40px" }}>
                    MKM Parfum Benefits
                  </h2>
                  <ul>
                    <div>
                      <li>lorem lorem lorem lorem lorem lorem lorem lorem.</li>
                      <li>lorem lorem lorem lorem lorem lorem lorem lorem.</li>
                      <li>lorem lorem lorem lorem lorem lorem lorem lorem.</li>
                      <li>lorem lorem lorem lorem lorem lorem lorem lorem.</li>
                      <li>lorem lorem lorem lorem lorem lorem lorem lorem.</li>
                    </div>
                  </ul>
                </div>
              }
            </Col>

            <Col lg={12}>
              <div className={`text-center ${styles["Review-section"]}`}>
                <h2 className="mb-4">Verified Reviews</h2>
              </div>
            </Col>
            <Col lg={12}>
              <div className="text-center">
                <Button variant="outline-dark" className="me-5">
                  Review
                </Button>
                <Button variant="outline-dark" onClick={handleShow}>Write a Review</Button>
                <ProductTestimony />
                <Modal show={show} centered onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Write a Review</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Formik
                      initialValues={{
                        username: "",
                        email: "",
                        message: "",
                        rating: 0,
                        postTimestamp: new Date().toUTCString(),
                      }}
                      validationSchema={Yup.object().shape({
                        username: Yup.string().required(
                          "Please enter your full name."
                        ),
                        email: Yup.string()
                          .email("Invalid email address")
                          .required("Please enter your email address."),
                        message: Yup.string().required(
                          "Please select a message."
                        ),
                        rating: Yup.number().min(1, "Please select a rating.")
                      })}

                    >
                      {(formik) => (
                        <Form method="post">
                          <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Field
                              className={`form-control ${formik.touched.username && formik.errors.username
                                ? "is-invalid"
                                : ""
                                }`}
                              type="text"
                              name="username"
                              placeholder="Full name"
                            />
                            <ErrorMessage
                              name="username"
                              component="div"
                              className={`${styles["valid-clr"]} invalid-feedback`}
                            />
                          </Form.Group>
                          <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Field
                              className={`form-control ${formik.touched.email && formik.errors.email
                                ? "is-invalid"
                                : ""
                                }`}
                              type="email"
                              name="email"
                              placeholder="Email address"
                            />
                            <ErrorMessage
                              name="email"
                              component="div"
                              className={`${styles["valid-clr"]} invalid-feedback`}
                            />
                          </Form.Group>

                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                          >
                            <Form.Label>Message</Form.Label>
                            <Field
                              className={`form-control ${formik.touched.message && formik.errors.message
                                ? "is-invalid"
                                : ""
                                }`}
                              as="textarea"
                              rows={3}
                              name="message"
                              placeholder="Type Message..."
                            />
                            <ErrorMessage
                              name="message"
                              component="div"
                              className={`${styles["valid-clr"]} invalid-feedback`}
                            />

                          </Form.Group>

                          <Form.Group className="mb-3">
                            <Form.Label>Rating</Form.Label>
                            <div className="star-rating">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <span
                                  key={star}
                                  className={star <= rating ? "star-filled" : "star-empty"}
                                  onClick={() => handleStarClick(star)}
                                  style={{ cursor: "pointer", fontSize: "24px", color: star <= rating ? "#FFD700" : "#D3D3D3" }} // Add star style
                                >
                                  &#9733;
                                </span>
                              ))}
                            </div>
                          </Form.Group>
                          <Button
                            variant="outline-dark"
                            type="button"
                            className=""
                            onClick={() => handleFormSubmit(formik.values, formik.actions)}>

                            Submit
                          </Button>
                        </Form>
                      )}
                    </Formik>
                  </Modal.Body>
                </Modal>
              </div>
            </Col>

            <Col lg={12}>
              {productCode == "30049011" ?
                <>
                  <div className="text-center">
                    <h2>FAQ</h2>
                  </div>
                  <div className="mt-4">
                    <Accordion>
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>
                          Lorem lorem lorem lorem lorem lorem lorem lorem?
                        </Accordion.Header>
                        <Accordion.Body>
                          MKM, lorem lorem lorem lorem lorem lorem lorem lorem
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="1">
                        <Accordion.Header>
                          Lorem lorem lorem lorem lorem lorem lorem lorem?
                        </Accordion.Header>
                        <Accordion.Body>
                          MKM, lorem lorem lorem lorem lorem lorem lorem lorem
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="2">
                        <Accordion.Header>
                          Lorem lorem lorem lorem lorem lorem lorem lorem?
                        </Accordion.Header>
                        <Accordion.Body>
                          MKM, lorem lorem lorem lorem lorem lorem lorem lorem
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="3">
                        <Accordion.Header>
                          Lorem lorem lorem lorem lorem lorem lorem lorem?
                        </Accordion.Header>
                        <Accordion.Body>
                          MKM, lorem lorem lorem lorem lorem lorem lorem lorem
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="4">
                        <Accordion.Header>
                          Lorem lorem lorem lorem lorem lorem lorem lorem?
                        </Accordion.Header>
                        <Accordion.Body>
                          MKM, lorem lorem lorem lorem lorem lorem lorem lorem
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="5">
                        <Accordion.Header>
                          Lorem lorem lorem lorem lorem lorem lorem lorem?
                        </Accordion.Header>
                        <Accordion.Body>
                          MKM, lorem lorem lorem lorem lorem lorem lorem lorem
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="6">
                        <Accordion.Header>
                          Lorem lorem lorem lorem lorem lorem lorem lorem?
                        </Accordion.Header>
                        <Accordion.Body>
                          MKM, lorem lorem lorem lorem lorem lorem lorem lorem
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="7">
                        <Accordion.Header>
                          Lorem lorem lorem lorem lorem lorem lorem lorem?
                        </Accordion.Header>
                        <Accordion.Body>
                          MKM, lorem lorem lorem lorem lorem lorem lorem lorem
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="8">
                        <Accordion.Header>
                          Lorem lorem lorem lorem lorem lorem lorem lorem?
                        </Accordion.Header>
                        <Accordion.Body>
                          MKM, lorem lorem lorem lorem lorem lorem lorem lorem
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </div>
                </>
                :
                <>
                  <div className="text-center mt-5">
                    <h2>FAQ’s</h2>
                  </div>
                  <div className="mt-4">
                    <Accordion>
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>
                          Lorem lorem lorem lorem lorem lorem lorem lorem?
                        </Accordion.Header>
                        <Accordion.Body>
                          Yes, lorem lorem lorem lorem, lorem lorem lorem lorem lorem lorem  lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem  lorem lorem lorem lorem lorem lorem  lorem lorem lorem lorem lorem lorem  lorem lorem lorem lorem lorem lorem.
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="1">
                        <Accordion.Header>
                          Lorem lorem lorem lorem lorem lorem lorem lorem?
                        </Accordion.Header>
                        <Accordion.Body>
                          Yes, lorem lorem lorem lorem, lorem lorem lorem lorem lorem lorem  lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem  lorem lorem lorem lorem lorem lorem  lorem lorem lorem lorem lorem lorem  lorem lorem lorem lorem lorem lorem.
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="2">
                        <Accordion.Header>
                          Lorem lorem lorem lorem lorem lorem lorem lorem?
                        </Accordion.Header>
                        <Accordion.Body>
                          Yes, lorem lorem lorem lorem, lorem lorem lorem lorem lorem lorem  lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem  lorem lorem lorem lorem lorem lorem  lorem lorem lorem lorem lorem lorem  lorem lorem lorem lorem lorem lorem.
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </div>
                </>
              }
            </Col>








            {/* <Col lg={10}>
                <div className="text-center py-5">
                  <h3>Our Other Proucts</h3>
                </div>
                <div className="row">
                  <div className="col-lg-3 text-center">
                    <Image
                      className={styles["otherproduct-image"]}
                      objectFit="containt"
                      layout="responsive"
                      height="100"
                      width="101"
                      alt={postImage}
                      src={postImage}
                    />
                    <h5>Hair Oil</h5>
                    <p>
                      From Rs. 1,400.00{" "}
                      <span className="text-decoration-line-through">
                        1,750.00
                      </span>
                    </p>
                    <div className="d-flex justify-content-center">
                      <FaRegStar />
                      <FaRegStar />
                      <FaRegStar />
                      <FaRegStar />
                      <p className="px-2" style={{ marginTop: "-3px" }}>
                        No reviews
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-3 text-center">
                    <Image
                      className={styles["otherproduct-image"]}
                      objectFit="containt"
                      layout="responsive"
                      height="180"
                      width="181"
                      alt={postImage}
                      src={postImage}
                    />
                    <h5>Hair Oil</h5>
                    <p>
                      From Rs. 1,400.00{" "}
                      <span className="text-decoration-line-through">
                        1,750.00
                      </span>
                    </p>
                    <div className="d-flex justify-content-center">
                      <FaRegStar />
                      <FaRegStar />
                      <FaRegStar />
                      <FaRegStar />
                      <p className="px-2" style={{ marginTop: "-3px" }}>
                        No reviews
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-3 text-center">
                    <Image
                      className={styles["otherproduct-image"]}
                      objectFit="containt"
                      layout="responsive"
                      height="180"
                      width="181"
                      alt={postImage}
                      src={postImage}
                    />
                    <h5>Hair Oil</h5>
                    <p>
                      From Rs. 1,400.00{" "}
                      <span className="text-decoration-line-through">
                        1,750.00
                      </span>
                    </p>
                    <div className="d-flex justify-content-center">
                      <FaRegStar />
                      <FaRegStar />
                      <FaRegStar />
                      <FaRegStar />
                      <p className="px-2" style={{ marginTop: "-3px" }}>
                        No reviews
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-3 text-center">
                    <Image
                      className={styles["otherproduct-image"]}
                      objectFit="containt"
                      layout="responsive"
                      height="180"
                      width="181"
                      alt={postImage}
                      src={postImage}
                    />
                    <h5>Hair Oil</h5>
                    <p>
                      From Rs. 1,400.00{" "}
                      <span className="text-decoration-line-through">
                        1,750.00
                      </span>
                    </p>
                    <div className="d-flex justify-content-center">
                      <FaRegStar />
                      <FaRegStar />
                      <FaRegStar />
                      <FaRegStar />
                      <p className="px-2" style={{ marginTop: "-3px" }}>
                        No reviews
                      </p>
                    </div>
                  </div>
                </div>
              </Col> */}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ProductDetailsContainer;
