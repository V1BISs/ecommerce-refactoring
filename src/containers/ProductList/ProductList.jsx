import { useInit } from "./hooks"
import { Search } from "./Search"
import { FilterControls } from "./FilterControls"
import { ProductCard } from "./ProductCard"

export const ProductList = () => {
  const {
    loading,
    products,
    searchTerm,
    selectedCategory,
    showFilters,
    sortBy,
    handleCategoryChange,
    handleSearchChange,
    handleSortChange,
    handleToggleFilters,
    handleAddToCartClick,
  } = useInit()

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory
    return matchesSearch && matchesCategory
  }).sort((a, b) => {
    if (sortBy === 'name') return a.name.localeCompare(b.name)
    if (sortBy === 'price') return a.price - b.price
    return
  })

  if (loading) {
    <div className="loading"> Загрузка товаров... </div>
  }

  return (
    <div className="product-list">
      <div className="filters">
        <Search placeholder={'поиск'} searchTerm={searchTerm} handleSearchChange={handleSearchChange} />
        <FilterControls selectedCategory={selectedCategory}
          handleCategoryChange={handleCategoryChange}
          sortBy={sortBy}
          handleSortChange={handleSortChange}
          showFilters={showFilters}
          handleToggleFilters={handleToggleFilters} />
      </div>

      <div className="products">
        {filteredProducts.map(product => (
          <ProductCard product={product} key={product.id} handleClick={handleAddToCartClick} />
        ))}
      </div>
    </div>
  )
}
