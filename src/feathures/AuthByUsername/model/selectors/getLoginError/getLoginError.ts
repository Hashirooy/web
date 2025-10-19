import { StateSchema } from "app/providers/StoreProviders";

export const getLoginError = (state: StateSchema) => {
  return state?.loginForm?.error || "";
};
