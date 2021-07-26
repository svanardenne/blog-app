import styled from "styled-components";
import { device } from "../device";

export const BlogsContainer = styled.section`
  margin-top: 40px;
  margin-bottom: 40px;
  h1 {
    font-size: 40px;
    font-weight: 600;
    text-align: center;
  }
  @media ${device.tablet} {
    margin-top: 56px;
    h1 {
      font-size: 48px;
    }
  }
`;

export const PostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 24px 0 24px;
  @media ${device.laptopS} {
    max-width: 50%;
    margin: 0 auto;
  }
`;
