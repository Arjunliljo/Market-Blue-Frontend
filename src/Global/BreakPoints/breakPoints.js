import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSmallPhone: false,
  isPhone: false,
  isTablets: false,
  isBigTablets: false,
  isDesktop: false,
  curWidth: window.innerWidth,
};

export const eventSlice = createSlice({
  name: "breakPoints",
  initialState,
  reducers: {
    setIsSmallPhone(state, action) {
      state.isSmallPhone = action.payload;
    },
    setIsPhone(state, action) {
      state.isPhone = action.payload;
    },
    setIsTablets(state, action) {
      state.isTablets = action.payload;
    },
    setIsBigTablets(state, action) {
      state.isBigTablets = action.payload;
    },
    setIsDesktop(state, action) {
      state.isDesktop = action.payload;
    },
    setCurWidth(state, action) {
      state.curWidth = action.payload;
    },
  },
});

export const {
  setIsSmallPhone,
  setIsPhone,
  setIsTablets,
  setIsBigTablets,
  setIsDesktop,
  setCurWidth,
} = eventSlice.actions;
export default eventSlice.reducer;
