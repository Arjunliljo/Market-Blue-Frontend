import { createContext, useContext, useReducer, useState } from "react";
import initialDelayTimer from "../HelperFuntions/InitialDelayTimer";

// Create the context
const AnimationContext = createContext();

const initialState = {
  homeAnimationDelay: true,
  initialMount: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "initialDelayFinish":
      return state.initialMount
        ? { ...state }
        : { ...state, homeAnimationDelay: false, initialMount: true };
    default:
      throw new Error("Unknown Action Type");
  }
}

// Create the provider component
function AnimationProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { homeAnimationDelay, initialMount } = state;

  initialDelayTimer(dispatch, 5000);

  return (
    <AnimationContext.Provider
      value={{
        homeAnimationDelay,
        initialMount,
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
