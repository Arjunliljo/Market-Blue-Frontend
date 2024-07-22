import { createContext, useContext, useEffect, useState } from "react";

// Create the context
const AnimationContext = createContext();

// Create the provider component
function AnimationProvider({ children }) {
  const [homeAnimationDelay, setHomeAnimationDelay] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setHomeAnimationDelay(false), 1500);

    // Cleanup the timer on unmount
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimationContext.Provider
      value={{
        homeAnimationDelay,
      }}
    >
      {children}
    </AnimationContext.Provider>
  );
}

// Create a custom hook to use the context
function useAnim() {
  const context = useContext(AnimationContext);

  if (context === undefined) {
    throw new Error("useAnim must be used within an AnimationProvider");
  }
  return context;
}

export { AnimationProvider, useAnim };
