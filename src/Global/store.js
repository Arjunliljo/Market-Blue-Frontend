import { configureStore } from "@reduxjs/toolkit";
import timingReducer from "./TimingSlice/timingSlice";
import eventReducer from "./Events/eventSlice";
import breakReducer from "./BreakPoints/breakPoints";

export default configureStore({
  reducer: {
    timing: timingReducer,
    events: eventReducer,
    breakPoints: breakReducer,
  },
});
