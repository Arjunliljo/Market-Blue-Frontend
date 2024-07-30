import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isVideoOn: false,
  isClickedThumbnail: false,
};

export const eventSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    setIsVideoOn: (state, action) => {
      state.isVideoOn = action.payload;
    },
    setIsClickedThumbnail: (state, action) => {
      state.isClickedThumbnail = action.payload;
    },
  },
});

export const { setIsVideoOn, setIsClickedThumbnail } = eventSlice.actions;
export default eventSlice.reducer;
