import React from "react"
import { AiOutlineShoppingCart } from "react-icons/ai"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { removeUser } from "../redux/action/userLoginSlice"

const Navbar = () => {
  const dispatch = useDispatch()
  const user = useSelector((store) => store.userLogin.userLogin)
  const cart = useSelector((state) => state.cart)

  return (
    <div>
      <nav className='bg-white border-gray-200 dark:bg-gray-900'>
        <div className=' flex flex-wrap items-center justify-between p-3 m-3'>
          <Link
            to='/'
            className='flex items-center space-x-3 rtl:space-x-reverse'
          >
            <img
              src='https://cdn.pixabay.com/photo/2017/03/29/04/09/shopping-icon-2184065_1280.png'
              className='h-8'
              alt='shopping'
            />
            <span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>
              E-shop
            </span>
          </Link>
          <button
            data-collapse-toggle='navbar-default'
            type='button'
            className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200'
            aria-controls='navbar-default'
            aria-expanded='false'
          >
            <span className='sr-only'>Open main menu</span>
            <svg
              className='w-5 h-5'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 17 14'
            >
              <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M1 1h15M1 7h15M1 13h15'
              />
            </svg>
          </button>
          <div className='items-center justify-between hidden w-full md:block md:w-auto md:order-1 md:w-auto" id="navbar-default'>
            {user.length === 0 ? (
              <ul className='font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white'>
                <li>
                  <Link
                    to='/home'
                    className='block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0'
                    aria-current='page'
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to='/login'
                    className='block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 '
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    to='/signup'
                    className='block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0'
                  >
                    Signup
                  </Link>
                </li>
                <li>
                  <li>
                    <Link
                      to='/cart'
                      className='block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 '
                    ></Link>
                  </li>
                </li>
              </ul>
            ) : (
              <ul className='flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white '>
                <li>
                  <Link
                    to='/home'
                    className='block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 '
                    aria-current='page'
                  >
                    Home
                  </Link>
                </li>

                <li>
                  <Link
                    to='/login'
                    className='block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0'
                    onClick={() => dispatch(removeUser())}
                  >
                    Logout
                  </Link>
                </li>
                <li>
                  <Link
                    to='/cart'
                    className='text-black text-[30px] relative hover:cursor-pointer hover:opacity-80 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0'
                  >
                    <AiOutlineShoppingCart />
                    <div
                      className='absolute top-[-15px] right-[-10px] bg-red-600 w-[25px] h-[25px] rounded-full text-white text-[14px] grid place-items-center'
                      data-test='cart-item-count'
                    >
                      {cart.length}
                    </div>
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
