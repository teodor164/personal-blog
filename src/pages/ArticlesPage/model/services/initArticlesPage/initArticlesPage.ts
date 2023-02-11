import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getArticlesPageInited } from '../../selectors/getArticlesPageInited/getArticlesPageInited';
import { getArticlesPagePageNumber } from '../../selectors/getArticlesPagePageNumber/getArticlesPagePageNumber';
import { articlePageActions } from '../../slices/articlePageSlice';
import { fetchArticlesList } from '../../services/fetchArticlesList/fetchArticlesList';

export const initArticlesPage = createAsyncThunk<void,
    void,
    ThunkConfig<string>>(
        'articlesPage/initArticlesPage',
        async (_, thunkApi) => {
            const {
                getState,
                dispatch,
            } = thunkApi;

            const page = getArticlesPagePageNumber(getState());
            const inited = getArticlesPageInited(getState());

            if (__PROJECT__ !== 'storybook' && !inited) {
                dispatch(articlePageActions.initState());
                dispatch(fetchArticlesList({ page }));
            }
        },
    );
