import styled from "styled-components";
import { Link } from "react-router-dom";

export const LoginBtn = styled.button`
  padding: 0 1.375rem;
  height: 3rem;
  font-weight: 500;
  font-size: 1rem;
  color: var(--color-white);
  background: var(--color-primary);
  border: 1.2px solid var(--color-primary);
  margin-bottom: 2rem;
  &:hover {
    background: var(--color-primary-Focus);
  }
`;

export const RegisterLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-family: inherit;
  border-radius: 0.25rem;
  cursor: pointer;
  padding: 0 1.375rem;
  height: 3rem;
  font-weight: 500;
  font-size: 1rem;
  color: var(--color-white);
  text-decoration: none;
  background: var(--color-primary-Negative);
  border: 1.2px solid var(--color-primary-Negative);
  &:hover {
    filter: brightness(1.2);
  }
`;

export const RegisterBtn = styled.button`
  padding: 0 1.375rem;
  height: 3rem;
  font-weight: 500;
  font-size: 1rem;
  color: var(--color-white);
  background: var(--color-primary-Negative);
  border: 1.2px solid var(--color-primary-Negative);
  &:hover {
    filter: brightness(1.2);
  }
`;

export const NavLink = styled(Link)`
display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  font-family: inherit;
  text-decoration: none;
  border-radius: 0.25rem;
  cursor: pointer;
  padding: 0 1rem;
  height: 2rem;
  font-weight: 600;
  font-size: 0.625rem;
  color: var(--grey-0);
  background: var(--grey-3);
  &:hover {
    background: var(--grey-2);
  }
`;
export const NavBtn = styled.button`
  padding: 0 1rem;
  width: auto;
  height: 2rem;
  font-weight: 600;
  font-size: 0.625rem;
  color: var(--grey-0);
  background: var(--grey-3);
  &:hover {
    background: var(--grey-2);
  }
`