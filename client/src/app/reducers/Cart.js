import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  cartItems: localStorage.getItem("cartItems") 
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [],
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

        toast.info(`${action.payload.name} incremented by 1`, {
          position: "bottom-left",
          autoClose: 900,
          delay: 0
        });
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempProduct);

        toast.success(`${action.payload.name} is added to cart.`, {
          position: "bottom-left",
          autoClose: 900,
          delay: 0
        });
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    decreaseCart: (state, action) => {
      const productIndex = state.cartItems.findIndex(item => item.name === action.payload.name);

      if (state.cartItems[productIndex].cartQuantity > 1) {
        state.cartItems[productIndex].cartQuantity -= 1;

        toast.warning(`${action.payload.name} is decremented by 1.`, {
          position: "bottom-left",
          autoClose: 900,
          delay: 0
        });
      } else if (state.cartItems[productIndex].cartQuantity === 1) {
        const updatedCartItems = state.cartItems.filter(item => item.name !== action.payload.name);
        state.cartItems = updatedCartItems;

        toast.error(`${action.payload.name} is deleted from cart.`, {
          position: "bottom-left",
          autoClose: 900,
          delay: 0
        });
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    getAmount: (state, action) => {
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