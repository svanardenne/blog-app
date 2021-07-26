import React from "react";
import { Link } from "react-router-dom";
import { colors } from "../styles/colors";
import styled from "styled-components";
import moment from "moment";
import ShowBackgroundImage from "./ShowBackgroundImage";
import { device } from "../styles/device";

const CardWrapper = styled.div`
  width: 245px;
  height: 330px;
  background-color: ${colors.offWhite};
  margin: 0 auto 48px;
  box-shadow: 7px 7px 14px #4c5258;
  padding-top: 1px;
  img {
    width: 243px;
    max-width: 243px;
    margin-top: 2px;
  }
  p {
    font-size: 14px;
    color: ${colors.muted};
  }
  h4 {
    font-size: 22px;
    font-weight: 400;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-left: 16px;
    margin-right: 16px;
  }
  a {
    text-decoration: none;
    color: ${colors.bgBlue};
  }
  @media ${device.desktopS} {
    p {
      font-size: 16px;
    }
    h4 {
      font-size: 24px;
    }
  }
`;

const Card = ({ post }) => (
  <CardWrapper className="post-card">
    <ShowBackgroundImage
      item={post}
      url="post"
      width="243px"
      height="140px"
      orientation="center center"
    />
    <p>{moment(post.createdAt).format("MMM Do, YYYY")}</p>
    <h4>{post.title}</h4>
    <Link to={`/the_journey/${post.slug}`}>Continue Reading</Link>
  </CardWrapper>
);

export default Card;
