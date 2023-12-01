import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Text } from '../Text';

import { Card } from './Card';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'shared/redesigned/Card',
    component: Card,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const LightTheme = Template.bind({});
LightTheme.args = {
    children: <Text title="title" text="text" />,
};

export const LightThemeOutline = Template.bind({});
LightThemeOutline.args = {
    children: <Text title="title" text="text" />,
    variant: 'outline',
};

export const LightThemeLightVariant = Template.bind({});
LightThemeLightVariant.args = {
    children: <Text title="title" text="text" />,
    variant: 'light',
};

export const Dark = Template.bind({});
Dark.args = {
    children: <Text title="title" text="text" />,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const DarkOutline = Template.bind({});
DarkOutline.args = {
    children: <Text title="title" text="text" />,
    variant: 'outline',
};
DarkOutline.decorators = [ThemeDecorator(Theme.DARK)];

export const DarkThemeLightVariant = Template.bind({});
DarkThemeLightVariant.args = {
    children: <Text title="title" text="text" />,
    variant: 'light',
};
DarkThemeLightVariant.decorators = [ThemeDecorator(Theme.DARK)];

export const Green = Template.bind({});
Green.args = {
    children: <Text title="title" text="text" />,
};
Green.decorators = [ThemeDecorator(Theme.GREEN)];

export const GreenOutline = Template.bind({});
GreenOutline.args = {
    children: <Text title="title" text="text" />,
    variant: 'outline',
};
GreenOutline.decorators = [ThemeDecorator(Theme.GREEN)];

export const GreenThemeLightVariant = Template.bind({});
GreenThemeLightVariant.args = {
    children: <Text title="title" text="text" />,
    variant: 'light',
};
GreenThemeLightVariant.decorators = [ThemeDecorator(Theme.GREEN)];

export const BorderRound = Template.bind({});
BorderRound.args = {
    children: <Text title="title" text="text" />,
    border: 'round',
};

export const BorderPartial = Template.bind({});
BorderPartial.args = {
    children: <Text title="title" text="text" />,
    border: 'partial',
};
