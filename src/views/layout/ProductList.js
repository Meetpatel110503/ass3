import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { toast } from "react-toastify"
import { addToCart } from "../../redux/action/cartSlice"
import { AiOutlineShoppingCart } from "react-icons/ai"

function ProductList({ products }) {
  const dispatch = useDispatch()
  const user = useSelector((store) => store.userLogin.userLogin)

  return (
    <div className='flex flex-wrap justify-around '>
      {products &&
        products.length > 0 &&
        products.map((product) => (
          <div
            className='p-3 mt-5 mr-5 max-w-sm bg-white border border-gray-200 rounded-lg shadow'
            style={{ width: "20rem" }}
          >
            <img
              className='rounded-t-lg h-56'
              src={product.image}
              alt='Card image cap'
            />

            <div className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
              <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900'>
                {product.title}
              </h5>
              <p className='text-gray-600 text-base mb-2'>{product.category}</p>
              <p className='text-gray-600 text-base mb-2'>
                Rating: {product.rating.rate}
              </p>
              <p className='text-gray-600 text-base mb-2'>
                Price: ${product.price}
              </p>
              {user && (
                <button
                  type='button'
                  className='flex items-center space-x-2 hover:bg-blue-800 text-white py-2 px-4 rounded bg-blue-500'
                  data-test='add-cart-btn'
                  onClick={() => {
                    if (user.length !== 0) {
                      dispatch(addToCart(product))
                      toast.success("Added to cart.")
                    } else {
                      toast.error(
                        "You are not authenticate.So login/signup first"
                      )
                    }
                  }}
                >
                  <AiOutlineShoppingCart />
                  <span>ADD TO CART</span>
                </button>
              )}
            </div>
          </div>
        ))}
    </div>
  )
}

export default ProductList
