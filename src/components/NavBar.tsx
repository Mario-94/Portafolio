import "../styles/navBar/navBar.scss";
import { Link } from "wouter";

const NavBar = () => {
  return (
    <>
      <section className="container-navBar">
        <Link href="/" className="color-text-navBar ">
          Mario-94
        </Link>
        <Link href="/experience" className="color-text-navBar ">
          Experiencia
        </Link>
        <Link href="/contact" className="color-text-navBar ">
          Contacto
        </Link>
      </section>
    </>
  );
};
export default NavBar;
