import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function useScrollParalax() {
  const [style, setStyle] = useState({});

  const { isSmallPhone, isPhone } = useSelector((state) => state.breakPoints);

  console.log(isPhone, isSmallPhone);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const newWidth = 20 - scrollPosition * 0.05; // Adjust the multiplier for the desired effect
      const newHeight = 10 - scrollPosition * 0.025; // Adjust the multiplier for the desired effect
      const newBorderRadius = 2 + scrollPosition * 0.05; // Adjust the multiplier for the desired effect

      setStyle({
        width: `${newWidth}rem`,
        height: `${newHeight}rem`,
        borderRadius: `${newBorderRadius}rem`,
      });
    };

    if (!isSmallPhone || !isPhone)
      window.addEventListener("scroll", handleScroll);
    return () => {
      if (!isPhone || isSmallPhone)
        window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (isPhone || isSmallPhone) return [{}, null];

  return [style, setStyle];
}
