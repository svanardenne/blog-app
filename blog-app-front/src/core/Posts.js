import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getPosts } from "./apiCore";
import Layout from "./Layout";
import BlogItem from "./BlogItem";
import { device } from "../styles/device";

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
  @media ${device.laptopS} {
    max-width: 50%;
    margin: 0 auto;
  }
`;

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [truncatedPostContent, setTruncatedPostContent] = useState([]);
  const [error, setError] = useState([]);

  // loads posts into state
  const loadPosts = () => {
    getPosts("DESC", "createdAt", 1000).then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setPosts(data);
      }
    });
  };

  // creates truncated post content to display in post items
  const truncatePostContent = () => {
    const truncatedPosts = posts.map((post, i) => {
      return post.body.split(" ").splice(0, 30).join(" ") + "...";
    });
    setTruncatedPostContent(truncatedPosts);
  };

  useEffect(() => {
    loadPosts();
  }, []);

  useEffect(() => {
    truncatePostContent();
  }, [posts]);

  const postList = () => {
    return (
      <PostsContainer>
        {posts.map((post, i) => (
          <BlogItem
            key={i}
            post={post}
            truncatedPostContent={truncatedPostContent[i]}
          />
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
