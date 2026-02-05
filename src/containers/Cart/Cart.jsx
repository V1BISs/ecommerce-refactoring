import { useInitCart } from "./hooks"
import { CartCard } from "./CartCard"

export const Cart = () => {
  const { 
    cart,
    cartCount,
    totalPrice,
    isOpen,  
    showCheckout, 
    handleCheckout,
    onClickCartToggle,
  } = useInitCart()

  return (
    <div className="cart">
      <button
        className="cart-toggle"
        onClick={onClickCartToggle}
      >
        Корзина ({cartCount})
      </button>

      {isOpen && (
        <div className="cart-dropdown">
          <div className="cart-header">
            <h3>Корзина</h3>
            <button onClick={onClickCartToggle}>×</button>
          </div>

          <div className="cart-items">
            {cart.length === 0 ? (
              <p>Корзина пуста</p>
            ) : (
              cart.map(item => (<CartCard item={item} key={item.id}/>))
            )}
          </div>

          <div className="cart-footer">
            <div className="total">Итого: ${totalPrice}</div>
            <button
              className="checkout-btn"
              onClick={handleCheckout}
              disabled={cart.length === 0 || showCheckout}
            >
              {showCheckout ? 'Оформляем...' : 'Оформить заказ'}
            </button>
          </div>
        </div>
      )}
    </div>
  )

}
