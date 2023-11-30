import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import ArticleRating from './ArticleRating';
import { Theme } from '@/shared/const/theme';

// TODO update
export default {
    title: 'features/ArticleRating',
    component: ArticleRating,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleRating>;

const Template: ComponentStory<typeof ArticleRating> = (args) => <ArticleRating {...args} />;

export const Light = Template.bind({});
Light.args = {
    articleId: '1',
};
Light.decorators = [StoreDecorator({ user: { authData: { id: '1' } } })];
Light.parameters = {
    mockData: [
        {
            url: `${__API__}/article-ratings?articleId=1&userId=1`,
            method: 'GET',
            status: 200,
            response: [{ rate: 4 }],
        },
    ],
};

export const Dark = Template.bind({});
Dark.args = {
    articleId: '1',
};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({ user: { authData: { id: '1' } } })];
Dark.parameters = {
    mockData: [
        {
            url: `${__API__}/article-ratings?articleId=1&userId=1`,
            method: 'GET',
            status: 200,
            response: [{ rate: 4 }],
        },
    ],
};

export const WithoutRate = Template.bind({});
WithoutRate.args = {
    articleId: '1',
};
WithoutRate.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({ user: { authData: { id: '1' } } })];
WithoutRate.parameters = {
    mockData: [
        {
            url: `${__API__}/article-ratings?articleId=1&userId=1`,
            method: 'GET',
            status: 200,
            response: [],
        },
        {
            url: `${__API__}/article-ratings`,
            method: 'POST',
            status: 200,
        },
    ],
};
