import Main from "../Main";
import HomeSectionFive from "./HomeSectionFIve/HomeSectionFive";
import HomeSectionFour from "./HomeSectionFour/HomeSectionFour";
import HomeSectionOne from "./HomeSectionOne/HomeSectionOne";
import HomeSectionSix from "./HomeSectionSix/HomeSectionSix";
import HomeSectionThree from "./HomeSectionThree/HomeSectionThree";
import HomeSectionTwo from "./HomeSectionTwo/HomeSectionTwo";

function Home() {
  return (
    <Main>
      <HomeSectionOne />
      <HomeSectionTwo />
      {/* fitContent height */}
      <HomeSectionThree />
      <HomeSectionFour />
      <HomeSectionFive />
      <HomeSectionSix />
    </Main>
  );
}

export default Home;
