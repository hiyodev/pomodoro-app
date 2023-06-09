import { styled, css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const CardContainer = styled.div`
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
  padding: 20px;
  border-radius: 10px;
  width: 21rem;
  margin: 0 auto;

  ${(props) =>
    props.theme.darkMode &&
    css`
      color: #fff;
      background-color: #2e2e2e;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
    `}
`;

export const TimerMode = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.75fr 1fr;
  padding-bottom: 0.5em;
`;

export const TimerModeItem = styled.div`
  padding: 0.5em 0 0em 0;
  justify-self: ${(props) => props.alignment};
  border-bottom: ${(props) => (props.selected ? "2px solid black" : "none")};
  font-weight: ${(props) => (props.selected ? "bold" : "normal")};
  cursor: ${(props) => (props.selected ? "normal" : "pointer")};

  ${(props) =>
    props.theme.darkMode &&
    props.selected &&
    css`
      border-bottom: 2px solid white;
    `}
`;

export const CardTitle = styled.div`
  font-size: 2rem;
  font-weight: bold;
  padding: 0.2em;
`;

export const ButtonWrapper = styled.div``;

export const Button = styled.button`
  background-color: #333;
  color: #fff;
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
