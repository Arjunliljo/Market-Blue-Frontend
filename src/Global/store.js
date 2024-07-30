import { configureStore } from "@reduxjs/toolkit";
import timingReducer from "./TimingSlice/timingSlice";

export default configureStore({
  reducer: {
    timing: timingReducer,
  },
});
