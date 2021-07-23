import { API } from "../config";
import styled from "styled-components";
import { colors } from "../styles/colors";
import { device } from "../styles/device";

const Wrapper = styled.div`
  margin: 0 24px 24px 24px;
  p {
    color: ${colors.offWhite};
    margin: 0;
    line-height: 1.5;
    font-size: 16px;
  }
  @media ${device.laptopS} {
    display: flex;
    flex-direction: row-reverse;
    gap: 48px;
    p {
      flex-basis: 30%;
    }
    div {
      flex-basis: 70%;
    }
  }
  @media ${device.laptopL} {
    p {
      font-size: 18px;
    }
  }
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  margin-bottom: 5px;
  img {
    width: 100%;
    height: auto;
  }
`;

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
