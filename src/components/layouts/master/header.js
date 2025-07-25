import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container, NavDropdown, Offcanvas, Col, Card, Row, Form, Button } from "react-bootstrap";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { IoReorderThree, IoSearch } from "react-icons/io5";
import { FaCartPlus, FaUser, FaBars } from "react-icons/fa";
import styles from "../master/header.module.scss";
import { isMobile } from "react-device-detect";
import { useDispatch, useSelector } from "react-redux";
import { resetCart } from '../../../redux/cartRedux'
import { logout } from "../../../redux/apiCalls";
import { publicRequest } from "../../../requestMethods";
import { useRouter } from 'next/router';



// if (typeof window !== "undefined") {
//   window.dataLayer = window.dataLayer || [];
//   function gtag() {
//     dataLayer.push(arguments);
//   }
//   gtag("js", new Date());
//   gtag("config", "G-6JW6YCP2XW");
// }

const Header = ({ productData: initialProductData, sluginput }) => {
  if (isMobile) {
    $(".nav-link").click(function () {
      // if(!$(this).hasClass("dropdown-toggle")){
      $("#navcolbtn").click();
      // }
    });
  }
  const [product, setProduct] = useState({});
  const [selectedVariants, setSelectedVariants] = useState({});

  const [isNavbarExpanded, setIsNavbarExpanded] = useState(false);

  const router = useRouter();


  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products");
        setProduct(res.data);
      } catch (error) {
        console.error("Error fetching products:", error);
        // Handle error as needed, e.g., set an error state
      }
    };

    getProduct();
  }, []);

  const redirectToAnotherPage = (href) => {
    handleClose(); // Close the Offcanvas
    handleClose1();
    handleClose2();
    router.push(href); // Redirect to the specified page
  };

  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredProducts = Object.entries(product)
    .filter(([key, item]) => item.postIsActiveStatus === "1" && item.postTopicName.toLowerCase().includes(searchQuery.toLowerCase()));


  if (isMobile) {
    $(".nav-link").click(function () {
      if (!$(this).hasClass("dropdown-toggle")) {
        $("#navcolbtn").click();
      }
    });
  }

  // const handleNavClose = () => {
  //   document.getElementById("navcolbtn").click();
  // };

  // if (isMobile) {
  //   $(".nav-link").click(function () {
  //     if (!$(this).hasClass("dropdown-toggle")) {
  //       handleNavClose();
  //     }
  //   });
  // }

  const currentUser = useSelector((state) => state.user);
  // console.log(currentUser)
  // const { userInfo } = userLogin;

  // const quantity = useSelector(state => state.cart.quantity)
  const quantity = useSelector((state) => state.cart.products.length);

  const dispatch = useDispatch();

  const logoutHandler = () => {
    // logout(dispatch());
    dispatch(logout);
    dispatch(resetCart());

    localStorage.clear();
    sessionStorage.clear();
    clearCookies();
    // window.location.href = '/login';
  };

  const clearCookies = () => {
    const cookies = document.cookie.split("; ");
    cookies.forEach((cookie) => {
      const [name] = cookie.split("=");
      document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;`;
    });
  };

  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);



  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleShow1 = () => setShow1(true);
  const handleClose1 = () => setShow1(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);
  const handleToggle = () => setIsNavbarExpanded(!isNavbarExpanded);

  return (
    <>

      <header>
        <Navbar className={`${styles["nav-clr"]} `} expand="lg" fixed="top" expanded={isNavbarExpanded}>
          <Container fluid id="header11">

            {/* Mobile Hamburger */}
            <div className="d-lg-none">
              <FaBars size={20} style={{ cursor: 'pointer' }} onClick={handleShow2} />
            </div>

            {/* Center Logo */}
            <div className="text-center d-lg-none">
              <Link className="navbar-brand" href="/">
                <Image
                  key=""
                  height="60"
                  width="60"
                  objectFit="contain"
                  src="/images/logo.png"
                  alt="logo_img"
                  className={styles["nav-logo"]}
                  unoptimized
                />
              </Link>
            </div>

            {/* Right icons (Mobile only) */}
            <div className="d-flex align-items-center gap-3 d-lg-none">
              <Link className="nav-link" href='' onClick={handleShow1}>
                <div className={styles['search-icon']}>
                  <IoSearch />
                </div>
              </Link>
              <Link className="nav-link" href="/cart">
                <button type="button" className={`${styles["cart-btn"]} btn position-relative`}>
                  <span className={styles["cart-icon"]}>
                    <FaCartPlus />
                  </span>
                  <span className={`${styles["cart-badge"]} position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger`}>
                    {quantity}
                    <span className="visually-hidden">unread messages</span>
                  </span>
                </button>
              </Link>
            </div>

            {/* Full Nav for Desktop */}
            <div className="d-none d-lg-flex">
              <Link className="nav-link" href='' onClick={handleShow}>
                <div className={styles['search-icon']}>
                  <IoSearch />
                </div>
              </Link>
            </div>

            <div className="d-none d-lg-block">
              <div className="text-center">
                <Link className="navbar-brand" href="/">
                  <Image
                    key=""
                    height="60"
                    width="60"
                    objectFit="contain"
                    src="/images/logo.png"
                    alt="logo_img"
                    className={styles["nav-logo"]}
                    unoptimized
                  />
                </Link>
              </div>

              <Navbar.Collapse className="d-none d-lg-flex justify-content-between w-100">
                <Nav
                  className="navbar-nav mr-auto w-100 justify-content-center clearfix"
                  navbarScroll
                >
                  <Link className={`${styles["pad-a"]} nav-link pe-5`} href="/">
                    Home
                  </Link>
                  <Link
                    className={`${styles["pad-a"]} nav-link pe-5`}
                    href="/aboutus"
                  >
                    About
                  </Link>
                  <Link
                    className={`${styles["pad-a"]} nav-link pe-5`}
                    href="/#shop"
                  >
                    Shop
                  </Link>
                  <Link
                    className={`${styles["pad-a"]} nav-link pe-5`}
                    href="/blog"
                  >
                    Blog
                  </Link>
                  <Link
                    className={`${styles["pad-a"]} nav-link pe-5`}
                    href="/contact"
                  >
                    Contact
                  </Link>
                </Nav>
              </Navbar.Collapse>
            </div>

            <div className="d-none d-lg-flex justify-content-between gap-3">
              <Nav className={`${styles["cart-icon-mobile"]} navbar-nav`}>
                <div className="d-flex align-items-center">

                  <Link className="nav-link " href="/cart">
                    <button
                      type="button"
                      className={`${styles["cart-btn"]} btn position-relative`}
                    >
                      <span className={styles["cart-icon"]}>
                        <FaCartPlus />
                      </span>
                      <span
                        className={`${styles["cart-badge"]} position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger`}
                      >
                        {quantity}
                        <span className="visually-hidden">unread messages</span>
                      </span>
                    </button>
                  </Link>

                </div>
              </Nav>
              {currentUser && currentUser.currentUser ? (
                <NavDropdown
                  title={currentUser.currentUser.firstName || currentUser.currentUser.userName}
                  id="username"
                  className={`${styles["pad-a1"]}`}
                >
                  <NavDropdown.Item onClick={logoutHandler} className="pe-5">
                    Logout
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link className="nav-link pe-5" href="/orders">
                      Orders
                    </Link>
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <Link
                  className={`${styles["pad-a"]} d-flex gap-3 w-100 nav-link`}
                  href="/login"
                >
                  <FaUser />
                </Link>
              )}
            </div>

            {/* <Navbar.Collapse id="navbarScroll">
              <Nav
                className="navbar-nav mr-auto w-100 justify-content-end clearfix"
                navbarScroll
              >
                <Link className={`${styles["pad-a"]} nav-link pe-5`} href="/">
                  Home
                </Link>
                <Link
                  className={`${styles["pad-a"]} nav-link pe-5`}
                  href="/aboutus"
                >
                  About
                </Link>
                <Link
                  className={`${styles["pad-a"]} nav-link pe-5`}
                  href="/#shop"
                >
                  Shop
                </Link>
                <Link
                  className={`${styles["pad-a"]} nav-link pe-5`}
                  href="/blog"
                >
                  Blog
                </Link>
                <Link
                  className={`${styles["pad-a"]} nav-link pe-5`}
                  href="/contact"
                >
                  Contact
                </Link>
                {currentUser && currentUser.currentUser ? (
                  <NavDropdown
                    title={currentUser.currentUser.firstName || currentUser.currentUser.userName}
                    id="username"
                    className={`${styles["pad-a1"]} pe-5`}
                  >
                    <NavDropdown.Item onClick={logoutHandler} className="pe-5">
                      Logout
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link className="nav-link pe-5" href="/orders" onClick={handleNavClose}>
                        Orders
                      </Link>
                    </NavDropdown.Item>
                  </NavDropdown>
                ) : (
                  <Link
                    className={`${styles["pad-a"]} nav-link pe-5`}
                    href="/login"
                  >
                    <FaUser /> Sign In
                  </Link>
                )}

                {!isMobile && (
                  <>
                    <Link className="nav-link pe-5" href="/cart">
                      <button type="button" className={`${styles["cart-btn"]} btn position-relative`}>
                        <span className={styles["cart-icon"]}>
                          <FaCartPlus />
                        </span>
                        <span className={`${styles["cart-badge"]} position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger`}>
                          {quantity}
                          <span className="visually-hidden">unread messages</span>
                        </span>
                      </button>
                    </Link>
                    <Link className="nav-link" href='' onClick={handleShow}>
                      <div className={styles['search-icon']}>
                        <IoSearch />
                      </div>
                    </Link>
                  </>
                )}
              </Nav>
            </Navbar.Collapse>
            {isMobile && (
              <Link className="nav-link pe-3" href='' onClick={() => { handleShow(); handleNavClose(); }}>
                <div className={styles['search-icon']}>
                  <IoSearch />
                </div>
              </Link>
            )}
            {isMobile && !isNavbarExpanded && (
              <Nav className={`${styles["cart-icon-mobile"]} navbar-nav`}>
                <div className="d-flex align-items-center">

                  <Link className="nav-link " href="/cart">
                    <button
                      type="button"
                      className={`${styles["cart-btn"]} btn position-relative`}
                    >
                      <span className={styles["cart-icon"]}>
                        <FaCartPlus />
                      </span>
                      <span
                        className={`${styles["cart-badge"]} position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger`}
                      >
                        {quantity}
                        <span className="visually-hidden">unread messages</span>
                      </span>
                    </button>
                  </Link>

                </div>
              </Nav>
            )} */}


            <Offcanvas show={show} onHide={handleClose} placement="start"> {/* Change placement to "end" */}
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>Search</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Container>
                  <Row>
                    <Form>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control className={styles['login-bdr']} type="text" placeholder="Search Products..." value={searchQuery}
                          onChange={handleSearchChange} />
                      </Form.Group>

                    </Form>
                    {filteredProducts.map(([key, item], index) => {
                      const firstImage =
                        item.postImage.length > 0 ? item.postImage[3] : "";
                      return (
                        <Col lg={6} key={key} className=" col-6 pb-4">
                          {/* <Link href={/product/${(item[1].postTopicName).toLowerCase().split(" ").join("-")}}> */}
                          <Card className={`${styles["product-card"]} h-100`}>
                            <Link
                              key={key}
                              href={`/product/[slug]`} as={`/product/${item.sluginput.toLowerCase().split(" ").join("-")}`}
                              onClick={() => redirectToAnotherPage(`/product/${item.sluginput.toLowerCase().split(" ").join("-")}`)}
                            >
                              <Card.Img
                                variant="top"
                                alt="firstImage"
                                src={firstImage}
                              />
                            </Link>
                            <Card.Body className="justify-content-center">
                              <Card.Title className={styles['title-size']}>
                                {selectedVariants[key]?.variantName ? (
                                  <>
                                    {item.postTopicName}{" "}
                                    {selectedVariants[key].variantName}
                                  </>
                                ) : (
                                  <>
                                    {item.postTopicName} {item.postVariantName2 === "" ? "" : `(${item.postVariantName1})`}
                                  </>
                                )}
                              </Card.Title>
                              <Card.Text className={styles['price-txt']}>
                                {selectedVariants[key]?.price ? (
                                  <>Rs. {selectedVariants[key].price}.00</>
                                ) : (
                                  <>Rs. {item.postPriceName}.00</>
                                )}
                              </Card.Text>
                            </Card.Body>
                          </Card>
                        </Col>
                      );
                    })}
                  </Row>
                </Container>
              </Offcanvas.Body>
            </Offcanvas>

            <Offcanvas show={show1} onHide={handleClose1} placement="end"> {/* Change placement to "end" */}
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>Search</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Container>
                  <Row>
                    <Form>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control className={styles['login-bdr']} type="text" placeholder="Search Products..." value={searchQuery}
                          onChange={handleSearchChange} />
                      </Form.Group>

                    </Form>
                    {filteredProducts.map(([key, item], index) => {
                      const firstImage =
                        item.postImage.length > 0 ? item.postImage[3] : "";
                      return (
                        <Col lg={6} key={key} className=" col-6 pb-4">
                          {/* <Link href={/product/${(item[1].postTopicName).toLowerCase().split(" ").join("-")}}> */}
                          <Card className={`${styles["product-card"]} h-100`}>
                            <Link
                              key={key}
                              href={`/product/[slug]`} as={`/product/${item.sluginput.toLowerCase().split(" ").join("-")}`}
                              onClick={() => redirectToAnotherPage(`/product/${item.sluginput.toLowerCase().split(" ").join("-")}`)}
                            >
                              <Card.Img
                                variant="top"
                                alt="firstImage"
                                src={firstImage}
                              />
                            </Link>
                            <Card.Body className="justify-content-center">
                              <Card.Title className={styles['title-size']}>
                                {selectedVariants[key]?.variantName ? (
                                  <>
                                    {item.postTopicName}{" "}
                                    {selectedVariants[key].variantName}
                                  </>
                                ) : (
                                  <>
                                    {item.postTopicName} {item.postVariantName2 === "" ? "" : `(${item.postVariantName1})`}
                                  </>
                                )}
                              </Card.Title>
                              <Card.Text className={styles['price-txt']}>
                                {selectedVariants[key]?.price ? (
                                  <>Rs. {selectedVariants[key].price}.00</>
                                ) : (
                                  <>Rs. {item.postPriceName}.00</>
                                )}
                              </Card.Text>
                            </Card.Body>
                          </Card>
                        </Col>
                      );
                    })}
                  </Row>
                </Container>
              </Offcanvas.Body>
            </Offcanvas>

            <Offcanvas show={show2} onHide={handleClose2} placement="start">
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>Menu</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="flex-column">
                  <Link href="/" className={`${styles["pad-a"]} nav-link`} onClick={handleClose2}>
                    Home
                  </Link>
                  <Link href="/aboutus" className={`${styles["pad-a"]} nav-link`} onClick={handleClose2}>
                    About
                  </Link>
                  <Link href="/#shop" className={`${styles["pad-a"]} nav-link`} onClick={handleClose2}>
                    Shop
                  </Link>
                  <Link href="/blog" className={`${styles["pad-a"]} nav-link`} onClick={handleClose2}>
                    Blog
                  </Link>
                  <Link href="/contact" className={`${styles["pad-a"]} nav-link`} onClick={handleClose2}>
                    Contact
                  </Link>

                  {currentUser && currentUser.currentUser ? (
                    <NavDropdown
                      title={
                        currentUser.currentUser.firstName ||
                        currentUser.currentUser.userName
                      }
                      id="username"
                    >
                      <NavDropdown.Item onClick={() => { logoutHandler(); handleClose(); }}>
                        Logout
                      </NavDropdown.Item>
                      <NavDropdown.Item as="span">
                        <Link
                          href="/orders"
                          className="nav-link"
                          onClick={handleNavClose}
                        >
                          Orders
                        </Link>
                      </NavDropdown.Item>
                    </NavDropdown>
                  ) : (
                    <Link
                      href="/login"
                      className={`${styles["pad-a"]} nav-link mt-3`}
                      onClick={handleClose}
                    >
                      <FaUser className="me-2" />
                      Sign In
                    </Link>
                  )}
                </Nav>
              </Offcanvas.Body>
            </Offcanvas>

            {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" id="navcolbtn" onClick={handleToggle}>
              <span className={styles["togg-btn"]}>
                <IoReorderThree />
              </span>
            </Navbar.Toggle> */}
          </Container>
        </Navbar>
      </header>
    </>
  );
};

export default Header;
