// main imports
import React, { useEffect, useState } from "react";
import { getImages } from "./apiCore";
import Layout from "./Layout";
import ImageItem from "./ImageItem";
import { Container, ImagesContainer } from "../../styles/core/doodles";
import { colors } from "../../styles/colors";

const Doodles = () => {
  // state
  const [images, setImages] = useState([]);
  const [error, setError] = useState([]);

  // loads image and caption data
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

  // creates a list of images and captions using data in state
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
