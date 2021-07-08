import styled from "styled-components";
import { colors } from "../styles/colors";
import moment from "moment";
import ShowBackgroundImage from "./ShowBackgroundImage";

const BlogItemContainer = styled.div`
  border-bottom: 1px solid ${colors.lightGrey};
  margin-bottom: 40px;
`;

const InfoContainer = styled.div`
  margin-bottom: 40px;
`;

const CreatedAt = styled.p`
  color: ${colors.muted};
  margin: 0 0 16px 0;
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

const BlogItem = ({ post }) => {
  return (
    <BlogItemContainer>
      <ShowBackgroundImage item={post} url="post" />
      <InfoContainer>
        <CreatedAt>{moment(post.createdAt).format("MMM Do, YYYY")}</CreatedAt>
        <Title>{post.title}</Title>
        <Body>{post.body}</Body>
      </InfoContainer>
    </BlogItemContainer>
  );
};

export default BlogItem;
