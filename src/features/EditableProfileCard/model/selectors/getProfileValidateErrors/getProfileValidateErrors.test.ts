import { StateSchema } from '@/app/providers/StoreProvider';
import { ValidateProfileError } from '../../types/EditableProfileCardSchema';
import { getProfileValidateErrors } from './getProfileValidateErrors';

describe('getProfileValidateErrors.test', () => {
    test('should return error', () => {
        const validateError = [
            ValidateProfileError.SERVER_ERROR,
            ValidateProfileError.NO_DATA,
        ];

        const state: DeepPartial<StateSchema> = {
            profile: {
                validateError,
            },
        };
        expect(getProfileValidateErrors(state as StateSchema)).toEqual(validateError);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined);
    });
});
