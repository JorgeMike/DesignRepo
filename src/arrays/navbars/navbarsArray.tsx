import NavbarOne from "@/components/navbars/NavbarOne";
import NavbarThree from "@/components/navbars/NavbarThree";
import NavbarTwo from "@/components/navbars/NavbarTwo";
import { componentInfo } from "@/src/interfaces/componetInfo.interface";

export const navbars: componentInfo[] = [
  {
    author: "JorgeMike",
    component: <NavbarOne />,
    location: "/components/Banners/BannerOne.tsx",
    name: "Navbar 1",
    source: "https://codepen.io/RockStarwind/pen/WmGwwp",
    tags: ["hover effect", "dark"],
  },
  {
    author: "JorgeMike",
    component: <NavbarTwo />,
    location: "/components/Banners/BannerOne.tsx",
    name: "Navbar 2",
    source: "https://codepen.io/Patak/pen/QpLpOV/",
    tags: ["hover effect", "dark", "color"],
  },
  {
    author: "JorgeMike",
    component: <NavbarThree />,
    location: "/components/Banners/BannerOne.tsx",
    name: "Navbar 3",
    source: "https://codepen.io/kazzkiq/pen/qEMjaw/",
    tags: ["hover effect", "dark", "color"],
  },
];
