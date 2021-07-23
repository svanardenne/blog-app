import React from "react";
import { API } from "../config";
import styled from "styled-components";

const PostImage = styled.img`
  min-height: 100px;
  max-height: 140px;
`;

const ShowImage = ({ item, url, type }) => (
  <PostImage src={`${API}/${url}/${type}/${item._id}`} alt={item.name} />
);

export default ShowImage;
