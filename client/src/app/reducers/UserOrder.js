import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  order: {
    userInfo: {
      name: "",
      email: "",
      phone: "",
      address: ""
    },
  
    products: []
  }
}

const sliceUserOrder = createSlice({
  name: "userOrder",
  initialState,
  reducers: {
    createOrder: (state, action) => {
      state.order = action.payload;
    }
  }
});

// export const {} = sliceUserOrder.actions;
export default sliceUserOrder.reducer;