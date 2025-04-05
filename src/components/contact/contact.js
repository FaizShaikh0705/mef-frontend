import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Link from 'next/link';
import { FaLocationDot, FaPhone, FaSquareInstagram } from "react-icons/fa6";
import { Formik, Field, ErrorMessage } from "formik";
import { publicRequest } from '../../requestMethods';
import { useSelector } from 'react-redux';
import * as Yup from "yup";
import { IoMail } from "react-icons/io5";
import styles from './contact.module.scss'

var $ = require("jquery");
if (typeof window !== "undefined") {
  window.$ = window.jQuery = require("jquery");
}


const Contact = () => {

  const user = useSelector((state) => state.user);

  const handleFormSubmit = async (values, actions) => {
    try {
      await publicRequest.post("/contacts", {
        userId: user.currentUser._id,
        UserName: values.name,
        email: values.email,
        number: values.number,
        message: values.message,
        position: 0,
        status: 1,
      });
      alert("Contact Details submitted successfully.");
      console.log('Form submitted:', values);
      actions.resetForm();
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      actions.setSubmitting(false);
    }
  };


  return (
    <>
      <section className={styles['contact-head']}>
        <Container>
          <Row>
            <Col lg={12}>
              <div className={styles['content']}>
                <h2>Contact Us</h2>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className={`${styles['contact-body']} my-4`}>
        <Container>
          <Row>
            <Col lg={6}>
              <div className={`${styles['box-form']} box shadow rounded-4 p-5`}>
                {/* <h3 className="text-secondary fw-bold">Contact Us</h3>
                <hr /> */}
                <Formik
                  initialValues={{
                    name: '',
                    email: '',
                    number: '',
                    message: '',
                  }}
                  validationSchema={Yup.object().shape({
                    name: Yup.string().required('Please enter your name.'),
                    email: Yup.string().email('Invalid email address').required('Please enter your email address.'),
                    number: Yup.string().required('Please enter your phone number.'),
                    message: Yup.string().required('Please enter your message.'),
                  })}
                  onSubmit={handleFormSubmit}
                >
                  {(formik) => (
                    <Form onSubmit={formik.handleSubmit}>
                      <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Field
                          className={`form-control ${formik.touched.name && formik.errors.name ? 'is-invalid' : ''}`}
                          type="text"
                          name="name"
                          placeholder="Enter Name"
                        />
                        <ErrorMessage
                          name="name"
                          component="div"
                          className={`${styles['valid-clr']} invalid-feedback`}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Field
                          className={`form-control ${formik.touched.email && formik.errors.email ? 'is-invalid' : ''}`}
                          type="email"
                          name="email"
                          placeholder="Enter email"
                        />
                        <ErrorMessage
                          name="email"
                          component="div"
                          className={`${styles['valid-clr']} invalid-feedback`}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicNumber">
                        <Form.Label> Phone Number</Form.Label>
                        <Field
                          className={`form-control ${formik.touched.number && formik.errors.number ? 'is-invalid' : ''}`}
                          type="number"
                          name="number"
                          placeholder="Enter Phone Number"
                        />
                        <ErrorMessage
                          name="number"
                          component="div"
                          className={`${styles['valid-clr']} invalid-feedback`}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Message</Form.Label>
                        <Field
                          className={`form-control ${formik.touched.message && formik.errors.message ? 'is-invalid' : ''}`}
                          as="textarea"
                          rows={3}
                          name="message"
                          placeholder="Type Message..."
                        />
                        <ErrorMessage
                          name="message"
                          component="div"
                          className={`${styles['valid-clr']} invalid-feedback`}
                        />
                      </Form.Group>
                      <Button variant="outline-dark" type="submit">
                        Submit
                      </Button>
                    </Form>
                  )}
                </Formik>
              </div>
            </Col>

            <Col lg={{ span: 5, offset: 1 }} className='mt-4'>
              {/* <p><strong><span style={{ color: '#706C61' }}><FaLocationDot /></span>&nbsp; Address</strong></p>
              <p>Heena Style Affairs<br />AR 26, A Wing, Nootan Nagar CHS,<br /> Near Bandra Station,<br />Opp. Sahakari Bhandar,<br />Bandra West,<br />Mumbai-400050</p> */}
              <p className='mt-3'><strong><span style={{ color: '#706C61' }}><FaPhone /></span>&nbsp; Get in Touch</strong></p>
              <Link href='tel:+919321406215'><p>+91 9321406215</p></Link>
              <p className='mt-3'><strong><span style={{ color: '#706C61' }}><IoMail /></span>&nbsp; Email address</strong></p>
              <Link href="https://mail.google.com/mail/?view=cm&fs=1&to=info@mkmparfum.com.in&su=SUBJECT&body=BODY" target="blank"><p>info@mkmparfum.com</p></Link>
              <p className='mt-3'><strong><span style={{ color: '#706C61' }}><FaSquareInstagram /></span>&nbsp; Instagram ID</strong></p>
              <Link href='https://www.instagram.com/qirah_oil?igsh=MWthamJtb2JscGNldA%3D%3D&utm_source=qr ' target="blank"><p>mkmparfum</p></Link>

            </Col>

            <Col>
              <iframe className='rounded-3 shadow mt-5' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120562.19529718372!2d72.91861664037916!3d19.214035642126206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b8fcfe76fd59%3A0xcf367d85f7c50283!2sThane%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1743886763116!5m2!1sen!2sin" width="100%" height="470" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Contact
