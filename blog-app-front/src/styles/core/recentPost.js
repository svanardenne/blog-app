import styled from "styled-components";
import { colors } from "../colors";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  margin-bottom: 24px;
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
`;
