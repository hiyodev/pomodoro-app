import { styled } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const CardContainer = styled.div`
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  border-radius: 10px;
  max-width: 335px; /* Updated width */
  margin: 0 auto;
`;

export const ButtonWrapper = styled.div``;

export const Button = styled.button`
  background-color: #333;
  color: #fff;
  border: none;
  padding: 8px 16px;
  margin-right: 10px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #555;
  }
`;

export const StartStopButton = styled(Button)`
  width: 4.2rem;
`;

export const IconButton = styled(Button)`
  background-color: #333;
  margin-right: ${(props) => (props.right_margin ? props.right_margin : 0)};

  &:hover {
    background-color: #777;
  }
`;

export const SaveButton = styled.button`
  background-color: #555;

  &:hover {
    background-color: #777;
  }
`;

export const ThreeButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 0.5em;
`;

export const TwoButtonWrapper = styled.div``;

export const AwesomeIcon = styled(FontAwesomeIcon)``;

export const EditWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 2em;
`;

export const EditTitle = styled.input`
  font-weight: bold;
  font-size: 1em;
  border: 1px solid grey;
`;

export const EditDescription = styled.textarea`
  resize: none;
  font-size: 0.8rem;
  margin-top: 0.5em;
`;

export const EditBorder = styled.div`
  border-top: 1px dotted #777;
  padding: 0.25em 0 0.5em 0;
`;
