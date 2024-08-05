import { useEffect } from "react";
import breakPointsSetter from "./App/Hooks/breakPointsSetter";
import { useDispatch } from "react-redux";

function WindowResizer() {
  const dispatch = useDispatch();

  useEffect(() => {
    const handleResize = () => {
      breakPointsSetter(dispatch);
    };

    window.addEventListener("resize", handleResize);

    // Initial dispatch
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return null;
}

export default WindowResizer;
