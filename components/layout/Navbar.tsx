"use client";
import { menuItems } from "@/src/interfaces/menuItems.interface";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineHome, AiOutlineMenu } from "react-icons/ai";

export default function Navbar({ style }: { style: Record<string, string> }) {
  const [isOpen, setIsOpen] = useState(false);

  const changeIsOpen = () => {
    setIsOpen(!isOpen);
  };

  const navbarItems: menuItems[] = [
    { title: "Doc", route: "documentation", icon: <AiOutlineHome /> },
    { title: "Info", route: "info", icon: <AiOutlineHome /> },
    { title: "Version", route: "version", icon: <AiOutlineHome /> },
  ];

  return (
    <nav className={style.navbar}>
      <div className={style.brand_container}>
        <Link href={"/"}>
          <AiOutlineHome size={20} />
        </Link>
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
        {navbarItems.map((item, index) => (
          <li className="ps-3 py-1" key={index}>
            <Link href={item.route}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
