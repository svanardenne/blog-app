// Main imports
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { authenticate } from "../auth";
import { isAuthenticated } from "../auth";
import Layout from "../core/Layout";
import { colors } from "../styles/colors";
import { device } from "../styles/device";
import { createPost } from "./apiAdmin";

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

const CreatingPost = styled.div`
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
    photo: "",
    error: "",
    success: false,
    creatingPost: false,
    formData: "",
  });

  // Deconstruct values from state
  const { title, body, slug, photo, error, success, creatingPost, formData } =
    values;

  // for user authentication
  const { user, token } = isAuthenticated();

  const init = () => {
    setValues({ ...values, formData: new FormData() });
  };

  useEffect(() => {
    init();
  }, []);

  // Handles changes in the input fields
  const handleChange = (name) => (e) => {
    const value = name === "photo" ? e.target.files[0] : e.target.value;
    if (name === "title") {
      formData.set(
        "slug",
        value
          .replace(/\s+/g, "-")
          .replace(/[^\w-]+/g, "")
          .toLowerCase()
      );
    }
    formData.set(name, value);
    setValues({ ...values, error: false, [name]: value });
  };

  const clickSubmit = (e) => {
    e.preventDefault();
    setValues({ ...values, error: false, creatingPost: true });
    createPost(user._id, token, formData).then((data) => {
      if (data.error) {
        setValues({
          ...values,
          error: data.error,
          creatingPost: false,
        });
      } else {
        setValues({
          title: "",
          body: "",
          slug: "",
          error: "",
          success: false,
          creatingPost: false,
        });
      }
    });
  };

  // Form for submitting posts
  const createPostForm = () => (
    <Form>
      <FormGroup>
        <label>Photo</label>
        <input
          onChange={handleChange("photo")}
          name="photo"
          type="file"
          accept="image/*"
        />
      </FormGroup>
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

  // Shows or hides "creating post" text when creatingPost state is true
  const showCreating = () =>
    creatingPost && (
      <CreatingPost>
        <h2>Creating Post...</h2>
      </CreatingPost>
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
