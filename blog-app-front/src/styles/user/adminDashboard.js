import styled from "styled-components";
import { colors } from "../colors";
import { device } from "../device";

export const LinkList = styled.ul`
  list-style-type: none;
  padding: 0;
  max-width: 90%;
  margin: 0 auto;
  border: 1px solid ${colors.mediumGrey};
  border-radius: 5px;
  li {
    position: relative;
    border-bottom: 1px solid ${colors.mediumGrey};
    &:last-child {
      border: 0;
    }
    a {
      display: block;
      padding: 16px 24px;
      text-decoration: none;
      color: ${colors.bgBlue};
      font-size: 16px;
    }
  }
  @media ${device.mobileM} {
    li {
      a {
        font-size: 22px;
      }
    }
  }
  @media ${device.tablet} {
    max-width: 50%;
  }
`;
