import Link from "next/link";
import styles from "../../styles/layout/layout.module.css";

export default function Footer() {
  return (
    <footer className={`${styles.footer} container-fluid`}>
      <div className={`${styles.header_footer}`}>
        <div>Desarrollo web</div>
        <div>ICONOS</div>
      </div>

      <div className="row">
        <div className="col">
          <h4>Redes sociales</h4>
          <ul>
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
            <li>
              <a href="#">LinkedIn</a>
            </li>
          </ul>
        </div>
        <div className="col">
          <h4>Secciones interesantes</h4>
          <ul>
            <li>
              <Link href={"/cards"}>Cards</Link>
            </li>
            <li>
              <Link href={"/carousels"}>carousels</Link>
            </li>
            <li>
              <Link href={"/banners"}>Banners</Link>
            </li>
          </ul>
        </div>
        <div className="col">
          <h4>Mas informacion</h4>
          <ul>
            <li>
              <a href="#">Info 1</a>
            </li>
            <li>
              <a href="#">Info 2</a>
            </li>
            <li>
              <a href="#">Info 3</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
