import { configureStore } from "@reduxjs/toolkit"
import usersReducer from "../action/usersSlice"
import userLoginReducer from "../action/userLoginSlice.js"
import cartReducer from "../action/cartSlice"

export const store = configureStore({
  reducer: {
    users: usersReducer,
    userLogin:userLoginReducer,
    cart:cartReducer
  },
})