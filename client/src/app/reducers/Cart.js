import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  cartTotalAmount: 0,
}

const sliceCart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const productIndex = state.cartItems.findIndex(item => item.name === action.payload.name);

      if (productIndex >= 0) {
        state.cartItems[productIndex].cartQuantity += 1;
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempProduct);
      }
    },

    decreaseCart: (state, action) => {
      const productIndex = state.cartItems.findIndex(item => item.name === action.payload.name);

      if (state.cartItems[productIndex].cartQuantity > 1) {
        state.cartItems[productIndex].cartQuantity -= 1;
      } else if (state.cartItems[productIndex].cartQuantity === 1) {
        const updatedCartItems = state.cartItems.filter(item => item.name !== action.payload.name);
        state.cartItems = updatedCartItems;
      }
    },

    getAmount: (state, action) => {
      // let amount = 0;
      // let quantity = 0;

      // state.cartItems.forEach(item => {
      //   amount += (item.cartQuantity * item.price);
      //   quantity += item.cartQuantity;
      // })

      // state.cartTotalAmount = amount;
      // state.cartQuantity = quantity;

      let amount = 0;

      action.payload.forEach(item => {
        amount += (item.cartQuantity * item.price);
      });

      state.cartTotalAmount = amount;
    },

    resetCart: (state) => {
      state.cartItems = [];
      state.cartTotalAmount = 0;
      state.cartQuantity = 0;
    }
  }
});

export const { addToCart, decreaseCart, getAmount, resetCart } = sliceCart.actions;
export default sliceCart.reducer;