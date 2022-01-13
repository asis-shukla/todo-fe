import { call, put, takeLatest } from "redux-saga/effects";
import { addNewUser } from "./userApiHandler";

import userActionConstants from "./userConstants";
import { setAddNewUserStatus } from "./userSlice";

function* registerNewUser(action) {
  try {
    const response = yield call(addNewUser, action.payload);
    console.log("success response is", response);
    yield put(setAddNewUserStatus(true));
  } catch (error) {
    console.log("error is ", error);
    yield put(setAddNewUserStatus(false));
  }
}

function* userSaga() {
  yield takeLatest(userActionConstants.REGISTER_NEW_USER, registerNewUser);
}

export default userSaga;
