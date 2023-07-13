import { movingGradient } from "@/constants";
import { backgroundPrimary, sunsetBackgroundReverse } from "@/lib/colors";
import { ReactElement } from "react";
import styled, { css } from "styled-components";

type TButton = "button" | "submit" | "reset" | undefined;

interface ButtonProps {
  text?: string;
  size?: string;
  hasoutline?: string;
  icon?: ReactElement;
  isblock?: string;
  type?: TButton;
  onClick?: VoidFunction;
  bgColor?: string;
  textColor?: string;
  isDisabled?: boolean;
}

const Button = ({
  text,
  size,
  bgColor,
  textColor,
  hasoutline,
  icon,
  isblock,
  type,
  isDisabled,
  onClick,
}: ButtonProps) => {
  return (
    <ButtonSt
      size={size}
      $bgColor={bgColor}
      $textColor={textColor}
      hasoutline={hasoutline}
      isblock={isblock}
      onClick={onClick}
      type={type}
      disabled={isDisabled}
      isDisabled={isDisabled}
      text={text}
    >
      <ButtonContainer>
        {icon}
        {text}
      </ButtonContainer>
    </ButtonSt>
  );
};

export default Button;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface IButtonSt {
  size?: string;
  $bgColor?: string;
  $textColor?: string;
  hasoutline?: string;
  isblock?: string;
  isDisabled?: boolean;
  text?: string;
}

export const ButtonSt = styled.button<IButtonSt>`
  border: 0;
  padding: 0.5rem 1.5rem;
  border-radius: 0.5rem;
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  font-weight: 500;
  font-family: "Poppins", sans-serif;
  ${(props) => (props.isDisabled ? `cursor: not-allowed;` : `cursor: pointer;`)}

  svg {
    height: 1.6rem;
  }

  ${(props) =>
    props.text &&
    css`
      svg {
        margin-right: 0.5rem;
      }
    `}

  ${(props) =>
    props.isblock &&
    css`
      display: block;
      width: 100%;
    `}

  ${(props) =>
    props.$bgColor &&
    !props.hasoutline &&
    css`
      background-color: ${props.$bgColor};
      color: ${props.$textColor};
      border: 0.1rem solid ${props.$bgColor};
    `}

  ${(props) =>
    props.$bgColor &&
    props.hasoutline &&
    css`
      background-color: transparent;
      color: ${props.$textColor};
      border: 0.1rem solid ${props.$bgColor};
    `}

  ${(props) =>
    props.size === "s" &&
    css`
      font-size: 0.9rem;
      padding: 0.5rem 1rem;
      svg {
        height: 2rem;
      }

      @media screen and (max-width: 767px) {
        padding: 0.2rem 0.4rem;
      }
    `}

  ${(props) =>
    props.size === "l" &&
    css`
      font-size: 1.6rem;
      padding: 1rem 2rem;
      svg {
        height: 2rem;
      }
    `}

    ${(props) =>
    !props.isDisabled &&
    css`
      &:hover {
        background-image: ${sunsetBackgroundReverse};
        border: 0.1rem solid transparent;
        background-size: 400% 400%;
        animation: ${movingGradient} 5s ease infinite;
        color: ${backgroundPrimary};
      }
    `}

  &:active {
    ${(props) =>
      !props.isDisabled &&
      css`
        opacity: 0.5;
      `}
  }
`;
