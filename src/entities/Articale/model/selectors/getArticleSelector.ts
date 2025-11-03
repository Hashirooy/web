import { StateSchema } from "app/providers/StoreProvider";

export const getArticleSelectorData = (state: StateSchema) => state.articalDetails?.data;

export const getArticleSelectorIsloading = (state: StateSchema) => state.articalDetails?.isLoading;

export const getArticleSelectorErorr = (state: StateSchema) => state.articalDetails?.error;