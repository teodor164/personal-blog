import { articleDetailsReducer } from './articleDetailsSlice';
import { fetchArticleById } from '../services/fetchArticleById/fetchArticleById';
import { ArticleDetailsSchema } from '../types/articleDetailsSchema';
import { Article } from '../types/article';

const data = {
    id: '2',
    title: 'title',
};

describe('profileSlice.test', () => {
    test('fetch articles service pending', () => {
        const state: DeepPartial<ArticleDetailsSchema> = { isLoading: false };
        expect(articleDetailsReducer(
            state as ArticleDetailsSchema,
            fetchArticleById.pending,
        )).toEqual({
            isLoading: true,
        });
    });

    test('update profile service fulfilled', () => {
        const state: DeepPartial<ArticleDetailsSchema> = { isLoading: true };
        expect(articleDetailsReducer(
            state as ArticleDetailsSchema,
            fetchArticleById.fulfilled(data as Article, '', '1'),
        )).toEqual({
            isLoading: false,
            data,
        });
    });
});
