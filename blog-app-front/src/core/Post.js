import moment from "moment";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../styles/colors";
import { getPosts, postBySlug } from "./apiCore";
import Layout from "./Layout";
import ShowBackgroundImage from "./ShowBackgroundImage";

const BlogContainer = styled.section`
  margin-top: 140px;
  margin: 140px 48px 0px 48px;
  h3 {
    color: ${colors.bgBlueDarker};
    font-size: 28px;
    font-family: "Roboto", arial, sans-serif;
    font-weight: 400;
  }
`;

const PostImage = styled.div`
  width: 200px;
  height: 200px;
  margin: 0 auto 32px;
`;

const PostContent = styled.p`
  font-size: 16px;
  color: ${colors.muted};
`;

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

  return (
    <Layout>
      <BlogContainer>
        <Link to={`/posts`}>{`< All Posts`}</Link>
        <h3>{post.title}</h3>
        <span>{moment(post.createdAt).format("MMM Do, YYYY")}</span>
        <PostImage>
          <ShowBackgroundImage item={post} url="post"></ShowBackgroundImage>
        </PostImage>
        <PostContent>{post.body}</PostContent>
      </BlogContainer>
    </Layout>
  );
};

export default Post;
