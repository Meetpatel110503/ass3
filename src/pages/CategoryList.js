import React from "react"

function CategoryList({ categories, onSelectCategory }) {
  return (
    <div className='h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800'>
      <h1 className='space-y-2 font-extrabold m-2'>Categories</h1>
      <ul className='space-y-2 font-medium'>
        <li
          onClick={() => onSelectCategory(null)}
          className='flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group'
        >
          All
        </li>
        {categories.map((category) => (
          <li
            className='flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group'
            key={category}
            onClick={() => onSelectCategory(category)}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CategoryList
