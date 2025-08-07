// import { Link } from "wouter";
import { IconGithub, IconLinkedin } from "../assets/Icons";

const Footer = () => {
  return (
    <section className="container-footer">
      <div className="liga">
        <a href="https://github.com/Mario-94" target="_blank">
          <IconGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/mario-alberto-garc%C3%ADa-s%C3%A1nchez/"
          target="_blank"
        >
          <IconLinkedin />
        </a>
      </div>
    </section>
  );
};
export default Footer;
