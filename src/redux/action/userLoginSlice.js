import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  userLogin: [],
}

export const userLoginSlice = createSlice({
  name: "userLogin",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.userLogin[0] = action.payload
    },
    removeUser: (state) => {
      state.userLogin.pop()
    },
  },
})

export const { addUser, removeUser } = userLoginSlice.actions

export default userLoginSlice.reducer
