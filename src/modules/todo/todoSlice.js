import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoList: {
    data: [],
    error: null,
    isLoading: false,
  },
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    fetchToDoList: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.todoList.data.push(
        {
          id: 34,
          todo: "one two three",
          done: false,
        });
    },
    addToDoInList: (state, action) => {
      console.log("action is ", action);
      state.todoList.data.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { fetchToDoList, addToDoInList } = todoSlice.actions;

export default todoSlice.reducer;
