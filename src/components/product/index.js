import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";
import { database } from "../../config/Fire";
import InputGroup from "react-bootstrap/InputGroup";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Form from "react-bootstrap/Form";
// import { addProduct } from "../../redux/cartRedux";
// import { useDispatch, useSelector } from "react-redux";
import { publicRequest } from "../../requestMethods";
// import * as fbq from '../../../lib/fpixel';
import styles from './product.module.scss'
import { FaStar } from "react-icons/fa";
import dynamic from 'next/dynamic';

const Product = ({ productData: initialProductData }) => {

  const [productData, setProductData] = useState(initialProductData);
  const [selectedVariants, setSelectedVariants] = useState({});
  const [product, setProduct] = useState({});
  const [comboproduct, setComboProduct] = useState({});
  const [modalLink, setmodalLink] = useState("#");

  const [quantity, setQuantity] = useState(0);
  // const dispatch = useDispatch();

  const handleVariantSelect = (productId, variant) => {
    setSelectedVariants((prevVariants) => ({
      ...prevVariants,
      [productId]: variant,
    }));
  };


  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products");
        setProduct(res.data);
        // console.log("Hello Products", product)
      } catch (error) {
        console.error("Error fetching products:", error);
        // Handle error as needed, e.g., set an error state
      }
    };

    getProduct();
  }, []);




  // const addProductInCart = (item, key) => {
  //   setQuantity(1);
  //   item["selectedVariantName"] = selectedVariants[key] ? selectedVariants[key]["variantName"] : item.postVariantName1;
  //   item["selectedVariantPrice"] = selectedVariants[key] ? selectedVariants[key]["price"] : item.postPriceName;
  //   item["quantity"] = 1;
  //   // console.log(item,key);
  //   // console.log(selectedVariants[key]);
  //   dispatch(
  //     addProduct(item)
  //   );
  //   setmodalLink('/product/' + item.sluginput.toLowerCase().split(" ").join("-"));
  //   setShow(true);
  //   fbq.addToCart(item._id, item.postPriceName, item.category, item.postTopicName);

  // };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);



  return (
    <>
      <Container className='text-center my-5'>
        <h2>New Arrivals</h2>
        <Row className='g-4 justify-content-center'>
          {product &&
            Object.entries(product)
              // .filter(([key, item]) => item.postIsActiveStatus === "1" && item.category === "Hair Oil")
              .filter(([key, item]) => item.postIsActiveStatus === "1").sort((a, b) => a[1].postPositionNo - b[1].postPositionNo)
              .map(([key, item], index) => {
                const firstImage =
                  item.postImage.length > 0 ? item.postImage[3] : "";
                return (
                  <Col xs={12} sm={6} md={4} lg={3}>
                    <Card style={{ width: '100%', border: 'none' }}>
                      <Link
                        href={`/product/${item.sluginput.toLowerCase().split(" ").join("-")}`}
                      >
                        <Card.Img
                          variant="top"
                          src={firstImage}
                          objectFit='contain'
                          layout='responsive'
                          alt='product'
                        />
                      </Link>
                      <Card.Body>
                        <Card.Title>
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
                        <div>
                          <Row>
                            <Col md={6}>
                              <span style={{ color: "#f2b309" }}>
                                <FaStar className="me-2" /><FaStar className="me-2" /><FaStar className="me-2" /><FaStar className="me-2" /> (11)
                              </span>
                            </Col>
                            <Col md={6}>
                              <div style={{ color: "#ff575b" }}>Verified Purchase</div>
                            </Col>
                            <Col md={7}>
                              <div style={{ color: "#ff575b" }}> {selectedVariants[key]?.price ? (
                                <>Rs. {selectedVariants[key].price}.00</>
                              ) : (
                                <>
                                  {item.strikeOutName == 0 ?
                                    (<> Rs. {item.postPriceName}.00</>) : (<><span className={styles['strike-price']}>Rs. {item.strikeOutName}.00</span> Rs. {item.postPriceName}.00</>)}
                                </>)}</div>
                            </Col>
                            <Col>
                              <div style={{ textDecoration: 'line-through' }}>Rs. 799.00</div>
                            </Col>
                          </Row>
                        </div>
                        <Button variant="dark">Select Options</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })}
          {/* <Col xs={12} sm={6} md={4} lg={3}>
            <Card style={{ width: '100%', border: 'none' }}>
              <Card.Img
                variant="top"
                src="/images/product1.webp"
                objectFit='contain'
                layout='responsive'
                alt='product'
              />
              <Card.Body>
                <Card.Title>Neroli Perfume</Card.Title>
                <div>
                  <Row>
                    <Col md={6}>
                      <span style={{ color: "#f2b309" }}>
                        <FaStar className="me-2" /><FaStar className="me-2" /><FaStar className="me-2" /><FaStar className="me-2" /> (11)
                      </span>
                    </Col>
                    <Col md={6}>
                      <div style={{ color: "#ff575b" }}>Verified Purchase</div>
                    </Col>
                    <Col md={7}>
                      <div style={{ color: "#ff575b" }}>Rs. 599.00 - 1,999.00</div>
                    </Col>
                    <Col>
                      <div style={{ textDecoration: 'line-through' }}>Rs. 799.00</div>
                    </Col>
                  </Row>
                </div>
                <Button variant="dark">Select Options</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={4} lg={3}>
            <Card style={{ width: '100%', border: 'none' }}>
              <Card.Img
                variant="top"
                src="/images/product1.webp"
                objectFit='contain'
                layout='responsive'
                alt='product'
              />
              <Card.Body>
                <Card.Title>Neroli Perfume</Card.Title>
                <div>
                  <Row>
                    <Col md={6}>
                      <span style={{ color: "#f2b309" }}>
                        <FaStar className="me-2" /><FaStar className="me-2" /><FaStar className="me-2" /><FaStar className="me-2" /> (11)
                      </span>
                    </Col>
                    <Col md={6}>
                      <div style={{ color: "#ff575b" }}>Verified Purchase</div>
                    </Col>
                    <Col md={7}>
                      <div style={{ color: "#ff575b" }}>Rs. 599.00 - 1,999.00</div>
                    </Col>
                    <Col>
                      <div style={{ textDecoration: 'line-through' }}>Rs. 799.00</div>
                    </Col>
                  </Row>
                </div>
                <Button variant="dark">Select Options</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={4} lg={3}>
            <Card style={{ width: '100%', border: 'none' }}>
              <Card.Img
                variant="top"
                src="/images/product1.webp"
                objectFit='contain'
                layout='responsive'
                alt='product'
              />
              <Card.Body>
                <Card.Title>Neroli Perfume</Card.Title>
                <div>
                  <Row>
                    <Col md={6}>
                      <span style={{ color: "#f2b309" }}>
                        <FaStar className="me-2" /><FaStar className="me-2" /><FaStar className="me-2" /><FaStar className="me-2" /> (11)
                      </span>
                    </Col>
                    <Col md={6}>
                      <div style={{ color: "#ff575b" }}>Verified Purchase</div>
                    </Col>
                    <Col md={7}>
                      <div style={{ color: "#ff575b" }}>Rs. 599.00 - 1,999.00</div>
                    </Col>
                    <Col>
                      <div style={{ textDecoration: 'line-through' }}>Rs. 799.00</div>
                    </Col>
                  </Row>
                </div>
                <Button variant="dark">Select Options</Button>
              </Card.Body>
            </Card>
          </Col> */}
        </Row>
      </Container>
    </>
  )
}

export default Product