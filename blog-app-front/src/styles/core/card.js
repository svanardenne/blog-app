import styled from "styled-components";
import { colors } from "../colors";
import { device } from "../device";

export const CardWrapper = styled.div`
  width: 245px;
  height: 330px;
  background-color: ${colors.offWhite};
  margin: 0 auto 48px;
  box-shadow: 7px 7px 14px #4c5258;
  padding-top: 1px;
  img {
    width: 243px;
    max-width: 243px;
    margin-top: 2px;
  }
  p {
    font-size: 14px;
    color: ${colors.muted};
  }
  h4 {
    font-size: 22px;
    font-weight: 400;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-left: 16px;
    margin-right: 16px;
  }
  a {
    text-decoration: none;
    color: ${colors.bgBlue};
  }
  @media ${device.desktopS} {
    p {
      font-size: 16px;
    }
    h4 {
      font-size: 24px;
    }
  }
`;
