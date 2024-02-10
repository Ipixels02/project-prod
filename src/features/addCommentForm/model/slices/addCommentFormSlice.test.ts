import { AddCommentFormSchema } from '../types/addCommentForm';
import { addCommentFormActions, addCommentFormReducer } from './addCommentFormSlice';

describe('loginSlice.test', () => {
    test('test set username', () => {
        const state: DeepPartial<AddCommentFormSchema> = { text: 'hello' };
        expect(addCommentFormReducer(
            state as AddCommentFormSchema,
            addCommentFormActions.setText('hello')
        )).toEqual({ text: 'hello' });
    })
});
