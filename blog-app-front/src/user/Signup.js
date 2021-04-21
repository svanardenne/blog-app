import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Layout from "../core/Layout";

// Method imports
import { signup } from "../auth";

// styled components
const Form = styled.form`
  width: 90%;
  margin: 0 auto 50px;
`;
const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

const Signup = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    success: false,
  });

  // Deconstruct values from state
  const { name, email, password, error, success } = values;

  // Handles changes in the input fields
  const handleChange = (name) => (e) => {
    setValues({
      ...values,
      error: false,
      [name]: e.target.value,
    });
  };

  // Handles form submission
  const clickSubmit = (e) => {
    e.preventDefault();
    setValues({ ...values, error: false });
    signup({ name, email, password }).then((data) => {
      if (data.error) {
        if (data.error.code) {
          setValues({
            ...values,
            error: "Email must be unique",
            success: false,
          });
        } else {
          setValues({
            ...values,
            error: data.error,
            success: false,
          });
        }
      } else {
        setValues({
          ...values,
          name: "",
          email: "",
          password: "",
          error: "",
          success: true,
        });
      }
    });
  };

  // Creates a signup form
  const signupForm = () => (
    <Form>
      <FormGroup>
        <label>Name</label>
        <input onChange={handleChange("name")} type="text" value={name} />
      </FormGroup>
      <FormGroup>
        <label>Email</label>
        <input onChange={handleChange("email")} type="text" value={email} />
      </FormGroup>
      <FormGroup>
        <label>Password</label>
        <input
          onChange={handleChange("password")}
          type="text"
          value={password}
        />
      </FormGroup>
      <button onClick={clickSubmit} type="submit">
        Submit
      </button>
    </Form>
  );

  // Shows error message if error
  const showError = () => (
    <div
      style={{
        display: error ? "" : "none",
        width: "90%",
        margin: "0 auto 16px",
        borderRadius: "5px",
        padding: "16px 24px",
        background: "pink",
      }}
    >
      {error}
    </div>
  );

  // Shows success message if form submit is successful
  const showSuccess = () => (
    <div
      style={{
        display: success ? "" : "none",
        width: "90%",
        margin: "0 auto 16px",
        borderRadius: "5px",
        padding: "16px 24px",
        background: "lightblue",
      }}
    >
      New account is created. Please <Link to="/signin">Signin</Link>
    </div>
  );

  return (
    <Layout title="Signup" description="Signup to the Blog App">
      {showError()}
      {showSuccess()}
      {signupForm()}
    </Layout>
  );
};

export default Signup;
