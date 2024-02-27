import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  IconCss,
  IconJavascript,
  IconMongoDb,
  IconNodeJs,
  IconReactJs,
  IconSql,
  IconTypeScript,
  Iconhtml,
} from "../assets/icons";
import "../css/home.mobile.css";

const Home = () => {
  const logosSlideRef = useRef(null);

  useEffect(() => {
    const copy = logosSlideRef.current.cloneNode(true);
    document.querySelector(".logos").appendChild(copy);
  }, []); //

  return (
    <section className="contentHome" name="pagehome">
      <div className="containerHome">
        <div className="containerTextHome">
          <h1>Mario Alberto Garcia Sanchez 👋🏼</h1>
          <span className="">Desarrollador web front-end y back-end</span>
          <p className="AcercaMi">
            Como entusiasta del desarrollo, mi principal enfoque es asegurar el
            correcto funcionamiento de las tareas que se me asignan,
            aprovechando el conocimiento que he adquirido a lo largo de los
            años. Me gustaría invitarte a explorar mi{" "}
            <Link className="colorText" to={"experiencia"}>
              <span>experiencia laboral...</span>
            </Link>
            💻
          </p>
        </div>
        <div className="containerImgHome ">
          <img
            src="https://img.freepik.com/foto-gratis/pintura-lago-montana-montana-al-fondo_188544-9126.jpg"
            alt="imagenPruenba"
            className="avatarImg "
          />
        </div>
      </div>
      <p className="mb-2">Tecnologías</p>
      <div className="logos">
        <div className="logos-slide" ref={logosSlideRef}>
          <IconCss />
          <Iconhtml />
          <IconJavascript />
          <IconTypeScript />
          <IconReactJs />
          <IconNodeJs />
          <IconSql />
          <IconMongoDb />
        </div>
      </div>
    </section>
  );
};

export default Home;
