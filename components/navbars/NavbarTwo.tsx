import navbarsStyles from "../../styles/Navbars/navbars.module.css";

export default function NavbarTwo() {
  return (
    <nav className={navbarsStyles.navbar2}>
      <a href="#">Home</a>
      <a href="#">About</a>
      <a href="#">Blog</a>
      <a href="#">Portefolio</a>
      <a href="#">Contact</a>
      <div
        className={`${navbarsStyles.navbar2_animation} ${navbarsStyles['start-home']}`}
      ></div>
    </nav>
  );
}
