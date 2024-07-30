import Main from "../Main";
import HomeSectionOne from "./HomeSectionOne/HomeSectionOne";
import HomeSectionThree from "./HomeSectionThree/HomeSectionThree";
import HomeSectionTwo from "./HomeSectionTwo/HomeSectionTwo";

function Home() {
  return (
    <Main>
      <HomeSectionOne />
      <HomeSectionTwo />
      <HomeSectionThree />
    </Main>
  );
}

export default Home;
