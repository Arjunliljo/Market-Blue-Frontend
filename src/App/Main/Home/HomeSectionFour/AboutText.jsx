import { useSelector } from "react-redux";
import { Parallax } from "react-scroll-parallax";

function AboutText() {
  const isParllaxDiabled = useSelector((state) => state.events.isSectionFour);
  return (
    <Parallax speed={-10} disabled={isParllaxDiabled}>
      <Parallax speed={5} disabled={isParllaxDiabled}>
        <span className="container__span">About us</span>

        <h2 className="container__title section-title">
          We dissect where our clients are
        </h2>
      </Parallax>

      <Parallax speed={10} disabled={isParllaxDiabled}>
        <p className="container__text">
          We are a proactive creative agency focused on imagining and building
          highly-interactive websites that push the limits of design and
          development.
        </p>
      </Parallax>

      <Parallax speed={10} disabled={isParllaxDiabled}>
        <p className="container__text">
          Thinkers. Doers. Agents of change. A full-service digital marketing
          agency with passion for ingenuity and innovation in every medium,
          focused on the user experience.
        </p>
      </Parallax>
    </Parallax>
  );
}

export default AboutText;
