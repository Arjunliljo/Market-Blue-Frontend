import Expertise from "./Expertise";

function HomeSectionFive() {
  const arr = [];
  const expertiseLength = 8;
  const height = 70;
  for (let i = 0, j = 0; i < expertiseLength; i++) {
    if (i % 2 === 0) {
      arr.push({ right: "0", top: `${j * height}rem`, height: `${height}rem` });
    } else {
      arr.push({
        left: "0",
        top: `${j * height + 20}rem`,
        height: `${height}rem`,
      });
      j++;
    }
  }
  return (
    <section className="homeSectionFive">
      <div className="container">
        <span className="section-about-title">Experts in</span>
        <h2 className="section-title">Crafting Concepts</h2>

        {arr.map((style, i) => (
          <Expertise style={style} key={i} id={i} />
        ))}
      </div>
    </section>
  );
}

export default HomeSectionFive;
