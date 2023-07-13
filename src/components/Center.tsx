import { ReactElement } from "react";
import styled from "styled-components";

interface ICenter {
  children: ReactElement;
}

const Center = ({ children }: ICenter) => {
  return <ContainerSt>{children}</ContainerSt>;
};

export default Center;

const ContainerSt = styled.div`
  max-width: 100rem;
  margin: 0 auto;
  padding: 0 2rem;
`;
