import CardOne from "@/components/Cards/CardOne";
import CardTwo from "@/components/Cards/CardTwo";
import CardThree from "@/components/Cards/CardThree";
import { componentInfo } from "@/src/interfaces/componetInfo.interface";
import CardFour from "@/components/Cards/CardFour";
import CardFive from "@/components/Cards/CardFive";

export const cards: componentInfo[] = [
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
    tags: ["hover effect", "pointed", "blur", "responsive"],
  },
  {
    name: "Card 4",
    author: "JorgeMike",
    location: "/components/Cards/CardFour.tsx",
    source: "https://codepen.io/marcell0lopes/pen/YzLKxpR",
    component: <CardFour />,
    tags: ["rounded", "blur", "glass effect", "with buttons"],
  },
  {
    name: "Card 5",
    author: "JorgeMike",
    location: "/components/Cards/CardFour.tsx",
    source: "https://codepen.io/jepooley/pen/NWYryap",
    component: <CardFive />,
    tags: ["hover effect", "fade", "glass effect", "informative"],
  },
];
