import styled from "styled-components";
import { keyframes } from "styled-components";

export const FadeModal = keyframes`
0% {opacity:0}
100% {opacity: 1}
`;

export const ModalScreen = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: var(--grey-opacity-3);
  top: 0;
  margin: 0 auto;
  z-index: 2;
  animation: ${FadeModal} 1s linear;
`;
