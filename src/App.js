import Navbar from "./components/Navbar"
import SignUp from "./pages/Signup"
import Landing from "./pages/Landing"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./pages/Login"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import Checkout from "./pages/Checkout"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/home' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer
        position='top-center'
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='colored'
      />
    </div>
  )
}

export default App
