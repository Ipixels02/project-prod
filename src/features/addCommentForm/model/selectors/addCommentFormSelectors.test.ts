import { StateSchema } from 'app/providers/StoreProvider';
import { getAddCommentFormText, getAddCommentFormError } from './addCommentFormSelectors';

describe('getAddCommentFormText.test', () => {
    test('should return value', () => {
        const state: DeepPartial<StateSchema> = {
            addCommentForm: {
                text: 'Hello'
            }
        };
        expect(getAddCommentFormText(state as StateSchema)).toEqual('Hello');
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getAddCommentFormText(state as StateSchema)).toEqual('');
    });
});

describe('getAddCommentFormError.test', () => {
    test('should return value', () => {
        const state: DeepPartial<StateSchema> = {
            addCommentForm: {
                error: 'Ошибка при отправке комментария'
            }
        };
        expect(getAddCommentFormError(state as StateSchema)).toEqual('Ошибка при отправке комментария');
    });
});
