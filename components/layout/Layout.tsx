import Footer from "./Footer";
import Navbar from "./Navbar";
import styles from "../../styles/layout/layout.module.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
}
