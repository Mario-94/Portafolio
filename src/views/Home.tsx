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
            <span>carrusel de tecnologias</span>
          </div>
        </div>
        <aside className="avatar-img ">
          <div className="content-avatar">
            <img
              src="https://img.freepik.com/foto-gratis/pintura-lago-montana-montana-al-fondo_188544-9126.jpg"
              alt="avatar-img"
              className="style-avatar-img"
            />
          </div>
        </aside>
      </section>
    </>
  );
};
export default Home;
