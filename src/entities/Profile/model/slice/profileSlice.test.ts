import {
    profileActions, profileReducer, ProfileSchema, updateProfileData,
} from 'entities/Profile';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ValidateProfileError } from 'entities/Profile/model/types/profile';

const data = {
    age: 24,
    country: Country.Moldova,
    lastname: 'Rogozneac',
    first: 'Maxim',
    currency: Currency.RON,
    username: 'admin',
    city: 'Chisianu',
};

describe('profileSlice.test', () => {
    test('set readonly', () => {
        const state: DeepPartial<ProfileSchema> = { readonly: false };
        expect(profileReducer(
            state as ProfileSchema,
            profileActions.setReadonly(true),
        )).toEqual({ readonly: true });
    });

    test('test cancelEdit', () => {
        const state: DeepPartial<ProfileSchema> = { data, form: { username: '' } };
        expect(profileReducer(
            state as ProfileSchema,
            profileActions.cancelEdit(),
        )).toEqual({
            readonly: true,
            validateErrors: undefined,
            form: data,
            data,
        });
    });

    test('update profile', () => {
        const state: DeepPartial<ProfileSchema> = { form: { username: '1111' } };
        expect(profileReducer(
            state as ProfileSchema,
            profileActions.updateProfile({
                username: '12345',
            }),
        )).toEqual({
            form: { username: '12345' },
        });
    });

    test('update profile service pending', () => {
        const state: DeepPartial<ProfileSchema> = { isLoading: false, validateError: [ValidateProfileError.SERVER_ERROR] };
        expect(profileReducer(
            state as ProfileSchema,
            updateProfileData.pending,
        )).toEqual({
            isLoading: true,
            validateError: undefined,
        });
    });

    test('update profile service fulfilled', () => {
        const state: DeepPartial<ProfileSchema> = { isLoading: true, validateError: [ValidateProfileError.SERVER_ERROR] };
        expect(profileReducer(
            state as ProfileSchema,
            updateProfileData.fulfilled(data, ''),
        )).toEqual({
            isLoading: false,
            validateError: undefined,
            data,
            form: data,
            readonly: true,
        });
    });
});
