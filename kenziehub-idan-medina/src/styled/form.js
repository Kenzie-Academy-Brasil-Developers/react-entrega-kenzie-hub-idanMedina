import styled from "styled-components";
import { keyframes } from "styled-components";
import { ModalScreen } from "./modal";

export const Formulary = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.375rem;
  justify-content: center;
  width: 23.125rem;
  padding: 2.625rem 1.375rem;
  background: var(--grey-3);
  font-family: inherit;
  box-shadow: 0px 0.25rem 2.5rem -0.625rem rgba(0, 0, 0, 0.25);
  border-radius: 0.25rem;
  margin: 0 auto;
`;

export const MoveModal = keyframes`
0%{transform: translateY(-70%);
    opacity: 0;
    }
    100%{
        transform: translateY(0);
        opacity:1
    }
`;

export const ModalHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1.25rem;
  background: var(--grey-2);
  width: 100%;
  z-index: 20;
  border-radius: 0.25rem 0.25rem 0 0;
`;
export const ModalDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 23rem;
  gap: 1.375rem;
  z-index: 20;
  background: var(--grey-3);
  padding: 1.5rem 1.0625rem 2rem 1.375rem;

  @media (max-width: 900px) {
    max-width: 100%;
  }
`;
export const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
  z-index: 20;
  border-radius: 0.25rem;
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  animation: ${MoveModal} 1s ease;

  @media (max-width: 900px) {
    max-width: 90%;
  }
`;

export const FormDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
  gap: 1.33rem;
`;

export const DivNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 3rem auto;
`;
