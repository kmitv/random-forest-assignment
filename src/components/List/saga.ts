import {
  ADD_TO_FAVORITES,
  REMOVE_FROM_FAVORITES,
  REPLACE_FAVORITES
} from "./actions";
import { put, select, takeEvery } from "redux-saga/effects";

import { INITIALIZE_APP } from "../../app/rootSaga";
import { JobPosting } from "../../models/JobPosting";
import { favoritesSelector } from "./reducer";

export function* favoritesSaga() {
  yield takeEvery(ADD_TO_FAVORITES, saveFavoritesToLocalStorage);
  yield takeEvery(REMOVE_FROM_FAVORITES, saveFavoritesToLocalStorage);
  yield takeEvery(INITIALIZE_APP, getFavoritesFromLocalStorage);
}

function* saveFavoritesToLocalStorage() {
  const favoritesList: JobPosting[] = yield select(favoritesSelector);
  const serializedFavoritesList: string = yield JSON.stringify(favoritesList);
  yield localStorage.setItem("favoritesList", serializedFavoritesList);
}

function* getFavoritesFromLocalStorage() {
  const retrievedFavoritesList = localStorage.getItem("favoritesList");
  const parsedFavoritesList: JobPosting[] = !!retrievedFavoritesList
    ? JSON.parse(retrievedFavoritesList)
    : [];

  yield put({ type: REPLACE_FAVORITES, payload: parsedFavoritesList });
}
