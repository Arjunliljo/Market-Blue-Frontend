import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isVideoOn: false,
};

export const eventSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    setIsVideoOn: (state, action) => {
      state.isVideoOn = action.payload;
    },
  },
});

export const { setIsVideoOn } = eventSlice.actions;
export default eventSlice.reducer;
