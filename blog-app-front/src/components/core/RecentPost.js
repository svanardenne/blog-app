// main imports
import moment from "moment";
import ShowBackgroundImage from "./ShowBackgroundImage";
import { Wrapper } from "../../styles/core/recentPost";

const RecentPost = ({ item, handleLink, i }) => {
  const image = () => (
    <div>
      <ShowBackgroundImage
        item={item}
        url="post"
        width="110px"
        height="110px"
        orientation="center center"
      />
    </div>
  );

  const content = () => (
    <div>
      <p>{item.title}</p>
      <p>{moment(item.created_at).format("MMM Do, YYYY")}</p>
    </div>
  );

  return (
    <Wrapper onClick={(e) => handleLink()}>
      {image()}
      {content()}
    </Wrapper>
  );
};

export default RecentPost;
