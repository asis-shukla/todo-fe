import { all } from "redux-saga/effects";
import todoSaga from "./modules/todo/todosaga";
import userSaga from "./modules/login/state-logic/userSaga";

function* rootSaga() {
  yield all([todoSaga(), userSaga()]);
}

export default rootSaga;
