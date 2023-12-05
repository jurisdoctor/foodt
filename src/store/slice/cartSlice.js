import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromCart: (state, action) => {
      let newCart = [...state.items];
      const targetIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (targetIndex >= 0) {
        newCart.splice(targetIndex, 1);
      } else {
        console.log("Unable to remove item.");
      }

      state.items = newCart;
    },
    emptyCart: (state, _) => {
      state.items = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart, emptyCart } = cartSlice.actions;

export default cartSlice.reducer;
