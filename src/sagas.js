import { all } from "redux-saga/effects";
import todoSaga from "./modules/todo/todosaga";

function* rootSaga() {
  yield all([todoSaga()]);
}

export default rootSaga;
