import { all, fork, takeLatest, put, call } from "redux-saga/effects";
import axios from "axios";
import {
  GET_TOILETS_REQUEST,
  GET_TOILETS_SUCCESS,
  GET_TOILETS_FAILURE
} from "../reducers/toilet/actions";

function getToiletsAPI(data) {
  // return axio.put('/user',{data})
}

function* getToilets(action) {
  try {
    // const Toilets = yield call(getToiletsAPI, action.data);
    yield put({
      type: GET_TOILETS_SUCCESS
      //   data: Toilets
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: GET_TOILETS_FAILURE,
      error: e
    });
  }
}

function* watchGetToilets() {
  yield takeLatest(GET_TOILETS_REQUEST, getToilets);
}

export default function* userSaga() {
  yield all([fork(watchGetToilets)]);
}
