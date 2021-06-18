import React from "react";
import { Link } from "react-router-dom";
import Layout from "../core/Layout";
import styled from "styled-components";
import { colors } from "../styles/colors";

const AdminDashboard = () => {
  return (
    <Layout title="Admin Dashboard" description="Manage your app!">
      <Link to="/create/post">Create Post</Link>
    </Layout>
  );
};

export default AdminDashboard;
