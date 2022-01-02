import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./modules/todo/todoSlice";
import createSagaMiddleware from "redux-saga";
import mySaga from "./sagas";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

// then run the saga
sagaMiddleware.run(mySaga);
