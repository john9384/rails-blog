import { Navbar } from "../Navbar";
import styles from "./PageLayout.module.css";
export function PageLayout({ children }) {
  return (
    <>
      <Navbar />
      <main className={styles.container}>
        {children}
      </main>
    </>
  );
}