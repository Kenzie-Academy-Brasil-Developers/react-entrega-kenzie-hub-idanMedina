import styled from "styled-components";
import { BsPlus } from "react-icons/bs";
import { FiTrash2 } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";

export const Plus = styled(BsPlus)`
  color: var(--color-white);
  cursor: pointer;
  transform: scale(2);
`;
export const Trash = styled(FiTrash2)`
  color: var(--color-white);
  cursor: pointer;
`;
export const Close = styled(AiOutlineClose)`
  color: var(--grey-1);
  cursor: pointer;
`;
export const DivIcon = styled.div`
  display: flex;
  gap: 1.5625rem;
`;
