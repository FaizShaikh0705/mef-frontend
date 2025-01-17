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
                    <h2 style={{ fontFamily: 'Quentin, sans-serif' }}>Fresh</h2>
                    <p>For Summer</p>
                  </div>
                  <Image
                    style={{ position: 'relative', left: '0.5rem', top: '0.5rem', zIndex: '-1' }}
                    src="/images/category2.jpg"
                    width={250}
                    height={250}
                    objectFit='contain'
                    layout='responsive'
                    alt='category'
                  />
                </div>
              </div>
            </Col>
            <Col className={styles.abtcnt} md={5}>
              <h2 style={{ fontWeight: '300' }}>NATURAL ORGANIC <br />COSMETICS PROMOTES <br />REJUVENATION</h2>
              <p>Bleak cod cutthroat eel sargassum fish panga sucker beardfish lionfish batfish eulachon Raccoon butterfly fish tetra. Pejerrey combtooth blenny Sundaland Noodlefish pipefish zebra shark beaked salmon hillstream loach New Zealand smelt salmon false moray pelican eel stoneroller minnow.</p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Index;
