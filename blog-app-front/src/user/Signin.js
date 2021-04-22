// Main imports
import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import styled from "styled-components";
import Layout from "../core/Layout";

// Variable imports
import { colors } from "../styles/colors";
import { device } from "../styles/device";

// Method imports
import { signin, authenticate, isAuthenticated } from "../auth";

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
const Button = styled.button`
  color: ${colors.offWhite};
  background: ${colors.lightBlue};
  border: 1px solid ${colors.lightBlue};
  border-radius: 0.25em;
  padding: 10px 25px;
`;
const Loading = styled.div`
  text-align: center;
`;

const Signin = () => {
  // State
  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
    loading: false,
    redirectToReferrer: false,
  });

  // Deconstruct values from state
  const { email, password, error, loading, redirectToReferrer } = values;

  // create user object with isAuthenticated method
  const { user } = isAuthenticated();

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
    setValues({ ...values, error: false, loading: true });
    signin({ email, password }).then((data) => {
      if (data.error) {
        setValues({
          ...values,
          error: data.error,
          loading: false,
        });
      } else {
        authenticate(data, () => {
          setValues({
            ...values,
            redirectToReferrer: true,
          });
        });
      }
    });
  };

  // Creates a signup form
  const signupForm = () => (
    <Form>
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

  // Shows or hides loading text when loading state is true
  const showLoading = () =>
    loading && (
      <Loading>
        <h2>Loading...</h2>
      </Loading>
    );

  // Redirects user to respective dashboards based on their "isAdmin" attribute
  const redirectUser = () => {
    if (redirectToReferrer) {
      if (user && user.isAdmin === true) {
        return <Redirect to="/admin/dashboard" />;
      } else {
        return <Redirect to="/user/dashboard" />;
      }
    }
  };

  return (
    <Layout title="Signin" description="Signin to the Blog App">
      {showLoading()}
      {showWarning()}
      {signupForm()}
      {redirectUser()}
    </Layout>
  );
};

export default Signin;
