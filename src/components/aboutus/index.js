import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import styles from "./about.module.scss";
const Index = () => {
  return (
    <>
      <section className={styles["about-head"]}>
        <Container>
          <Row>
            <Col lg={12}>
              <div className={styles["content"]}>
                <h2>About Us</h2>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className={`${styles["about-body"]} my-4`}>
        <Container>
          <Row>
            <Col md={6}>
              <div style={{ position: 'relative', paddingRight: '1rem', paddingLeft: '1rem' }}>
                <div style={{ border: '1px solid #E1F4F3', zIndex: '1' }}>
                  <div style={{ position: 'absolute', bottom: '1rem', left: '3rem' }}>
                    <h2 style={{ fontFamily: 'Quentin, sans-serif',color:'#fff' }}>Fresh</h2>
                    <p style={{color:'#fff'}}>For Summer</p>
                  </div>
                  <Image
                    style={{ position: 'relative', left: '0.5rem', top: '0.5rem', zIndex: '-1',marginBottom:'20px' }}
                    src="/images/about11.webp"
                    width={250}
                    height={250}
                    objectFit='contain'
                    layout='responsive'
                    alt='category'
                    unoptimized
                  />
                </div>
              </div>
            </Col>
            <Col className={styles.abtcnt} md={6}>
              <h1 style={{ fontWeight: '300' }}>Welcome to MKM Parfum – <br/> Where Scent Becomes Soul.</h1>
              <p>At MKM Parfum, we believe that a fragrance is more than just a scent – it’s a memory, a mood, a moment captured in time. Our mission is to craft perfumes that speak to the heart, ignite the senses, and define individuality.
                <br /><br />
                Founded with a passion for fine perfumery, MKM Parfum blends tradition with innovation, using only the finest ingredients sourced from around the world. Every bottle is a journey – from the fresh breezes of the Mediterranean to the deep warmth of Arabian oud, our creations are crafted to suit every mood, personality, and occasion.
                <br /><br />
                Each fragrance is a story, and every wearer is the storyteller.
                <br /><br />
                Whether you’re drawn to the bold, the exotic, the romantic, or the refreshing, MKM Parfum offers a collection that complements your essence.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Index;
