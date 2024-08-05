import { useSelector } from "react-redux";
import { Parallax } from "react-scroll-parallax";

function AboutText({
  about = "About us",
  title = "We dissect where our clients are",
  t1 = " We are a proactive creative agency focused on imagining and building highly-interactive websites that push the limits of design and development.",
  t2,
}) {
  const isParllaxDiabled = useSelector((state) => state.events.isSectionFour);
  return (
    <Parallax speed={-10} disabled={isParllaxDiabled}>
      <Parallax speed={5} disabled={isParllaxDiabled}>
        <span className="section-about-title">{about}</span>

        <h2 className="container__title section-title">{title}</h2>
      </Parallax>

      <Parallax speed={9} disabled={isParllaxDiabled}>
        <p className="container__text section-text">{t1}</p>
      </Parallax>

      <Parallax speed={9} disabled={isParllaxDiabled}>
        <p className="container__text section-text">
          Thinkers. Doers. Agents of change. A full-service digital marketing
          agency with passion for ingenuity and innovation in every medium,
          focused on the user experience.
        </p>
      </Parallax>
    </Parallax>
  );
}

export default AboutText;
