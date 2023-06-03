import styled, { keyframes, css } from "styled-components";

export const TimerContainer = styled.div`
  margin-bottom: 20px;
`;

export const TimerDisplay = styled.div`
  font-size: 60px;
`;

export const TimerStatus = styled.div`
  font-size: 20px;
  color: #666;

  ${(props) =>
    props.theme.darkMode &&
    css`
      color: #bebebe;
    `}
`;

export const CircleContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const GlowingAnimation = keyframes`
  0% {
    box-shadow: 0 0 2px blue;
  }
  50% {
    box-shadow: 0 0 10px blue;
  }
  100% {
    box-shadow: 0 0 2px blue;
  }
`;

export const CircleItem = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${(props) => (props.done ? "black" : "gray")};
  margin: 0 0.5em 0.5em 0.5em;
  ${(props) =>
    props.active &&
    !props.done &&
    css`
      animation: ${GlowingAnimation} 2s infinite;
    `}
`;
