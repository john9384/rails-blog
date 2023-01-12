import { Outlet } from "react-router-dom";
import { Navbar } from "../Navbar";
import styles from "./PageLayout.module.css";
export function PageLayout() {
  return (
    <>
      <Navbar />
      <main className={styles.container}>
        <Outlet />
      </main>
    </>
  );
}