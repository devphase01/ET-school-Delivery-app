import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: {
    name: "",
    email: "",
    phone: "",
    address: ""
  },
}

const sliceUserOrder = createSlice({
  name: "userOrder",
  initialState,
  reducers: {
    setName: (state, action) => {
      state.userInfo.name = action.payload;
    },
    setEmail: (state, action) => {
      state.userInfo.email = action.payload;
    },
    setPhone: (state, action) => {
      state.userInfo.phone = action.payload;
    },
    setAddress: (state, action) => {
      state.userInfo.address = action.payload;
    },
    resetUserInfo: (state) => {
      state.userInfo = {}
    }
  }
});

export const { setName, setEmail, setPhone, setAddress, resetUserInfo } = sliceUserOrder.actions;
export default sliceUserOrder.reducer;