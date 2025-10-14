import { counterReducer } from "app/entities/Counter";
import { StateSchema } from "./StateSchema";
import { configureStore } from "@reduxjs/toolkit";

export function createReduxStore<StateSchema>(initialState: StateSchema) {
  return configureStore({
    reducer: {
      counter: counterReducer,
    },
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });
}
