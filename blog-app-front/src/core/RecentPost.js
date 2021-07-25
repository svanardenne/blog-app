import moment from "moment";
import ShowBackgroundImage from "./ShowBackgroundImage";
import { Wrapper } from "../styles/core/recentPost";

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
