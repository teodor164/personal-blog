import { StateSchema } from 'app/providers/StoreProvider';
import {
    getArticleDetailsCommentsError,
    getArticleDetailsCommentsIsLoading,
} from './comments';

describe('getArticleDetailsCommentsIsLoading.test', () => {
    test('should return text', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetailsPage: {
                comments: {
                    isLoading: true,
                },
            },
        };
        expect(getArticleDetailsCommentsIsLoading(state as StateSchema)).toEqual(true);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticleDetailsCommentsIsLoading(state as StateSchema)).toEqual(undefined);
    });
});

describe('getArticleDetailsCommentsError.test', () => {
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetailsPage: {
                comments: {
                    error: 'error',
                },
            },
        };
        expect(getArticleDetailsCommentsError(state as StateSchema)).toEqual('error');
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticleDetailsCommentsError(state as StateSchema)).toEqual(undefined);
    });
});
