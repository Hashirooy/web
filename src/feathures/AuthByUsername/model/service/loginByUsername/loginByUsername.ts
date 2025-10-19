import { createAsyncThunk } from "@reduxjs/toolkit";
import { User, userActions } from "app/entities/User";
import axios from "axios";
import { USER_LOCALSTORAGE_KEY } from "shared/const/localStorage";
import { json } from "stream/consumers";
export interface loginByUsernamProps {
  username: string;
  password: string;
}
export const loginByUsername = createAsyncThunk<User, loginByUsernamProps, { rejectValue: string }>(
  "login/LogibByUsername",
  async (cred: loginByUsernamProps, thunkAPI) => {
    try {
      const response = await axios.post("http://localhost:8000/login", cred);
      if (!response.data) {
        throw new Error();
      }
      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
      thunkAPI.dispatch(userActions.setAuthData(response.data));
      return response.data;
    } catch (e) {
      console.log(e);
      return thunkAPI.rejectWithValue("error");
    }
  },
);
