import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  users: [],
}

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.users.push(action.payload)
    },
  },
})

export const { setUser } = usersSlice.actions

export default usersSlice.reducer
