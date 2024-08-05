import Main from "../Main";
import HomeSectionEight from "./HomeSectionEight/HomeSectionEight";
import HomeSectionFive from "./HomeSectionFIve/HomeSectionFive";
import HomeSectionFour from "./HomeSectionFour/HomeSectionFour";
import HomeSectionOne from "./HomeSectionOne/HomeSectionOne";
import HomeSectionSeven from "./HomeSectionSeven/HomeSectionSeven";
import HomeSectionSix from "./HomeSectionSix/HomeSectionSix";
import HomeSectionThree from "./HomeSectionThree/HomeSectionThree";
import HomeSectionTwo from "./HomeSectionTwo/HomeSectionTwo";

function Home() {
  return (
    <Main>
      <HomeSectionOne />
      <HomeSectionTwo />
      <HomeSectionThree />
      <HomeSectionFour />
      <HomeSectionFive />
      <HomeSectionSix />
      <HomeSectionSeven />
    </Main>
  );
}

export default Home;
