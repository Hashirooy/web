import { loginSchema } from "feathures/AuthByUsername";
import { CounterSchema } from "app/entities/Counter";
import { userSchema } from "app/entities/User";
import {
  AnyAction,
  CombinedState,
  EnhancedStore,
  Reducer,
  ReducersMapObject,
} from "@reduxjs/toolkit";

export interface StateSchema {
  counter: CounterSchema;
  user: userSchema;

  //Асинхронные
  loginForm?: loginSchema;
}
export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
}
export type StateSchemaKey = keyof StateSchema;

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager;
}
