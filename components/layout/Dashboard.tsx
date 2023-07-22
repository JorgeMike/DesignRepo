"use client";
import Layout from "@/components/layout/Layout";
import { useStyle } from "@/src/context/styleContext";
import { PiCards, PiFlagBanner, PiImages } from "react-icons/pi";
import { RxButton } from "react-icons/rx";
import { TbLayoutNavbar, TbCarouselHorizontal } from "react-icons/tb";
import { AiOutlineForm } from "react-icons/ai";
import { BiLogIn } from "react-icons/bi";
import Link from "next/link";
import { menuItems } from "@/src/interfaces/menuItems.interface";

export default function Dashboard({ children }: { children: React.ReactNode }) {
  const { style } = useStyle();
  const menuItems: menuItems[] = [
    { title: "Cards", route: "cards", icon: <PiCards /> },
    { title: "Buttons", route: "buttons", icon: <RxButton /> },
    { title: "Banners", route: "banners", icon: <PiFlagBanner /> },
    { title: "NavBars", route: "navbars", icon: <TbLayoutNavbar /> },
    { title: "Images", route: "images", icon: <PiImages /> },
    { title: "Carousels", route: "carousels", icon: <TbCarouselHorizontal /> },
    { title: "Log In", route: "login", icon: <BiLogIn /> },
    { title: "Forms ", route: "forms", icon: <AiOutlineForm /> },
  ];
  return (
    <div className={`container-fluid ${style.dashboard}`}>
      <ul className={`${style.sidebar} ${style.external_section}`}>
        {menuItems.map((item, index) => (
          <li key={index}>
            <Link href={item.route}>
              {item.icon}
              <p>{item.title}</p>
            </Link>
          </li>
        ))}
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
