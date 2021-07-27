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
} from "../../styles/admin/newPost";
import { colors } from "../../styles/colors";
import { createDoodle } from "./apiAdmin";
import Doodles from "../core/Doodles";

const NewDoodle = () => {
  // State
  const [values, setValues] = useState({
    image: "",
    image_caption: "",
    error: "",
    success: false,
    creatingDoodle: false,
    formData: "",
  });

  // Deconstruct values from state
  const { image, image_caption, error, success, creatingDoodle, formData } =
    values;

  // for user authentication
  const { user, token } = isAuthenticated();

  // Data initializer
  const init = () => {
    setValues({ ...values, formData: new FormData() });
  };

  useEffect(() => {
    init();
  }, []);

  // Handles changes in the input fields
  const handleChange = (name) => (e) => {
    const value = name === "image" ? e.target.files[0] : e.target.value;
    formData.set(name, value);
    setValues({ ...values, error: false, [name]: value });
  };

  // handles the submission of the form
  const clickSubmit = (e) => {
    e.preventDefault();
    setValues({ ...values, error: false, creatingDoodle: true });
    createDoodle(user._id, token, formData).then((data) => {
      if (data.error) {
        setValues({
          ...values,
          error: data.error,
          creatingPost: false,
        });
      } else {
        setValues({
          image: "",
          image_caption: "",
          formData: new FormData(),
          error: "",
          success: false,
          creatingPost: false,
        });
      }
    });
  };

  // Form for submitting posts
  const createDoodleForm = () => (
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
        <label>Image</label>
        <input
          onChange={handleChange("image")}
          name="image"
          type="file"
          accept="image/*"
        />
      </FormGroup>
      <FormGroup>
        <label>Caption</label>
        <input
          onChange={handleChange("image_caption")}
          name="image_caption"
          type="text"
          value={image_caption}
        />
      </FormGroup>
      <Button onClick={clickSubmit} type="submit">
        Submit
      </Button>
    </Form>
  );

  // Shows or hides "creating doodle" text when creatingPost state is true
  const showCreating = () =>
    creatingDoodle && (
      <CreatingPost>
        <h2>Creating Doodle...</h2>
      </CreatingPost>
    );

  // Shows error message if error
  const showWarning = () => (
    <Warning style={{ display: error ? "" : "none" }}>{error}</Warning>
  );

  return (
    <Layout title="Post a picture and caption">
      {showCreating()}
      {showWarning()}
      {createDoodleForm()}
    </Layout>
  );
};

export default NewDoodle;
