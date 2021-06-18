import { createGlobalStyle } from "styled-components";
import { colors } from "./colors";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap');

* {
  box-sizing: border-box;
  line-height: 1.5;
}

body {
  font-family: 'Roboto', arial, sans-serif;
  background-color: ${colors.offWhite};
}
h1, h2 {
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
}
`;

export default GlobalStyles;
