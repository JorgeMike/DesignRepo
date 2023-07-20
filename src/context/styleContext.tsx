"use client";
import { createContext, useContext, useState } from "react";
import neumorphism from "../../styles/Neumorphism/neumorphism.module.css";
import dark from "../../styles/Dark/dark.module.css";
import minimalist from "../../styles/Minimalist/minimalist.module.css";

type StyleContextType = {
  style: Record<string, string>;
  onChangeStyle: (style: string) => void;
};

export const StyleContext = createContext<StyleContextType>({
  style: {}, // Valor predeterminado para 'style'
  onChangeStyle: () => {}, // Valor predeterminado para 'onChangeStyle'
});

export const useStyle = () => {
  const context = useContext(StyleContext);
  return context;
};

export const StyleProvider = ({ children }: { children: React.ReactNode }) => {
  const [style, setStyle] = useState(neumorphism);

  const onChangeStyle = (style: string) => {
    if (style == "neumorphism") {
      setStyle(neumorphism);
    }
    if (style == "dark") {
      setStyle(dark);
    }
    if (style == "minimalist") {
      setStyle(minimalist);
    }
  };

  return (
    <StyleContext.Provider value={{ style, onChangeStyle }}>
      {children}
    </StyleContext.Provider>
  );
};
