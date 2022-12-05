import styled from "styled-components";

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
