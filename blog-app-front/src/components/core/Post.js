// main imports
import moment from "moment";
import React, { useEffect, useState } from "react";
import { API } from "../../config";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import { colors } from "../../styles/colors";
import { getPosts, postBySlug } from "./apiCore";
import Layout from "./Layout";
import RecentPost from "./RecentPost";
import {
  Title,
  BlogContainer,
  PostImage,
  PostContent,
  Caption,
  CaptionLink,
  Aside,
  RecentPosts,
  Wrapper,
} from "../../styles/core/post";

const Post = (props) => {
  // state
  const history = useHistory();
  const [slug, setSlug] = useState(props.match.params.slug);
  const [post, setPost] = useState({});
  const [recentPosts, setRecentPosts] = useState([]);
  const [error, setError] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingRecent, setLoadingRecent] = useState(true);

  //loads recent post data
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

  // retreives post data by slug and sets results in state
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

  // handles links on recent posts
  const handleLink = (slug) => {
    setSlug(slug);
    history.push(`/the_journey/${slug}`);
  };

  // initializes data and reloads post data on slug change
  const init = () => {
    getPostBySlug(slug);
    setSlug(props.match.params.slug);
    loadRecentPosts();
  };

  useEffect(() => {
    init();
  }, [slug, props.match.params]);

  // main blog content
  const blogContainer = () => (
    <BlogContainer>
      <Link
        style={{ color: `${colors.bgBlue}`, textDecoration: "none" }}
        to={`/the_journey`}
      >{`< All Posts`}</Link>
      <h3>{post.title}</h3>
      <span>{moment(post.createdAt).format("MMM Do, YYYY")}</span>
      <PostImage>
        {loading ? null : (
          <img src={`${API}/post/photo/${post._id}`} alt={post.photo_info} />
        )}
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

  // aside section for recent posts
  const aside = () => (
    <Aside>
      <h4>Recent Posts</h4>
      <RecentPosts>
        {recentPosts.map((recentPost, i) => (
          <RecentPost
            key={i}
            item={recentPost}
            handleLink={() => handleLink(recentPost.slug)}
          />
        ))}
      </RecentPosts>
    </Aside>
  );

  return (
    <Layout>
      <Title>The Journey</Title>
      <Wrapper>
        {blogContainer()}
        {aside()}
      </Wrapper>
    </Layout>
  );
};

export default Post;
