import { StateSchema } from "app/providers/StoreProvider";

export const getArticleErrorSelector = (state:StateSchema) => state.articlesPage?.error;