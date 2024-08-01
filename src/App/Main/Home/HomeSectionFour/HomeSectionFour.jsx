import { Parallax } from "react-scroll-parallax";

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY || document.documentElement.scrollTop;
  console.log(`Current scroll position: ${scrollPosition}px`);
});

function HomeSectionFour() {
  return (
    <section className="homeSectionFour">
      <div className="container">
        <Parallax speed={10}>
          <Parallax speed={5}>
            <span className="container__span">About us</span>

            <h2 className="container__title section-title">
              We dissect where our clients are
            </h2>
          </Parallax>

          <Parallax speed={15}>
            <p className="container__text">
              We are a proactive creative agency focused on imagining and
              building highly-interactive websites that push the limits of
              design and development.
            </p>
          </Parallax>

          <Parallax speed={20}>
            <p className="container__text">
              Thinkers. Doers. Agents of change. A full-service digital
              marketing agency with passion for ingenuity and innovation in
              every medium, focused on the user experience.
            </p>
          </Parallax>
        </Parallax>
      </div>
    </section>
  );
}

export default HomeSectionFour;
