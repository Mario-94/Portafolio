import {
  IconCss,
  IconHtml,
  IconJavaScript,
  IconMongoDb,
  IconNodeJs,
  IconReactJs,
  IconSql,
  IconTypeScript,
} from "../assets/Icons";
import "../styles/home.scss";
const Home = () => {
  return (
    <>
      <section className="container-home">
        <div className="container-description-person">
          <h1>Mario-94</h1>
          <div className="description-person">
            <p>Mario Alberto Garcia Sanchez</p>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat
              eos labore iste, voluptates enim impedit aut voluptatibus rerum?
              Quae dolor fugiat delectus deleniti. Voluptas, facere corporis
              vero esse laudantium assumenda.
            </span>
            <button className="button-container">
              <span>Conoceme</span>
            </button>
          </div>
        </div>
        <div className="avatar-img">
          <div className="content-avatar">
            <img
              src="https://img.freepik.com/foto-gratis/pintura-lago-montana-montana-al-fondo_188544-9126.jpg"
              alt="avatar-img"
              className="style-avatar-img"
            />
          </div>
        </div>

        <div className="tecnologi">
          <span className="carruselTec">
            <IconHtml />
          </span>
          <span className="carruselTec">
            <IconCss />
          </span>
          <span className="carruselTec">
            <IconJavaScript />
          </span>
          <span className="carruselTec">
            <IconTypeScript />
          </span>
          <span className="carruselTec">
            <IconReactJs />
          </span>
          <span className="carruselTec">
            <IconNodeJs />
          </span>
          <span className="carruselTec">
            <IconSql />
          </span>
          <span className="carruselTec">
            <IconMongoDb />
          </span>
        </div>
      </section>
    </>
  );
};
export default Home;
