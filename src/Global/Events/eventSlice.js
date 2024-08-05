import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isVideoOn: false,
  isClickedThumbnail: false,
  isSectionOne: false,
  isSectionTwo: false,
  isSectionFour: false,
  isSectionFive: false,
  isSectionSix: false,
  isSectionSeven: false,
  isFooter: false,
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
    setIsSectionFive: (state, action) => {
      state.isSectionFive = action.payload;
      if (action.payload) {
        state.isBlackMode = false;
      }
    },
    setIsSectionSix: (state, action) => {
      state.isSectionSix = action.payload;
      if (action.payload) {
        state.isBlackMode = true;
      }
    },
    setIsHeader: (state, action) => {
      state.isHeader = action.payload;
    },
    setIsSectionSeven: (state, action) => {
      state.isSectionSeven = action.payload;
      if (action.payload) {
        state.isBlackMode = true;
      }
    },
    setIsFooter: (state, action) => {
      state.isFooter = action.payload;

      if (action.payload) {
        state.isBlackMode = false;
      }
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
  setIsSectionFive,
  setIsBlackMode,
  setIsSectionSeven,
  setIsFooter,
} = eventSlice.actions;
export default eventSlice.reducer;
