import { StateSchema } from "app/providers/StoreProviders";

export const getLoginUsername = (state: StateSchema) => {
  return state?.loginForm?.username || "";
};
