// main imports
import React from "react";
import { Link } from "react-router-dom";
import Layout from "../core/Layout";

const AdminDashboard = () => {
  return (
    <Layout title="Admin Dashboard" description="Manage your app!">
      <Link to="/post/create">Create Post</Link>
      <Link to="/doodle/create">Create Doodle</Link>
    </Layout>
  );
};

export default AdminDashboard;
