import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  initialMount: false,
};

export const timingSlice = createSlice({
  name: "timing",
  initialState,
  reducers: {
    setInitialMount: (state, action) => {
      state.initialMount = action.payload;
    },
  },
});

export const { setInitialMount } = timingSlice.actions;

export default timingSlice.reducer;
