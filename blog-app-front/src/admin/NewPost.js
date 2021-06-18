// Main imports
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Layout from "../core/Layout";
import { colors } from "../styles/colors";

// Styled Components
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
  textarea {
    outline: none;
    padding: 10px;
    height: 300px;
    border: 1px solid ${colors.muted};
    border-radius: 0.25em;
  }
  textarea:focus {
    border: 2px solid lightblue;
  }
`;

const NewPost = () => {
  // State
  const [values, setValues] = useState({
    title: "",
    body: "",
    slug: "",
    error: "",
    success: false,
  });

  // Deconstruct values from state
  const { title, body, slug } = values;

  // Handles changes in the input fields
  const handleChange = (name) => (e) => {
    setValues({
      ...values,
      error: false,
      [name]: e.target.value,
    });
  };

  return (
    <Layout title="Create a post">
      <form>
        <FormGroup>
          <label>Title</label>
          <input onChange={handleChange("title")} type="text" value={title} />
        </FormGroup>
        <FormGroup>
          <label>Post Body</label>
          <textarea onChange={handleChange("body")} value={body} />
        </FormGroup>
      </form>
    </Layout>
  );
};

export default NewPost;
