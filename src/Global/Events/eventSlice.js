import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isVideoOn: false,
  isClickedThumbnail: false,
  isSectionTwo: false,
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
    setIsSectionTwo: (state, action) => {
      state.isSectionTwo = action.payload;
    },
  },
});

export const { setIsVideoOn, setIsClickedThumbnail, setIsSectionTwo } =
  eventSlice.actions;
export default eventSlice.reducer;
