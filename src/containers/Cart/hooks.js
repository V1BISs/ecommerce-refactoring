import { useCallback, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { clearCartAction, removeFromCartAction, updateQuantityAction } from "store"

export const useInitCart = () => {
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.app.cart)
  const cartCount = useSelector((state) => state.app.cartCount)
  const totalPrice = useSelector((state) => state.app.totalPrice)

  const [isOpen, setIsOpen] = useState(false)
  const [showCheckout, setShowCheckout] = useState(false)

  const handleRemoveItem = (id) => {
    dispatch(removeFromCartAction(id)), [dispatch]
  }

  const handleUpdateQuantity = useCallback((id, quantity) => {
    if (quantity <= 0) {
      handleRemoveItem(id)
      return
    }
    dispatch(updateQuantityAction({ id, quantity }))
  }, [handleRemoveItem, dispatch]);

  const handleCheckout = useCallback(() => {
    setShowCheckout(true)
    setTimeout(() => {
      alert('Заказ оформлен!')
      dispatch(clearCartAction())
      setShowCheckout(false)
      setIsOpen(false)
    }, 1000)
  }, [setShowCheckout, dispatch, setIsOpen])

  const onClickCartToggle = useCallback(() => setIsOpen((isOpenToggle) => !isOpenToggle), [setIsOpen]);

  return {
    cart,
    cartCount,
    totalPrice,
    isOpen,
    setIsOpen,
    showCheckout,
    handleRemoveItem,
    handleUpdateQuantity,
    handleCheckout,
    onClickCartToggle,
  }
}

