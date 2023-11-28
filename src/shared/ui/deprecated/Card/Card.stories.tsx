import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Text } from '../Text';

import { Card } from './Card';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'shared/deprecated/Card',
    component: Card,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Light = Template.bind({});
Light.args = {
    children: <Text title="title" text="text" />,
};

export const Dark = Template.bind({});
Dark.args = {
    children: <Text title="title" text="text" />,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Green = Template.bind({});
Green.args = {
    children: <Text title="title" text="text" />,
};
Green.decorators = [ThemeDecorator(Theme.GREEN)];
