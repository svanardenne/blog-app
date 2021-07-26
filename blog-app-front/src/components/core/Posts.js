// main imports
import React, { useEffect, useState } from "react";
import { getPosts } from "./apiCore";
import Layout from "./Layout";
import BlogItem from "./BlogItem";
import { BlogsContainer, PostsContainer } from "../../styles/core/posts";

const Posts = () => {
  // state
  const [posts, setPosts] = useState([]);
  const [truncatedPostContent, setTruncatedPostContent] = useState([]);
  const [error, setError] = useState([]);

  // loads posts into state
  const loadPosts = () => {
    getPosts("DESC", "createdAt", "1000").then((data) => {
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

  // creates a list of posts to display on page
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
      <BlogsContainer>
        <h1>The Journey</h1>
        {postList()}
      </BlogsContainer>
    </Layout>
  );
};

export default Posts;
