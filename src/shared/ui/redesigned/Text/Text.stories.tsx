import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Text } from './Text';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'shared/redesigned/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: 'Tile lorem',
    text: 'Description Description Description Description Description',
};

export const Dark = Template.bind({});
Dark.args = {
    title: 'Tile lorem',
    text: 'Description Description Description Description Description',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Green = Template.bind({});
Green.args = {
    title: 'Tile lorem',
    text: 'Description Description Description Description Description',
};
Green.decorators = [ThemeDecorator(Theme.GREEN)];

export const OnlyText = Template.bind({});
OnlyText.args = {
    text: 'Description Description Description Description Description',
};

export const OnlyTextDark = Template.bind({});
OnlyTextDark.args = {
    text: 'Description Description Description Description Description',
};
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTextGreen = Template.bind({});
OnlyTextGreen.args = {
    text: 'Description Description Description Description Description',
};
OnlyTextGreen.decorators = [ThemeDecorator(Theme.GREEN)];

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
    title: 'Tile lorem',
};

export const OnlyTitleDark = Template.bind({});
OnlyTitleDark.args = {
    title: 'Tile lorem',
};
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTitleGreen = Template.bind({});
OnlyTitleGreen.args = {
    title: 'Tile lorem',
};
OnlyTitleGreen.decorators = [ThemeDecorator(Theme.GREEN)];

export const Error = Template.bind({});
Error.args = {
    title: 'Tile lorem',
    text: 'Description Description Description Description Description',
    variant: 'error',
};

export const ErrorDark = Template.bind({});
ErrorDark.args = {
    title: 'Tile lorem',
    text: 'Description Description Description Description Description',
    variant: 'error',
};
ErrorDark.decorators = [ThemeDecorator(Theme.DARK)];

export const ErrorGreen = Template.bind({});
ErrorDark.args = {
    title: 'Tile lorem',
    text: 'Description Description Description Description Description',
    variant: 'error',
};
ErrorGreen.decorators = [ThemeDecorator(Theme.GREEN)];

export const Accent = Template.bind({});
Accent.args = {
    title: 'Tile lorem',
    text: 'Description Description Description Description Description',
    variant: 'accent',
};

export const AccentDark = Template.bind({});
AccentDark.args = {
    title: 'Tile lorem',
    text: 'Description Description Description Description Description',
    variant: 'accent',
};
AccentDark.decorators = [ThemeDecorator(Theme.DARK)];

export const AccentGreen = Template.bind({});
AccentGreen.args = {
    title: 'Tile lorem',
    text: 'Description Description Description Description Description',
    variant: 'accent',
};
AccentGreen.decorators = [ThemeDecorator(Theme.GREEN)];

export const SizeL = Template.bind({});
SizeL.args = {
    title: 'Tile lorem',
    text: 'Description Description Description Description Description',
    size: 'l',
};

export const SizeM = Template.bind({});
SizeM.args = {
    title: 'Tile lorem',
    text: 'Description Description Description Description Description',
    size: 'm',
};

export const SizeS = Template.bind({});
SizeS.args = {
    title: 'Tile lorem',
    text: 'Description Description Description Description Description',
    size: 's',
};

export const TextBold = Template.bind({});
TextBold.args = {
    title: 'Tile lorem',
    text: 'Description Description Description Description Description',
    bold: true,
};
