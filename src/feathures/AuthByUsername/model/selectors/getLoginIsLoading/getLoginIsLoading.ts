import { StateSchema } from "app/providers/StoreProviders";

export const getLoginIsLoading = (state: StateSchema) => {
  return state?.loginForm?.isLoading || false;
};
