import { useEffect } from "react";
import throttle from "./throttle";
import debounce from "./debounce";

const viewHeight = window.innerHeight;

export default function scroll() {
  useEffect(() => {
    // Throttled handleWheel function
    const handleWheelThrottled = throttle((event) => {}, 1000);

    // Debounced handler to ensure it's only called once after the user stops scrolling
    const handleWheel = debounce((event) => {
      const currentScrollY = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight;

      if (event.deltaY < 0) {
        // Scrolling up
        window.scrollTo({
          top: Math.max(currentScrollY - viewHeight, 0), // Scroll up 100px, but not below 0
          behavior: "smooth",
        });
      } else {
        // Scrolling down
        window.scrollTo({
          top: Math.min(
            currentScrollY + viewHeight,
            documentHeight - viewHeight
          ),
          behavior: "smooth",
        });
      }
    }, 100); // Adjust debounce wait time as needed

    const combinedHandler = (event) => {
      handleWheelThrottled(event); // Throttle calls
      handleWheel(event); // Debounce calls
    };

    window.addEventListener("wheel", combinedHandler);

    return () => {
      window.removeEventListener("wheel", combinedHandler);
    };
  }, []);
}
