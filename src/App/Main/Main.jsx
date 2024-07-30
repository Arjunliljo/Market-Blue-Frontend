import { useSelector } from "react-redux";

function Main({ children }) {
  const isMount = useSelector((state) => state.timing.initialMount);
  console.log(isMount);

  return <main>{children}</main>;
}

export default Main;
