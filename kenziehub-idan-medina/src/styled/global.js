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
    --grey-opacity-3: #21252980; 
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

    @media (max-width: 900px) {
      padding: 0 2rem 2rem 2rem;
    }
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
    width: 100vw;
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

  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: var(--grey-3);
    margin: 0 auto;
    padding: 1.4375rem 1.625rem 1.5rem 1.375rem;
    max-width: 48.75rem;
    border-radius: 0.25rem;
    gap: 1rem;
  }

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 3.0625rem;
    padding: 0.8125rem 1.125rem 0.6875rem 1.375rem; 
    background: var(--grey-4);
    border-radius: 0.25rem;
    &:hover{
      background: var(--grey-2);
    }
  }

  #logo {
    margin: 20vh auto 5vh 28%;
  }
`;
