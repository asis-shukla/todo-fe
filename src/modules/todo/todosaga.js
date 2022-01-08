import { call, put, takeLatest } from "redux-saga/effects";
import {
  fetchToDoData,
  addToDoData,
  deleteAllToDos,
} from "../../apiHandlers/api";
import { fetchToDoList, addToDoInList } from "./todoSlice";
import { todoActionConstansts } from "./todoActionConstansts";

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

function* deleteAllTodos(action) {
  try {
    const response = yield call(deleteAllToDos);
    console.log(response);
    if (response.deletedCount) {
      yield put(fetchToDoList([]));
    }
  } catch (error) {
    throw console.error(error);
  }
}

function* todoSaga() {
  yield takeLatest(todoActionConstansts.TODO_FETCH_REQUESTED, fetchToDos);
  yield takeLatest(todoActionConstansts.ADD_NEW_TODO, addToDo);
  yield takeLatest(todoActionConstansts.DELETE_ALL_TODOS, deleteAllTodos);
}

export default todoSaga;
