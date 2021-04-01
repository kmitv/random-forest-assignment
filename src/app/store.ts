// import { NavigationState } from "../components/Menu/reducer";

import { configureStore } from "@reduxjs/toolkit";

export interface ApplicationState {
  // navigation: NavigationState;
}

export default configureStore({
  reducer: {
    // navigation: navigationReducer
  }
});
