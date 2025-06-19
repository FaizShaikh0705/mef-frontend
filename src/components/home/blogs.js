import React from 'react'
import { Container, Row, Col, Button } from "react-bootstrap";
import BlogContent from '../blog/blogContent';
import Link from 'next/link';
import style from "./home.module.scss"

const blogs = ({ blogData }) => {
    console.log("faiz", blogData)
    return (
        <>
            <section className='my-5'>
                <Container>
                    <Row className=" text-center">
                        <h1 style={{ color: "#706C61" }}>Recent Articles</h1>
                        <BlogContent blogData={blogData} />

                        <Link href="/blog" className={style.rbtn}>
                            <p>Read More..</p>
                        </Link>
                    </Row>
                </Container>
            </section>
        </>
    )
}
export default blogs
