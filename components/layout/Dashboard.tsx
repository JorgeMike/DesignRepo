"use client";
import Layout from "@/components/layout/Layout";
import { useStyle } from "@/src/context/styleContext";
import { PiCards, PiFlagBanner, PiImages } from "react-icons/pi";
import { RxButton } from "react-icons/rx";
import { TbLayoutNavbar, TbCarouselHorizontal } from "react-icons/tb";
import { AiOutlineForm } from "react-icons/ai";
import { BiLogIn } from "react-icons/bi";

export default function Dashboard({ children }: { children: React.ReactNode }) {
  const { style } = useStyle();
  return (
    <div className={`container-fluid ${style.dashboard}`}>
      <ul className={`${style.sidebar} ${style.external_section}`}>
        <li>
          <a href="">
            <PiCards />
            <p>Cards</p>
          </a>
        </li>
        <li>
          <a href="">
            <PiFlagBanner />
            <p>Banners</p>
          </a>
        </li>
        <li>
          <a href="">
            <RxButton />
            <p>Buttons</p>
          </a>
        </li>
        <li>
          <a href="">
            <PiImages />
            <p>Images</p>
          </a>{" "}
        </li>
        <li>
          <a href="">
            <TbLayoutNavbar />
            <p>Navbar</p>
          </a>{" "}
        </li>
        <li>
          <a href="">
            <TbCarouselHorizontal />
            <p>Carousels</p>
          </a>{" "}
        </li>
        <li>
          <a href="">
            <AiOutlineForm />
            <p>Forms</p>
          </a>{" "}
        </li>
        <li>
          <a href="">
            <BiLogIn />
            <p>Log in</p>
          </a>{" "}
        </li>
      </ul>
      <div className={`${style.external_section} ${style.dashboard_content}`}>
        <h2>Cards</h2>
        <div className="container-fluid">
          <div className="row">{children}</div>
        </div>
      </div>
    </div>
  );
}
