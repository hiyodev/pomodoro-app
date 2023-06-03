import { createGlobalStyle, css } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #f2f2f2;
    color: #333;
    font-family: "Roboto", sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;

  ${(props) =>
    props.theme.darkMode &&
    css`
      color: #fff;
      background-color: #222;
    `}
  }
`;

export default GlobalStyle;
