import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ArticalDetailsSchema } from '../types/ArticalDetailsSchema';
import { fetchArticleById } from '../services/fetchArticalById/fetchArticalById';
import { Article } from '../types/Article';

const initialState: ArticalDetailsSchema = {
  isLoading: false,
  error: undefined,
  data: undefined,
};

export const ArticalDetailsSlice = createSlice({
    name: 'ArticalDetailsSchema',
    initialState,
    reducers: {
 
    },
    extraReducers: (builder) => {
        builder
          .addCase(fetchArticleById.pending, (state) => {
            state.error = undefined;
            state.isLoading = true;
          })
          .addCase(fetchArticleById.fulfilled, (state, action: PayloadAction<Article>) => {
            state.isLoading = false;
            state.data = action.payload;
          })
          .addCase(fetchArticleById.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
          })
      },
});

// Action creators are generated for each case reducer function
export const { actions: ArticalDetailsActions } = ArticalDetailsSlice;
export const { reducer: ArticalDetailsReducer } = ArticalDetailsSlice;