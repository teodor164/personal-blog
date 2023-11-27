import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button } from './Button';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import ArrowIcon from '@/shared/assets/icons/arrow-bottom.svg';
import { Icon } from '../Icon';

export default {
    title: 'shared/redesigned/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Text',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    children: 'Text',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const PrimaryGreen = Template.bind({});
PrimaryGreen.args = {
    children: 'Text',
};
PrimaryGreen.decorators = [ThemeDecorator(Theme.GREEN)];

export const Filled = Template.bind({});
Filled.args = {
    children: 'Text',
    variant: 'filled',
};

export const FilledDark = Template.bind({});
FilledDark.args = {
    children: 'Text',
    variant: 'filled',
};
FilledDark.decorators = [ThemeDecorator(Theme.DARK)];

export const FilledGreen = Template.bind({});
FilledGreen.args = {
    children: 'Text',
    variant: 'filled',
};
FilledGreen.decorators = [ThemeDecorator(Theme.GREEN)];

export const Clear = Template.bind({});
Clear.args = {
    children: 'Text',
    variant: 'clear',
};

export const Square = Template.bind({});
Square.args = {
    children: '>',
    square: true,
};

export const SquareSizeL = Template.bind({});
SquareSizeL.args = {
    children: '>',
    square: true,
    size: 'l',
};

export const SquareSizeXL = Template.bind({});
SquareSizeXL.args = {
    children: '>',
    square: true,
    size: 'xl',
};

export const Disabled = Template.bind({});
Disabled.args = {
    children: 'disabled',
    disabled: true,
};

export const WithAddon = Template.bind({});
WithAddon.args = {
    children: 'Button',
    addonRight: <Icon Svg={ArrowIcon} />,
};
