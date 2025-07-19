import { Container, Row, Col, Stack, Accordion } from "react-bootstrap";
import React, { useEffect, useState } from "react";
// import AiOutlinePhone from "react-icons/ai"
import Image from "next/image";
import Link from "next/link";
import $ from "jquery";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
// import ScrollToTop from "react-scroll-to-top";
import { FaInstagram, FaYoutube, FaPinterest, FaFacebook } from 'react-icons/fa';
import { FaLocationDot, FaPhone, FaSquareInstagram, FaSquareFacebook, FaSquareYoutube, FaSquareWhatsapp } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import styles from "./footer.module.scss";

const Footer = () => {

  const [showWhatsapp, setShowWhatsapp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.50) {
        setShowWhatsapp(true);
      } else {
        setShowWhatsapp(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <section
        className="foot bg-dark bg-border-btm bg-border-top py-4"
        id={styles["footer"]}
      >
        {/* <Container>
          <Row>
            <div className="d-none d-lg-block col-lg-3 col-sm-6"  >
              <h3 className="mb-4">Quick Links</h3>
              <ul className={styles["info-list"]}>
                <li>
                  <Link href="/#">Home</Link>
                </li>
                <li>
                  <Link href="/aboutus">About</Link>
                </li>
                <li>
                  <Link href="/#shop">Shop</Link>
                </li>
                <li>
                  <Link href="/blog">Blog</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </div>
            <div className="d-lg-none col-lg-3 col-sm-6"  >
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Quick Links</Accordion.Header>
                  <Accordion.Body>
                    <ul className={styles["info-list"]}>
                      <li>
                        <Link href="/#">Home</Link>
                      </li>
                      <li>
                        <Link href="/aboutus">About</Link>
                      </li>
                      <li>
                        <Link href="/#shop">Shop</Link>
                      </li>
                      <li>
                        <Link href="/blog">Blog</Link>
                      </li>
                      <li>
                        <Link href="/contact">Contact</Link>
                      </li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>

            </div>
            <div className="d-none d-lg-block col-lg-3 col-sm-6" >
              <h3 className="mb-4">Support</h3>
              <ul className={styles["info-list"]}>
                <li>
                  <Link href="/refund">Refund Policy</Link>
                </li>
                <li>
                  <Link href="/privacy">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="/shipping">Shipping Policy</Link>
                </li>
                <li>
                  <Link href="/terms">Terms of Service </Link>
                </li>
              </ul>
            </div>
            <div className="d-none d-lg-block col-lg-3">
              <h3 className="mb-4">Contact Details</h3>
              <Link href='tel:+919321406215'>
                <p className="mb-3">
                  <strong>
                    <span style={{ color: "#fff" }}>
                      <FaPhone />
                    </span>
                    &nbsp; +91 7738896215
                  </strong>
                </p>
              </Link>
              <Link href="https://mail.google.com/mail/?view=cm&fs=1&to=mkmparfum@gmail.com.in&su=SUBJECT&body=BODY" target="blank">
                <p className="mb-3">
                  <strong>
                    <span style={{ color: "#fff" }}>
                      <IoMail />
                    </span>
                    &nbsp; mkmparfum@gmail.com
                  </strong>
                </p>
              </Link>
              <Link href='https://www.instagram.com/mkmparfum?igsh=eTJ2OGIzeW04c245' target="blank">
                <p className="mb-3">
                  <strong>
                    <span style={{ color: "#fff" }}>
                      <FaSquareInstagram />
                    </span>
                    &nbsp; mkmparfum
                  </strong>
                </p>
              </Link>
            </div>
            <div className="d-none d-lg-block col-lg-3">
              <h3 className="mb-4">Social Links</h3>
              <ul className="d-flex" style={{ listStyle: "none" }}>
                <li className={styles["footer-links"]}>
                  <Link href='https://www.facebook.com/share/1J3XV5wR3T/' target="blank">
                    <FaSquareFacebook size={40} />
                  </Link>
                </li>
                <li className={styles["footer-links"]}>
                  <Link href='https://www.instagram.com/mkmparfum?igsh=eTJ2OGIzeW04c245' target="blank">
                    <FaSquareInstagram size={40} />
                  </Link>
                </li>
                <li className={styles["footer-links"]}>
                  <FaSquareYoutube size={40} />
                </li>
              </ul>
            </div>
          </Row>
        </Container> */}


        <Container>
          <Row className="mb-4">
            <Col md={3} sm={6} className="mb-4">
              <h5 className="fw-bold">About MKM</h5>
              <ul className="list-unstyled mt-3">
                <li><a href="/aboutus" className="text-white text-decoration-none">Our Story</a></li>
                <li><a href="#" className="text-white text-decoration-none">Ingredients & Ethics</a></li>
                <li><a href="#" className="text-white text-decoration-none">Sustainability</a></li>
              </ul>
            </Col>

            <Col md={3} sm={6} className="mb-4">
              <h5 className="fw-bold">Customer Care</h5>
              <ul className="list-unstyled mt-3">
                <li><a href="/contact" className="text-white text-decoration-none">Contact Us</a></li>
                <li><a href="#" className="text-white text-decoration-none">FAQ</a></li>
                <li><a href="/shipping" className="text-white text-decoration-none">Shipping & Returns</a></li>
                <li><a href="/privacy" className="text-white text-decoration-none">Privacy Policy</a></li>
              </ul>
            </Col>

            <Col md={3} sm={6} className="mb-4">
              <h5 className="fw-bold">Quick Shop</h5>
              <ul className="list-unstyled mt-3">
                <li><a href="commingSoon" className="text-white text-decoration-none">Perfume Sprays</a></li>
                <li><a href="commingSoon" className="text-white text-decoration-none">Solid Balms</a></li>
                <li><a href="commingSoon" className="text-white text-decoration-none">Beard & Body Care</a></li>
                <li><a href="commingSoon" className="text-white text-decoration-none">Scented Candles & Home</a></li>
              </ul>
            </Col>

            <Col md={3} sm={6} className="mb-4">
              <h5 className="fw-bold">Stay Connected</h5>
              <p className="mt-3">Receive 10% off your first order.</p>
              <Form className="d-flex mb-3">
                <Form.Control type="email" placeholder="Email address" className="me-2 rounded-0" />
                <Button variant="light" className="rounded-0">Subscribe</Button>
              </Form>
              <div className="d-flex gap-3 fs-5">
                <a href="https://www.instagram.com/mkmparfum?igsh=eTJ2OGIzeW04c245"><FaInstagram className="text-white" size={40} /></a>
                <a href="#"><FaYoutube className="text-white" size={40} /></a>
                <a href="https://www.facebook.com/share/1J3XV5wR3T/"><FaFacebook className="text-white" size={40} /></a>
              </div>
            </Col>
          </Row>

          {/* <hr className="border-secondary" />

          <Row className="pt-3 align-items-center">
            <Col md={6} className="text-center text-md-start mb-2 mb-md-0">
              <small>© 2025 MKM Parfum. All rights reserved. - Designed in India</small>
            </Col>
            <Col md={6} className="text-center text-md-end"> */}
          {/*<FaCcVisa className="me-3 fs-4" />
              <FaCcMastercard className="me-3 fs-4" />
              <SiUpwork className="fs-4" />*/} {/* Replace with real UPI icon */}
          {/* </Col>
          </Row> */}
        </Container>


        <hr
          style={{
            background: "white",
            color: "white",
            borderColor: "white",
            height: "1.5spx",
          }}
        />
        <Container>
          <Row className="justify-content-md-center">
            <Col lg={12} md={6}>
              <div
                className="d-flex justify-content-center"
                id={styles["footer-Copy"]}
              >
                <p>
                  <small>&copy;Copyright &copy;All rights reserved</small>
                </p>
                <p>
                  <small> --This site by Elite Cipher</small>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {showWhatsapp && (
        <Link href="https://wa.me/+919321406215" target="_blank" className="whatsapp-icon" aria-label="Chat with us on WhatsApp">
          {/* <Image src='/images/whatsapp.png' width='45' height='20' unoptimized /> */}
          <FaSquareWhatsapp size={40} />
        </Link>
      )}
      {/* <ScrollToTop
        smooth
        color="#fff"
        height="20"
        style={{
          backgroundColor: "#E1F4F3",
          border: "2px solid #fff"
        }}
      /> */}
    </>
  );
};

export default Footer;
