import styled from "styled-components";
import { device } from "../device";

export const PostImage = styled.div`
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 100%;
  margin-left: 1px;
  @media ${device.tablet} {
    background-position: center top;
  }
`;
