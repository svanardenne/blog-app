import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getPosts } from "./apiCore";
import Layout from "./Layout";
import BlogItem from "./BlogItem";
import { device } from "../styles/device";
import { colors } from "../styles/colors";

const Doodles = () => {
  return (
    <Layout color={colors.bgBlue}>
      <div>...</div>
    </Layout>
  );
};

export default Doodles;
