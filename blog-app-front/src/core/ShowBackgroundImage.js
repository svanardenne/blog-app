import React from "react";
import { API } from "../config";
import styled from "styled-components";
import { device } from "../styles/device";

const PostImage = styled.div`
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 100%;
  @media ${device.tablet} {
    background-position: center top;
  }
`;

const ShowBackgroundImage = ({ item, url }) => (
  <PostImage
    style={{ backgroundImage: `url(${API}/${url}/photo/${item._id})` }}
    title={`Picture relating to ${item.title}`}
  />
);

export default ShowBackgroundImage;
