import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getPosts, postBySlug } from "./apiCore";
import Layout from "./Layout";

const Post = (props) => {
  // create slug variable to use

  const [slug, setSlug] = useState(props.match.params.slug);
  const [post, setPost] = useState({});

  const getPostBySlug = async (slug) => {
    setPost(await postBySlug(slug));
  };

  useEffect(() => {
    getPostBySlug(slug);
  }, []);

  return <div>{JSON.stringify(post)}</div>;
};

export default Post;
