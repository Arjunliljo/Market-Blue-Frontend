import { Parallax } from "react-scroll-parallax";
import Image from "../../../Utility/Image/Image";
function AboutImages() {
  return (
    <Parallax speed={15}>
      <div className="about-section-img-box">
        <div className="about-section-img-container">
          <Image src="./images/AboutPlaceHolder-1.svg" />
        </div>
        <div className="about-section-img-container">
          <Image src="./images/AboutPlaceHolder-2.svg" />
        </div>
      </div>
    </Parallax>
  );
}

export default AboutImages;
