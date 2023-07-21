import ButtonOne from "@/components/Buttons/ButtonOne";
import ButtonTwo from "@/components/Buttons/ButtonTwo";
import { componentInfo } from "@/src/interfaces/componetInfo.interface";

export const buttons: componentInfo[] = [
  {
    name: "Button 1",
    author: "JorgeMike",
    location: "/components/Buttons/ButtonOne.tsx",
    source: "https://codepen.io/ash_creator/pen/oNyNbNO",
    component: <ButtonOne />,
    tags: ["hover effect", "rounded"],
  },
  {
    name: "Button 2",
    author: "JorgeMike",
    location: "/components/Buttons/ButtonOne.tsx",
    source: "https://codepen.io/katarzynamarta/pen/rNdbbVq",
    component: <ButtonTwo />,
    tags: ["hover effect", "rounded"],
  },
];
