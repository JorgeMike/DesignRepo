import Link from "next/link";

export default function Footer({ style }: { style: Record<string, string> }) {
  return (
    <footer className={`${style.footer} container-fluid`}>
      <div className={`${style.header_footer}`}>
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
