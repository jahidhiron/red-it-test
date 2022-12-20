import { all, call, put, takeLatest } from "redux-saga/effects";
import httpClient from "../../utilities/Httpclient";

import {
  CHAR_LIST,
  charListRequested,
  charListSuccess,
  charListFailure,
  CHAR_DETAIL,
  charDetailRequested,
  charDetailSuccess,
  charDetailFailure,
} from "../actions/character-action-types";

export function* charList({ payload: { request, q, page, callback } }) {
  yield put(charListRequested());
  const { result, error } = yield call(httpClient, {
    data: { ...request },
    method: "get",
    url: `/characters?q=${q}&page=${page}`,
  });

  if (error) {
    yield put(charListFailure(error));
  } else {
    yield put(charListSuccess({ char: result?.data?.results }));
  }

  if (callback) callback({ error, result });

  return { error, result };
}

export function* charDetail({ payload: { request, id, callback } }) {
  yield put(charDetailRequested());
  const { result, error } = yield call(httpClient, {
    data: { ...request },
    method: "get",
    url: `/characters/${id}`,
  });

  if (error) {
    yield put(charDetailFailure(error));
  } else {
    yield put(charDetailSuccess());
  }

  if (callback) callback({ error, result });

  return { error, result };
}

function* User() {
  yield all([takeLatest(CHAR_LIST, charList)]);
  yield all([takeLatest(CHAR_DETAIL, charDetail)]);
}
export default User;
