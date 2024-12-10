import { Container, Row, Col, Stack } from "react-bootstrap";
import React, { useEffect, useState } from "react";
// import AiOutlinePhone from "react-icons/ai"
import Image from "next/image";
import Link from "next/link";
import $ from "jquery";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import ScrollToTop from "react-scroll-to-top";
import { FaLocationDot, FaPhone, FaSquareInstagram } from "react-icons/fa6";
import { RiWhatsappFill } from "react-icons/ri";
import { FaSquareFacebook } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import styles from "./footer.module.scss";

const Footer = () => {

  // const [showWhatsapp, setShowWhatsapp] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > window.innerHeight * 0.50) {
  //       setShowWhatsapp(true);
  //     } else {
  //       setShowWhatsapp(false);
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   // Cleanup on component unmount
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  return (
    <>
      <section
        className="foot bg-dark bg-border-btm bg-border-top py-4"
        id={styles["footer"]}
      >
        <Container>
          <Row>
            <div className="col-lg-3 col-sm-6"  >
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
            <div className=" col-lg-3 col-sm-6" >
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
            <div className="col-lg-3">
              <h3 className="mb-4">Contact Details</h3>
              <Link href='tel:+919321406215'>
                <p className="mb-3">
                  <strong>
                    <span style={{ color: "#fff" }}>
                      <FaPhone />
                    </span>
                    &nbsp; +91 9321406215
                  </strong>
                </p>
              </Link>
              <Link href="https://mail.google.com/mail/?view=cm&fs=1&to=elitecipher@gmail.com.in&su=SUBJECT&body=BODY" target="blank">
                <p className="mb-3">
                  <strong>
                    <span style={{ color: "#fff" }}>
                      <IoMail />
                    </span>
                    &nbsp; elitecipher@gmail.com
                  </strong>
                </p>
              </Link>
              <Link href='https://www.instagram.com/elite__cipher?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' target="blank">
                <p className="mb-3">
                  <strong>
                    <span style={{ color: "#fff" }}>
                      <FaSquareInstagram />
                    </span>
                    &nbsp; elite__cipher
                  </strong>
                </p>
              </Link>
            </div>
            <div className="col-lg-3">
              <h3 className="mb-4">Social Links</h3>
              <ul className="d-flex" style={{ listStyle: "none" }}>
                <li className={styles["footer-links"]}>
                  <Link href='https://www.facebook.com/elite__cipher?mibextid=LQQJ4d' target="blank">
                    <FaSquareFacebook size={24} />
                  </Link>
                </li>
                <li className={styles["footer-links"]}>
                  <Link href='https://www.instagram.com/elite__cipher?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' target="blank">
                    <AiFillInstagram size={25} />
                  </Link>
                </li>
                <li className={styles["footer-links"]}>
                  <Link href='https://www.youtube.com/@elite__cipher' target="blank">
                    <FaYoutube size={24}/>
                  </Link>
                </li>
                {/* <li className={styles["footer-links"]}>
                  <Image
                    height="40"
                    width="40"
                    objectFit="contain"
                    src="/images/linkedin.png"
                    alt="logo_img"
                  />
                </li>
                <li className={styles["footer-links"]}>
                  <Image
                    height="40"
                    width="40"
                    objectFit="contain"
                    src="/images/twitter.png"
                    alt="logo_img"
                  />
                </li> */}
              </ul>
              <p>
                <strong>
                  <span style={{ color: "#fff" }}>
                    <FaLocationDot />
                  </span>
                  &nbsp; Address
                </strong>
              </p>
              <p>
                Shop No: 20A, Lucky Chamber, 3rd Floor, V.V.Chandan Street, Mumbai:400003
              </p>
            </div>
          </Row>
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
                  <small> --This site by EliteCipher</small>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* {showWhatsapp && (
        <Link href="https://wa.me/+918104583429" target="_blank" className="whatsapp-icon" aria-label="Chat with us on WhatsApp">
          <Image src='/images/whatsapp.png' width='45' height='20' />
        </Link>
      )} */}
      <ScrollToTop
        smooth
        color="#fff"
        height="20"
        style={{
          backgroundColor: "#000",
          border: "2px solid #fff"
        }}
      />
    </>
  );
};

export default Footer;
