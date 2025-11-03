import { Article } from "entities/Articale";

export interface ArticalDetailsSchema  {
    isLoading: boolean,
    error?: string,
    data?: Article,
}