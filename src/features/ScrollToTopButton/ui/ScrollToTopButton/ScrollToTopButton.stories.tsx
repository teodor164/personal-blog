import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ScrollToTopButton } from './ScrollToTopButton';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

export default {
    title: 'features/ScrollToTopButton',
    component: ScrollToTopButton,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ScrollToTopButton>;

const Template: ComponentStory<typeof ScrollToTopButton> = (args) => <ScrollToTopButton {...args} />;

export const Normal = Template.bind({});
Normal.args = {
};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];

export const Green = Template.bind({});
Green.args = {};
Green.decorators = [ThemeDecorator(Theme.GREEN), StoreDecorator({})];
