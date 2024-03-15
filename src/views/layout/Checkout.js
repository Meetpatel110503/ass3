import React from "react"
import { Link } from "react-router-dom"

const Checkout = () => {
  return (
    <div>
      <div className=" flex justify-center item-center">
        <figure className='max-w-lg p-5 mt-10'>
          <img
            className=' max-w-full rounded-lg'
            src='https://img.freepik.com/premium-vector/order-confirmed-concept-illustration_353829-159.jpg'
            alt='image description'
          />
          <Link to="/home" className="text-blue-500 p-5 m-5">
                Go to home page....
            </Link>
        </figure>
      </div>
    </div>
  )
}

export default Checkout
