import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PageSchema } from '../types/pageSchema';

const initialState: PageSchema = {
    scroll: {},
};

const pageSlice = createSlice({
    name: 'pageSlice',
    initialState,
    reducers: {
        setScrollPosition: (state, { payload }: PayloadAction<{ path: string; position: number}>) => {
            state.scroll[payload.path] = payload.position;
        },
    },
});

export const { reducer: pageReducer } = pageSlice;
export const { actions: pageActions } = pageSlice;
