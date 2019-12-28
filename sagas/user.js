import { all, fork, takeLatest, put, call } from "redux-saga/effects";
import axios from "axios";

import {
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGIN_REQUEST,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE
} from "../reducers/user/actions";

function loginAPI(data) {
  return axios.post("/auth/login", data);
}

function* login(action) {
  try {
    const User = yield call(loginAPI, action.data);
    yield put({
      type: LOGIN_SUCCESS,
      data: User.data
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: LOGIN_FAILURE,
      error: e
    });
  }
}

function* watchLogin() {
  yield takeLatest(LOGIN_REQUEST, login);
}

function signUpAPI(data) {
  return axios.post("/auth/register", data);
}

function* signUp(action) {
  try {
    const User = yield call(signUpAPI, action.data);
    yield put({
      type: SIGN_UP_SUCCESS, // put == dispatch
      data: User.data
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: SIGN_UP_FAILURE,
      error: e
    });
  }
}

function* watchSignUp() {
  yield takeLatest(SIGN_UP_REQUEST, signUp);
}

export default function* userSaga() {
  yield all([fork(watchLogin), fork(watchSignUp)]);
}
