import { StateSchema } from "app/providers/StoreProviders/config/StateSchema";

export const getCounter = (state: StateSchema) => {
  return state.counter;
};
