import React, { useEffect, useState } from "react";
import styled from "styled-components";
import moment from "moment";
import { getPosts } from "./apiCore";
import Layout from "./Layout";
import BlogItem from "./BlogItem";

const Title = styled.section`
  margin-top: 140px;
  h1 {
    font-size: 40px;
    font-weight: 600;
    text-align: center;
    margin-bottom: 80px;
  }
  @media (min-width: 768px) {
    margin-top: 156px;
    h1 {
      font-size: 48px;
    }
  }
`;

const PostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 24px 0 24px;
`;

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState([]);

  const loadPosts = () => {
    getPosts("DESC", "creaatedAt", 1000).then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setPosts(data);
      }
    });
  };

  useEffect(() => {
    loadPosts();
  }, []);

  const postList = () => {
    return (
      <PostsContainer>
        {posts.map((post, i) => (
          <BlogItem key={i} post={post} />
        ))}
      </PostsContainer>
    );
  };

  return (
    <Layout>
      <Title>
        <h1>The Journey</h1>
        {postList()}
      </Title>
    </Layout>
  );
};

export default Posts;
