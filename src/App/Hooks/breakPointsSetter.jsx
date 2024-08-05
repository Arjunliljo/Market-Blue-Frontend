import {
  setIsBigTablets,
  setIsDesktop,
  setIsTablets,
  setIsPhone,
  setIsSmallPhone,
} from "../../Global/BreakPoints/breakPoints";

export default function breakPointsSetter(dispatch) {
  const width = window.innerWidth;

  dispatch(setIsSmallPhone(width <= 575.98));
  dispatch(setIsPhone(width >= 576 && width <= 767.98));
  dispatch(setIsTablets(width >= 768 && width <= 991.98));
  dispatch(setIsBigTablets(width >= 992 && width <= 1199.98));
  dispatch(setIsDesktop(width >= 1200));
}
