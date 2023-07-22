"use client";
import BannerStyleOne from "@/components/Banners/BannerStyleOne";
import ScrollHorizontal from "@/components/ScrollHorizontal/ScrollHorizontal";
import ScrollItem from "@/components/ScrollHorizontal/ScrollItem";
import SectionsMenu from "@/components/SectionsMenu/SectionsMenu";
import Layout from "@/components/layout/Layout";
import { menuItems } from "@/src/interfaces/menuItems.interface";
import { recentlyAdded } from "../src/arrays/recentlyAdded/recentlyAddedArray";
import { PiCards, PiFlagBanner, PiImages } from "react-icons/pi";
import { RxButton } from "react-icons/rx";
import { TbCarouselHorizontal, TbLayoutNavbar } from "react-icons/tb";
import { AiOutlineForm } from "react-icons/ai";
import { BiLogIn } from "react-icons/bi";

export default function page() {
  const info = {
    title: "Design repository",
    subTitle: "by: JorgeMike",
  };
  const menuItems: menuItems[] = [
    { title: "Cards", route: "cards", icon: <PiCards /> },
    { title: "Buttons", route: "buttons", icon: <RxButton /> },
    { title: "Banners", route: "banners", icon: <PiFlagBanner /> },
    { title: "NavBars", route: "navbars", icon: <TbLayoutNavbar /> },
    { title: "Footers", route: "footers", icon: <PiCards /> },
    { title: "Color palettes", route: "color_palettes", icon: <PiCards /> },
    { title: "Tables", route: "tables", icon: <PiCards /> },
    { title: "Images", route: "images", icon: <PiImages /> },
    { title: "Animations", route: "animations", icon: <PiCards /> },
    { title: "Carousels", route: "carousels", icon: <TbCarouselHorizontal /> },
    { title: "Log In", route: "login", icon: <BiLogIn /> },
    { title: "Forms ", route: "forms", icon: <AiOutlineForm /> },
  ];

  return (
    <Layout>
      <BannerStyleOne info={info} />
      <SectionsMenu menuItems={menuItems} />
      <ScrollHorizontal title={"Recently Added:"}>
        {recentlyAdded.reverse().map((item, index) => (
          <ScrollItem info={item} key={index} />
        ))}
      </ScrollHorizontal>
    </Layout>
  );
}
