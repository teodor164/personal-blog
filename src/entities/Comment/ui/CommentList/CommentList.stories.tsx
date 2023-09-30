import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { CommentList } from './CommentList';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'entities/Comment/CommentList',
    component: CommentList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />;

const comments = [
    {
        id: '1',
        text: 'hello',
        user: {
            id: '1',
            username: 'Maxim',
            avatar: 'https://xakep.ru/wp-content/uploads/2018/05/171485/KuroiSH-hacker.jpg',
        },
    },
    {
        id: '2',
        text: 'hello again',
        user: {
            id: '2',
            username: 'Ion',
            avatar: 'https://xakep.ru/wp-content/uploads/2018/05/171485/KuroiSH-hacker.jpg',
        },
    },
];

export const Light = Template.bind({});
Light.args = {
    comments,
};

export const Dark = Template.bind({});
Dark.args = {
    comments,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Green = Template.bind({});
Green.args = {
    comments,
};
Green.decorators = [ThemeDecorator(Theme.GREEN)];

export const Loading = Template.bind({});
Loading.args = {
    isLoading: true,
};
Loading.decorators = [ThemeDecorator(Theme.DARK)];
