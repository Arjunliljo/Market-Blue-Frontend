import { useEffect } from "react";

export default function initialDelayTimer(dispatch, time) {
  useEffect(() => {
    const timer = setTimeout(
      () => dispatch({ type: "initialDelayFinish" }),
      time
    );

    // Cleanup the timer on unmount
    return () => clearTimeout(timer);
  }, []);
}
