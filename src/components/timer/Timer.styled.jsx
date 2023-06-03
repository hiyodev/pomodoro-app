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
    box-shadow: 0 0 2px black;
  }
  50% {
    box-shadow: 0 0 10px black;
  }
  100% {
    box-shadow: 0 0 2px black;
  }
`;

const GlowingAnimationDark = keyframes`
  0% {
    box-shadow: 0 0 2px white;
  }
  50% {
    box-shadow: 0 0 10px white;
  }
  100% {
    box-shadow: 0 0 2px white;
  }
`;

export const CircleItem = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${(props) =>
    props.done ? (props.theme.darkMode ? "white" : "black") : "grey"};
  margin: 0 0.5em 0.5em 0.5em;

  ${(props) => {
    if (props.active && !props.done && !props.theme.darkMode) {
      return css`
        animation: ${GlowingAnimation} 2s infinite;
      `;
    } else if (props.active && !props.done && props.theme.darkMode) {
      return css`
        animation: ${GlowingAnimationDark} 2s infinite;
      `;
    }
  }}
`;
