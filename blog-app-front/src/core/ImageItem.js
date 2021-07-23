import { API } from "../config";
import styled from "styled-components";

const ImageItem = ({ item }) => {
  return (
    <div>
      <div>
        <img src={`${API}/image/${item._id}`} />
      </div>
      <p>{item.image_caption}</p>
    </div>
  );
};

export default ImageItem;
