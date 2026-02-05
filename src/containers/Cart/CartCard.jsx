import { useCallback } from "react"
import { useInitCart } from "./hooks"

export const CartCard = ({item}) => {
    const { handleUpdateQuantity, handleRemoveItem } = useInitCart()
    const onPlusClick = useCallback(() => handleUpdateQuantity(item.id, item.quantity + 1), [handleUpdateQuantity, item])
    const onMinusClick = useCallback(() => handleUpdateQuantity(item.id, item.quantity - 1), [handleUpdateQuantity, item])
    const onDeleteClick = useCallback(() => handleRemoveItem(item.id), [handleRemoveItem, item])
    return (
        <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} />
            <div className="item-details">
                <h4>{item.name}</h4>
                <p>${item.price}</p>
                <div className="quantity-controls">
                    <button onClick={onMinusClick}>
                        -
                    </button>
                    <span>{item.quantity}</span>
                    <button onClick={onPlusClick}>
                        +
                    </button>
                </div>
            </div>
            <button
                className="remove-btn"
                onClick={onDeleteClick}
            >
                Удалить
            </button>
        </div>
    )
}