import { StateSchema } from "app/providers/StoreProvider";

export const getArticalCommentsIsLoading = (state:StateSchema) => state.articleDetailsComments?.isLoading || false;
export const getArticalCommentsError = (state:StateSchema) => state.articleDetailsComments?.error;