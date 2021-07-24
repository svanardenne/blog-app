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
  p:first-child {
    font-size: 16px;
  }
  p:last-child {
    font-size: 14px;
    color: ${colors.muted};
  }
`;

const RecentPost = ({ item, i }) => {
  return (
    <Wrapper>
      <ShowBackgroundImage
        item={item}
        url="post"
        width="110px"
        height="110px"
      />
      <div>
        <p>{item.title}</p>
        <p>{moment(item.created_at).format("MMM Do, YYYY")}</p>
      </div>
    </Wrapper>
  );
};

export default RecentPost;
