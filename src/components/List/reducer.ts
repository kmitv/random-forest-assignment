import {
  addToFavorites,
  removeFromFavorites,
  replaceFavorites
} from "./actions";

import { ApplicationState } from "../../app/store";
import { JobPosting } from "../../models/JobPosting";
import { createReducer } from "@reduxjs/toolkit";

export interface FavoritesState {
  favoritesList: Array<JobPosting>;
}

const initialState: FavoritesState = { favoritesList: [] };

export const favoritesReducer = createReducer(initialState, builder => {
  builder
    .addCase(addToFavorites, (state, action) => {
      const newFavoritesList = [...state.favoritesList, action.payload];
      return { ...state, favoritesList: newFavoritesList };
    })
    .addCase(removeFromFavorites, (state, action) => {
      return {
        favoritesList: state.favoritesList.filter(x => x.id !== action.payload)
      };
    })
    .addCase(replaceFavorites, (state, action) => {
      return {
        favoritesList: action.payload
      };
    });
});

export const favoritesSelector = (state: ApplicationState) =>
  state.favorites.favoritesList;
