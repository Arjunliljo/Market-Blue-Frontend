import { configureStore } from "@reduxjs/toolkit";
import timingReducer from "./TimingSlice/timingSlice";
import eventReducer from "./Events/eventSlice";

export default configureStore({
  reducer: {
    timing: timingReducer,
    events: eventReducer,
  },
});
