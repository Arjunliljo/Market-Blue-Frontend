import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isVideoOn: false,
  isClickedThumbnail: false,
  isSectionOne: false,
  isSectionTwo: false,
  isHeader: false,
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
    setIsSectionOne: (state, action) => {
      state.isSectionOne = action.payload;
    },
    setIsHeader: (state, action) => {
      state.isHeader = action.payload;
    },
  },
});

export const {
  setIsVideoOn,
  setIsClickedThumbnail,
  setIsSectionOne,
  setIsSectionTwo,
  setIsHeader,
} = eventSlice.actions;
export default eventSlice.reducer;
