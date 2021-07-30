// main imports
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../auth";
import Layout from "../core/Layout";
import { LinkList } from "../../styles/user/adminDashboard";

const AdminDashboard = () => {
  return (
    <Layout
      title={`Welcome, ${isAuthenticated().user.name}`}
      description="Manage your app from here!"
    >
      <nav>
        <LinkList>
          <li>
            <Link to="/post/create">Create Post</Link>
          </li>
          <li>
            <Link to="/doodle/create">Create Doodle</Link>
          </li>
        </LinkList>
      </nav>
    </Layout>
  );
};

export default AdminDashboard;
