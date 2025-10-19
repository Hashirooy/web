import { counterReducer } from "app/entities/Counter";
import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import { userReducer } from "app/entities/User";
import { StateSchema } from "./StateSchema";
import { LoginReducer } from "feathures/AuthByUsername/model/slice/loginSlice";
import { createReducerManager } from "./reducerManager";

export function createReduxStore(initialState: StateSchema) {
  const rootReducer: ReducersMapObject<StateSchema> = {
    counter: counterReducer,
    user: userReducer,
  };
  const reducerManager = createReducerManager(rootReducer);
  const store = configureStore({
    reducer: reducerManager.reduce,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });
  // @ts-ignore
  store.reducerManager = reducerManager;
  return store;
}
