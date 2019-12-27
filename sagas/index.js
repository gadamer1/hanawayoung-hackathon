import { all, fork } from "redux-saga/effects";
import axios from "axios";

import userSaga from "./user";
import toiletSaga from "./toilet";

// axios.defaults.baseURL = 'http://localhost:8080/api';

export default function* rootSaga() {
  yield all([fork(userSaga), fork(toiletSaga)]);
}
