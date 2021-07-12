import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getPosts } from "./apiCore";
import Layout from "./Layout";

const Post = (props) => {
  return <div>{props.match.params.slug}</div>;
};

export default Post;
