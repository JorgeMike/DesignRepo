"use client";
import { useState } from "react";
import styles from "../../styles/layout/layout.module.css";
import { AiOutlineHome, AiOutlineMenu } from "react-icons/ai";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const changeIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.brand_container}>
        <AiOutlineHome /> <span style={{ marginLeft: "7px" }}>Inicio</span>
      </div>

      <span
        onClick={changeIsOpen}
        className={`${styles.icon} ${isOpen ? styles.icon_open : ""}`}
      >
        <AiOutlineMenu />
      </span>
      <ul
        className={`${styles.navbar_items} ${
          isOpen
            ? `${styles.navbar_items_open}`
            : `${styles.navbar_items_close}`
        }`}
      >
        <li className="ms-3">
          <a href="#">Componentes</a>
        </li>
        <li className="ms-3">
          <a href="#">Cards</a>
        </li>
        <li className="ms-3">
          <a href="#">Banners</a>
        </li>
        <li className="ms-3">
          <a href="#">Mas disenos</a>
        </li>
      </ul>
    </nav>
  );
}
