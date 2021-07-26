import { API } from "../../config";
import { Wrapper, ImageContainer } from "../../styles/core/imageItem";

const ImageItem = ({ item }) => {
  return (
    <Wrapper>
      <ImageContainer>
        <img src={`${API}/image/${item._id}`} />
      </ImageContainer>
      <p>{item.image_caption}</p>
    </Wrapper>
  );
};

export default ImageItem;
