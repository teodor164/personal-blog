import { Country, Currency } from 'shared/const/common';

export interface Profile {
    fist: string,
    last: string,
    age: 22,
    currency: Currency,
    country: Country,
    city: string,
    username: string,
    avatar: string
}

export interface ProfileSchema {
    data?: Profile
    isLoading: boolean
    error: string
    readonly: boolean
}
