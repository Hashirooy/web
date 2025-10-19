import { StateSchema } from "app/entities/Counter";
import { createSlice } from "@reduxjs/toolkit";

export const getUserAuthData = (state: StateSchema) => {
  return state.user.authData;
};
