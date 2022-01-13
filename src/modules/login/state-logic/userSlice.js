import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loggedInUser: null
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLoggedInUser: (state, action) => {
      state.loggedInUser = action.payload;
    },   
  },
});

// Action creators are generated for each case reducer function
export const { setLoggedInUser } = userSlice.actions

export default userSlice.reducer;
