import { call, put, takeLatest } from "redux-saga/effects";
import { addNewUser, loginUser } from "./userApiHandler";

import userActionConstants from "./userConstants";
import { setAddNewUserStatus, setLoggedInUser } from "./userSlice";

function* registerNewUser(action) {
  const response = yield call(addNewUser, action.payload);
  if (!response.error) {
    yield put(setAddNewUserStatus(response));
  } else {
    yield put(setAddNewUserStatus(response));
  }
}

function* makeUserlogin(action) {
  console.log(action.payload);
  const response = yield call(loginUser, action.payload);
  if (!response?.error) {
    yield put(setLoggedInUser(response));
  } else {
    yield put(setLoggedInUser(response));
  }
}

function* userSaga() {
  yield takeLatest(userActionConstants.REGISTER_NEW_USER, registerNewUser);
  yield takeLatest(userActionConstants.GET_USER_LOGIN, makeUserlogin);
}

export default userSaga;
