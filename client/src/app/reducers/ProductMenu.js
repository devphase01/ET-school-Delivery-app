import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeMenu: "McDonnald's"
}

const sliceProductMenu = createSlice({
  name: "sliceProductMenu",
  initialState,
  reducers: {
    setActiveMenu: (state, action) => {
      state.activeMenu = action.payload;
    }
  }
});

export const { setActiveMenu } = sliceProductMenu.actions;
export default sliceProductMenu.reducer;