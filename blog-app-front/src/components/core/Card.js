// main imports
import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import { CardWrapper } from "../../styles/core/card";
import ShowBackgroundImage from "./ShowBackgroundImage";

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
