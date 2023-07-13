import { sunsetBackground, textPrimary } from "@/lib/colors";
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

export const BestSeller = styled.div<{ fontSize: string }>`
  position: absolute;
  top: 1rem;
  right: 1rem;
  padding: 0.5rem 1rem;
  color: ${textPrimary};
  font-weight: bold;
  font-size: ${({ fontSize }) => fontSize};
  border-radius: 0.5rem;
  background-image: ${sunsetBackground};
  background-size: 400% 400%;
  animation: ${movingGradient} 5s ease infinite;
`;
