import React, { useEffect, useState } from "react";
import { getImages, getPosts } from "./apiCore";
import Layout from "./Layout";
import ImageItem from "./ImageItem";
import { Container, ImagesContainer } from "../styles/core/doodles";
import { colors } from "../styles/colors";

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
