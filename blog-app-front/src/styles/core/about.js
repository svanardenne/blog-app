import styled from "styled-components";
import { colors } from "../colors";
import { device } from "../device";

export const Container = styled.section`
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
    margin: 0 auto;
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
