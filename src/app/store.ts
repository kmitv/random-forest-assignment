import { FavoritesState, favoritesReducer } from "./../components/List/reducer";

import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import root from "./rootSaga";

export interface ApplicationState {
  favorites: FavoritesState;
}

const sagaMiddleware = createSagaMiddleware();

export default configureStore({
  reducer: {
    favorites: favoritesReducer
  },
  middleware: [sagaMiddleware]
});

sagaMiddleware.run(root);
