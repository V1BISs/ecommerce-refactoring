import { useCallback, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setLoading, setProducts } from "store"
import { mockProducts } from "./mocks"
import { addToCartAction } from "store"


export const useInit = () => {
  const dispatch = useDispatch()
  const products = useSelector((state) => state.app.products)
  const loading = useSelector((state) => state.app.loading)

  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [sortBy, setSortBy] = useState('name')
  const [showFilters, setShowFilters] = useState(false)

  const handleSearchChange = useCallback((e) => setSearchTerm(e.target.value), [setSearchTerm]);
  const handleCategoryChange = useCallback((e) => setSelectedCategory(e.target.value), [setSelectedCategory]);
  const handleSortChange = useCallback((e) => setSortBy(e.target.value), [setSortBy]);
  const handleToggleFilters = useCallback(() => setShowFilters((prevState) => !prevState), [setShowFilters])
  const handleAddToCartClick = useCallback((product) => {
    dispatch(addToCartAction(product))
  }, [dispatch])

  useEffect(() => {
    dispatch(setLoading(true))
    setTimeout(() => {
      dispatch(setProducts(mockProducts))
      dispatch(setLoading(false))
    }, 1000)
  }, [dispatch])

  return {
    products,
    loading,
    searchTerm,
    selectedCategory,
    sortBy,
    showFilters,
    handleSearchChange,
    handleCategoryChange,
    handleSortChange,
    handleToggleFilters,
    handleAddToCartClick,
  }
}
