import styled from "styled-components";
import { colors } from "../colors";
import { device } from "../device";

export const Container = styled.section`
  padding: 0 24px 24px 24px;
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

export const ContentWrapper = styled.div`
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
