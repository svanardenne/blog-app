import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getImages, getPosts } from "./apiCore";
import Layout from "./Layout";
import ImageItem from "./ImageItem";
import { device } from "../styles/device";
import { colors } from "../styles/colors";

const Container = styled.section`
  h1 {
    color: white;
    font-size: 40px;
    font-weight: 600;
    padding: 0 24px 0 24px;
    text-align: center;
    line-height: 1.2;
    margin-top: 40px;
    margin-bottom: 40px;
  }
  @media ${device.tablet} {
    h1 {
      font-size: 48px;
    }
  }
  @media ${device.laptopM} {
    h1 {
      font-size: 62px;
    }
  }
  @media ${device.laptopL} {
    h1 {
      font-size: 64px;
    }
  }
`;

const ImagesContainer = styled.div`
  margin: 0 auto;
  div:last-child {
    padding-bottom: 40px;
  }
  @media ${device.laptopS} {
    max-width: 984px;
  }
  @media ${device.laptopM} {
    max-width: 1160px;
  }
  @media ${device.laptopL} {
    max-width: 1280px;
  }
`;

const Doodles = () => {
  const [images, setImages] = useState([]);
  const [error, setError] = useState([]);

  const loadImages = () => {
    getImages("DESC", "createdAt", "1000").then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setImages(data);
      }
    });
  };

  useEffect(() => {
    loadImages();
  }, []);

  const imageList = () => {
    return (
      <ImagesContainer>
        {images.map((image, i) => (
          <ImageItem item={image} key={i} />
        ))}
      </ImagesContainer>
    );
  };

  return (
    <Layout color={colors.bgBlue}>
      <Container>
        <h1>Doodles and Dawdles</h1>
        {imageList()}
      </Container>
    </Layout>
  );
};

export default Doodles;
