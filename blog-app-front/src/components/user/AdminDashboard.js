// main imports
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../auth";
import Layout from "../core/Layout";
import { LinkList } from "../../styles/user/adminDashboard";
import { fetchQuote } from "./apiUser";

const AdminDashboard = () => {
  // state
  const [quote, setQuote] = useState("");
  const { error, setError } = useState([]);

  // fetches a random quote to display in jumbotron
  const fetchRandomQuote = () => {
    fetchQuote().then((data) => {
      if (!data || data.error) {
        setError(data.error);
      } else {
        setQuote(data);
      }
    });
  };

  useEffect(() => {
    fetchRandomQuote();
  }, []);

  return (
    <Layout
      title={`Welcome, ${isAuthenticated().user.name}`}
      description="Manage your app from here!"
      quote={`${quote.content}`}
      quoteAuthor={`${quote.author}`}
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
