import { useEffect } from "react";
import breakPointsSetter from "./App/Hooks/breakPointsSetter";
import { useDispatch } from "react-redux";
import { setCurWidth } from "./Global/BreakPoints/breakPoints";

function WindowResizer() {
  const dispatch = useDispatch();

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      breakPointsSetter(dispatch, width);
      dispatch(setCurWidth(width));
    };

    window.addEventListener("resize", handleResize);

    // Initial dispatch
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [dispatch]);

  return null;
}

export default WindowResizer;
