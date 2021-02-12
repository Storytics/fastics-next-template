import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle<any>`
    *,
    *:before,
    *:after {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    body {
      font-family: ${(props) => props.theme.typography.fontFamily};
      background-color: ${(props) => props.theme.colors.background.primary};
    }
`;

export default GlobalStyle;
