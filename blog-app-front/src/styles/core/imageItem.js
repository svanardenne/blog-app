import styled from "styled-components";
import { colors } from "../colors";
import { device } from "../device";

export const Wrapper = styled.div`
  margin: 0 24px 24px 24px;
  p {
    color: ${colors.offWhite};
    margin: 0;
    line-height: 1.5;
    font-size: 16px;
  }
  @media ${device.laptopS} {
    display: flex;
    flex-direction: row-reverse;
    gap: 48px;
    p {
      flex-basis: 30%;
    }
    div {
      flex-basis: 70%;
    }
  }
  @media ${device.laptopL} {
    p {
      font-size: 18px;
    }
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  margin-bottom: 5px;
  img {
    width: 100%;
    height: auto;
  }
`;
