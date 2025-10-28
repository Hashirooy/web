import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getProfileValidateErrors = (state: StateSchema) => {
  return state.profile?.validateError;
};
