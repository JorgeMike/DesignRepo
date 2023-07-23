import navbarsStyles from "../../styles/Navbars/navbars.module.css";

export default function NavbarThree() {
  return (
    <nav className={navbarsStyles.navbar3}>
      <ul>
        <li>
          <a href="#">Shoes</a>
        </li>
        <li>
          <a href="#">Sandals</a>
        </li>
        <li>
          <a href="#">Shirts</a>
        </li>
        <li>
          <a href="#">Jackets</a>
        </li>
      </ul>
    </nav>
  );
}
