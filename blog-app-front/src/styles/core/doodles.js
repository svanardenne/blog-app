import styled from "styled-components";
import { device } from "../device";

export const Container = styled.section`
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

export const ImagesContainer = styled.div`
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
