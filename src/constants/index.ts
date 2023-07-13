import styled, { keyframes } from "styled-components";

export const movingGradient = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const reveal = keyframes`
 /* from {
    transform: translateY(2rem);
  } */
  to {
    opacity: 1;
    transform: none;
  }
`;

export const FadeInDiv = styled.div`
  opacity: 0;
  animation: ${reveal} 1s forwards ${({ theme }) => theme.d};
  margin-top: 9rem;
`;
