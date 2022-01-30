import { call, put, takeLatest } from "redux-saga/effects";
import {
  fetchToDoData,
  addToDoData,
  deleteAllToDos,
  updateTodoCall,
} from "./todoApiHandler";
import {
  fetchToDoList,
  addToDoInList,
  updateTodo,
  todoListLoading,
} from "./todoSlice";
import { todoActionConstansts } from "./todoActionConstansts";

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchToDos(action) {
  try {
    yield put(todoListLoading(true));
    const todoData = yield call(fetchToDoData);
    yield put(fetchToDoList(todoData));
    yield put(todoListLoading(false));
  } catch (err) {
    throw console.error(err);
  }
}

function* addToDo(action) {
  try {
    yield put(todoListLoading(true));
    const response = yield call(addToDoData, action.payload);
    yield put(addToDoInList(response));
    yield put(todoListLoading(false));
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

function* updateSingletodo(action) {
  const response = yield call(updateTodoCall, action.payload, action.id);
  if (!response.error) {
    yield put(updateTodo(response));
  } else {
    console.error("response error is", response);
  }
}

function* todoSaga() {
  yield takeLatest(todoActionConstansts.TODO_FETCH_REQUESTED, fetchToDos);
  yield takeLatest(todoActionConstansts.ADD_NEW_TODO, addToDo);
  yield takeLatest(todoActionConstansts.DELETE_ALL_TODOS, deleteAllTodos);
  yield takeLatest(todoActionConstansts.UPDATE_SINGLE_TODO, updateSingletodo);
}

export default todoSaga;
