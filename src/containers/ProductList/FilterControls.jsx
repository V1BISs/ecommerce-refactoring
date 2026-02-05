export const FilterControls = ({
  selectedCategory,
  sortBy,
  showFilters,
  handleCategoryChange,
  handleSortChange,
  handleToggleFilters
}) => {
  return (
    <div className="filter-controls">
      <select value={selectedCategory} onChange={handleCategoryChange}>
        <option value="all">Все категории</option>
        <option value="phones">Телефоны</option>
        <option value="laptops">Ноутбуки</option>
        <option value="tablets">Планшеты</option>
      </select>
      <select value={sortBy} onChange={handleSortChange}>
        <option value="name">По названию</option>
        <option value="price">По цене</option>
      </select>
      <button onClick={handleToggleFilters}>
        {showFilters ? 'Скрыть фильтры' : 'Показать фильтры'}
      </button>
    </div>
  );
}

