import React, { useEffect, useState } from "react";
import { colors } from "../../styles/colors";
import Layout from "./Layout";
import { Container, ContentWrapper } from "../../styles/core/promises";
import mainImage from "../../assets/images/people_hanging_out.jpeg";

const Promises = () => {
  return (
    <Layout color={colors.dark}>
      <Container>
        <h1>The Promises</h1>
        <ContentWrapper>
          <img src={mainImage} />
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
      </Container>
    </Layout>
  );
};

export default Promises;
