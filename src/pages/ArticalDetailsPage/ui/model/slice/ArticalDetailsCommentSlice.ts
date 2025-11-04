import {
    createEntityAdapter,
    createSlice, PayloadAction,
} from '@reduxjs/toolkit';

import { Comment } from 'entities/Comment';
import { StateSchema } from 'app/providers/StoreProvider';

import { ArticleDetailsCommentsSchema } from '../types/ArticaleDetailsCommentSchema';
import { fetchCommentByArtical } from '../services/fetchCommentByArtical';

const commentsAdapter = createEntityAdapter<Comment>({
    selectId: (comment) => comment.id,
});

export const getArticleComments = commentsAdapter.getSelectors<StateSchema>(
    (state) => state.articleDetailsComments || commentsAdapter.getInitialState(),
);

const articleDetailsCommentsSlice = createSlice({
    name: 'articleDetailsCommentsSlice',
    initialState: commentsAdapter.getInitialState<ArticleDetailsCommentsSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
    }),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCommentByArtical.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchCommentByArtical.fulfilled, (
                state,
                action: PayloadAction<Comment[]>,
            ) => {
                state.isLoading = false;
                commentsAdapter.setAll(state, action.payload);
            })
            .addCase(fetchCommentByArtical.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { reducer: articleDetailsCommentsReducer } = articleDetailsCommentsSlice;
