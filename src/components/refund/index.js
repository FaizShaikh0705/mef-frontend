import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import styles from "./refund.module.scss";
const Index = () => {
  return (
    <>
      <section className={`${styles["breadcrum"]}`}>
        <Container>
          <Row>
            <Col lg={12}>
              <div className="text-center">
                <p>
                  <span>
                    <Link href="/#">Home</Link>
                  </span>{" "}
                  <span>/</span>
                  <span> Refund Policy</span>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className={`${styles["refund"]} my-5`}>
        <Container>
          <Row>
            <Col lg={12}>
              <h3 className="text-center my-5">REFUND POLICY</h3>
              <h5 className=" mb-5">
                HOW DO I KNOW IF AN ITEM IS ELIGIBLE FOR RETURN?
              </h5>
              <div className="d-flex">
                {/* <Image 
                src="/images/return.png"
                alt="return1"
               height='10'
               width='80'
                /> */}
                <p className={`${styles['para']} `}> Our products are not eligible for Return/Exchange</p>
              </div>
              <h5 className=" mb-5">
                WHAT IF I RECEIVE A DAMAGED / DEFECTIVE /WRONG PRODUCT?
              </h5>
              <div className="d-flex">
                <p className={`${styles['para']} `}> We Quality Control all our shipping and packaging processes, but in rare circumstances, if you do receive a damaged, defective/wrong product or an incomplete order, simply get in touch with us within 24 hours of receiving your order with pictures at em5support[@]indiainfotech.com and we will take care of the rest.</p>
              </div>
              <div className="d-flex">
                <p className={`${styles['para']} `}> For failed online transactions, refunds are automatically processed to the source account in 7 working days.</p>
              </div>
              <div className="d-flex">
                <p className={`${styles['para']} `}> In case of damaged or defective product, please share an unboxing video for the claim processing, post examine a refund or replacement will be issued in 4-7 days.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Index;
