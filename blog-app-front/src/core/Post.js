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
    margin-top: 0;
    margin-bottom: 8px;
  }
  a {
    margin-bottom: 40px;
    display: inline-block;
  }
  span {
    display: inline-block;
    margin-bottom: 32px;
    color: ${colors.muted};
  }
`;

const PostImage = styled.figure`
  width: 200px;
  height: 200px;
  margin: 0 auto 32px;
`;

const PostContent = styled.p`
  font-size: 16px;
  color: ${colors.muted};
`;

const Caption = styled.figcaption`
  text-align: center;
  color: ${colors.muted};
`;

const CaptionLink = styled.a`
  color: ${colors.muted};
  font-size: 14px;
`;

const Post = (props) => {
  // create slug variable to use

  const [slug, setSlug] = useState(props.match.params.slug);
  const [post, setPost] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const getPostBySlug = (slug) => {
    setLoading(true);
    postBySlug(slug).then((data, err) => {
      if (data.error) {
        setError(data.error);
      } else {
        setPost(data);
        setLoading(false);
      }
    });
  };

  useEffect(() => {
    getPostBySlug(slug);
  }, []);

  const blogContainer = () => {
    return (
      <BlogContainer>
        <Link to={`/posts`}>{`< All Posts`}</Link>
        <h3>{post.title}</h3>
        <span>{moment(post.createdAt).format("MMM Do, YYYY")}</span>
        <PostImage>
          {loading ? null : <ShowBackgroundImage item={post} url="post" />}
          <Caption>
            {post.photo_link ? (
              <CaptionLink target="_blank" href={`${post.photo_link}`}>
                {post.photo_info}
              </CaptionLink>
            ) : (
              post.photo_info
            )}
          </Caption>
        </PostImage>

        <PostContent>{post.body}</PostContent>
      </BlogContainer>
    );
  };

  return <Layout>{blogContainer()}</Layout>;
};

export default Post;
