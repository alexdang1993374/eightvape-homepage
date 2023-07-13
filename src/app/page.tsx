"use client";

import Navbar from "@/components/Navbar";
import styled from "styled-components";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className={styles.main}>
        <StyledDiv>Eight Vape</StyledDiv>
      </main>
    </>
  );
}

const StyledDiv = styled.div`
  font-size: 3rem;
`;
