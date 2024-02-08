import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CartType } from '../../../shared/types/CartType';

interface CartStore {
  cart?: CartType;
}

const initialState: CartStore = {
  cart: undefined,
};

export const cartSlice = createSlice({
  name: 'cartReducer',
  initialState,
  reducers: {
    setCartAction: (state, action: PayloadAction<CartType>) => {
      state.cart = action.payload;
    },
  },
});

export const { setCartAction: setCartsAction } = cartSlice.actions;

export default cartSlice.reducer;