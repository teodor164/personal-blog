import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { ArticleSortFiled, ArticleType } from 'entities/Article';
import { SortOrder } from 'shared/types';
import { getArticlesPageInited } from '../../selectors/getArticlesPageInited/getArticlesPageInited';
import { articlePageActions } from '../../slices/articlePageSlice';
import { fetchArticlesList } from '../../services/fetchArticlesList/fetchArticlesList';

export const initArticlesPage = createAsyncThunk<void,
    URLSearchParams,
    ThunkConfig<string>>(
        'articlesPage/initArticlesPage',
        async (searchParams, thunkApi) => {
            const {
                getState,
                dispatch,
            } = thunkApi;

            const inited = getArticlesPageInited(getState());

            if (__PROJECT__ !== 'storybook' && !inited) {
                const orderFromUrl = searchParams.get('order') as SortOrder;
                const sortFromUrl = searchParams.get('sort') as ArticleSortFiled;
                const searchFromUrl = searchParams.get('search');
                const typeFromUrl = searchParams.get('type') as ArticleType;

                if (orderFromUrl) {
                    dispatch(articlePageActions.setOrder(orderFromUrl));
                }

                if (searchFromUrl) {
                    dispatch(articlePageActions.setSearch(searchFromUrl));
                }

                if (sortFromUrl) {
                    dispatch(articlePageActions.setSort(sortFromUrl));
                }

                if (typeFromUrl) {
                    dispatch(articlePageActions.setType(typeFromUrl));
                }

                dispatch(articlePageActions.initState());
                dispatch(fetchArticlesList({}));
            }
        },
    );
