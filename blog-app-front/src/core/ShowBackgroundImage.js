import React from "react";
import { API } from "../config";
import { PostImage } from "../styles/core/showBackgroundImage";

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
