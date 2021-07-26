// Main imports
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../core/Layout";
import {
  Form,
  FormGroup,
  Warning,
  Success,
  Button,
} from "../styles/user/signup";

// Method imports
import { signup } from "../auth";

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
