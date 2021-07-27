import styled from "styled-components";
import { device } from "../device";
import { colors } from "../colors";

export const Title = styled.h1`
  font-size: 40px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 80px;
  @media ${device.tablet} {
    font-size: 48px;
  }
  @media ${device.laptopM} {
    font-size: 62px;
  }
  @media ${device.desktopS} {
    font-size: 64px;
  }
`;

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  @media ${device.laptopS} {
    flex-direction: row;
    max-width: 984px;
    padding: 0 24px 0 24px;
  }
  @media ${device.laptopM} {
    max-width: 1160px;
  }
  @media ${device.desktopS} {
    max-width: 1280px;
  }
`;

export const BlogContainer = styled.section`
  margin: 40px 40px 16px 40px;
  border-bottom: 1px solid ${colors.lightGrey};
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
    font-size: 16px;
  }
  span {
    display: inline-block;
    font-size: 14px;
    margin-bottom: 32px;
    color: ${colors.muted};
  }
  @media ${device.tablet} {
    h3 {
      font-size: 30px;
    }
  }
  @media ${device.laptopS} {
    margin-top: 0;
    border-bottom: none;
    padding-right: 40px;
    padding-left: 40px;
    margin-left: 0;
    margin-right: 32px;
    border-right: 1px solid ${colors.lightGrey};
  }
  @media ${device.laptopM} {
    h3 {
      font-size: 32px;
    }
  }
  @media ${device.desktopS} {
    h3 {
      font-size: 36px;
    }
    a {
      font-size: 18px;
    }
    span {
      font-size: 16px;
    }
    p {
      font-size: 18px;
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

export const PostContent = styled.div`
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
  @media ${device.laptopS} {
    margin: 0;
    padding-right: 40px;
    min-width: 34%;
  }
  @media ${device.desktopS} {
    h4 {
      font-size: 24px;
    }
  }
`;

export const RecentPosts = styled.div``;
