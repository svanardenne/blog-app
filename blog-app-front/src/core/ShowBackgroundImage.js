import React from "react";
import { API } from "../config";
import styled from "styled-components";
import { device } from "../styles/device";

const PostImage = styled.div`
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 100%;
  margin-left: 1px;
  @media ${device.tablet} {
    background-position: center top;
  }
`;

const ShowBackgroundImage = ({
  item,
  url,
  width = "100%",
  height = "100%",
  orientation = "center top",
}) => (
  <PostImage
    style={{
      backgroundImage: `url(${API}/${url}/photo/${item._id})`,
      width: `${width}`,
      height: `${height}`,
      backgroundPosition: `${orientation}`,
    }}
    title={`Picture relating to ${item.title}`}
  />
);

export default ShowBackgroundImage;
