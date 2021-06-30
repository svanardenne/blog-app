import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "./Layout";
import Card from "./Card";
import {
  Headline,
  About,
  Projects,
  ProjectCards,
  Info,
  Contact,
} from "../styles/core/home";
import moment from "moment";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getPosts } from "./apiCore";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState([]);
  const [carousel, setCarousel] = useState(true);

  const loadPosts = () => {
    getPosts("desc", "createdAt", "3").then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setPosts(data);
      }
    });
  };

  const cardFormat = () => {
    if (window.innerWidth >= 1024) {
      setCarousel(false);
    } else if (window.innerWidth < 1024) {
      setCarousel(true);
    }
  };

  useEffect(() => {
    loadPosts();
    cardFormat();
    window.addEventListener("resize", () => {
      cardFormat();
    });
  }, []);

  const headline = () => (
    <Headline style={{ textAlign: "center" }}>
      <div>
        <h1>Creative Misgivings</h1>
        <p>
          <span>Strive to Create... When You are Full of Doubts</span>
        </p>
      </div>
    </Headline>
  );

  const about = () => (
    <About id="about">
      <h4>Hello, Dear Reader</h4>
      <p>
        <span>
          {" "}
          Welcome to Creative Misgivings, my never-ending uphill battle against
          imposter-syndrome and employed adult life to become the creative soul
          my 10-year-old self wanted to become! You can call me Creative Miss,
          the artistic alter-ego of a pretty normal woman. I love to write,
          draw, paint, bake, garden, and in general, create! I'm hoping, with
          your help, Dear Reader, to work through my own misgivings to create
          more and gain some courage to share it with the world. Currently
          you'll only find a blog, but as I create more, this experiment will
          grow with me.{" "}
        </span>
      </p>
      <br />
      <p>
        <span>Won't you come along? Let's see where this leads... </span>
      </p>
    </About>
  );

  const projectsDisplay = () => (
    <Projects id="projects">
      <h2>The Journey</h2>
      {carousel ? (
        <Carousel showThumbs={false} showStatus={false}>
          {posts.map((post, i) => (
            <Card post={post} key={i} />
          ))}
        </Carousel>
      ) : (
        <ProjectCards>
          {posts.map((post, i) => (
            <Card post={post} key={i} />
          ))}
        </ProjectCards>
      )}
    </Projects>
  );

  const info = () => (
    <Info>
      <h4>The Promises</h4>
      <p>
        <span>
          In order to hold myself accountable, I have made some promises to
          myself, and to you, Dear Reader, that will guide me through this
          journey.
        </span>
      </p>
      <Link to="/the-promises">I Promise...</Link>
    </Info>
  );

  const contact = () => (
    <Contact>
      <h2>Connect With Me</h2>
      <div>
        <a target="blank" href="https://www.facebook.com/creativemisgivings">
          <FontAwesomeIcon icon={["fab", "facebook-square"]} />
        </a>
        <a target="blank" href="https://twitter.com/CreateMis">
          <FontAwesomeIcon icon={["fab", "twitter-square"]} />
        </a>
        <a target="blank" href="https://www.instagram.com/creativemisgivings/">
          <FontAwesomeIcon icon={["fab", "instagram-square"]} />
        </a>
      </div>
    </Contact>
  );

  return (
    <Layout>
      {headline()}
      {about()}
      {projectsDisplay()}
      {info()}
      {contact()}
    </Layout>
  );
};

export default Home;
