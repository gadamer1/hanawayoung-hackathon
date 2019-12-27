import { all, fork } from "redux-saga/effects";
import axios from "axios";

import userSaga from "./user";
import toiletSaga from "./toilet";

axios.defaults.baseURL = "http://54.180.101.221:4000";

export default function* rootSaga() {
  yield all([fork(userSaga), fork(toiletSaga)]);
}
