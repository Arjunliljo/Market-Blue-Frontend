import { useEffect } from "react";
import { useDispatch } from "react-redux";

function useObserver(targetRef, setIsSection, hold) {
  const dispatch = useDispatch();

  const threshold = hold ? hold : 0.1;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entri] = entries;
        if (entri.isIntersecting) {
          dispatch(setIsSection(true));
        } else {
          dispatch(setIsSection(false));
        }
      },
      { threshold, root: null }
    );

    const target = targetRef.current;

    if (target) {
      observer.observe(target);
    }
    return () => observer.unobserve(target);
  }, [dispatch, targetRef]);

  return null;
}

export default useObserver;
