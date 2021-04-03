import { all, fork, put } from "redux-saga/effects";

import { favoritesSaga } from "../components/List/saga";

export const INITIALIZE_APP = "INITIALIZE_APP";

function* initialSaga() {
  yield put({ type: INITIALIZE_APP });
}

export default function* root() {
  yield all([fork(favoritesSaga), fork(initialSaga)]);
}
