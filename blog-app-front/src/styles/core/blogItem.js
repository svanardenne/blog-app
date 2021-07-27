import styled from "styled-components";
import { colors } from "../colors";
import { device } from "../device";

export const BlogItemContainer = styled.div`
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

export const InfoContainer = styled.div`
  margin-bottom: 40px;
  a {
    text-decoration: none;
  }
`;

export const CreatedAt = styled.p`
  color: ${colors.muted};
  margin: 0 0 16px 0;
  font-size: 14px;
`;

export const Title = styled.h4`
  font-size: 22px;
  font-weight: 400;
  margin: 0 0 16px 0;
  overflow-wrap: break-word;
`;

export const Body = styled.div`
  font-size: 16px;
  overflow-wrap: break-word;
  font-weight: 400;
  color: ${colors.muted};
`;

export const PostImage = styled.div`
  width: 200px;
  height: 200px;
  margin: 0 auto 32px;
`;

export const PostLink = styled.span`
  color: ${colors.bgBlue};
`;
