import styled from "styled-components";
import { device } from "../device";
import { colors } from "../colors";
import backgroundImg from "../../assets/images/jr-korpa-unsplash.jpg";

export const Headline = styled.header`
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.25) 0%,
      rgba(0, 0, 0, 0.25) 100%
    ),
    url(${backgroundImg}) center top;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: 1200px;
  min-height: 500px;
  color: ${colors.offWhite};
  display: flex;
  flex-direction: column;
  justify-content: center;
  div {
    padding-left: 24px;
    padding-right: 24px;
  }
  h1,
  p {
    text-shadow: 1px 1px ${colors.muted};
    -webkit-transform: scaleX(1.1);
    transform: scaleX(1.1);
  }
  h1 {
    font-size: 48px;
    margin: 0 0 10px 0;
  }
  p {
    font-size: 28px;
    margin: 0;
  }
  @media ${device.tablet} {
    h1 {
      font-size: 72px;
    }
  }
  @media ${device.laptopS} {
    min-height: 75vh;
    background-size: cover;
    background-position: center center;
  }
  @media ${device.laptopM} {
    h1 {
      font-size: 96px;
    }
  }
`;

export const About = styled.section`
  background-color: ${colors.bgBlue};
  color: ${colors.offWhite};
  text-align: center;
  padding: 40px 24px 40px 24px;
  h4 {
    font-size: 28px;
    font-weight: 400;
    margin: 0 0 24px 0;
  }
  p {
    margin: 0 auto;
  }
  span {
    font-size: 18px;
  }
  @media ${device.tablet} {
    padding: 56px 24px 56px 24px;
    h4 {
      font-size: 30px;
    }
    p {
      max-width: 83.33333333333334%;
    }
  }
  @media ${device.laptopS} {
    p {
      width: 600px;
      max-width: 66.66666666666666%;
    }
  }
  @media ${device.laptopM} {
    h4 {
      font-size: 32px;
    }
    p {
      width: 700px;
    }
  }
  @media ${device.desktopS} {
    h4 {
      font-size: 36px;
    }
    p {
      width: 800px;
    }
    span {
      font-size: 20px;
    }
  }
`;

export const Projects = styled.section`
  text-align: center;
  background-color: ${colors.mediumGrey};
  padding: 40px 0 0 0;
  h2 {
    font-size: 40px;
    margin-top: 0;
    margin-bottom: 40px;
    color: ${colors.offWhite};
  }
  @media ${device.tablet} {
    h2 {
      font-size: 48px;
    }
  }
  @media ${device.laptopM} {
    h2 {
      font-size: 62px;
    }
  }
`;

export const ProjectCards = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10%;
  margin: 0 48px 0 48px;
`;

export const Info = styled.section`
  text-align: center;
  color: ${colors.offWhite};
  background-color: ${colors.dark};
  padding: 40px 24px 40px 24px;
  h4 {
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    font-size: 40px;
    margin: 0 0 24px 0;
  }
  a {
    color: ${colors.offWhite};
    text-transform: uppercase;
    text-decoration: none;
    font-weight: 700;
    padding: 20px 32px 20px 32px;
    background-color: ${colors.bgBlue};
  }
  a:hover {
    background-color: ${colors.bgBlueDarker};
  }
  p {
    margin: 0 auto 48px;
  }
  span {
    font-size: 16px;
  }
  @media ${device.tablet} {
    padding: 56px 24px 56px 24px;
    h4 {
      font-size: 48px;
    }
    p {
      max-width: 83.33333333333334%;
    }
  }
  @media ${device.laptopS} {
    p {
      width: 600px;
      max-width: 66.66666666666666%;
    }
  }
  @media ${device.laptopM} {
    h4 {
      font-size: 62px;
    }
  }
  @media ${device.desktopS} {
    span {
      font-size: 18px;
    }
  }
`;

export const Contact = styled.section`
  text-align: center;
  color: ${colors.offWhite};
  background-color: ${colors.bgBlue};
  padding: 56px 0 56px 0;
  h2 {
    font-size: 32px;
    font-weight: 600;
    margin: 0 0 40px 0;
  }
  div {
    display: flex;
    justify-content: center;
    a {
      width: 56px;
      height: 48px;
      cursor: pointer;
      svg {
        color: ${colors.offWhite};
        width: 40px !important;
        height: 40px;
      }
    }
  }
  @media ${device.tablet} {
    h2 {
      font-size: 38px;
    }
    div {
      a {
        width: 72px;
      }
    }
  }
  @media ${device.laptopS} {
    div {
      a {
        width: 96px;
        height: 56px;
        svg {
          width: 48px !important;
          height: 48px;
        }
      }
    }
  }
  @media ${device.laptopM} {
    h2 {
      font-size: 44px;
    }
  }
  @media ${device.desktopS} {
    h2 {
      font-size: 48px;
    }
  }
`;
