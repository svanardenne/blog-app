import React from "react";
import { API } from "../config";
import styled from "styled-components";

const PostImage = styled.div`
  width: 100%;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 100%;
`;

const ShowBackgroundImage = ({ item, url }) => (
  <PostImage
    style={{ backgroundImage: `url(${API}/${url}/photo/${item._id})` }}
    title={`Picture relating to ${item.title}`}
  />
);

export default ShowBackgroundImage;
