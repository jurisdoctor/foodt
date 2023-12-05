import { createSelector } from "@reduxjs/toolkit";

export const selectCartItems = (state) => state.cart.items;

export const selectCartItemsById = createSelector(
  [(state) => state.cart.items, (state, id) => id],
  (items, id) => items.filter((item) => item.id === id)
);

export const selectCartTotal = (state) =>
  state.cart.items.reduce((total, item) => (total = total + item.price), 0);
