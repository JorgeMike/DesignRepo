import Image from "next/image";
import perfil from "../../public/images/perfil.png";
import {
  AiOutlinePhone,
  AiOutlineMail,
  AiOutlineLinkedin,
  AiOutlineCheckCircle,
  AiOutlineTeam,
} from "react-icons/ai";
import { FaTasks } from "react-icons/fa";
import { useStyle } from "@/src/context/styleContext";

export default function Curriculum() {
  const style = useStyle()?.style;

  return (
    <>
      <div className={`${style.external_section} container`}>
        <div className="row">
          <div className="col-xs-12 col-sm-6 d-flex justify-content-center align-items-center my-3">
            <Image
              src={perfil}
              width={200}
              height={200}
              alt="Foto de presentacion"
            />
          </div>
          <div className="col d-flex justify-content-center align-items-center my-3">
            <div>
              <h1 className={`${style.title}`}>Jorge Miguel Alvarado Reyes</h1>
              <h6 className={`${style.subtitle}`}>Desarrollador web jr</h6>
            </div>
          </div>
        </div>
      </div>
      <div className={`${style.external_section} container mt-4`}>
        <h4 className={`${style.title} pt-3 ps-3`}>Informacion de contacto:</h4>
        <div className={`row py-3 text-center ${style.text}`}>
          <div className="col">
            <AiOutlinePhone size={25} className="mb-2" />
            <p>5546951819</p>
          </div>
          <div className="col">
            <AiOutlineMail size={25} className="mb-2" />
            <p>alvaradojr2001@gmail.com</p>
          </div>
          <div className="col">
            <AiOutlineLinkedin size={25} className="mb-2" />
            <p>
              https://www.linkedin.com/in/jorge-miguel-alvarado-reyes-0bb17b218/
            </p>
          </div>
        </div>
      </div>
      <div className={`${style.inner_section} container mt-4`}>
        <div className="row pb-3">
          <h4 className={`${style.title} pt-5 ps-5 pb-3`}>Educacion</h4>
          <div className="col-md-6 col-sm-12 text-center">
            <h4 className={`${style.subtitle}`}>Bachillerato</h4>
            <h5>Colegio de Bachilleres</h5>
            <p>2016 a 2019</p>
            <p>Salida ocupacional</p>
            <p>Auziliar programador (JAVA)</p>
          </div>
          <div className="col-md-6 col-sm-12 text-center">
            <h4 className={`${style.subtitle}`}>Universidad</h4>
            <h5>Universidad Nacional Autonoma de Mexico</h5>
            <p>2020 a Hoy</p>
            <p>Licenciatura</p>
            <p>Matemáticas Aplicadas y Computación</p>
          </div>
        </div>
      </div>
      <div className={`${style.inner_section} container my-4`}>
        <div className="row">
          <h3 className={`${style.title} pt-5 ps-5 pb-3`}>Experiencia</h3>
        </div>
        <div className="row pb-2">
          <div className="col">
            <div className="ms-5">
              <h5 className={`${style.subtitle}`}>Ocupacion</h5>
              <p>Desarrollador web FrontEnd y BackEnd (2023)</p>
            </div>
          </div>
          <div className="col">
            <div className="ms-5">
              <h5 className={`${style.subtitle}`}>Lugar</h5>
              <p>FES Acatlan</p>
            </div>
          </div>
          <div className="col-12">
            <div className="mx-5">
              <h5 className={`${style.subtitle}`}>Descripcion</h5>
              <p>
                Apoyo en el mantenimiento y desarrollo de sistemas web de la FES
                Acatlan, como el sistema de encuestas y pagina del Centro de
                Desarrollo Tecnologico (CEDETEC)
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={`${style.inner_section} container mt-4`}>
        <div className="row  pb-4">
          <h3 className={`${style.title} pt-5 ps-5 pb-3`}>
            Habilidades tecnicas
          </h3>
          <div className="col">
            <ul className={`${style.list} ms-5`}>
              <li>Bases de datos relacionales</li>
              <li>NetBeans</li>
              <li>React, Nextjs - (FrontEnd)</li>
              <li>NestJs - (BackEnd)</li>
              <li>Git y GitHub</li>
            </ul>
          </div>
          <div className="col">
            <ul className={style.list}>
              <li>Java</li>
              <li>C++</li>
              <li>JavaScript</li>
              <li>HTML</li>
              <li>CSS</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={`${style.inner_section} container mt-4 mb-3`}>
        <div className="row pb-4">
          <h3 className={`${style.title} pt-5 ps-5 pb-3`}>
            Habilidades blandas
          </h3>
          <div className="col text-center">
            <AiOutlineCheckCircle size={25} className="mb-2" />
            <p>Constancia</p>
          </div>
          <div className="col text-center">
            <AiOutlineTeam size={25} className="mb-2" />
            <p>Trabajo en equipo</p>
          </div>
          <div className="col text-center">
            <FaTasks size={25} className="mb-2" />
            <p>Responsabilidad</p>
          </div>
        </div>
      </div>
    </>
  );
}
