import { combineReducers } from "@reduxjs/toolkit";
import { articleDetailsCommentsReducer } from "./articleDetailsCommentsSlice";
import { ArticleDetailsPageSchema } from "../types";
import { articleDetailsRecommendationsReducer } from "./articleDetailsRecommendation";

export const articleDetailsReducers = combineReducers<ArticleDetailsPageSchema>({
    comments: articleDetailsCommentsReducer,
    recommendations: articleDetailsRecommendationsReducer,
});