import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./home.module.scss";
import Link from "next/link";
import Image from "next/image";
import Button from "react-bootstrap/Button";

const intro = () => {
  return (
    <section className={`${styles["intro-main"]} my-4`} id="about">
      <Container>
        <Row>
          <Col lg={6}>
            <h2>Use It To Believe It</h2>
            <h3>MKM Parfum - A Symphony of Fragrance</h3>
            <br />
            <p>
              Indulge in the enchanting world of perfumes with MKM PARFUM, the best perfume brand in India. 
              Whether you seek a captivating perfume for men or a mesmerizing fragrance for women, 
              our curated collection has something for everyone. Experience the allure of our perfume sprays, 
              solid perfumes, body mists, scented candles, roll-ons, reed diffusers, perfumed crème, and beard balms. 
              <br/>
              <br/>
              Buy perfume online and immerse yourself in a sensory journey that reflects your unique style and personality. 
              Elevate every moment with the magic of MKM PARFUM!
            </p>
            <br />
            <Button
              // style={{ marginBottom: "30px" }}
              className={styles["newsbtn"]}
              href="/aboutus"
              variant="outline-dark"
              id="button-addon2"
            >
              Know More
            </Button>
          </Col>
          <Col className="offset-lg-1" lg={5}>
            <Image
              className={styles["intro-image"]}
              height="700"
              width="600"
              objectFit="contain"
              src="/images/about22.webp"
              alt="logo_img"
              unoptimized
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default intro;
