import { StateSchema } from "app/entities/Counter";
import { loginSchema } from "../../type/loginSchema";

export const getLoginState = (state: StateSchema) => {
  return state?.loginForm;
};
