import { call, takeLatest } from "redux-saga/effects";
import { addNewUser } from "./userApiHandler";
import userActionConstants from "./userConstants";

function* registerNewUser(action) {
  try {
    const response = yield call(addNewUser, action.payload);
    console.log("success response is", response);
  } catch (error) {
    console.log("error is ", error);
  }
}

function* userSaga() {
  yield takeLatest(userActionConstants.REGISTER_NEW_USER, registerNewUser);
}

export default userSaga;
