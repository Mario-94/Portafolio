import React from "react";

const Home = () => {
  return (
    <section className="contentHome " name="pagehome">
      <div className="containerHome">
        <div>
          <h1>Mario Alberto Garcia Sanchez</h1>
          <p>
            Como apasionado desarrollador de software front-end, me especializo
            en la creación de experiencias web excepcionales y altamente
            funcionales. Mi enfoque principal se centra en el framework
            React.js, donde he cultivado habilidades sólidas y una profunda
            comprensión de sus capacidades para construir interfaces de usuario
            dinámicas y receptivas.
          </p>
        </div>
        <div className="containerImgHome">
          <img
            src="https://img.freepik.com/foto-gratis/pintura-lago-montana-montana-al-fondo_188544-9126.jpg"
            alt="imagenPruenba"
            className="avatarImg"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
