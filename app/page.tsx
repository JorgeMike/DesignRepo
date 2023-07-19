"use client";
import BannerStyleOne from "@/components/Banners/BannerStyleOne";
import ScrollHorizontal from "@/components/ScrollHorizontal/ScrollHorizontal";
import ScrollItem from "@/components/ScrollHorizontal/ScrollItem";
import SectionsMenu from "@/components/SectionsMenu/SectionsMenu";
import CheckRadio from "@/components/checks/CheckRadio";
import Layout from "@/components/layout/Layout";
import { menuItems } from "@/src/interfaces/menuItems.interface";

export default function page() {
  const info = {
    title: "Repositorio de diseños",
    subTitle: "by: JorgeMike",
  };
  const menuItems: menuItems[] = [
    { title: "Cards", route: "cards" },
    { title: "Buttons", route: "buttons" },
    { title: "Banners", route: "banners" },
    { title: "NavBars", route: "navbars" },
    { title: "Footers", route: "footers" },
    { title: "Color palettes", route: "color_palettes" },
    { title: "Tables", route: "tables" },
    { title: "Images", route: "images" },
    { title: "Animations", route: "animations" },
    { title: "Carousels", route: "carousels" },
    { title: "LogIn/Registers", route: "login_registers" },
    { title: "Forms ", route: "forms" },
  ];

  return (
    <Layout>
      <BannerStyleOne info={info} />
      <SectionsMenu menuItems={menuItems} />
      <ScrollHorizontal title={"Recently Added:"}>
        <ScrollItem
          name="Theme Changed"
          author="JorgeMike"
          source="@CSScoder"
          location="cards"
          component={<CheckRadio />}
        />
        <ScrollItem
          name="Theme Changed"
          author="JorgeMike"
          source="@CSScoder"
          location="cards"
          component={<CheckRadio />}
        />
        <ScrollItem
          name="Theme Changed"
          author="JorgeMike"
          source="@CSScoder"
          location="cards"
          component={<CheckRadio />}
        />
      </ScrollHorizontal>
    </Layout>
  );
}
