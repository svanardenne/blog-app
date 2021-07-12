import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors } from "../styles/colors";
import moment from "moment";
import ShowBackgroundImage from "./ShowBackgroundImage";
import { device } from "../styles/device";

const BlogItemContainer = styled.div`
  border-bottom: 1px solid ${colors.lightGrey};
  margin-bottom: 40px;
  @media ${device.tablet} {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    gap: 40px;
    .post-container {
      flex-basis: 75%;
    }
  }
`;

const InfoContainer = styled.div`
  margin-bottom: 40px;
  a {
    text-decoration: none;
  }
`;

const CreatedAt = styled.p`
  color: ${colors.muted};
  margin: 0 0 16px 0;
  font-size: 14px;
`;

const Title = styled.h4`
  font-size: 22px;
  font-weight: 400;
  margin: 0 0 16px 0;
  overflow-wrap: break-word;
`;

const Body = styled.p`
  font-size: 16px;
  overflow-wrap: break-word;
  font-weight: 400;
  color: ${colors.muted};
`;

const PostImage = styled.div`
  width: 200px;
  height: 200px;
  margin: 0 auto 32px;
`;

const PostLink = styled.span`
  color: ${colors.bgBlue};
`;

const BlogItem = ({ post, truncatedPostContent }) => {
  return (
    <BlogItemContainer>
      <PostImage className="post-image">
        <ShowBackgroundImage item={post} url="post" />
      </PostImage>
      <InfoContainer className="post-container">
        <CreatedAt>{moment(post.createdAt).format("MMM Do, YYYY")}</CreatedAt>
        <Title>{post.title}</Title>
        <Body>{truncatedPostContent}</Body>
        <Link to={`/posts/${post.slug}`}>
          <PostLink>Continue Reading</PostLink>
        </Link>
      </InfoContainer>
    </BlogItemContainer>
  );
};

export default BlogItem;
