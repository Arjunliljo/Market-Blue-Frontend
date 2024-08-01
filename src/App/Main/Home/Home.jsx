import Main from "../Main";
import HomeSectionFour from "./HomeSectionFour/HomeSectionFour";
import HomeSectionOne from "./HomeSectionOne/HomeSectionOne";
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
    </Main>
  );
}

export default Home;
