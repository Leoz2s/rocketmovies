import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%
  }

  body {
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
    color: ${({theme}) => theme.COLORS.WHITE_100};

    -webkit-font-smoothing: antialiased;
  }
  
  body, input, button, textarea {
    font-size: 1.6rem;
    font-family: "Roboto Slab", serif;
    font-optical-sizing: auto;

    outline: none;
    border: none; 
  }

  a, button {
    text-decoration: none;
    cursor: pointer;
    transition: filter 0.2s;
  }

  a:hover, button:hover {
    filter: brightness(0.9);
  }
`;