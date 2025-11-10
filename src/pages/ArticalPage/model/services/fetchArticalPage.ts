import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Comment } from 'entities/Comment';
import { Article } from 'entities/Articale';

export const fetchArticalPage = createAsyncThunk<
    Article[],
    void,
    ThunkConfig<string>
    >(
        'ArticalPage/fetchArticalPage',
        async (_, thunkApi) => {
            const { extra, rejectWithValue } = thunkApi;


            try {
                const response = await extra.api.get<Article[]>('/articles',{
                    params: {
                        _expand: 'user',
                    },
                });

                if (!response.data) {
                    throw new Error();
                }

                return response.data;
            } catch (e) {
                return rejectWithValue('error');
            }
        },
    );