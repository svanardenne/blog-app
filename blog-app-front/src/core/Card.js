import React from "react";
import { Link } from "react-router-dom";
import { colors } from "../styles/colors";
import styled from "styled-components";
import moment from "moment";

const CardWrapper = styled.div`
  width: 245px;
  height: 330px;
  margin: 0 auto;
  background-color: ${colors.offWhite};
`;

const Card = ({ post }) => (
  <CardWrapper className="post-card">
    <p>{moment(post.createdAt).format("MMM Do, YYYY")}</p>
    <h4>{post.title}</h4>
    <Link to={`/posts/${post.slug}`}>Continue Reading</Link>
  </CardWrapper>
);

export default Card;
