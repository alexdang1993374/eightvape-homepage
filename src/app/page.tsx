"use client";

import styled from "styled-components";

import Featured from "@/components/Featured";
import Navbar from "@/components/Navbar";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className={styles.main}>
        <Featured />
      </main>
    </>
  );
}
