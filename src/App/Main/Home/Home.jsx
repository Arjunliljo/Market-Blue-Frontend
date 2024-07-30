import StarBackgroundAnim from "../../Utility/StarBackgroundAnim";
import Main from "../Main";
import HomeSectionOne from "./HomeSectionOne/HomeSectionOne";
import HomeSectionTwo from "./HomeSectionTwo/HomeSectionTwo";

function Home() {
  return (
    <Main>
      <HomeSectionOne></HomeSectionOne>
      <HomeSectionTwo />
    </Main>
  );
}

export default Home;
