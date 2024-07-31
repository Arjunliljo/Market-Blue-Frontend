import ContactBtn from "../../../Utility/ContactBtn/ContactBtn";
import HomeBtn from "../../../Utility/HomeBtn";
function ParallaxContent() {
  return (
    <div className="parallax-inner">
      <div className="container">
        <div className="parallax-inner__text">
          <h2>Ready to give us a try?</h2>
          <h3>
            You will be in company with some of the greatest coworking and
            shared workspaces.
          </h3>
        </div>
        <div className="parallax-inner__btn">
          <ContactBtn />
        </div>
      </div>
    </div>
  );
}

export default ParallaxContent;
