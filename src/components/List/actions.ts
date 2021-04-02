import { JobPosting } from "../../models/JobPosting";
import { createAction } from "@reduxjs/toolkit";

export const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";
export const addToFavorites = createAction<JobPosting>(ADD_TO_FAVORITES);

export const REMOVE_FROM_FAVORITES = "REMOVE_FROM_FAVORITES";
export const removeFromFavorites = createAction<string>(REMOVE_FROM_FAVORITES);
