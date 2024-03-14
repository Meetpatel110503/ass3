import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { toast } from "react-toastify"
import { addToCart } from "../redux/action/cartSlice"

function ProductList({ products }) {
  const cart = useSelector((state) => state.cart)
  console.log("cart is", cart)
  const dispatch = useDispatch()
  const user = useSelector((store) => store.userLogin.userLogin)

  return (
    <div className='flex flex-wrap justify-between p-3'>
      {products &&
        products.length > 0 &&
        products.map((product) => (
          <div
            className='p-3 mt-3 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'
            style={{ width: "20rem" }}
          >
            <img
              className='rounded-t-lg h-56'
              src={product.image}
              alt='Card image cap'
            />

            <div className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
              <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                {product.title}
              </h5>
              <p className='text-gray-600 text-base mb-2'>{product.category}</p>
              <p className='text-gray-600 text-base mb-2'>
                Rating: {product.rating.rate}
              </p>
              <p className='text-gray-600 text-base mb-2'>
                Price: {product.price}
              </p>
              {user && (
                <button
                  type='button'
                  className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2'
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
                  Add to Cart
                </button>
              )}
            </div>
          </div>
        ))}
    </div>
  )
}

export default ProductList
