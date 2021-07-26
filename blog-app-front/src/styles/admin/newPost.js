import styled from "styled-components";
import { colors } from "../colors";
import { device } from "../device";

export const Form = styled.form`
  max-width: 90%;
  margin: 0 auto 50px;
  @media ${device.laptopS} {
    max-width: 70%;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  color: ${colors.muted};
  label {
    margin-bottom: 5px;
  }
  input {
    outline: none;
    padding: 10px;
    border: 1px solid ${colors.muted};
    border-radius: 0.25em;
  }
  input:focus {
    border: 2px solid lightblue;
  }
  textarea {
    outline: none;
    padding: 10px;
    height: 300px;
    border: 1px solid ${colors.muted};
    border-radius: 0.25em;
  }
  textarea:focus {
    border: 2px solid lightblue;
  }
`;

export const Button = styled.button`
  color: ${colors.offWhite};
  background: ${colors.lightBlue};
  border: 1px solid ${colors.lightBlue};
  border-radius: 0.25em;
  padding: 10px 25px;
  margin-bottom: 24px;
`;

export const CreatingPost = styled.div`
  text-align: center;
`;

export const Warning = styled.div`
  width: 90%;
  margin: 0 auto 16px;
  border-radius: 5px;
  padding: 16px 24px;
  color: ${colors.warningText};
  background: ${colors.warningBG};
  border: 1px solid ${colors.warningBorder};
  @media ${device.laptop} {
    max-width: 70%;
  }
`;
