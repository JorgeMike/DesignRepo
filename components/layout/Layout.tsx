import { useStyle } from "@/src/context/styleContext";
import Footer from "./Footer";
import Navbar from "./Navbar";
import CheckRadio from "../checks/CheckRadio";

export default function Layout({ children }: { children: React.ReactNode }) {
  const style = useStyle().style;

  return (
    <>
      <Navbar style={style} />
      <main className={style.main}>
        {children}
        {/* <CheckRadio /> */}
      </main>
      <Footer style={style} />
    </>
  );
}
