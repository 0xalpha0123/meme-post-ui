import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";

export interface appState {
  sliderOpen: boolean;
}

const initialState: appState = {
  sliderOpen: true,
};

export const appSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    toggleSlider: (state) => {
      state.sliderOpen = !state.sliderOpen;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleSlider } = appSlice.actions;

export default appSlice.reducer;
