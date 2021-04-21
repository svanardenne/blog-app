import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap');

* {
  box-sizing: border-box;
}

body {
  font-family: 'Roboto', arial, sans-serif;
}
h1, h2 {
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
}
`;

export default GlobalStyles;
