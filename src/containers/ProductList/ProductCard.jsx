import { useCallback } from "react"

export const ProductCard = ({ product, handleClick }) => {
  const onClick = useCallback(() => handleClick(product), [handleClick])
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <div className="price">${product.price}</div>
      <button
        onClick={onClick}
      >
        Добавить в корзину
      </button>
    </div>
  )
}