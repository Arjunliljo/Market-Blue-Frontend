import { useEffect, useState } from "react";

export default function useScrollParalax() {
  const [style, setStyle] = useState({});

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

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return [style, setStyle];
}
