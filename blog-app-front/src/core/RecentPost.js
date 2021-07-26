import moment from "moment";
import ShowBackgroundImage from "./ShowBackgroundImage";
import { Wrapper } from "../styles/core/recentPost";

const RecentPost = ({ item, handleLink, i }) => {
  return (
    <Wrapper onClick={(e) => handleLink()}>
      <div>
        <ShowBackgroundImage
          item={item}
          url="post"
          width="110px"
          height="110px"
          orientation="center center"
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
