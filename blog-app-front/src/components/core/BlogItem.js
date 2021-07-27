// main imports
import { Link } from "react-router-dom";
import moment from "moment";
import {
  BlogItemContainer,
  InfoContainer,
  CreatedAt,
  Title,
  Body,
  PostImage,
  PostLink,
} from "../../styles/core/blogItem";
import ReactMarkdown from "react-markdown";
import ShowBackgroundImage from "./ShowBackgroundImage";

const BlogItem = ({ post, truncatedPostContent }) => {
  return (
    <BlogItemContainer>
      <PostImage className="post-image">
        <ShowBackgroundImage item={post} url="post" />
      </PostImage>
      <InfoContainer className="post-container">
        <CreatedAt>{moment(post.createdAt).format("MMM Do, YYYY")}</CreatedAt>
        <Title>{post.title}</Title>
        <Body>
          <ReactMarkdown>{truncatedPostContent}</ReactMarkdown>
        </Body>
        <Link to={`/the_journey/${post.slug}`}>
          <PostLink>Continue Reading</PostLink>
        </Link>
      </InfoContainer>
    </BlogItemContainer>
  );
};

export default BlogItem;
