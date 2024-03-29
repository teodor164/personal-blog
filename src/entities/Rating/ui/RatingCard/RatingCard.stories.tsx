import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { RatingCard } from './RatingCard';
import { Theme } from '@/shared/const/theme';

// TODO update
export default {
    title: 'entities/Rating/RatingCard',
    component: RatingCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof RatingCard>;

const Template: ComponentStory<typeof RatingCard> = (args) => <RatingCard {...args} />;

export const Light = Template.bind({});
Light.args = {
    title: 'Title',
    hasFeedback: true,
    feedbackTitle: 'Feedback title',
};
Light.decorators = [StoreDecorator({})];

export const Dark = Template.bind({});
Dark.args = {
    title: 'Title',
    hasFeedback: true,
    feedbackTitle: 'Feedback title',
};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];

export const Green = Template.bind({});
Green.args = {
    title: 'Title',
    hasFeedback: true,
    feedbackTitle: 'Feedback title',
};
Green.decorators = [ThemeDecorator(Theme.GREEN), StoreDecorator({})];
