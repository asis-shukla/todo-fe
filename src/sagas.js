import { call, put, takeLatest } from 'redux-saga/effects'
import {fetchToDoData} from "./apiHandlers/api";
import { fetchToDoList } from './modules/todo/todoSlice';


// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchUser(action) {
   try {
      const todoData = yield call(fetchToDoData);
      yield put(fetchToDoList(todoData));
   } catch (e) {
      yield put(fetchToDoData());
   }
}


function* mySaga() {
  yield takeLatest("TODO_FETCH_REQUESTED", fetchUser);
}

export default mySaga;