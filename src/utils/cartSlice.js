import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      //* mutating the state here..
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop();
    },
    clearCart: (state) => {
      //? RTk says either mutate the state or return a new State
      //!state =[]; You can not do this as we have to mutate but this would change the reference and also state is local variable(local copy) here and if we do it like this then it would keep these changes locally but not globally.
      // return {items :[] } also valid.
      state.items.length = 0;
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
