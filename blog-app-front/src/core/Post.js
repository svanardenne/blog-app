import moment from "moment";
import React, { useEffect, useState } from "react";
import { API } from "../config";
import { Link } from "react-router-dom";
import { colors } from "../styles/colors";
import { getPosts, postBySlug } from "./apiCore";
import Layout from "./Layout";
import RecentPost from "./RecentPost";
import {
  BlogContainer,
  PostImage,
  PostContent,
  Caption,
  CaptionLink,
  Aside,
  RecentPosts,
} from "../styles/core/post";

const Post = (props) => {
  const [slug, setSlug] = useState(props.match.params.slug);
  const [post, setPost] = useState({});
  const [recentPosts, setRecentPosts] = useState([]);
  const [error, setError] = useState([]);
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

  const blogContainer = () => (
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
  );

  const aside = () => (
    <Aside>
      <h4>Recent Posts</h4>
      <RecentPosts>
        {recentPosts.map((recentPost, i) => (
          <RecentPost key={i} item={recentPost} />
        ))}
      </RecentPosts>
    </Aside>
  );

  return (
    <Layout>
      {blogContainer()}
      {aside()}
    </Layout>
  );
};

export default Post;
