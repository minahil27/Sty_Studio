import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useFormikContext } from "formik";
import * as Yup from "yup";
import "../components/SignUp/Signup.css";
import signup from "../assets/signup.jpg";
import imageicon from "../assets/asalon.jpg";
// import PreviewImage from "../components/SignUp/PreviewImage";
import { Link } from "react-router-dom";
const Signup = () => {
  const [imagePreview, setImagePreview] = useState();
  const [selectedImage, setSelectedImage] = useState(null);

  const initialValues = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    salonName: "",
    location: "",
    image: "",
    description: "",
  };
  const formikProps = useFormikContext();
  const validationSchema = Yup.object().shape({
    username: Yup.string().required("User Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
    salonName: Yup.string().required("Salon Name is required"),
    location: Yup.string().required("Location is required"),
    image: Yup.mixed().required("Image is required"),
  });

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <div>
      <div className="grid-container">
        <div className="left">
          <img src={signup} className="back-img" />
        </div>
        <div className="right">
          <div className="form-section">
            <h1>Register</h1>
            <p className="head6">Register your account in seconds</p>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ errors, touched }) => (
                <Form>
                  <div style={{ display: "flex" }}>
                    <div>
                      <Field
                        type="text"
                        id="username"
                        name="username"
                        placeholder="Username"
                        className="field-width"
                      />
                      <div className="marginError">
                        <ErrorMessage
                          name="username"
                          style={{ marginRight: "auto", marginLeft: 30 }}
                        />
                      </div>
                    </div>

                    <div>
                      <Field
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email Address"
                        className="field-width"
                      />
                      <div className="marginError">
                        <ErrorMessage name="email" />
                      </div>
                    </div>
                  </div>

                  <div style={{ display: "flex" }}>
                    <div>
                      <Field
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Password"
                        className="field-width"
                      />
                      <div className="marginError">
                        <ErrorMessage name="password" />
                      </div>
                    </div>
                    <div>
                      <Field
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        className="field-width"
                      />
                      <div className="marginError">
                        <ErrorMessage name="confirmPassword" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <Field
                      type="text"
                      id="salonName"
                      name="salonName"
                      placeholder="Salon Name"
                      className="full-field"
                    />
                    <div className="marginError">
                      <ErrorMessage name="salonName" />
                    </div>
                  </div>
                  <div>
                    <Field
                      id="salonName"
                      name="location"
                      placeholder="Location"
                      className="full-field"
                    />
                    <div className="marginError">
                      <ErrorMessage name="location" />
                    </div>
                  </div>
                  <div
                    style={{ display: "flex" }}
                    className="img-desp-container"
                  >
                    <div>
                      <Field
                        id="image"
                        name="image"
                        type="file"
                        onChange={(event) => {
                          formikProps.setFieldValue(
                            "image",
                            event.currentTarget.files[0]
                          );
                        }}
                      />
                      <div className="image-container">
                        {/* {initialValues.image && (
                          <PreviewImage file={initialValues.image} />
                        )} */}
                        <input
                          name="file"
                          id="file-input"
                          type="file"
                          // onChange={(e) => {
                          //   if (e.target.files && e.target.files[0]) {
                          //     setImagePreview(
                          //       URL.createObjectURL(e.target.files[0])
                          //     );
                          //   }
                          //   setSelectedImage(e.target?.files?.[0]);
                          // }}
                        />
                      </div>
                    </div>
                    <div className="browse-desp-container">
                      <div>
                        {/* <label htmlFor="image" className="custom-file-upload">
                          Browse
                        </label> */}
                        <label
                          htmlFor="file-input"
                          className="custom-file-upload"
                        >
                          Browse
                        </label>
                      </div>
                      <Field
                        className="textarea"
                        as="textarea"
                        name="description"
                        placeholder="Add short description about salon"
                      />
                    </div>
                  </div>
                  <div className="terms-div">
                    <label className="terms-label">
                      <Field type="checkbox" name="agreeToTerms" />I agree to
                      the terms and conditions
                    </label>
                  </div>

                  <div>
                    <button type="submit" className="submit-btn">
                      Register
                    </button>
                    <p className="m-7">Already have an account?</p>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
