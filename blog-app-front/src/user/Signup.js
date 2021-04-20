import React, { useState } from "react";
import styled from "styled-components";
import Layout from "../core/Layout";

// styled components
const Form = styled.form`
  width: 90%;
  margin: 50px auto 50px;
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
  const handleChange = (name) => (event) => {
    setValues({
      ...values,
      error: false,
      [name]: event.target.value,
    });
  };

  return (
    <Layout title="Signup" description="Signup to the Blog App">
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
        <button type="submit">Submit</button>
      </Form>
    </Layout>
  );
};

export default Signup;
