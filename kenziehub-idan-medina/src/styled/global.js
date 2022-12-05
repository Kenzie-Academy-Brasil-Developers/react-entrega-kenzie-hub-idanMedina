import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    margin:0;
    padding: 0;
    border: 0;
    outline:0;
    box-sizing: border-box; 
  }

  :root {
    --color-primary: #FF577F;
    --color-primary-Focus: #FF427F;
    --color-primary-Negative: #59323F;
    --color-white: #FFFFFF;
    --grey-0: #F8F9FA;
    --grey-1: #868E96;
    --grey-2: #343B41;
    --grey-3: #212529;
    --grey-4: #121214;
    --sucess: #3FE864;
    --negative: #E83F5B;
  }

  body {
    display: flex;
    align-items: center;
    justify-content: center;
    list-style: none;
    font-family: "Inter", sans-serif;
    box-sizing: border-box;
    background: var(--grey-4);
    padding-bottom: 2rem;
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    padding: 1.75rem 0;
    max-width: 48.75rem;
  }

  section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    padding: 2.75rem 0;
    max-width: 48.75rem;
  }

  hr{
    background: var(--grey-3);
    height: 1px;
    width: 100vw
  }

  button {
    width: 100%;
    font-family: inherit;
    border-radius: 0.25rem;
    cursor: pointer;
  }

  label {
    color: var(--grey-0);
    font-weight: 400;
    font-size: 12px;
    font-family: inherit;
  }

  #logo {
    margin: 20vh auto 5vh 28%;
  }
`;
