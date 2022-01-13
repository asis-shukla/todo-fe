import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loggedInUser: null,
  addNewUserStatus: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLoggedInUser: (state, action) => {
      state.loggedInUser = action.payload;
    },
    setAddNewUserStatus: (state, action) => {
      state.addNewUserStatus = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setLoggedInUser, setAddNewUserStatus, resetAddNewUserStatus } =
  userSlice.actions;

export default userSlice.reducer;
