import { all, fork } from "redux-saga/effects";

import character from "./character";

export default function* rootSaga() {
  yield all([fork(character)]);
}
