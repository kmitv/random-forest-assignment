import { FavoritesState, favoritesReducer } from "./../components/List/reducer";

import { configureStore } from "@reduxjs/toolkit";

export interface ApplicationState {
  favorites: FavoritesState;
}

export default configureStore({
  reducer: {
    favorites: favoritesReducer
  }
});
