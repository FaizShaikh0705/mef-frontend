import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import parse from 'html-react-parser';
import Image from 'next/image';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styles from './blog.module.scss';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { database } from '../../config/Fire';


var $ = require("jquery");
if (typeof window !== "undefined") {
    window.$ = window.jQuery = require("jquery");
}

const BlogDetailsContainer = ({ blogDetailsData: initialBlogDetailsData }) => {
    const [blogDetailsData, setBlogDetailsData] = useState(initialBlogDetailsData);

    useEffect(() => {
        const blogDetailsRef = database.ref('blog');
        const handleData = (snapshot) => {
            try {
                if (snapshot && snapshot.val()) {
                    const updatedBlogDetailsData = snapshot.val();
                    setBlogDetailsData(updatedBlogDetailsData);
                } else {
                    console.error('Firebase snapshot is empty or null');
                }
            } catch (error) {
                console.error('Error processing Firebase data:', error);
            }
        };

        blogDetailsRef.on('value', handleData);

        return () => {
            blogDetailsRef.off('value', handleData);
        };
    }, []);

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
                items: 1,
            },
        },
    }

    const { postTopicName, postImage, postLongDetail } = initialBlogDetailsData;


    return (
        <>
            <section className={styles.dlftbnnr}>
                <div className={styles.dlftCtnt}>
                    <h1 style={{ fontWeight: '300' }}>{postTopicName}</h1>
                    <p>Home &gt; Blog</p>
                </div>
            </section>
            <section className={`${styles['blogcontent-main']} my-4`}>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <Image
                                className={styles['blogdetails-image']}
                                // objectFit="containt"
                                // layout='responsive'
                                height={300}
                                width={500}
                                alt={postImage}
                                src={postImage}
                            />
                            <div className={`${styles['blogdetailP']} mt-3`}>
                                {parse(postLongDetail)}
                            </div>

                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default BlogDetailsContainer;