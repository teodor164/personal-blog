import { AddCommentFormSchema } from 'features/AddCommentForm';
import { addCommentFormActions, addCommentFormReducer } from 'features/AddCommentForm/model/slices/addCommentFormSlice';

describe('addCommentFormSlice.test', () => {
    test('test set text', () => {
        const state: DeepPartial<AddCommentFormSchema> = { text: '1' };
        expect(addCommentFormReducer(
            state as AddCommentFormSchema,
            addCommentFormActions.setText('123123'),
        )).toEqual({ text: '123123' });
    });
});
