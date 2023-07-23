import navbarsStyles from "../../styles/Navbars/navbars.module.css";

export default function NavbarOne() {
  return (
    <header id={navbarsStyles.navbar1_header}>
      <nav className={navbarsStyles.navbar1_links}>
        <a href="#">Link</a>
        <a href="#">Link</a>
        <a href="#">Link</a>
        <a href="#">Link</a>
        <a href="#">Link</a>
        <span className={navbarsStyles.navbar1_line}></span>
      </nav>
    </header>
  );
}
