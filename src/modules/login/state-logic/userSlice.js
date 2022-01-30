import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loggedInUser: null,
  addNewUserStatus: null,
  isUserLoginLoading: false,
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
    setUserLoginLoading: (state, action) => {
      state.isUserLoginLoading = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setLoggedInUser, setAddNewUserStatus, setUserLoginLoading } =
  userSlice.actions;

export default userSlice.reducer;
