import React from "react";
import { API } from "../config";
import styled from "styled-components";

const PostImage = styled.div`
  min-height: 100px;
  max-height: 140px;
  background-position: center;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  height: 200px;
  width: 200px;
  margin: 0 auto 56px;
`;

const ShowBackgroundImage = ({ item, url }) => (
  <PostImage
    style={{ backgroundImage: `url(${API}/${url}/photo/${item._id})` }}
    title={`Picture relating to ${item.title}`}
  />
);

export default ShowBackgroundImage;
