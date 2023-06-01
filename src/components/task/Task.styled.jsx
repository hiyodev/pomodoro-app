import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Task = styled.div`
  display: flex;
  border-top: 1px solid #ccc;
  padding: 10px 0;
  min-width: 335px;
`;

export const LeftWrapper = styled.div`
  display: grid;
  align-items: center;
  padding: 0.5em;
  border-left: 2px solid
    ${(props) => (props.selected ? "black" : props.hovered ? "#ccc" : "white")};
`;

export const ContentWrapper = styled.div`
  flex-grow: 1;
`;

export const Title = styled.div`
  text-align: left;
  font-weight: bold;
  text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
`;

export const Description = styled.div`
  width: 300px;
  color: #777;
  margin-top: 5px;
  text-align: left;

  text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const IconButton = styled.button`
  cursor: pointer;
  color: #777;
  font-size: 18px;

  margin-right: ${(props) => props.right_margin};
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 0.5em;
`;

export const TwoButtonWrapper = styled.div``;

export const TickIconButton = styled(FontAwesomeIcon)`
  color: ${(props) => (props.completed ? "black" : "#bfbfbf")};
  cursor: pointer;

  &:hover {
    color: black;
  }
`;

export const AwesomeIcon = styled(FontAwesomeIcon)``;

export const EditWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-left: 2em;
`;

export const EditTitle = styled.input`
  font-weight: bold;
  font-size: 1em;
`;

export const EditDescription = styled.textarea`
  resize: none;
  font-size: 0.8rem;
  margin-top: 0.5em;
`;
