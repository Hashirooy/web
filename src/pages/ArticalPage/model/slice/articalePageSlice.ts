import {
    createEntityAdapter,
    createSlice, PayloadAction,
} from '@reduxjs/toolkit';

import { Comment } from 'entities/Comment';
import { StateSchema } from 'app/providers/StoreProvider';
import { ArticalPageSchema } from '../types/ArticalPageSchema';
import { Article, ArticleView } from 'entities/Articale';
import { fetchArticalPage } from '../services/fetchArticalPage';
import { ARTICLE_VIEW_LOCALSTORAGE_KEY } from 'shared/const/localstorage';



const articalesAdapter = createEntityAdapter<Article>({
    selectId: (article) => article.id,
});

export const getArticalPage = articalesAdapter.getSelectors<StateSchema>(
    (state) => state.articlesPage || articalesAdapter.getInitialState(),
);

const articalPageSlice = createSlice({
    name: 'articalPageSlice',
    initialState: articalesAdapter.getInitialState<ArticalPageSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
        view: ArticleView.TILE,
    }),
    reducers: {
        setView:(state, actions:PayloadAction<ArticleView>) => {
            state.view = actions.payload;
            localStorage.setItem(ARTICLE_VIEW_LOCALSTORAGE_KEY, actions.payload);
        },
        initState: (state) => {
            state.view = localStorage.getItem(ARTICLE_VIEW_LOCALSTORAGE_KEY) as ArticleView;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticalPage.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchArticalPage.fulfilled, (
                state,
                action: PayloadAction<Article[]>,
            ) => {
                state.isLoading = false;
                articalesAdapter.setAll(state, action.payload);
            })
            .addCase(fetchArticalPage.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { reducer: articalPageSliceReducer } = articalPageSlice;
export const { actions: articalPageSliceActions } = articalPageSlice;