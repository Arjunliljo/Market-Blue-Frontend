import { useEffect } from "react";
import breakPointsSetter from "./App/Hooks/breakPointsSetter";
import { useDispatch } from "react-redux";
import {
  setCurWidth,
  setIsBigTablets,
  setIsDesktop,
  setIsPhone,
  setIsSmallPhone,
  setIsTablets,
} from "./Global/BreakPoints/breakPoints";

function WindowResizer() {
  const dispatch = useDispatch();

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      dispatch(setIsSmallPhone(width <= 575.98));
      dispatch(setIsPhone(width >= 576 && width <= 767.98));
      dispatch(setIsTablets(width >= 768 && width <= 991.98));
      dispatch(setIsBigTablets(width >= 992 && width <= 1199.98));
      dispatch(setIsDesktop(width >= 1200));
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
