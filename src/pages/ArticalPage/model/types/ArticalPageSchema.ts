import { EntityState } from "@reduxjs/toolkit";
import { Article, ArticleView } from "entities/Articale";

export interface ArticalPageSchema extends EntityState<Article> {
    isLoading: boolean;
    error?: string;
    view: ArticleView;
}