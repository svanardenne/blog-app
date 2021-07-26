import styled from "styled-components";
import { colors } from "../colors";
import { device } from "../device";

export const Form = styled.form`
  width: 90%;
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
`;
export const Warning = styled.div`
  width: 90%;
  margin: 0 auto 16px;
  border-radius: 5px;
  padding: 16px 24px;
  color: ${colors.warningText};
  background: ${colors.warningBG};
  border: 1px solid ${colors.warningBorder};
  @media ${device.laptopS} {
    max-width: 70%;
  }
`;
export const Success = styled.div`
  width: 90%;
  margin: 0 auto 16px;
  border-radius: 5px;
  padding: 16px 24px;
  color: ${colors.successText};
  background: ${colors.successBG};
  border: 1px solid ${colors.successBorder};
  @media ${device.laptopS} {
    max-width: 70%;
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
