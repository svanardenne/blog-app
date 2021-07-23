// Main imports
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Layout from "../core/Layout";

// Variable imports
import { colors } from "../styles/colors";
import { device } from "../styles/device";

// Method imports
import { signup } from "../auth";

// Styled components
const Form = styled.form`
  width: 90%;
  margin: 0 auto 50px;
  @media ${device.laptop} {
    max-width: 70%;
  }
`;
const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  color: ${colors.muted};
  label {
    margin-bottom: 5px;
  }
  input {
    outline: none;
    padding: 10px;
    border: 1px solid ${colors.muted};
    border-radius: 0.25em;
  }
  input:focus {
    border: 2px solid lightblue;
  }
`;
const Warning = styled.div`
  width: 90%;
  margin: 0 auto 16px;
  border-radius: 5px;
  padding: 16px 24px;
  color: ${colors.warningText};
  background: ${colors.warningBG};
  border: 1px solid ${colors.warningBorder};
  @media ${device.laptop} {
    max-width: 70%;
  }
`;
const Success = styled.div`
  width: 90%;
  margin: 0 auto 16px;
  border-radius: 5px;
  padding: 16px 24px;
  color: ${colors.successText};
  background: ${colors.successBG};
  border: 1px solid ${colors.successBorder};
  @media ${device.laptop} {
    max-width: 70%;
  }
`;
const Button = styled.button`
  color: ${colors.offWhite};
  background: ${colors.lightBlue};
  border: 1px solid ${colors.lightBlue};
  border-radius: 0.25em;
  padding: 10px 25px;
  margin-bottom: 24px;
`;

const Signup = () => {
  // State
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
          type="password"
          value={password}
        />
      </FormGroup>
      <Button onClick={clickSubmit} type="submit">
        Submit
      </Button>
    </Form>
  );

  // Shows error message if error
  const showWarning = () => (
    <Warning style={{ display: error ? "" : "none" }}>{error}</Warning>
  );

  // Shows success message if form submit is successful
  const showSuccess = () => (
    <Success style={{ display: success ? "" : "none" }}>
      New account is created. Please <Link to="/signin">Signin</Link>
    </Success>
  );

  return (
    <Layout title="Signup" description="Signup to the Blog App">
      {showWarning()}
      {showSuccess()}
      {signupForm()}
    </Layout>
  );
};

export default Signup;
