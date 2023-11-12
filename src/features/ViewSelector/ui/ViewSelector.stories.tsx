import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { ViewSelector } from './ViewSelector';
import { Theme } from '@/shared/const/theme';

// TODO update
export default {
    title: 'features/ArticleViewSelector',
    component: ViewSelector,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ViewSelector>;

const Template: ComponentStory<typeof ViewSelector> = (args) => <ViewSelector {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
