import styled from "styled-components";
import { device } from "../device";
import { colors } from "../colors";

export const BlogContainer = styled.section`
  margin: 40px 48px 16px 48px;
  border-bottom: 2px solid ${colors.lightGrey};
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

export const PostImage = styled.figure`
  width: 100%;
  margin: 0 auto;
  img {
    width: 100%;
  }
`;

export const PostContent = styled.p`
  font-size: 16px;
  margin-bottom: 80px;
  color: ${colors.muted};
`;

export const Caption = styled.figcaption`
  text-align: center;
  color: ${colors.muted};
`;

export const CaptionLink = styled.a`
  color: ${colors.muted};
  font-size: 14px;
`;

export const Aside = styled.aside`
  margin: 0 48px;
  h4 {
    font-size: 22px;
    font-weight: 400;
    margin-top: 0;
    margin-bottom: 24px;
  }
`;

export const RecentPosts = styled.div``;
