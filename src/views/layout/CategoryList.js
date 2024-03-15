import React, { useState } from "react"

function CategoryList({ categories, onSelectCategory }) {
  const [selectedCategory, setSelectedCategory] = useState(null)

  const handleCategoryClick = (category) => {
    setSelectedCategory(category)
    onSelectCategory(category)
  }

  return (
    <div className=' px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800'>
      <h1 className='space-y-2 font-extrabold m-2'>Categories</h1>
      <ul className='space-y-2 font-medium'>
        <li
          onClick={() => handleCategoryClick(null)}
          className={`flex items-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 group ${
            selectedCategory === null ? "text-blue-500" : "text-gray-900"
          }`}
        >
          All
        </li>
        {categories.map((category) => (
          <li
            key={category}
            onClick={() => handleCategoryClick(category)}
            className={`flex items-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 group ${
              selectedCategory === category ? "text-blue-500" : "text-gray-900"
            }`}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CategoryList
