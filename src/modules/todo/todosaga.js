import { call, put, takeLatest } from "redux-saga/effects";
import { fetchToDoData, addToDoData } from "../../apiHandlers/api";
import { fetchToDoList, addToDoInList } from "./todoSlice";

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchToDos(action) {
  try {
    const todoData = yield call(fetchToDoData);
    yield put(fetchToDoList(todoData));
  } catch (err) {
    throw console.error(err);
  }
}

function* addToDo(action) {
  try {
    const response = yield call(addToDoData, action.payload);
    yield put(addToDoInList(response));
  } catch (error) {
    throw console.error(error);
  }
}

function* todoSaga() {
  yield takeLatest("TODO_FETCH_REQUESTED", fetchToDos);
  yield takeLatest("ADD_TODO", addToDo);
}

export default todoSaga;
