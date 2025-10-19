import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { loginSchema } from "../type/loginSchema";
import { loginByUsername } from "../service/loginByUsername/loginByUsername";

const initialState: loginSchema = {
  isLoading: false,
  password: "",
  username: "",
};

export const LoginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setUsername: (state, actions: PayloadAction<string>) => {
      state.username = actions.payload;
    },

    setPassword: (state, actions: PayloadAction<string>) => {
      state.password = actions.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginByUsername.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(loginByUsername.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(loginByUsername.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: LoginActions } = LoginSlice;
export const { reducer: LoginReducer } = LoginSlice;
