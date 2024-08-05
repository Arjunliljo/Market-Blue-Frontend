import { Parallax } from "react-scroll-parallax";
import Image from "../../../Utility/Image/Image";
import { useSelector } from "react-redux";
function AboutImages() {
  const { isSmallPhone, isPhone } = useSelector((state) => state.breakPoints);

  const speed = isPhone || isSmallPhone ? 10 : 15;

  return (
    <Parallax speed={speed}>
      <div className="about-section-img-box">
        <div className="about-section-img-container">
          <Image
            src="./images/AboutPlaceHolder-1.svg"
            width="100%"
            height="100%"
          />
        </div>
        <div className="about-section-img-container">
          <Image
            src="./images/AboutPlaceHolder-2.svg"
            width="100%"
            height="100%"
          />
        </div>
      </div>
    </Parallax>
  );
}

export default AboutImages;
