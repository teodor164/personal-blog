import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { Comment } from '@/entities/Comment';
import {
    fetchCommentsByArticleId,
} from './fetchCommentsByArticleId';

describe('fetchCommentsByArticleId.test', () => {
    test('success', async () => {
        const comments: Comment[] = [
            {
                user: {
                    username: 'admin',
                    id: '1',
                },
                id: '1',
                text: '123',
            },
            {
                user: {
                    username: 'admin',
                    id: '1',
                },
                id: '2',
                text: 'grerrr',
            },
            {
                user: {
                    username: 'admin',
                    id: '1',
                },
                id: '3',
                text: 'gerrg',
            },
        ];

        const thunk = new TestAsyncThunk(fetchCommentsByArticleId);
        thunk.api.get.mockReturnValue(Promise.resolve({ data: comments }));
        const result = await thunk.callThunk('1');

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(thunk.api.get).toBeCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toBe(comments);
    });

    test('error', async () => {
        const thunk = new TestAsyncThunk(fetchCommentsByArticleId);
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk('1');

        expect(thunk.api.get).toBeCalled();
        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toBe('error');
    });
});
