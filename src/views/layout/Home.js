import React, { useState, useEffect } from "react"
import axios from "axios"
import ProductList from "./ProductList"
import CategoryList from "../layout/CategoryList"
import Loader from "../../components/Loader"
import { toast } from "react-toastify"

function Home() {
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [sortOrder, setSortOrder] = useState("asc")
  const [loading, setLoading] = useState(true)
  const [searchKey, setSearchKey] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage] = useState(5)

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true)
      try {
        const response = await axios.get("https://fakestoreapi.com/products")
        setProducts(response.data)
      } catch (error) {
        toast.error("Error fetching products")
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
        toast.error("Error fetching categories")
      }
    }

    fetchProducts()
    fetchCategories()
  }, [])

  const handleCategoryChange = (category) => {
    setSelectedCategory(category)
  }

  const handleSortOrderChange = (e) => {
    setSortOrder(e.target.value)
  }

  const handleSearchInputChange = (e) => {
    setSearchKey(e.target.value)
  }

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products

  const searchedProducts = searchKey
    ? filteredProducts.filter((product) =>
        product.title.toLowerCase().includes(searchKey.toLowerCase())
      )
    : filteredProducts

  const sortedProducts = [...searchedProducts].sort((a, b) => {
    if (sortOrder === "asc") {
      return a.id - b.id
    } else {
      return b.id - a.id
    }
  })

  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = sortedProducts.slice(indexOfFirstItem, indexOfLastItem)

  return (
    <div className=' px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800'>
      <div className='flex'>
        <div className='w-72'>
          <CategoryList
            categories={categories}
            onSelectCategory={handleCategoryChange}
          />
        </div>

        <div className='pl-8'>
          <div className="flex flex-col sm:flex-row sm:pl-5">
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
          </div>
          {loading ? <Loader /> : <ProductList products={currentItems} />}
          <div className='flex justify-between mt-4'>
            <button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className='bg-blue-500 text-white px-4 py-2 rounded-lg disabled:bg-gray-400 disabled:text-gray-700'
            >
              Prev
            </button>
            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={indexOfLastItem >= sortedProducts.length}
              className='bg-blue-500 text-white px-4 py-2 rounded-lg disabled:bg-gray-400 disabled:text-gray-700'
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
