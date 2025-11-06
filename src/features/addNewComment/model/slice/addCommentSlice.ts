import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AddCommentFormSchema } from '../types/addCommentForm';


const initialState: AddCommentFormSchema = {
    isLoading: false,
    text: '',
    error: undefined,

};

export const addCommentSlice = createSlice({
    name: 'addComment',
    initialState,
    reducers: {
        setText: (state, actions:PayloadAction<string>) => {
            state.text = actions.payload;
        }
    },
    extraReducers: (builder) => {
      
    },
});

// Action creators are generated for each case reducer function
export const { actions: addCommentSliceActions } = addCommentSlice;
export const { reducer: addCommentSliceReducer } = addCommentSlice;
