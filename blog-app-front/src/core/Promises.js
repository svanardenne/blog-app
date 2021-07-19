import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { colors } from "../styles/colors";
import { device } from "../styles/device";
import Layout from "./Layout";
import image from "../assets/images/people_hanging_out.jpeg";

const BlogsContainer = styled.section`
  margin-top: 100px;
  padding: 0 24px 0 24px;
  background-color: ${colors.dark};
  h1 {
    margin: 0 auto 40px auto;
    padding-top: 40px;
    color: ${colors.offWhite};
    font-size: 40px;
    font-weight: 600;
    text-align: center;
  }
  h4 {
    color: ${colors.offWhite};
    font-size: 22px;
    font-weight: 400;
    margin-bottom: 24px;
    line-height: 1.25;
  }
  p {
    color: ${colors.mutedLight};
    margin-bottom: 24px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  img {
    max-width: 100%;
    width: 100%;
  }
  @media ${device.tablet} {
    h1 {
      font-size: 48px;
    }
  }
  @media ${device.laptopS} {
    h4:first-child {
      margin-top: 0;
    }
  }
  @media ${device.laptopM} {
    h1 {
      font-size: 62px;
    }
  }
  @media ${device.desktopS} {
    h1 {
      font-size: 64px;
    }
    h4 {
      font-size: 24px;
    }
    p {
      font-size: 18px;
    }
  }
`;

const ContentWrapper = styled.div`
  @media ${device.tablet} {
    margin: 0 auto;
    max-width: 80%;
    img {
      display: block;
      margin: 0 auto;
    }
  }
  @media ${device.laptopS} {
    display: flex;
    flex-direction: row;
    gap: 48px;
    max-width: 1024px;
    img {
      width: 35%;
      height: 100%;
    }
  }
  @media ${device.laptopM} {
    max-width: 1280px;
  }
`;

const Promises = () => {
  return (
    <Layout>
      <BlogsContainer>
        <h1>The Promises</h1>
        <ContentWrapper>
          <img src={image} />
          <div>
            <h4>I will face my Creative Misgivings</h4>
            <p>
              A misgiving is "a feeling of doubt or apprehension about the
              outcome or consequences of something", and I can tell you I feel
              misgivings about anything I create. This promise will remind me to
              look at my doubts head-on instead of letting them whisper in my
              ear.
            </p>
            <h4>I will treat my creative self awith more respect</h4>
            <p>
              I have always thought highly of the people I know who are
              creative, as well as professional artists. Just look at the
              amazing things they make! But I never extend that consideration to
              myself, somehow thinking because it's my creation, it is somehow
              lesser. This promise will encourage me to see the value in what I
              do instead of dismissing it.
            </p>
            <h4>
              I will put my creations out into the world, even if they're not
              exactly how I pictured them
            </h4>
            <p>
              I often struggle with only showing my creations to a trusted few
              because I lack the courage to put myself out there. This promise
              will encourage me to let others see what I've done, to help me
              grow and learn.
            </p>
            <h4>
              I will show my growth over time instead of looking at every
              failing I see
            </h4>
            <p>
              I've seen artists compare their old work to their new work, and
              I'm always amazed at how they've progressed. This promise will
              remind me to build on, not criticize, every little thing I do.
            </p>
            <h4>
              I will finish projects and learn more about what hinders my
              progress
            </h4>
            <p>
              There are so many documents of unfinished stories on my poor
              computer, and a large canvas of an unfinished painting mocking me
              from the corner of this room. This promise will force me to finish
              what I'm working on, instead of just jumping to the next project,
              and help me create the discipline I need.
            </p>
            <h4>I will journey into the dark</h4>
            <p>
              Fear of the unknown, while very rational, keeps us in a nice
              little box. This promise will force me to try new things, such as
              this website, to broaden my horizons. And if they fail, I will try
              again.
            </p>
          </div>
        </ContentWrapper>
      </BlogsContainer>
    </Layout>
  );
};

export default Promises;
