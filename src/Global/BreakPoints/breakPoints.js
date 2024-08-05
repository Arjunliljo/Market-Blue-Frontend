import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSmallPhone: false,
  isPhone: false,
  isTablets: false,
  isBigTablets: false,
  isDesktop: false,
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
  },
});

export const {
  setIsSmallPhone,
  setIsPhone,
  setIsTablets,
  setIsBigTablets,
  setIsDesktop,
} = eventSlice.actions;
export default eventSlice.reducer;
