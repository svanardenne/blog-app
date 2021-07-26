import React, { useEffect, useState } from "react";
import { colors } from "../styles/colors";
import Layout from "./Layout";
import { Container } from "../styles/core/about";
import mainImage from "../assets/images/creativeLogo.jpg";

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
