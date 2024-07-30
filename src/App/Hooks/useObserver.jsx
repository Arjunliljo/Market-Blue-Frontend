import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setIsSectionTwo } from "../../Global/Events/eventSlice";

function useObserver(targetRef) {
  const dispatch = useDispatch();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entri] = entries;

        if (entri.isIntersecting) {
          dispatch(setIsSectionTwo(true));
        } else {
          dispatch(setIsSectionTwo(false));
        }
      },
      { threshold: 0.6 }
    );

    const target = targetRef.current;

    if (target) {
      observer.observe(target);
    }
    return () => observer.unobserve(target);
  });

  return null;
}

export default useObserver;
