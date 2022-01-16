import { call, put, takeLatest } from "redux-saga/effects";
import { addNewUser } from "./userApiHandler";

import userActionConstants from "./userConstants";
import { setAddNewUserStatus } from "./userSlice";

function* registerNewUser(action) {
  const response = yield call(addNewUser, action.payload);
  if (!response.error) {
    yield put(setAddNewUserStatus(response));
  } else {
    yield put(setAddNewUserStatus(response));
  }
}

function* userSaga() {
  yield takeLatest(userActionConstants.REGISTER_NEW_USER, registerNewUser);
}

export default userSaga;
