import Layout from "@/components/layout/Layout";
import styles from "../styles/principal/principal.module.css";
import Image from "next/image";
import perfil from "../public/images/perfil.png";
import {
  AiOutlinePhone,
  AiOutlineMail,
  AiOutlineLinkedin,
  AiOutlineCheckCircle,
  AiOutlineTeam,
} from "react-icons/ai";
import { FaTasks } from "react-icons/fa";

export default function page() {
  return (
    <Layout>
      <div className={`${styles.banner_neumorphism} container`}>
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
              <h1>Jorge Miguel Alvarado Reyes</h1>
              <p>Desarrollador web jr</p>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.banner_neumorphism} container mt-4`}>
        <h4 className="pt-4 ms-4">Informacion de contacto:</h4>
        <div className="row py-3 text-center">
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
      <div className={`${styles.section_neumorphism} container mt-4`}>
        <div className="row pb-3">
          <h3 className="ps-5 py-5">Educacion</h3>
          <div className="col-md-6 col-sm-12 text-center">
            <h4>Bachillerato</h4>
            <h5>Colegio de Bachilleres</h5>
            <p>2016 a 2019</p>
            <p>Salida ocupacional</p>
            <p>Auziliar programador (JAVA)</p>
          </div>
          <div className="col-md-6 col-sm-12 text-center">
            <h4>Universidad</h4>
            <h5>Universidad Nacional Autonoma de Mexico</h5>
            <p>2020 a Hoy</p>
            <p>Licenciatura</p>
            <p>Matemáticas Aplicadas y Computación</p>
          </div>
        </div>
      </div>
      <div className={`${styles.section_neumorphism} container my-4`}>
        <div className="row">
          <h3 className="ps-5 py-5">Experiencia</h3>
        </div>
        <div className="row pb-2">
          <div className="col">
            <div className="ms-5">
              <h5>Ocupacion</h5>
              <p>Desarrollador web FrontEnd y BackEnd (2023)</p>
            </div>
          </div>
          <div className="col">
            <div className="ms-5">
              <h5>Lugar</h5>
              <p>FES Acatlan</p>
            </div>
          </div>
          <div className="col-12">
            <div className="mx-5">
              <h5>Descripcion</h5>
              <p>
                Apoyo en el mantenimiento y desarrollo de sistemas web de la FES
                Acatlan, como el sistema de encuestas y pagina del Centro de
                Desarrollo Tecnologico (CEDETEC)
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.section_neumorphism} container mt-4`}>
        <div className="row  pb-4">
          <h3 className="ps-5 py-5">Habilidades tecnicas</h3>
          <div className="col">
            <ul className={`${styles.list} ms-5`}>
              <li>Bases de datos relacionales</li>
              <li>NetBeans</li>
              <li>React, Nextjs - (FrontEnd)</li>
              <li>NestJs - (BackEnd)</li>
              <li>Git y GitHub</li>
            </ul>
          </div>
          <div className="col">
            <ul className={styles.list}>
              <li>Java</li>
              <li>C++</li>
              <li>JavaScript</li>
              <li>HTML</li>
              <li>CSS</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={`${styles.section_neumorphism} container mt-4 mb-3`}>
        <div className="row pb-4">
          <h3 className="ps-5 py-5">Habilidades blandas</h3>
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

      <div className={`${styles.banner_neumorphism} container`}>
        <h4 className="pt-4 ms-4">cambia el diseno de la pagina</h4>
        <div className="text-center pb-3">
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="radioNeumorphism"
              value="option1"
            />
            <label className="form-check-label" htmlFor="radioNeumorphism">
              Neumorphism
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="radioMinimalista"
              value="option2"
            />
            <label className="form-check-label" htmlFor="radioMinimalista">
              Minimalista
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="radioModerno"
              value="option3"
            />
            <label className="form-check-label" htmlFor="radioModerno">
              Moderno
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="radioCristales"
              value="option3"
            />
            <label className="form-check-label" htmlFor="radioCristales">
              Cristales
            </label>
          </div>
        </div>
      </div>
    </Layout>
  );
}
