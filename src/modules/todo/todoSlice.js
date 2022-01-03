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
    fetchToDoList: (state, action) => {
      state.todoList.data = action.payload;
    },
    addToDoInList: (state, action) => {
      state.todoList.data.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { fetchToDoList, addToDoInList } = todoSlice.actions;

export default todoSlice.reducer;
