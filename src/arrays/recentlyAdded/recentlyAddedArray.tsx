import CardOne from "@/components/Cards/CardOne";
import CardThree from "@/components/Cards/CardThree";
import CardTwo from "@/components/Cards/CardTwo";
import CheckRadio from "@/components/checks/CheckRadio";
import { componentInfo } from "@/src/interfaces/componetInfo.interface";

export const recentlyAdded: componentInfo[] = [
  {
    name: "Card 1",
    author: "JorgeMike",
    location: "/components/Cards/CardOne.tsx",
    source: "https://codepen.io/t_afif/pen/PoBQRmj",
    component: <CardOne />,
    tags: ["hover effect", "rounded", "decorative"],
  },
  {
    name: "Card 2",
    author: "JorgeMike",
    location: "/components/Cards/CardTwo.tsx",
    source: "https://codepen.io/choogoor/pen/RwBKZey",
    component: <CardTwo />,
    tags: ["hover effect", "pointed", "informative", "decorative"],
  },
  {
    name: "Card 3",
    author: "JorgeMike",
    location: "/components/Cards/CardThree.tsx",
    source: "https://codepen.io/jh3y/pen/NWMGxdL?editors=1100",
    component: <CardThree />,
    tags: ["hover effect", "pointed", "blur"],
  },
];
