function HomeBtn({ children }) {
  return (
    <a className="box__link button-animation" href="#">
      {children}
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </a>
  );
}

export default HomeBtn;
