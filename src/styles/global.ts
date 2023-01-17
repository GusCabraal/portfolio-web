import { createGlobalStyle } from "styled-components";
import img from '../../src/assets/backgroundBody.jpg'

export const GlobalStyle = createGlobalStyle`
:root {
    --background: #555555;

    --red: #3b0202;
    --blue: #5429cc;
    --green: #33cc95;

    --text-title: #6b769c;
    --text-body: #0d8054;

    --shape: #fff;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  //font-size por default: 16px (Desktop)

  html {
    @media (max-width: 1080px){
      font-size: 93.75%; // 15px
    }
    @media (max-width: 720px){
      font-size: 87.5%; // 14px
    }
  }
  
  body {
    background-image: url(${img});
    width: 100vw;
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled]{
    opacity:0.6;
    cursor:not-allowed;
  }
`;