import styled from "styled-components";
import { colors } from "../colors";
import { device } from "../device";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  margin-bottom: 24px;
  cursor: pointer;
  div {
    p:first-child {
      font-size: 16px;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    p:last-child {
      font-size: 14px;
      color: ${colors.muted};
    }
  }
  @media ${device.desktopS} {
    div {
      p:first-child {
        font-size: 18px;
      }
      p:last-child {
        font-size: 16px;
      }
    }
  }
`;
