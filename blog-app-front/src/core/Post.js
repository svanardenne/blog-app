import moment from "moment";
import React, { useEffect, useState } from "react";
import { API } from "../config";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../styles/colors";
import { device } from "../styles/device";
import { getPosts, postBySlug } from "./apiCore";
import Layout from "./Layout";
import ShowBackgroundImage from "./ShowBackgroundImage";
import RecentPost from "./RecentPost";

const BlogContainer = styled.section`
  margin: 40px 48px 0px 48px;
  h1 {
    font-size: 40px;
    font-weight: 600;
    text-align: center;
    margin-bottom: 80px;
  }
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
  @media ${device.tablet} {
    h1 {
      font-size: 48px;
    }
  }
`;

const PostImage = styled.figure`
  width: 100%;
  margin: 0 auto;
  img {
    width: 100%;
  }
`;

const PostContent = styled.p`
  font-size: 16px;
  margin-bottom: 80px;
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

const Aside = styled.aside`
  margin: 0 48px;
`;

const RecentPosts = styled.div``;

const Post = (props) => {
  // create slug variable to use

  const [slug, setSlug] = useState(props.match.params.slug);
  const [post, setPost] = useState({});
  const [recentPosts, setRecentPosts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [loadingRecent, setLoadingRecent] = useState(true);

  const loadRecentPosts = () => {
    setLoadingRecent(true);
    getPosts("DESC", "createdAt", "3").then((data, err) => {
      if (data.error) {
        setError(data.error);
      } else {
        setRecentPosts(data);
        setLoadingRecent(false);
      }
    });
  };

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
    loadRecentPosts();
  }, []);

  const blogContainer = () => {
    return (
      <React.Fragment>
        <BlogContainer>
          <h1>The Journey</h1>
          <Link
            style={{ color: `${colors.bgBlue}`, textDecoration: "none" }}
            to={`/the_journey`}
          >{`< All Posts`}</Link>
          <h3>{post.title}</h3>
          <span>{moment(post.createdAt).format("MMM Do, YYYY")}</span>
          <PostImage>
            {loading ? null : <img src={`${API}/post/photo/${post._id}`} />}
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
        <Aside>
          <h4>Recent Posts</h4>
          <RecentPosts>
            {recentPosts.map((recentPost, i) => (
              <RecentPost key={i} item={recentPost} />
            ))}
          </RecentPosts>
        </Aside>
      </React.Fragment>
    );
  };

  return <Layout>{blogContainer()}</Layout>;
};

export default Post;
