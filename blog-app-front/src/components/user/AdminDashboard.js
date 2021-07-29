// main imports
import React from "react";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../auth";
import Layout from "../core/Layout";

const AdminDashboard = () => {
  return (
    <Layout
      title={`Welcome, ${isAuthenticated().user.name}`}
      description="Manage your app from here!"
    >
      <Link to="/post/create">Create Post</Link>
      <Link to="/doodle/create">Create Doodle</Link>
    </Layout>
  );
};

export default AdminDashboard;
