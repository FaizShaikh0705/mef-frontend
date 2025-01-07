import { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import parse from 'html-react-parser';
import Image from 'next/image';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { VscAccount } from 'react-icons/vsc';
import { SlCalender } from 'react-icons/sl';
import { LiaCommentsSolid } from 'react-icons/lia';
import { database } from '../../config/Fire';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import styles from './blog.module.scss'


var $ = require("jquery");
if (typeof window !== "undefined") {
    window.$ = window.jQuery = require("jquery");
}

const index = ({ blogData: initialBlogData }) => {

    const [blogData, setBlogData] = useState(initialBlogData);

    const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
        ssr: false,
    });


    const state = {
        responsive: {
            0: {
                items: 1,
            },
            450: {
                items: 1,
            },
            600: {
                items: 1,
            },
            1000: {
                items: 1
            },
        },
    }

    return (
        <>
            <section className={styles.dlftbnnr}>
                <div className={styles.dlftCtnt}>
                    <h1 style={{ fontWeight: '300' }}>BLOG</h1>
                    <p>Home &gt; Blog</p>
                </div>
            </section>

            <Container className='my-5'>
                <Row>
                    {Object.entries(blogData).filter((status) => status[1].postIsActiveStatus == 1).map((item) => {
                        return (
                            <Col md={4}>
                                <Card style={{ width: '382.2px' }} className='shadow mb-5'>
                                    <Card.Img
                                        className='p-3'
                                        variant="top"
                                        objectFit='contain'
                                        layout='responsive'
                                        alt={item[1].postImage}
                                        src={item[1].postImage}
                                    />
                                    <Card.Body>
                                        <Card.Title>{parse(`${item[1].postTopicName.substring(0, 50)}...`)}</Card.Title>
                                        <Card.Text style={{ height: '250px' }}>
                                            {parse(`${item[1].postLongDetail.substring(0, 100)}...`)}
                                        </Card.Text>
                                        <Link href={`/blog/${(item[1].sluginput).toLowerCase().split(" ").join("-")}`}>
                                            <Button variant="dark">Read More</Button>
                                        </Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                        );
                    })}
                    {/* <Col md={4}>
                        <Card style={{ width: '382.2px' }} className='shadow mb-5'>
                            <Card.Img
                                className='p-3'
                                variant="top"
                                src="/images/product1.webp"
                                objectFit='contain'
                                layout='responsive'
                                alt='product'
                            />
                            <Card.Body>
                                <Card.Title>Neroli Perfume</Card.Title>
                                <Card.Text>
                                    Natural & Organic Beauty & Organic Beauty Bloggers Advice..
                                </Card.Text>
                                <Button variant="dark">Read More</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card style={{ width: '382.2px' }} className='shadow mb-5'>
                            <Card.Img
                                className='p-3'
                                variant="top"
                                src="/images/product1.webp"
                                objectFit='contain'
                                layout='responsive'
                                alt='product'
                            />
                            <Card.Body>
                                <Card.Title>Neroli Perfume</Card.Title>
                                <Card.Text>
                                    Natural & Organic Beauty & Organic Beauty Bloggers Advice..
                                </Card.Text>
                                <Button variant="dark">Read More</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card style={{ width: '382.2px' }} className='shadow mb-5'>
                            <Card.Img
                                className='p-3'
                                variant="top"
                                src="/images/product1.webp"
                                objectFit='contain'
                                layout='responsive'
                                alt='product'
                            />
                            <Card.Body>
                                <Card.Title>Neroli Perfume</Card.Title>
                                <Card.Text>
                                    Natural & Organic Beauty & Organic Beauty Bloggers Advice..
                                </Card.Text>
                                <Button variant="dark">Read More</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card style={{ width: '382.2px' }} className='shadow mb-5'>
                            <Card.Img
                                className='p-3'
                                variant="top"
                                src="/images/product1.webp"
                                objectFit='contain'
                                layout='responsive'
                                alt='product'
                            />
                            <Card.Body>
                                <Card.Title>Neroli Perfume</Card.Title>
                                <Card.Text>
                                    Natural & Organic Beauty & Organic Beauty Bloggers Advice..
                                </Card.Text>
                                <Button variant="dark">Read More</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card style={{ width: '382.2px' }} className='shadow mb-5'>
                            <Card.Img
                                className='p-3'
                                variant="top"
                                src="/images/product1.webp"
                                objectFit='contain'
                                layout='responsive'
                                alt='product'
                            />
                            <Card.Body>
                                <Card.Title>Neroli Perfume</Card.Title>
                                <Card.Text>
                                    Natural & Organic Beauty & Organic Beauty Bloggers Advice..
                                </Card.Text>
                                <Button variant="dark">Read More</Button>
                            </Card.Body>
                        </Card>
                    </Col> */}
                </Row>
            </Container>
        </>
    )
}

export default index