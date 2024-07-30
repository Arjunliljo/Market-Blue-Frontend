import { useEffect } from "react";

function oneTImeObserver(targetRef, setOneTimeOberser) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        const [entry] = entries;

        if (entry.isIntersecting) {
          observer.unobserve(entry.target);
          setOneTimeOberser(true);
        }
      },
      { threshold: 0.2 }
    );

    const target = targetRef.current;
    if (target) {
      observer.observe(target);
    }
    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, []);

  return null;
}

export default oneTImeObserver;
