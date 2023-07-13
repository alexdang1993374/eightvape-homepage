"use client";

import Featured from "@/components/Featured";
import Navbar from "@/components/Navbar";
import NewArrivals from "@/components/NewArrivals";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className={styles.main}>
        <Featured />

        <NewArrivals />
      </main>
    </>
  );
}
