import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoList: {
    data: [],
    error: null,
    isLoading: false,
  },
  isTodoListLoading: false,
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
    updateTodo: (state, action) => {
      const responsePayload = action.payload;
      const newTodoDataList = state.todoList.data.map((item) => {
        if (item._id === responsePayload._id) {
          return responsePayload;
        } else {
          return item;
        }
      });
      state.todoList.data = newTodoDataList;
    },
    todoListLoading: (state, action) => {
      state.isTodoListLoading = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { fetchToDoList, addToDoInList, updateTodo, todoListLoading } =
  todoSlice.actions;

export default todoSlice.reducer;
