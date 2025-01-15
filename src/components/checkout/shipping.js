import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { userRequest, isTokenSet } from '../../requestMethods'
import { useSelector } from 'react-redux';
import { setAddress, setContact, setGst } from '../../redux/userRedux';
import { setShipAddress } from '../../redux/orderRedux';
import { useRouter } from 'next/router';
import { useDispatch } from "react-redux";
import pincodes from "../../../public/pincodes.json";
import styles from './checkout.module.scss'



const Shipping = ({ className, onNext }) => {

  const dispatch = useDispatch();

  const [checked, setChecked] = useState(false);
  const [billingFirstName, setBillingFirstName] = useState('');
  const [billingLastName, setBillingLastName] = useState('');
  const [billingEmail, setBillingEmail] = useState('');
  const [billingContact, setBillingContact] = useState('');
  const [billingLine1, setBillingLine1] = useState('');
  const [billingLine2, setBillingLine2] = useState('');
  const [billingPostalCode, setBillingPostalCode] = useState('');
  const [billingCity, setBillingCity] = useState('');
  const [billingState, setBillingState] = useState('');

  const [shippingFirstName, setShippingFirstName] = useState('');
  const [shippingLastName, setShippingLastName] = useState('');
  const [shippingEmail, setShippingEmail] = useState('');
  const [shippingContact, setShippingContact] = useState('');
  const [shippingLine1, setShippingLine1] = useState('');
  const [shippingLine2, setShippingLine2] = useState('');
  const [shippingPostalCode, setShippingPostalCode] = useState('');
  const [shippingCity, setShippingCity] = useState('');
  const [shippingState, setShippingState] = useState('');

  // const [showShipForm, setshowShipForm] = useState(false);

  const user = useSelector((state) => state.user);
  if (!isTokenSet) {
    window.location.reload();
  }
  // console.log("--------------------------------------------------------",isTokenSet);

  const checkPincode = (pinval) => {
    var postalCode = document.getElementById("postalCode").value;
    if (pincodes[postalCode]) {
      // $("#city").val(pincodes[postalCode]["City"]);
      // $("#state").val(pincodes[postalCode]["State"]); 
      setBillingCity(pincodes[postalCode]["City"]);
      setBillingState(pincodes[postalCode]["State"]);
    } else {
      setBillingCity("");
      setBillingState("");
      // alert("Pincode not valid");
      alert("Pincode is not valid");
    }
  }

  const chkChng = (e) => {
    setChecked(!checked);
    // setshowShipForm(!e.target.checked);
    if (e.target.checked) {

      // console.log(document.getElementById("address").value);

      setShippingFirstName(user.currentUser.firstName);
      setShippingLastName(user.currentUser.lastName);
      setShippingEmail(user.currentUser.email);
      setShippingContact(document.getElementById("contactNo").value);
      setShippingLine1(document.getElementById("line1").value);
      setShippingLine2(document.getElementById("line2").value);
      setShippingPostalCode(document.getElementById("postalCode").value);
      setShippingCity(document.getElementById("city").value);
      setShippingState(document.getElementById("state").value);


    } else {

      setShippingFirstName("");
      setShippingLastName("");
      setShippingEmail("");
      setShippingContact("");
      setShippingLine1("");
      setShippingLine2("");
      setShippingPostalCode("");
      setShippingCity("");
      setShippingState("");

    }
    // console.log(e.target.checked); 

  };

  const handleFormSubmit = async (values, actions) => {
    try {
      const userId = user.currentUser._id;
      const response = await userRequest.put(`/users/checkout/${userId}`, { billingAddress: values.address, contact: values.contact, gst: values.gst, shippingAdress: values.shpAddress });
      dispatch(setAddress(response.data.address));
      dispatch(setContact(response.data.contact));
      dispatch(setGst(response.data.gst));
      dispatch(setShipAddress(response.data.shpAddress));
      // console.log(response);
    } catch (error) {
      console.error("Error submitting form:", error);
      actions.setSubmitting(false);
    }
  };

  const payTypSte = async () => {
    window.scrollTo(0, 0); // Scroll to the top of the page

    try {
      // console.log("Submitting form", values);
      const userId = user.currentUser._id;
      var contNo = document.getElementById("contactNo").value;
      const addr = {
        billingfirstName: user.currentUser.firstName,
        billinglastName: user.currentUser.lastName,
        billingemail: user.currentUser.email,
        billingcontact: document.getElementById("contactNo").value,
        billingline1: document.getElementById("line1").value,
        billingline2: document.getElementById("line2").value,
        billingpostalCode: document.getElementById("postalCode").value,
        billingcity: document.getElementById("city").value,
        billingstate: document.getElementById("state").value
      };

      // const Saddr = {
      //   shippingfirstName: { type: String, required: true },
      //   shippinglastName: { type: String, required: true },
      //   shippingemail: { type: String, required: true },
      //   shippingcontact: { type: String, required: true },
      //   shippingline1: { type: String, required: true },
      //   shippingline2: { type: String, required: true },
      //   shippingpostalCode: { type: String, required: true },
      //   shippingcity: { type: String, required: true },
      //   shippingstate: { type: String, required: true },
      // }

      if (addr.billingcity && addr.billingstate && addr.billingpostalCode) {

        const gst = document.getElementById("gst").value;

        const otheAddr = !checked ? [{
          shippingfirstName: shippingFirstName,
          shippinglastName: shippingLastName,
          shippingemail: shippingEmail,
          shippingcontact: shippingContact,
          shippingline1: shippingLine1,
          shippingline2: shippingLine2,
          shippingpostalCode: shippingPostalCode,
          shippingcity: shippingCity,
          shippingstate: shippingState,
        }] :
          [{
            shippingfirstName: user.currentUser.firstName,
            shippinglastName: user.currentUser.lastName,
            shippingemail: user.currentUser.email,
            shippingcontact: document.getElementById("contactNo").value,
            shippingline1: document.getElementById("line1").value,
            shippingline2: document.getElementById("line2").value,
            shippingpostalCode: document.getElementById("postalCode").value,
            shippingcity: document.getElementById("city").value,
            shippingstate: document.getElementById("state").value,
          }]


        // {
        //   shippingfirstName: document.getElementById("shippingFirstName").value,
        //   shippingLastName: document.getElementById("shippingLastName").value,
        //   shippingEmail: user.currentUser.email,
        //   shippingContact: document.getElementById("contactNo").value,
        //   shippingLine1: document.getElementById("line1").value,
        //   shippingLine2: document.getElementById("line2").value,
        //   shippingPostalCode: document.getElementById("postalCode").value,
        //   shippingCity: document.getElementById("city").value,
        //   shippingState: document.getElementById("state").value,
        // };


        const response = await userRequest.put(`/users/checkout/${userId}`, {
          billingAddress: addr,
          contact: contNo,
          gst: gst,
          shippingAddress: otheAddr,
        });

        dispatch(setAddress(response.data.billingAddress));
        dispatch(setContact(response.data.contact));
        dispatch(setGst(response.data.gst));
        dispatch(setShipAddress(otheAddr));
        // actions.resetForm();
        // actions.setSubmitting(false);
        // alert("Form submitted successfully.");


        if (!checked && (shippingFirstName === "" || shippingLastName === "" || shippingEmail === "" || shippingContact === "" || shippingLine1 === "" || shippingPostalCode === "" || shippingCity === "" || shippingState === "")) {
          alert('Please fill the shipping address');
        } else {
          onNext();
        }
        // window.location.reload();
        // console.log(user);
      } else {
        alert("Please provide city & state by a valid pincode.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      // actions.setSubmitting(false);
    }

  };
  useEffect(() => {
    if (user.currentUser?.address) {
      setBillingCity(user.currentUser.address.city);
      setBillingCity(user.currentUser.address.state);
    }
  }, []);


  return (
    <>
      <Container className={className}>
        <Row className='justify-content-center mt-5'>
          <Col lg={6}>

            <h3 className='mb-4'>Billing & Shipping Address</h3>

            <Formik
              initialValues={{
                contact: user.currentUser?.contact
                  ? { contact: user.currentUser.contact || "" }
                  : { contact: "" },
                billingAddress: {
                  billingLine1line1: user.currentUser?.address?.line1 || "",
                  billingLine2: user.currentUser?.address?.line2 || "",
                  billingPostalCode: user.currentUser?.address?.postalCode || "",
                  billingCity: user.currentUser?.address?.city || "",
                  billingState: user.currentUser?.address?.state || "",
                },
                shippingAddress: {
                  firstName: "",
                  lastName: "",
                  email: "",
                  contact: "",
                  line1: "",
                  line2: "",
                  postalCode: "",
                  city: "",
                  state: "",
                },
                gst: user.currentUser?.gst || "",
                postTimestamp: new Date().toUTCString(),
              }}
              validationSchema={Yup.object().shape({
                contact: Yup.string().required("Please enter your contact number."),
                billingAddress: Yup.object().shape({
                  line1: Yup.string().required("Please enter your street address line 1."),
                  line2: Yup.string(),
                  postalCode: Yup.string().length(6, "Postal code must be exactly 6 characters").required("Please enter your postal code."),
                  city: Yup.string().required("Please enter your city name."),
                  state: Yup.string().required("Please enter your state name."),
                }),
                gst: Yup.string(),
              })}
              onSubmit={handleFormSubmit}
            >
              {(formik) => (
                <Form method="post">
                  <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label className={styles['txt-lbl']}>Contact No</Form.Label>
                    <Field
                      className={`form-control ${formik.touched.contact?.contact && formik.errors.contact?.contact
                        ? "is-invalid"
                        : ""
                        }${styles['txt-border']}`}
                      type="number"
                      name="contact.contact"
                      id="contactNo"
                      placeholder="Enter Contact Number"
                    // value="3287327827"
                    />
                    <ErrorMessage
                      name="contact.contact"
                      component="div"
                      className={`${styles["valid-clr"]} invalid-feedback`}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label className={styles['txt-lbl']}>Address Line 1</Form.Label>
                    <Field
                      className={`form-control ${formik.touched.address?.line1 && formik.errors.address?.line1
                        ? "is-invalid"
                        : ""} ${styles['txt-border']}`}
                      type="text"
                      name="address.line1"
                      id="line1"
                      placeholder="Enter Your Street Address"
                    // value="yuasydaysudysuadyb dashd as askhd"
                    />
                    <ErrorMessage
                      name="address.line1"
                      component="div"
                      className={`${styles["valid-clr"]} invalid-feedback`}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label className={styles['txt-lbl']}>Address Line 2</Form.Label>
                    <Field
                      className={`form-control ${formik.touched.address?.line2 && formik.errors.address?.line2
                        ? "is-invalid"
                        : ""} ${styles['txt-border']}`}
                      type="text"
                      name="address.line2"
                      id="line2"
                      placeholder="Apartment, Suite, or Floor (Optional)"
                    // value="yuasydaysudysuadyb dashd as askhd"
                    />
                    <ErrorMessage
                      name="address.line2"
                      component="div"
                      className={`${styles["valid-clr"]} invalid-feedback`}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className={styles['txt-lbl']}>Postal Code</Form.Label>
                    <Field
                      className={`form-control ${formik.touched.address?.postalCode && formik.errors.address?.postalCode
                        ? "is-invalid"
                        : ""} ${styles['txt-border']}`}
                      type="number"
                      name="address.postalCode"
                      id="postalCode"
                      placeholder="Enter Postal code"
                    // value="400055"
                    // onBlur={(e)=>checkPincode(e)}
                    />
                    <Button className="mt-3" variant="outline-dark" onClick={(e) => checkPincode(e)} >Get City & State</Button>
                    <ErrorMessage
                      name="address.postalCode"
                      component="div"
                      className={`${styles["valid-clr"]} invalid-feedback`}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className={styles['txt-lbl']}>City</Form.Label>
                    <Field
                      className={`form-control ${formik.touched.address?.city && formik.errors.address?.city
                        ? "is-invalid"
                        : ""} ${styles['txt-border']}`}
                      type="text"
                      name="address.city"
                      id="city"
                      placeholder="Enter City Name"
                      disabled
                      value={billingCity}
                    />
                    <ErrorMessage
                      name="address.city"
                      component="div"
                      className={`${styles["valid-clr"]} invalid-feedback`}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className={styles['txt-lbl']}>State</Form.Label>
                    <Field
                      className={`form-control ${formik.touched.address?.state && formik.errors.address?.state
                        ? "is-invalid"
                        : ""} ${styles['txt-border']}`}
                      type="text"
                      name="address.state"
                      id="state"
                      placeholder="Enter State Name"
                      disabled
                      value={billingState}
                    />
                    <ErrorMessage
                      name="address.state"
                      component="div"
                      className={`${styles["valid-clr"]} invalid-feedback`}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicGst">
                    <Form.Label className={styles['txt-lbl']}>GST Number (optional)</Form.Label>
                    <Field
                      className={`form-control ${formik.touched.gst && formik.errors.gst ? "is-invalid" : ""} ${styles['txt-border']}`}
                      type="text"
                      name="gst"
                      id="gst"
                      placeholder="Enter GST number"
                    />
                    <ErrorMessage
                      name="gst"
                      component="div"
                      className={`${styles["valid-clr"]} invalid-feedback`}
                    />
                  </Form.Group>
                  <div>
                    <br />
                    <h3> Shipping Address</h3>
                    <label>
                      Same as Billing Address &emsp;
                      <input
                        className="form-check-input"
                        type="checkbox"
                        checked={checked}
                        onChange={(e) => chkChng(e)}
                      />
                    </label>
                  </div>

                  <div id="shipForm">
                    <div class="mb-3"><label class="">First Name</label>
                      <input class="form-control" onChange={(e) => setShippingFirstName(e.target.value)} id="shippingFirstName" type="text" placeholder="First Name" value={shippingFirstName} />
                    </div>
                    <div class="mb-3"><label class="">Last Name</label>
                      <input class="form-control" onChange={(e) => setShippingLastName(e.target.value)} id="shippingLastName" type="text" placeholder="Last Name" value={shippingLastName} />
                    </div>
                    <div class="mb-3"><label class="">Email</label>
                      <input class="form-control" onChange={(e) => setShippingEmail(e.target.value)} id="shippingEmail" type="email" placeholder="Email" value={shippingEmail} />
                    </div>
                    <div class="mb-3"><label class="">Contact No</label>
                      <input class="form-control" onChange={(e) => setShippingContact(e.target.value)} id="shippingContact" type="number" placeholder="Contact No" value={shippingContact} />
                    </div>
                    <div class="mb-3"><label class="">Address Line 1</label>
                      <input class="form-control" onChange={(e) => setShippingLine1(e.target.value)} id="shippingLine1" type="text" placeholder="Enter Your Street Address" value={shippingLine1} />
                    </div>
                    <div class="mb-3"><label class="">Address Line 2</label>
                      <input class="form-control" onChange={(e) => setShippingLine2(e.target.value)} id="shippingLine2" type="text" placeholder="Apartment, Suite, or Floor (Optional)" value={shippingLine2} />
                    </div>
                    <div class="mb-3"><label class="">Pincode</label>
                      <input class="form-control" onChange={(e) => setShippingPostalCode(e.target.value)} id="shippingPostalCode" type="text" placeholder="Pincode" value={shippingPostalCode} />
                    </div>
                    <div class="mb-3"><label class="">City</label>
                      <input class="form-control" onChange={(e) => setShippingCity(e.target.value)} id="shippingCity" type="text" placeholder="City" value={shippingCity} />
                    </div>
                    <div class="mb-3"><label class="">State</label>
                      <input class="form-control" onChange={(e) => setShippingState(e.target.value)} id="shippingState" type="text" placeholder="State" value={shippingState} />
                    </div>
                  </div>
                  {/* <Button
                    variant="outline-dark"
                    type="submit"
                    onClick={formik.handleSubmit}
                  >
                    Submit
                  </Button> */}
                  <Button
                    variant="outline-dark"
                    onClick={() => payTypSte()}
                  > Continue</Button>
                </Form>
              )}
            </Formik>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Shipping
