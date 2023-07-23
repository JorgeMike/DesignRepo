import { PiFacebookLogo, PiInstagramLogo, PiTwitterLogo } from "react-icons/pi";

export default function Footer({ style }: { style: Record<string, string> }) {
  return (
    <footer className={`${style.footer} container-fluid`}>
      <div className={`${style.header_footer}`}>
        <h6>Repositorio de disenos</h6>
        <h6>V 1.0.4</h6>
      </div>
      <div className={style.header_content}>
        <div className="d-flex h-100">
          <p>Theme 1</p>
          <p>Theme 2</p>
          <p>Theme 3</p>
        </div>
        <div className={style.icons_container}>
          <PiFacebookLogo size={50} className="mx-3" />
          <PiInstagramLogo size={50} className="mx-3" />
          <PiTwitterLogo size={50} className="mx-3" />
        </div>
        <div>© 2023 Todos los derechos reservados.</div>
      </div>
      {/*       <div className="row">
        <div className="col">
          <div className="row">
            <p>Theme 1</p>
            <p>Theme 2</p>
            <p>Theme 3</p>
          </div>
        </div>
        <div className="col">
          <PiFacebookLogoThin />
          <PiInstagramLogoThin />
          <PiTwitterLogoThin />
        </div>
        <div className="col">© 2023 Todos los derechos reservados.</div>
      </div> */}
    </footer>
  );
}
