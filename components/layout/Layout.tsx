import { useStyle } from "@/src/context/styleContext";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  const style = useStyle()?.style;

  return (
    <>
      <Navbar style={style} />
      <main className={style.main}>{children}</main>
      <Footer style={style} />
    </>
  );
}
