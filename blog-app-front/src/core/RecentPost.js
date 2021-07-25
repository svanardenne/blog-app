import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors } from "../styles/colors";
import moment from "moment";
import ShowBackgroundImage from "./ShowBackgroundImage";
import { device } from "../styles/device";

const Wrapper = styled.div`
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

const RecentPost = ({ item, i }) => {
  return (
    <Wrapper>
      <div>
        <ShowBackgroundImage
          item={item}
          url="post"
          width="110px"
          height="110px"
        />
      </div>

      <div>
        <p>{item.title}</p>
        <p>{moment(item.created_at).format("MMM Do, YYYY")}</p>
      </div>
    </Wrapper>
  );
};

export default RecentPost;
