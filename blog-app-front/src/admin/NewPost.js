// Main imports
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../auth";
import Layout from "../core/Layout";
import {
  Form,
  FormGroup,
  Button,
  CreatingPost,
  Warning,
} from "../styles/admin/newPost";
import { colors } from "../styles/colors";
import { createPost } from "./apiAdmin";

const NewPost = () => {
  // State
  const [values, setValues] = useState({
    title: "",
    body: "",
    slug: "",
    photo: "",
    photo_info: "",
    photo_link: "",
    error: "",
    success: false,
    creatingPost: false,
    formData: "",
  });

  // Deconstruct values from state
  const {
    title,
    body,
    slug,
    photo,
    photo_info,
    photo_link,
    error,
    success,
    creatingPost,
    formData,
  } = values;

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
          photo_info: "",
          photo_link: "",
          slug: "",
          formData: new FormData(),
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
      <Link
        style={{
          color: `${colors.bgBlue}`,
          textDecoration: "none",
          display: "inline-block",
          marginBottom: "32px",
        }}
        to={`/admin/dashboard`}
      >{`< Back to Dashboard`}</Link>
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
        <label>Photo Information</label>
        <input
          onChange={handleChange("photo_info")}
          name="photo_info"
          type="text"
          value={photo_info}
        />
      </FormGroup>
      <FormGroup>
        <label>Photo Link</label>
        <input
          onChange={handleChange("photo_link")}
          name="photo_url"
          type="text"
          value={photo_link}
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
