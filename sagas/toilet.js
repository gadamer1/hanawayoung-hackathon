import { all, fork, takeLatest, put, call } from "redux-saga/effects";
import axios from "axios";
import {
  GET_TOILETS_REQUEST,
  GET_TOILETS_SUCCESS,
  GET_TOILETS_FAILURE,
  POST_REVIEW_REQUEST,
  POST_REVIEW_SUCCESS,
  POST_REVIEW_FAILURE
} from "../reducers/toilet/actions";

function getToiletsAPI(data) {
  return axios.get(
    `/restrooms?y_wgs84=${data.latitude}&x_wgs84=${data.longitude}`
  );
}

function* getToilets(action) {
  try {
    const Toilets = yield call(getToiletsAPI, action.data);
    yield put({
      type: GET_TOILETS_SUCCESS,
      data: Toilets.data.restrooms
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

// 리뷰 포스팅

function postReviewAPI(data) {
  return axios.post(`/restrooms/${data._id}/reviews`, {
    rating: data.rating,
    content: data.content
  });
}

function* postReview(action) {
  try {
    // const Toilets = yield call(postReviewAPI, action.data);
    yield put({
      type: POST_REVIEW_SUCCESS,
      // data: Toilets.data.restrooms
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: POST_REVIEW_FAILURE,
      error: e
    });
  }
}

function* watchPostReview() {
  yield takeLatest(POST_REVIEW_REQUEST, postReview);
}

export default function* userSaga() {
  yield all([fork(watchGetToilets)]);
}
