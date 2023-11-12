import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { AppLink } from './AppLink';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'shared/redesigned/AppLink',
    component: AppLink,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    },
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'text',
    variant: 'primary',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    children: 'text',
    variant: 'primary',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const PrimaryGreen = Template.bind({});
PrimaryGreen.args = {
    children: 'text',
    variant: 'primary',
};
PrimaryGreen.decorators = [ThemeDecorator(Theme.GREEN)];

export const Red = Template.bind({});
Red.args = {
    children: 'text',
    variant: 'red',
};

export const RedDark = Template.bind({});
RedDark.args = {
    children: 'text',
    variant: 'red',
};
RedDark.decorators = [ThemeDecorator(Theme.DARK)];

export const RedGreen = Template.bind({});
RedGreen.args = {
    children: 'text',
    variant: 'red',
};
RedGreen.decorators = [ThemeDecorator(Theme.GREEN)];
