// Main imports
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Layout from "../core/Layout";
import { colors } from "../styles/colors";
import { device } from "../styles/device";

// Styled Components
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

const NewPost = () => {
  // State
  const [values, setValues] = useState({
    title: "",
    body: "",
    slug: "",
    error: "",
    success: false,
    creatingPost: false,
  });

  // Deconstruct values from state
  const { title, body, slug, error, success, creatingPost } = values;

  // Handles changes in the input fields
  const handleChange = (name) => (e) => {
    setValues({
      ...values,
      error: false,
      [name]: e.target.value,
    });
  };

  const clickSubmit = () => {
    //
  };

  // Form for submitting posts
  const createPostForm = () => (
    <Form>
      <FormGroup>
        <label>Title</label>
        <input onChange={handleChange("title")} type="text" value={title} />
      </FormGroup>
      <FormGroup>
        <label>Post Body</label>
        <textarea onChange={handleChange("body")} value={body} />
      </FormGroup>
      <Button onClick={clickSubmit} type="submit">
        Submit
      </Button>
    </Form>
  );

  // Shows or hides loading text when loading state is true
  const showCreating = () =>
    creatingPost && (
      <Loading>
        <h2>Creating Post...</h2>
      </Loading>
    );

  // Shows error message if error
  const showWarning = () => (
    <Warning style={{ display: error ? "" : "none" }}>{error}</Warning>
  );

  return (
    <Layout title="Create a post">
      {showCreating()}
      {showWarning()}
      {createPostForm()}
    </Layout>
  );
};

export default NewPost;
