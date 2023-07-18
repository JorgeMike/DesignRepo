"use client";
import { useState } from "react";
import { AiOutlineHome, AiOutlineMenu } from "react-icons/ai";

export default function Navbar({ style }: { style: Record<string, string> }) {
  const [isOpen, setIsOpen] = useState(false);

  const changeIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={style.navbar}>
      <div className={style.brand_container}>
        <AiOutlineHome /> <span style={{ marginLeft: "7px" }}>Inicio</span>
      </div>

      <span
        onClick={changeIsOpen}
        className={`${style.icon} ${isOpen ? style.icon_open : ""}`}
      >
        <AiOutlineMenu />
      </span>
      <ul
        className={`${style.navbar_items} ${
          isOpen ? `${style.navbar_items_open}` : `${style.navbar_items_close}`
        }`}
      >
        <li className="ps-3">
          <a href="#">Componentes</a>
        </li>
        <li className="ps-3">
          <a href="#">Cards</a>
        </li>
        <li className="ps-3">
          <a href="#">Banners</a>
        </li>
        <li className="ps-3">
          <a href="#">Mas disenos</a>
        </li>
      </ul>
    </nav>
  );
}
