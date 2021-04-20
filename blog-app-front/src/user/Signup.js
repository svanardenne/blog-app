import React, { useState } from "react";
import Layout from "../core/Layout";

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
      <div>
        <h1 style={{ textAlign: "center" }}>My Blog</h1>
        <form>
          <div>
            <label>Name</label>
            <input onChange={handleChange("name")} type="text" value={name} />
          </div>
          <div>
            <label>Email</label>
            <input onChange={handleChange("email")} type="text" value={email} />
          </div>
          <div>
            <label>Password</label>
            <input
              onChange={handleChange("password")}
              type="text"
              value={password}
            />
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Signup;
