import React, { useState, useEffect } from "react"
import axios from "axios"
import ProductList from "./ProductList"
import CategoryList from "./CategoryList"
import Loader from "../components/Loader"

function Home() {
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [sortOrder, setSortOrder] = useState("asc")
  const [currentPage, setCurrentPage] = useState(1)
  const [loading, setLoading] = useState(true)
  const [searchKey, setSearchKey] = useState("")

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true)
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products?sort=${sortOrder}`
        )
        setProducts(response.data)
      } catch (error) {
        console.error("Error fetching products:", error)
      }
      setLoading(false)
    }

    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "https://fakestoreapi.com/products/categories"
        )
        setCategories(response.data)
      } catch (error) {
        console.error("Error fetching categories:", error)
      }
    }

    fetchProducts()
    fetchCategories()
  }, [sortOrder])

  const handleCategoryChange = (category) => {
    setSelectedCategory(category)
  }

  const handleSortOrderChange = (e) => {
    setSortOrder(e.target.value)
  }

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  const handleSearchInputChange = (e) => {
    setSearchKey(e.target.value)
  }

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products

  const searchedProducts = searchKey
    ? filteredProducts.filter((product) =>
        product.title.toLowerCase().includes(searchKey.toLowerCase())
      )
    : filteredProducts

  return (
    <div className='h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800'>
      <div className='flex'>
        <div className='w-1/3'>
          <CategoryList
            categories={categories}
            onSelectCategory={handleCategoryChange}
          />
        </div>

        <div className='w-3/4 pl-8'>
          <div className='m-4'>
            <label htmlFor='sortOrder' className='mr-2 font-extrabold'>
              Sorting:
            </label>
            <select
              id='sortOrder'
              value={sortOrder}
              onChange={handleSortOrderChange}
              className='border rounded-lg'
            >
              <option
                value='desc'
                className='block px-4 py-2 hover:bg-gray-100'
              >
                Descending
              </option>
              <option className='block px-4 py-2 hover:bg-gray-100' value='asc'>
                Ascending
              </option>
            </select>
          </div>
          <div className='m-4'>
          <label htmlFor='sortOrder' className='mr-2 font-extrabold'>
              Searching:
            </label>
            <input
              type='text'
              placeholder='Search products'
              value={searchKey}
              onChange={handleSearchInputChange}
              className='border rounded-lg px-4 py-2'
            />
          </div>
          {loading ? <Loader /> : <ProductList products={searchedProducts} />}
          <div className='flex justify-center mt-4'>
            <button
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-2'
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Prev
            </button>
            <button
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'
              onClick={() => handlePageChange(currentPage + 1)}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
