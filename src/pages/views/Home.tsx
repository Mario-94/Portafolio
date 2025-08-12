import {
  IconCss,
  IconHtml,
  IconJavaScript,
  IconMongoDb,
  IconNodeJs,
  IconReactJs,
  IconSql,
  IconTypeScript,
} from "../../assets/Icons";

const Home = () => {
  return (
    <>
      <section className="w-full bg-background h-full text-paragraph mt-4 md:px4 lg:px-8">
        <section className="w-full h-[24rem] max-w-9xl  mx-auto  grid md:grid-cols-2 grid-rows-1 gap-2">
          {/* Texto */}
          <div className="flex flex-col justify-center gap-4 px-4 border-2">
            <header>
              <h1 className="pb-1">Mario-94</h1>
              <h2 className="">Mario Alberto Garcia Sanchez</h2>
            </header>
            <p className="text-paragraph line-clamp-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
              similique eius eligendi ad. Quaerat, ut autem dolore at non quis
              et. Natus deserunt amet provident, ipsum similique voluptatibus
              quos soluta! Doloribus eaque, aperiam in obcaecati ipsa qui ipsam
              quibusdam sint neque illum tenetur. Ullam eaque commodi explicabo!
              Quasi fugit necessitatibus dignissimos, libero, autem et in dolor,
              illo asperiores cum placeat. Suscipit perferendis fuga totam
              doloribus maiores rerum ducimus praesentium quae, eaque
              repudiandae. Sint, possimus consequatur! Iure tempore ipsum quis
              quasi nesciunt beatae aut laudantium a! Repellat accusantium
              officiis quaerat nostrum. Excepturi ducimus soluta, pariatur vero
              saepe ea veniam praesentium exercitationem fugit ipsum iusto
              reprehenderit. Quisquam ullam beatae enim dolorum labore ipsum
              voluptas, sunt temporibus fugiat, aspernatur repudiandae rem
              tempora qui? Eos, quos sapiente a, assumenda accusantium libero et
              placeat amet commodi architecto provident corrupti omnis labore
              voluptate, iste vero qui porro quae numquam ipsa similique
              veritatis id? Nemo, dicta neque.
            </p>
            <div className="w-3/4 md:w-full flex justify-center">
              <button className="bg-button w-1/2 text-buttonText px-4 py-2 rounded-3xl transition transform hover:-translate-y-1 hover:shadow-md hover:bg-button/90">
                Conóceme
              </button>
            </div>
          </div>

          {/* Imagen */}
          <div className="flex items-center justify-center md:justify-end px-4 border-2">
            <img
              src="https://img.freepik.com/foto-gratis/pintura-lago-montana-montana-al-fondo_188544-9126.jpg"
              alt="avatar-img"
              className="w-3/4 rounded-3xl object-contain"
            />
          </div>
        </section>

        <div className="w-full h-[24rem] max-w-8xl mx-auto   grid grid-cols-2 gap-2">
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
