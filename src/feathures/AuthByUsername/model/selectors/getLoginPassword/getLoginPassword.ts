import { StateSchema } from "app/providers/StoreProviders";

export const getLoginPassword = (state: StateSchema) => {
  return state?.loginForm?.password || "";
};
