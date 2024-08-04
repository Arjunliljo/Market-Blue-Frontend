import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isVideoOn: false,
  isClickedThumbnail: false,
  isSectionOne: false,
  isSectionTwo: false,
  isSectionFour: false,
  isSectionSix: false,
  isBlackMode: false,
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
    setIsSectionFour: (state, action) => {
      state.isSectionFour = action.payload;
    },
    setIsSectionSix: (state, action) => {
      state.isSectionSix = action.payload;
    },
    setIsHeader: (state, action) => {
      state.isHeader = action.payload;
    },
    setIsBlackMode: (state, action) => {
      state.isBlackMode = action.payload;
    },
  },
});

export const {
  setIsVideoOn,
  setIsClickedThumbnail,
  setIsSectionOne,
  setIsSectionTwo,
  setIsSectionFour,
  setIsHeader,
  setIsSectionSix,
  setIsBlackMode,
} = eventSlice.actions;
export default eventSlice.reducer;
