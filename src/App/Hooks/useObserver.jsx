import { useEffect } from "react";
import { useDispatch } from "react-redux";

function useObserver(targetRef, setIsSection) {
  const dispatch = useDispatch();

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
      { threshold: 0.1, root: null }
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
