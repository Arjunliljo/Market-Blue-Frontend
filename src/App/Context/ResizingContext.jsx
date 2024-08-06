import { createContext, useContext, useEffect, useState } from "react";

// Create the context
const ResizingContext = createContext();

// Create the provider component
function ResizingProvider({ children }) {
  const [curWidth, setCurWidth] = useState(window.innerWidth);
  const [isSmallPhone, setIsSmallPhone] = useState(curWidth <= 575.98);
  const [isPhone, setIsPhone] = useState(curWidth >= 576 && curWidth <= 767.98);
  const [isTablets, setIsTablets] = useState(
    curWidth >= 768 && curWidth <= 991.98
  );
  const [isBigTablets, setIsBigTablets] = useState(
    curWidth >= 992 && curWidth <= 1199.98
  );
  const [isDesktop, setIsDesktop] = useState(curWidth >= 1200);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setCurWidth(width);
      setIsSmallPhone(width <= 575.98);
      setIsPhone(width >= 576 && width <= 767.98);
      setIsTablets(width >= 768 && width <= 991.98);
      setIsBigTablets(width >= 992 && width <= 1199.98);
      setIsDesktop(width >= 1200);
    };

    window.addEventListener("resize", handleResize);

    // Initial call to set the state based on the current window size
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <ResizingContext.Provider
      value={{
        isBigTablets,
        curWidth,
        isDesktop,
        isPhone,
        isSmallPhone,
        isTablets,
      }}
    >
      {children}
    </ResizingContext.Provider>
  );
}

// Create a custom hook to use the context
function useResize() {
  const context = useContext(ResizingContext);

  if (context === undefined) {
    throw new Error("useResize must be used within a ResizingProvider");
  }
  return context;
}

export { ResizingProvider, useResize };
