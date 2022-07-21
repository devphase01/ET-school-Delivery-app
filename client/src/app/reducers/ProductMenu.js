import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeMenu: localStorage.getItem("activeMenu") 
  ? JSON.parse(localStorage.getItem("activeMenu")) 
  : "McDonnald's"
}

const sliceProductMenu = createSlice({
  name: "sliceProductMenu",
  initialState,
  reducers: {
    setActiveMenu: (state, action) => {
      state.activeMenu = action.payload;
      localStorage.setItem("activeMenu", JSON.stringify(state.activeMenu));
    }
  }
});

export const { setActiveMenu } = sliceProductMenu.actions;
export default sliceProductMenu.reducer;