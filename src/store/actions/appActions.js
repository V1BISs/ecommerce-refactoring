import { createAction } from '@reduxjs/toolkit'

export const addToCartAction = createAction('app/addToCart')
export const removeFromCartAction = createAction('app/removeFromCart')
export const updateQuantityAction = createAction('app/updateQuantity')
export const clearCartAction = createAction('app/clearCart')

