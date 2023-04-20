import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "form",

  initialState: {
    personalInfo: {
      name: "Muhammed",
      email: "",
      phone:""
    },
    selectPlan: {
      isArcade: "",
      isAdvanced: "",
      isPro: "",
    },
    selectAds: {
      isOnline: "",
      isLarger: "",
      isCustomizable: "",
    },
  },

  //  reducers

  reducers: {
    personalInfo: (state, action) => {
       
      state.personalInfo = action.payload;
    },
    selectPlan: (state, action) => {
      state.selectPlan = action.payload;
    },
    selectAds: (state, action) => {
      state.selectAds = action.payload;
    },
  },
});
// Actions
export const { personalInfo, selectPlan, selectAds } = formSlice.actions;
export const reducer = formSlice.reducer;
