import { createSlice } from "@reduxjs/toolkit";
//import ProductDetail from "../components/ProductDetail";

const initialState = {
  cart: [],
  totalQuantity: 0,
 
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action) => {
      const existingProduct = state.cart.find(
        (product) => product.id === action.payload.id
      );

      if (!existingProduct) {
        state.cart.push({...action.payload,quantity:1});
        state.totalQuantity+=1;
      }
    },
    remove: (state, action) => {
      state.totalQuantity -= 1;
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);

    },
    increment: (state, action) => {
      const { id } = action.payload;
      
      const product = state.cart.find((item) => item.id === parseInt(id));
      if (product) {

        product.quantity+=1;
      }

      //console.log(state.value,"true")
    },
    decrement: (state, action) => {
      const { id } = action.payload;
      const product = state.cart.find((item) => item.id === parseInt(id));
      if (product && product.quantity > 0) {
        product.quantity -= 1;

      }
    },
  },
});
export const { add, remove, increment, decrement } = cartSlice.actions;
export default cartSlice.reducer;
