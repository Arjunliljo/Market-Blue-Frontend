import SocialMediaBtns from "../Utility/SocialMediaBtns/SocialMediaBtns";

function LowerFooter() {
  return (
    <div className="lowerFooter">
      <div className="lowerFooter-content-box">
        <h3 className="section-text">Need to help? contact us</h3>
        <h4>userxxx@gmail.com</h4>
        <h4>adminxxx@gmail.com</h4>
        <h4>+91 XXXXXXXXXX</h4>
        <SocialMediaBtns />
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Magic Loop. All rights reserved.</p>
      </div>
    </div>
  );
}

export default LowerFooter;
