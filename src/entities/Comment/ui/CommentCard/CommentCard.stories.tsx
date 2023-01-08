import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { CommentCard } from './CommentCard';

export default {
    title: 'entities/Comment/CommentCard',
    component: CommentCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => <CommentCard {...args} />;

const comment = {
    id: '1',
    text: 'hello',
    user: { id: '1', username: 'Maxim', avatar: 'https://xakep.ru/wp-content/uploads/2018/05/171485/KuroiSH-hacker.jpg' },
};

export const Light = Template.bind({});
Light.args = {
    comment,
};

export const Dark = Template.bind({});
Dark.args = {
    comment: {
        id: '1',
        text: 'hello',
        user: { id: '1', username: 'Maxim' },
    },
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Green = Template.bind({});
Green.args = {
    comment,
};
Green.decorators = [ThemeDecorator(Theme.GREEN)];

export const Loading = Template.bind({});
Loading.args = {
    isLoading: true,
    comment,
};
Loading.decorators = [ThemeDecorator(Theme.GREEN)];
