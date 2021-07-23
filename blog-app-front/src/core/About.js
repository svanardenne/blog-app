import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { colors } from "../styles/colors";
import { device } from "../styles/device";
import Layout from "./Layout";
import mainImage from "../assets/images/creativeLogo.jpg";

const Container = styled.section`
  margin-top: 100px;
  margin-bottom: 136px;
  padding: 35px 24px 24px 24px;
  background-color: ${colors.dark};
  h1 {
    color: ${colors.offWhite};
    font-size: 40px;
    font-weight: 600;
    margin-top: 0;
  }
  img {
    max-width: 100%;
    width: 100%;
    margin-bottom: 32px;
  }
  p {
    color: ${colors.mutedLight};
    margin-bottom: 24px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  a {
    color: ${colors.menuBlue};
  }
  @media ${device.tablet} {
    margin: 100px auto 136px;
    max-width: 80%;
    h1 {
      font-size: 48px;
    }
    img {
      display: block;
      margin: 0 auto 32px auto;
    }
  }
  @media ${device.laptopS} {
    display: flex;
    flex-direction: row-reverse;
    gap: 48px;
    max-width: 1024px;
    img {
      width: 35%;
      height: 100%;
      padding: 0 48px 0 48px;
    }
  }
  @media ${device.laptopM} {
    max-width: 1280px;
    h1 {
      font-size: 62px;
    }
  }
`;

const About = () => {
  return (
    <Layout color={colors.dark}>
      <Container>
        <img src={mainImage} />
        <div>
          <h1>About</h1>
          <p>Hello there, Dear Reader, and thank you for visiting me here! </p>
          <p>
            This blog started as a daydream of fancy and now is really here! I
            want this place to be somewhere I can express my doubts and
            frustrations as I attempt to be more creative and perhaps find
            others that are on the same road. You, Dear Reader, can help me stay
            accountable to the things I say I want to do and inspire me with
            your stories and dreams. I hope to learn from you and with you in
            this journey to a more vibrant life with intention and wonder.
          </p>
          <p>
            As a Dear Reader of mine (and you are dear to me), I hope you will
            find some truths with me and inspiration to create whatever it is
            you want! Writing, drawing, painting, music, poetry, it's all a
            beautiful creation! So I welcome you and your world as we battle our
            Creative Misgivings.
          </p>
          <p>Shall we brave the deep together? Onward, then!</p>
          <p>-Creative Miss</p>
          <p>
            Original banner image courtesy of{" "}
            <a target="_blank" href="https://unsplash.com/@korpa">
              Jr Korpa
            </a>{" "}
            on Unsplash
          </p>
        </div>
      </Container>
    </Layout>
  );
};

export default About;
