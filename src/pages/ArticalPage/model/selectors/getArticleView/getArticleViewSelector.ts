import { StateSchema } from "app/providers/StoreProvider";
import { ArticleView } from "entities/Articale";

export const getArticleViewSelector = (state:StateSchema) => state.articlesPage?.view ||  ArticleView.LIST;