import React from 'react'
import styles from './blog.module.scss'
import { Col, Container, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaStar } from "react-icons/fa";

const blogDetails = () => {
    return (
        <>
            <section className={styles.dlftbnnr}>
                <div className={styles.dlftCtnt}>
                    <h1 style={{ fontWeight: '300' }}>BLOG</h1>
                    <p>Home &gt; Blog</p>
                </div>
            </section>
        </>
    )
}

export default blogDetails