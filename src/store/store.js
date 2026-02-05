import { configureStore, createSlice } from '@reduxjs/toolkit'
import { appReducers } from './reducers'

const initialState = {
  products: [],
  cart: [],
  user: null,
  loading: false,
  error: null,
  cartCount: 0,
  totalPrice: 0,
  cartItemsCount: 0,
  cartTotalAmount: 0,
  cartTotalSum: 0
}

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: appReducers
})

export const {
  setProducts,
  addToCart,
  removeFromCart,
  updateQuantity,
  setUser,
  setLoading,
  setError,
  clearCart
} = appSlice.actions

export const store = configureStore({
  reducer: {
    app: appSlice.reducer
  }
})

